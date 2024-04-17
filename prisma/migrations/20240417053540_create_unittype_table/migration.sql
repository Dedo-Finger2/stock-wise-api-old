-- CreateTable
CREATE TABLE "UnitType" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "UnitType_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "UnitType" ADD CONSTRAINT "UnitType_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
