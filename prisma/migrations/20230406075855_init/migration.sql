-- CreateTable
CREATE TABLE "SchoolClass" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "SchoolClass_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Student" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Student_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StudentsInSchoolClasses" (
    "studentId" INTEGER NOT NULL,
    "schoolClassId" INTEGER NOT NULL,

    CONSTRAINT "StudentsInSchoolClasses_pkey" PRIMARY KEY ("schoolClassId","studentId")
);

-- AddForeignKey
ALTER TABLE "StudentsInSchoolClasses" ADD CONSTRAINT "StudentsInSchoolClasses_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StudentsInSchoolClasses" ADD CONSTRAINT "StudentsInSchoolClasses_schoolClassId_fkey" FOREIGN KEY ("schoolClassId") REFERENCES "SchoolClass"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
