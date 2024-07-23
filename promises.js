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
return order(2000,()=>{let ingredients = {
  fruits:["banana","oranges","apples","mango"]
};
let flavors = ingredients.fruits.map((name)=>{
  return name;
});
let order=(fruit_name)=>{
  
  console.log("your order has been received\n" + flavors.join('\n'));
  setTimeout(()=>{
    console.log(ingredients.fruits[fruit_name], " was selected");
  },2000)
  
  let production=()=>{
    setTimeout(()=>{
      console.log("your ice cream is being processed ");
    },2000)
  
    
    let serving =()=>{
      setTimeout(()=>{
        console.log("here is your order");
      },2000)
      
      
      let paying = ()=>{
        setTimeout(()=>{
          console.log("your bill is 12.99");
        },2000)
        
      
      };
    paying();
    };
  serving();
  };
production();
};

order(2);
  console.log("the fruit was chopped")
})})

.then(()=>{
  return order(2000,()=>{
    console.log("the machine was turned on ")
  })
})
