const {Router} = require("express");
const router = Router();

router.get("/signUp", (req, res)=>{
    res.render("links/signUp");
});

module.exports = router;