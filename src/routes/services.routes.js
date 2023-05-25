const {Router} = require("express");
const router = Router();

router.get("/", (req, res)=>{
    res.render("links/services");
});

router.get("/detalles", (req, res)=>{
    res.render("links/servicesDetails");
});

router.get("/resumenCompra", (req, res)=>{
    res.render("links/resumenCompra");
});

router.get("/datosCompra", (req, res)=>{
    res.render("links/datosParaCompra");
})

module.exports = router;