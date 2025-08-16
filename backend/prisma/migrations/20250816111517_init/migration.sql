-- CreateTable
CREATE TABLE "public"."User" (
    "Id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "Image" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "public"."Messages" (
    "Id" SERIAL NOT NULL,
    "senderId" INTEGER NOT NULL,
    "RecieverID" INTEGER NOT NULL,
    "message" TEXT NOT NULL,
    "UserID" INTEGER NOT NULL,

    CONSTRAINT "Messages_pkey" PRIMARY KEY ("Id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "public"."User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "public"."User"("email");

-- AddForeignKey
ALTER TABLE "public"."Messages" ADD CONSTRAINT "Messages_UserID_fkey" FOREIGN KEY ("UserID") REFERENCES "public"."User"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;
