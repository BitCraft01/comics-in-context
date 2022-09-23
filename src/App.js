import React from 'react';
import './App.css';
import stylesContext from './Components/StylesContext';
import UserInterface from './Components/UserInterFace'

function App() {
  const stylin ={
    background: '#1ECD97',
    display: 'inline-block',
    width: 120,
    height: 55,
    fontSize: 18,
    letterSpacing: 1,
    border: '2px solid #1ECD97',
    borderRadius: 15
  };
  return (
    
    <main>
      <stylesContext.Provider value={stylin}>
     <h1
          style={{
            color: "#FEE001",
            fontFamily: "Luminari, fantasy",
            fontSize: 50
          }}
        >
          Welcome to Comics Galore!
        </h1>
        <UserInterface />
        </stylesContext.Provider>
    </main>
  );
}

export default App;