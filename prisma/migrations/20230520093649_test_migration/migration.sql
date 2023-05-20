-- CreateTable
CREATE TABLE "Users" (
    "id" SERIAL NOT NULL,
    "user_name" TEXT NOT NULL,
    "email_address" TEXT NOT NULL,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);
