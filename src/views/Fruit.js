import React, { useEffect, useState }  from 'react'

function Fruit (){
const [fruits, setFruits] = useState([]); 
useEffect(() => {
  getFruits(); 
}, []);

function getFruits(){
  
 fetch("http://localhost:3001/api/fruits")
.then((res) => res.json())
  .then(data =>{
    setFruits(data)
  });


 
 }





return (
  <div className="App">
  { fruits.map((fruit, index)=> (
      <div key={index}>

    <ul>
      <img src={fruit.img} alt={fruit.img}></img>   
      <li>{fruit.name}</li>
      <li>{fruit.price}</li>
      </ul>

      
      </div>

    

    ))}
    

  </div>
 
)
  

}

export default Fruit