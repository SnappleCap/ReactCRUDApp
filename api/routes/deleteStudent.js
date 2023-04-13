var express = require('express')
var router = express.Router()

const { PrismaClient } = require('@prisma/client')

router.delete(`/:id`, async (req, res, next) => {
    const prisma = new PrismaClient()

    const updatedStudent = await prisma.student.update({
        where: { id: +req.params.id },
        data: {
          schoolClasses: { deleteMany: {} },
        },
      })
    const deletedStudent = await prisma.student.delete({
    where: {
      id: +req.params.id,
    },
  })
  res.json(deletedStudent)
})

module.exports = router;