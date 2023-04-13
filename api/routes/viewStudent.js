var express = require('express')
var router = express.Router()

const { PrismaClient } = require('@prisma/client')

router.get(`/:id`, async (req, res, next) => {
  const prisma = new PrismaClient()
  const student = await prisma.student.findMany({
    where: { id: +req.params.id },
      include: {
        schoolClasses: {
          select: {
            schoolClass: {
              select: {
                id: true,
                title: true
              },
            },
          },
        },
      },
  })
  res.json(student)
})

module.exports = router;