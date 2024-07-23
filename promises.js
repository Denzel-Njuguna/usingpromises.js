let ingredients = {
  fruits:["banana","oranges","apples","mango"]
};
let is_shop_open = true;
let order = (time,work)=>{
  return new Promise((resolve,reject)=>{
    if(is_shop_open){
     setTimeout(()=>{
       resolve(work());
     },time)
    }else{
      reject(console.log("sorry we are closed for the day"))
    }
  })
}

order(2000,(()=>console.log(`${ingredients.fruits[0]} was ordered`)))

.then(()=>{
  return order(0000,()=>{
    console.log(`${ingredients.fruits[0]} your order is being worked on `);
    })
})


.then(()=>{
return order(2000,()=>{
  console.log("the fruit was chopped");
  })
})

.then(()=>{
  return order(2000,()=>{
    console.log("the machine was turned on ")
  })
})
