const router = require("express").Router();
import countryRoutes from "./countryRoute";
import endPointGuide from "../controller/endPointGuideController";

// router.get("/", endPointGuide.index);
// router.get("/continent", endPointGuide.continent);
router.use("/countries", countryRoutes);

export default router;
