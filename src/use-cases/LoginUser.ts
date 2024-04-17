import { IMailService } from "../interfaces/IEmailService";
import { IRepository, IRepositoryReturnId } from "../interfaces/IRepository";
import { IMessageReturn, IUseCase } from "../interfaces/IUseCase";
import { IUserCreationSchema, IUserReturnSchema } from "../interfaces/IUser";
import { Either } from "../utils/types";

import { app } from "../config/app";

export class LoginUser implements IUseCase<IUserCreationSchema, IMessageReturn> {

  constructor(
    private createUserRepository: IRepository<IUserCreationSchema, IRepositoryReturnId>,
    private getUserByEmailRepository: IRepository<string, IUserReturnSchema>,
    private emailService: IMailService,
  ) {
    this.createUserRepository = createUserRepository;
    this.getUserByEmailRepository = getUserByEmailRepository;
    this.emailService = emailService;
  }

  async execute(props: IUserCreationSchema): Promise<Either<IMessageReturn, null>> {
    const user: Either<IUserReturnSchema, null> = await this.getUserByEmailRepository.execute(props.email);

    let token = app.jwt?.sign(
      { userId: user?.id },
      { expiresIn: "1h" },
    );

    if (!user) {
      const newUser: Either<IRepositoryReturnId, null> = await this.createUserRepository.execute(props);

      token = app.jwt?.sign(
        { userId: newUser?.id },
        { expiresIn: "1h" },
      );
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
      html: `<a href='http://localhost:${process.env.PORT}/api/users/verify?token=${token}'>Click here to access the system.</a>`
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
