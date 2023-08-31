export {};
const express = require("express");
import { getAllItems, updateItem ,deleteProuduct1} from "./controllers";
import { getItemById } from "./controllers";
import { newItem } from "./controllers";
const app = express();
const router = express.Router();
router.get("/all", getAllItems);
router.get("/:id", getItemById);
router.post("/new", newItem);
router.put("/update/:id",updateItem);
router.delete("/:id",deleteProuduct1);



module.exports = router;
