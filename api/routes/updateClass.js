var express = require('express')
var router = express.Router()

const { PrismaClient } = require('@prisma/client')

router.put(`/:id`, async (req, res, next) => {
  const prisma = new PrismaClient()
  const { title, student } = req.body
  const updatedClass = await prisma.schoolClass.update({
    where: { id: +req.params.id },
    data: {
      title: title,
      students: { deleteMany: {}, create: student.map((student) => ({ studentId: +student })) },
    },
  })
  res.json(updatedClass)
})

module.exports = router;