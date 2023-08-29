export {};
const DATA = "src/data.json";
const jsonfile = require("jsonfile");
export interface dataInterFace {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Record<string, number>;
}

export const readData = async (): Promise<dataInterFace> => {
  const data = await jsonfile.readFile(DATA);
  console.log(data);
  return data;
};
export const writeData = async (item: dataInterFace) => {
  const data: dataInterFace = await jsonfile.writeData(
    DATA,
    item,
    (err: any) => {
      return data;
    }
  );
};
