export {};
// const userDal = require("./userDal");
import {readData, writeData}  from "./userDal"
import { dataInterFace } from "./userDal";
export const getAllItemsService = async ():Promise<dataInterFace|unknown> => {
  // get all items
  try {
    const data = await readData();
    return data;
  } catch (err) {
    console.error(
      "at userService.js, line 3, func (getAllItems)"
    );
  }return console.error();
  
};
 export const getItemByIdService = async (id:string) => {
      const data:dataInterFace[] = await readData();
      let result:dataInterFace|undefined
        data.forEach((element:dataInterFace):void=>{
            if(element.id===Number(id)){
            result=element}
        })
        if (result!==undefined){
            return result
        }else{
            return null
        }
    }
export const newItemOfService = async (item:dataInterFace):Promise<dataInterFace|undefined> => {
      const data:dataInterFace[] = await readData();
      let id=item.id
      let filterData:dataInterFace[]=data.forEach(element:any) => {
        if
        
      });
      filterData.push(item)
      const writeData1=await writeData(filterData)
      return data;
    }
  };

