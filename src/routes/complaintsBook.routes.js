const {Router} = require("express");
const router = Router();

router.get("/", (req, res)=>{
    res.render("links/complaintsBook");
});
router.get("/documentosIdentidad", (req, res)=>{
    res.render("links/complaintsBook2");
})
router.get("/datosPersonales", (req, res)=>{
    res.render("links/complaintsBook3");
})
router.get("/detalles", (req, res)=>{
    res.render("links/complaintsBook4");
})
module.exports = router;