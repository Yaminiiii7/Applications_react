  //import { useState } from 'react'
  import BaristaForm from './components/BaristaForm';
  import './App.css'

  function App() {

    return (
      <div>
        <div className="title-container">
              <h1 className="title">On My Grind</h1>
              <p>"So you think you can barista? Let's put that to the test..."</p>
        </div>
        <BaristaForm/>
        
      </div>
    )
  }


// import { useState } from "react";
//   function App(){
//     const [email,setEmail]=useState();
//   const handleInput=(e)=>{
//     setEmail(e.target.value);
    
//   }
//   return (<input type="text" value={email} onChange={handleInput}/>
          
//   );
// }

export default App;