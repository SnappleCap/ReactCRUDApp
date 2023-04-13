import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // const schoolClass = await prisma.schoolClass.create({
  //   data: {
  //     title: 'English',
  //   },
  // })
  // console.log(schoolClass)


  // const student = await prisma.student.create({
  //   data: {
  //     name: 'Jeff Newton',
  //   },
  // })
  // console.log(student)

  // const student = await prisma.student.findMany()
  // console.log(student)

  // const schoolClass = await prisma.schoolClass.findMany()
  // console.log(schoolClass)

  // const studentsInClasses = await prisma.studentsInSchoolClasses.findMany()
  // console.log(studentsInClasses)

  // const student = await prisma.student.findMany({
  //   where: { id: 14 },
  //   include: {
  //   schoolClasses: {
  //     select: {
  //       schoolClass: {
  //         select: {
  //           id: true,
  //           title: true
  //         },
  //       },
  //     },
  //   },
  // },
  // })
  // console.log(JSON.stringify(student))

  const deletedRelation = prisma.studentsInSchoolClasses.delete({
  where: { studentId_schoolClassId: { studentId: 17 } },
})
    console.log(deletedRelation)

    const student = await prisma.student.findMany()
  console.log(student)

  const studentsInClasses = await prisma.studentsInSchoolClasses.findMany()
  console.log(studentsInClasses)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })