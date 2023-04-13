var express = require('express')
var router = express.Router()

const { PrismaClient } = require('@prisma/client')

router.get(`/:id`, async (req, res, next) => {
  const prisma = new PrismaClient()
  const schoolClass = await prisma.schoolClass.findMany({
    where: { id: +req.params.id },
      include: {
        students: {
          select: {
            student: {
              select: {
                id: true,
                name: true
              },
            },
          },
        },
      },
  })
  res.json(schoolClass)
})

module.exports = router;