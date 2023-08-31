export {};

// const DATA = "src/data.json";
const DATA="./ts/data.json"
const jsonfile = require("jsonfile");
export interface dataInterFace {
  "id": number
  "title":string
  "price": number
  "description": string
  "image": string
  "rating":Record<string,number>
      
}

export const readData = async (): Promise<dataInterFace[]> => {
  const data:dataInterFace[] = await jsonfile.readFile(DATA);
  return data;
};
export const writeData = async (item: dataInterFace[]):Promise<any> => {
  // console.log(item)
  const data: dataInterFace = await jsonfile.writeFile(DATA,item,{ spaces: 2 })
  console.log(data)
  return data
};
