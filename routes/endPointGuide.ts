const router = require("express").Router();
import endPointGuide from "../controller/endPointGuideController";

router.get("/", endPointGuide.index);
router.get("/countries", endPointGuide.index);
router.get("/countries/continent", endPointGuide.continent);
router.get("/countries/sovereignty", endPointGuide.sovereignty);
router.get("/countries/isocode/numeric", endPointGuide.ISONumericCode);
router.get("/countries/isocode", endPointGuide.ISOCode);
router.get("/countries/currency", endPointGuide.currencyCode);
router.get("/countries/topLevelDomain", endPointGuide.topLevelDomain);
router.get("/countries/dialingCode", endPointGuide.topLevelDomain);

export default router;
