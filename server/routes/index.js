const express =require('express');
const empRoutes = require('./employee.route');
const pretRoutes = require ('./pret.route');
const adminRoutes = require ('./auth.route');
const regRoutes =require('./reglement.route')
const deatilspretRoutes =require('./detailspret.route')
const typepretRoutes = require ('./typepret');

const router = express.Router();

router.use('/auth',empRoutes);
router.use('/pret',pretRoutes);
router.use('/deatilspret',deatilspretRoutes);
router.use('/typepret',typepretRoutes);
router.use('/reglement',regRoutes);
router.use('/admin',adminRoutes);

module.exports=router;