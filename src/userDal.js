"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeData = exports.readData = void 0;
// const DATA = "src/data.json";
const DATA = "./ts/data.json";
const jsonfile = require("jsonfile");
const readData = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield jsonfile.readFile(DATA);
    return data;
});
exports.readData = readData;
const writeData = (item) => __awaiter(void 0, void 0, void 0, function* () {
    // console.log(item)
    const data = yield jsonfile.writeFile(DATA, item, { spaces: 2 });
    console.log(data);
    return data;
});
exports.writeData = writeData;
