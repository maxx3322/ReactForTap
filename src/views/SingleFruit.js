import React, { useEffect, useState }  from 'react'
function SingleFruit (){
    const [fruit, setFruit] = useState([]); 
    useEffect(() => {
      getFruits(); 
    }, []);
    
    function getFruits(){
       
        //update so number is created dymamically
        const url = "http://localhost:3001/api/fruits/4" 
      
     fetch(url)
    .then((res) => res.json()) 
      .then(data =>{
        setFruit(data)
      });

    //   const updateFruit = (id, updatedFruit) => {
	// 	setEditing(false)

	// 	setUsers(users.map(user => (fruit.id === id ? updatedFruit : fruit)))
	// }
    
     
     }
    
    
    // Would like to move this into its own component
    
    
    return (
      <div className="App">
      { fruit.map((fruit, index)=> (
          <div key={index}>
          <img src={fruit.img} alt={fruit.img}></img>
        
    
          <li>{fruit.name}</li>
          <li>{fruit.price}</li>
          <li>{fruit.description}</li>
          <li>{fruit.likes}</li>
          </div>
    
        ))}
        <button>Like</button>
    
      </div>
     
    )
      
    
    }
    
    export default SingleFruit