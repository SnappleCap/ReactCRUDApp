var express = require('express')
var router = express.Router()

const { PrismaClient } = require('@prisma/client')

router.delete(`/:id`, async (req, res, next) => {
    const prisma = new PrismaClient()
    const updatedClass = await prisma.schoolClass.update({
        where: { id: +req.params.id },
        data: {
          students: { deleteMany: {} },
        },
      })
    const deletedClass = await prisma.schoolClass.delete({
    where: {
      id: +req.params.id,
    },
  })
  res.json(deletedClass)
})

module.exports = router;