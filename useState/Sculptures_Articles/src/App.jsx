import sculptureList from "./data.js";
import {useState} from 'react';

const App=()=>{

  const [index,setIndex]=useState(0);
  let sculpture=sculptureList[index];

  const handlePrevious=()=>{

    setIndex((index-1)%sculptureList.length)
  }
  const handleNext=()=>{

    setIndex((index+1)%sculptureList.length)
  }



  return(
    <div>
      <button onClick={handlePrevious}>previous</button>
      <button onClick={handleNext}>Next</button>
      <h2>
        <i>{sculpture.name}</i> by {sculpture.artist}
      </h2>
      <h3>{index+1} of {sculptureList.length}</h3>
      <img src={sculpture.image} height='200px' width='200px'/>
      <p>{sculpture.description}</p>
    </div>
  )

}



export default App;