var express = require('express')
var router = express.Router()

const { PrismaClient } = require('@prisma/client')

router.get('/', async (req, res, next) => {
    const prisma = new PrismaClient()
    const classes = await prisma.schoolClass.findMany()
    res.json(classes)
});

module.exports = router;