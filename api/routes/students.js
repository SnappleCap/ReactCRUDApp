var express = require('express')
var router = express.Router()

const { PrismaClient } = require('@prisma/client')

router.get('/', async (req, res, next) => {
    const prisma = new PrismaClient()
    const students = await prisma.student.findMany()
    res.json(students)
});

module.exports = router;