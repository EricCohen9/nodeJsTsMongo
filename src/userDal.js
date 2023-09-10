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
exports.deleteItem = exports.updateItem = exports.writeData = exports.readData = void 0;
const { MongoClient } = require('mongodb');
const client = new MongoClient('mongodb://127.0.0.1:27017');
// const DATA = "src/data.json";
const DATA = "./ts/data.json";
const jsonfile = require("jsonfile");
// export const readData = async (): Promise<dataInterFace[]> => {
//   const data:dataInterFace[] = await jsonfile.readFile(DATA);
//   return data;
// };
// export const writeData = async (item: dataInterFace[]):Promise<any> => {
//   // console.log(item)
//   const data: dataInterFace = await jsonfile.writeFile(DATA,item,{ spaces: 2 })
//   console.log(data)
//   return data
// };
// mongo   
const readData = () => __awaiter(void 0, void 0, void 0, function* () {
    yield client.connect();
    const db = client.db("elchi");
    const collection = db.collection("product");
    const findResult = yield collection.find({}).toArray();
    return findResult;
});
exports.readData = readData;
const writeData = (item) => __awaiter(void 0, void 0, void 0, function* () {
    yield client.connect();
    const db = client.db("elchi");
    const collection = db.collection("product");
    const oneDoc = yield collection.insertOne(item);
    console.log(collection);
    return collection;
});
exports.writeData = writeData;
const updateItem = (id, body) => __awaiter(void 0, void 0, void 0, function* () {
    yield client.connect();
    const db = client.db("elchi");
    const collection = db.collection("product");
    console.log(id);
    const updateResult = yield collection.updateOne({ id: id }, { $set: { id: id,
            title: body.title,
            price: body.price,
            description: body.description,
            image: body.image,
            rating: {}
        } });
    return updateResult;
});
exports.updateItem = updateItem;
const deleteItem = (id) => __awaiter(void 0, void 0, void 0, function* () {
    yield client.connect();
    const db = client.db("elchi");
    const collection = db.collection("product");
    const deleteResult = yield collection.deleteMany({ id: id });
    console.log(deleteResult);
    console.log(id);
    return deleteResult;
});
exports.deleteItem = deleteItem;
