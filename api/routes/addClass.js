var express = require('express')
var router = express.Router()

const { PrismaClient } = require('@prisma/client')

router.post(`/`, async (req, res, next) => {
  const prisma = new PrismaClient()
  const { title, student } = req.body
  const result = await prisma.schoolClass.create({
    data: {
      title,
      students: { create: student.map((student) => ({ studentId: +student })) },
    },
  })
  res.json(result)
})

module.exports = router;