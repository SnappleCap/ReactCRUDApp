var express = require('express')
var router = express.Router()

const { PrismaClient } = require('@prisma/client')

router.post(`/`, async (req, res, next) => {
  const prisma = new PrismaClient()
  const { name, schoolClass } = req.body
  const result = await prisma.student.create({
    data: {
      name,
      schoolClasses: { create: schoolClass.map((schoolClass) => ({ schoolClassId: +schoolClass })) },
    },
  })
  res.json(result)
})

module.exports = router;