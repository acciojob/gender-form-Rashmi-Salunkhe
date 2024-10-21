
import React, { useState } from "react";
import './../styles/App.css';


const sizes = {
  'male': ["Small", "Medium", "Large"],
  'female': ["2", "4", "6"]
}
const App = () => {
  const [gender, setGender] = useState('male')
  return (
    <div>
      {/* Do not remove the main div */}
      <h2>Select your gender:</h2>
      <label>
        <input name="gender" type="radio" value={"male"}  onInput={e=>setGender(e.target.value)}  />
        Male
      </label>
      <label>
        <input name="gender" type="radio" value={"female"} onInput={e=>setGender(e.target.value)} />
        Female
      </label>
      <h2>{gender=='male'? "Select your shirt size:":"Select your dress size:"}</h2>

      <select>
        <option>Select size</option>
        {
          sizes[gender].map(size=><option key={size} value={size} >{size}</option>)
        }
      </select>
    </div>
  )
}

export default App
