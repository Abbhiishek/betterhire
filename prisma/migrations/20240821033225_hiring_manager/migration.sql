/*
  Warnings:

  - You are about to drop the column `hiringManagerId` on the `Company` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Company" DROP CONSTRAINT "Company_hiringManagerId_fkey";

-- DropIndex
DROP INDEX "Company_hiringManagerId_key";

-- AlterTable
ALTER TABLE "Company" DROP COLUMN "hiringManagerId";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "companyId" TEXT;

-- CreateTable
CREATE TABLE "AppliedJob" (
    "id" TEXT NOT NULL,
    "jobId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'applied',
    "appliedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AppliedJob_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AppliedJobEventLog" (
    "id" TEXT NOT NULL,
    "appliedJobId" TEXT NOT NULL,
    "event" TEXT NOT NULL,
    "description" TEXT,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AppliedJobEventLog_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AppliedJob" ADD CONSTRAINT "AppliedJob_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AppliedJobEventLog" ADD CONSTRAINT "AppliedJobEventLog_appliedJobId_fkey" FOREIGN KEY ("appliedJobId") REFERENCES "AppliedJob"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
