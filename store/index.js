
import { createStore } from 'redux'; 



const Data = [ 
 { 
id:'1',
 img:"dress.jpg",
 title:"Womens Wear",
 description:" A dress (also known as a frock or a gown) is a garment predominantly worn by women or girls consisting of a skirt with an attached bodice (or a matching bodice giving the effect of aone-piece garment).",
 price:"1,999",
}, 
{
 id:"2",   
 img:"kurta.jpg",
 title:"Womens Wear",
 description:" A dress (also known as a frock or a gown) is a garment predominantly worn by women or girls consisting of a skirt with an attached bodice (or a matching bodice giving the effect of aone-piece garment).",
 price:"1 ,999",
},
{
  id:"3",   
  img:"dress1.jpg",
  title:"Womens Wear",
  description:" A dress (also known as a frock or a gown) is a garment predominantly worn by women or girls consisting of a skirt with an attached bodice (or a matching bodice giving the effect of aone-piece garment).",
  price:"9,999",
 },
 
 {
  id:"4",   
  img:"tard.jpg",
  title:"Womens Wear",
  description:" A dress (also known as a frock or a gown) is a garment predominantly worn by women or girls consisting of a skirt with an attached bodice (or a matching bodice giving the effect of aone-piece garment).",
  price:"13,999",
 },
 

];

const handle = (store=Data , action) =>{ 
 console.log(action); 
   store = Data[action.type];
   console.log(store);
   return store;
}




const  routerReact = createStore(handle);

export default routerReact;







