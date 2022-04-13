const express = require('express')
const router = express.Router()
const admin = require('../controller/AdminController')
const cors = require('cors')
router.use(cors())
router.post('/displayuser', admin.adminauth, admin.displayuser)
router.post('/adduser', admin.create)
router.post('/edituser', admin.edituser)
router.post('/deleteuser', admin.deleteuser)
router.post('/productdetails', admin.adminauth, admin.productdetails)
router.post('/displayproducts', admin.adminauth, admin.displayproducts)
router.post('/addproduct', admin.addproduct)
router.post('/deleteproduct', admin.deleteproduct)
router.post('/updateproduct', admin.editproduct)
router.post('/addmaterialtoproduct', admin.addmaterialtoproduct)
router.post('/updaterawmaterials', admin.updaterawmaterials)
router.post('/removematerial', admin.removematerial)
router.post('/goods', admin.adminauth, admin.goods)
router.post('/orders', admin.adminauth, admin.orders)
router.post('/adminupdateorder', admin.adminupdateorder)
module.exports = router
