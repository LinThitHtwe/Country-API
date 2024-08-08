const router = require("express").Router();
import countryRoutes from "./countryRoute";
import endPointRoutes from "./endPointGuide";

router.use("/", endPointRoutes);
router.use("/countries", countryRoutes);

export default router;
