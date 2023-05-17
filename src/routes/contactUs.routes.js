const {Router} = require("express");
const router = Router();

router.get("/", (req, res)=>{
    res.render("links/contactUs");
})

module.exports = router;