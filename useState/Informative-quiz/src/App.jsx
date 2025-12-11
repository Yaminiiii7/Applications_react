import { useState } from 'react'
import queryList from './data.js'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const handlePrevious=()=>{
    if(count>0){
    setCount(count-1);
    setShowAnswer(false);
    };
  }
  const handleNext=()=>{
    if(count<queryList.length-1){
    setCount(count+1);
    setShowAnswer(false);
    };
  }

  const flipCard=()=>{    
    setShowAnswer((prev)=>(!prev))
  }
  let query=queryList[count];


  return (
    <div>
      <div>
        <h1>Welcome to the Web Tech Knowledge Hub</h1>
        <p>Explore quick, informative questions that sharpen your fundamentals in web development, APIs, and modern frontend concepts. Perfect for students, beginners, and anyone preparing for tech interviews</p>
      </div>
      <div className='card' 
           onClick={flipCard}
           style={{
           backgroundColor: showAnswer ? "#0ec9fdff" : "#aaffc8ff",
        }} >
        <p>{showAnswer ? query.answer:query.question}</p>
      </div>
      <button onClick={handlePrevious}>prev</button>
      <button onClick={handleNext}>next </button>
    </div>
    
  )
}

export default App
