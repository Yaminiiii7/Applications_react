import { useState } from 'react'

import './App.css'

function App() {
  const [name, setName] = useState('l');
  const [topic, setTopic] = useState('');

  const handleChange=(e)=>{
    setName(e.target.value)
  }
  const handleTopic=(e)=>{
    setTopic(e.target.value)
  }
  const handleSubmit=(e)=>{
    alert(`${name}+ ${topic}`)
    e.preventDefault();
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username</label>
          <input type="text" value={name} onChange={handleChange}/>
          {name}
        </div>
        <div>
          <label>topic</label>
            <select value={topic} onChange={handleTopic}>
              <option value="react">React</option>
              <option value="angular">Angular</option>
              <option value="vue">Vue</option>
            </select>
        </div>
        <button type="submit">submit</button>
      </form>       
    </div>
  )
}

export default App
