
import { createContext } from 'react'
import './App.css'
import { useState,useContext } from 'react'

const BulbContext = createContext();

function BulbProvider({children}){
  const [bulbOn,setBulbOn] = useState(true)
  return <BulbContext.Provider value={{
    bulbOn:bulbOn,
    setBulbOn:setBulbOn
  }}>
    {children}
  </BulbContext.Provider>
}

function App() {
  
  return (
    <>
    <BulbProvider>
      <Light/>
    </BulbProvider>
    </>
  )
}

function Light(){
  return (
    <div>
      <LightBulb/>
      <LightSwitch/>
    </div>
  )
}

function LightBulb(){
  const {bulbOn} = useContext(BulbContext)
  return (
    <div>
      {bulbOn===true?"bulb on":"bulb off"}
    </div>
  )
}

function LightSwitch(){
  const {bulbOn,setBulbOn} = useContext(BulbContext);

  function toggle(){
    setBulbOn(!bulbOn)
  }

  return (
    <div>
      <button onClick={toggle}>LightSwitch</button>
    </div>
  )
}

export default App
