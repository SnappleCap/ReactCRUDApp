var express = require('express')
var router = express.Router()

const { PrismaClient } = require('@prisma/client')

router.put(`/:id`, async (req, res, next) => {
  const prisma = new PrismaClient()
  const { name, schoolClass } = req.body
  const updatedStudent = await prisma.student.update({
    where: { id: +req.params.id },
    data: {
      name: name,
      schoolClasses: { deleteMany: {}, create: schoolClass.map((schoolClass) => ({ schoolClassId: +schoolClass })) },
    },
  })
  res.json(updatedStudent)
})

module.exports = router;