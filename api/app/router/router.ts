import { Router } from 'https://deno.land/x/opine/mod.ts';
import { cvController } from '../controllers/cvControllers.ts';

const router = Router();

router.get("/", function (req, res) {
  res.send("Hello from APIv1 root route.");
});

router.get("/users", function (req, res) {
  res.send("List of APIv1 users.");
});

router.get("/cv/legend", cvController.prototype.getLegend);

export default router;