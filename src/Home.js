import { useEffect } from "react";
import { useState } from "react";



const Home = () => {

   const [food,setFood]=useState('');
   const [shoppingList,setShoppingList]=useState([]);
   const [bucket,setBucket]=useState([]);
   const handleInput=(e)=>{
    // console.log(e.target.value);
    setFood(e.target.value);
   }
   const fetchItem=async(food)=>{
       let url=` https://api.frontendeval.com/fake/food/${food}`;
       let result=await fetch(url);
       let data=await result.json();
      setShoppingList(data);
   }

  const handleShoppingList=(e)=>{
      let idx=e.target.getAttribute('data-id');
   if(idx)
    {
      const obj={
        id:Date.now(),
        data:shoppingList[idx],
        isDone:false
       }
       const copybucket=[...bucket];
       copybucket.push(obj);
       setBucket(copybucket);
    }
    setFood('');
  }

   useEffect(()=>{
    if(food.length>=2)
      {
        fetchItem(food);
      }
   },[food])
   const handleRightClick=(id)=>{
          let copyBucketList=[...bucket];
          let newbucketlist=copyBucketList.map((item)=>{
            if(item.id===id)
              {
                item.isDone=!item.isDone;
              }
              return item;
          })
          setBucket(newbucketlist);
   }
   const handleDelete=(id)=>{
    let copybucket=[...bucket]
    let newList=copybucket.filter((item)=>item.id!==id);
    setBucket(newList);
   }
  return(
   <>
  <div className="container">
    <h1 >My Shopping List</h1>
   
      <div className="inpt-bucket">
        <input
         value={food}
         onChange={handleInput}
        placeholder="Enter like Mi.."/>
      </div>
     {
      food.length>=2 ? (<div className="shopping-list" onClick={handleShoppingList}>
      {
        shoppingList.map((item,index)=>{
          return(
            <>
            <div 
            data-id={index}
            className="product">{item}</div>
            </>
          )
        })
      }
    </div>):null
     }
     <div className="bucket">
        {
          bucket.map((item)=>{
            return(
              <>
              <div className="shopping-item">
                <button onClick={()=>{handleRightClick(item.id)}}>✓</button>
              <div className={item.isDone?'strik':''}>{item.data}</div>
              <button onClick={()=>{handleDelete(item.id)}}>X</button></div>
              </>
            )
          })
        }
     </div>
  </div>
   </>
  )
}

export default Home;