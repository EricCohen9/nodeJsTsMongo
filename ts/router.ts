export {};
const express = require("express");
import { getAllItems } from "./controllers";
import { getItemById } from "./controllers";
import { newItem } from "./controllers";
const app = express();
const router = express.Router();
router.get("/all", getAllItems);
router.get("/:id", getItemById);
router.put("/:id", newItem);

module.exports = router;
