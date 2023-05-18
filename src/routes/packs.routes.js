const {Router} = require("express");
const router = Router();

router.get("/", (req, res)=>{
    res.render("links/packs");
});

module.exports = router;