-- CreateEnum
CREATE TYPE "Status" AS ENUM ('PENDING', 'ACCEPTED', 'REJECTED');

-- CreateTable
CREATE TABLE "Request" (
    "requestId" SERIAL NOT NULL,
    "senderId" INTEGER NOT NULL,
    "receiverId" INTEGER NOT NULL,
    "status" "Status" NOT NULL DEFAULT 'PENDING'
);

-- CreateTable
CREATE TABLE "Contact" (
    "contactId" SERIAL NOT NULL,
    "userAId" INTEGER NOT NULL,
    "userBId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateIndex
CREATE UNIQUE INDEX "Request_requestId_key" ON "Request"("requestId");

-- CreateIndex
CREATE UNIQUE INDEX "Request_senderId_receiverId_key" ON "Request"("senderId", "receiverId");

-- CreateIndex
CREATE UNIQUE INDEX "Contact_contactId_key" ON "Contact"("contactId");

-- CreateIndex
CREATE INDEX "Contact_userAId_idx" ON "Contact"("userAId");

-- CreateIndex
CREATE INDEX "Contact_userBId_idx" ON "Contact"("userBId");

-- CreateIndex
CREATE UNIQUE INDEX "Contact_userAId_userBId_key" ON "Contact"("userAId", "userBId");

-- AddForeignKey
ALTER TABLE "Request" ADD CONSTRAINT "Request_senderId_fkey" FOREIGN KEY ("senderId") REFERENCES "User"("userID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Request" ADD CONSTRAINT "Request_receiverId_fkey" FOREIGN KEY ("receiverId") REFERENCES "User"("userID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Contact" ADD CONSTRAINT "Contact_userAId_fkey" FOREIGN KEY ("userAId") REFERENCES "User"("userID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Contact" ADD CONSTRAINT "Contact_userBId_fkey" FOREIGN KEY ("userBId") REFERENCES "User"("userID") ON DELETE RESTRICT ON UPDATE CASCADE;
