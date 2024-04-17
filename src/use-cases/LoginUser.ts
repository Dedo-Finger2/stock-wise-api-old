import { IMailService } from "../interfaces/IEmailService";
import { IRepository } from "../interfaces/IRepository";
import { IMessageReturn, IUseCase } from "../interfaces/IUseCase";
import { IUserCreationSchema, IUserReturnSchema } from "../interfaces/IUser";
import { Either } from "../utils/types";

export class LoginUser implements IUseCase<IUserCreationSchema, IMessageReturn> {

  constructor(
    private createUserRepository: IRepository<IUserCreationSchema, object>,
    private getUserByEmailRepository: IRepository<string, IUserReturnSchema>,
    private emailService: IMailService,
  ) {
    this.createUserRepository = createUserRepository;
    this.getUserByEmailRepository = getUserByEmailRepository;
    this.emailService = emailService;
  }

  async execute(props: IUserCreationSchema): Promise<Either<IMessageReturn, null>> {
    let user: Either<object, null> = await this.getUserByEmailRepository.execute(props.email);

    if (!user) {
      user = await this.createUserRepository.execute(props);
    };

    await this.emailService.sendMail({
      to: {
        name: props.name,
        address: props.email,
      },
      from: {
        name: "Teste",
        address: "teste@teste.com",
      },
      subject: "Validation link",
      html: `<a href='http://localhost:${process.env.PORT}/api/users/verify?token=${props.token}'>Click here to access the system.</a>`
    });

    return { message: "Check your email inbox." };

    // Verificar ser o email já existe
      // Se não:
        // Cadastrar usuário
        // Passar para o próximo passo
      // Se sim:
        // Passar para o próximo passo
    // Enviar o token no email do usuário
    // Retornar uma mensagem ao controller
  }
}
