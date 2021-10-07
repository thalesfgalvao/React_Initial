import React, { useContext, useState } from 'react';
import './App.css';

  const globalState = {
    title: 'Titulo do contexto',
    body: 'O body do contexto',
    coutner: 0,
  };

  const GlobalContex = React.createContext();

  // eslint-disable-next-line
  const Header = ({children}) => {
    return(
      <header className="App-header">
        <H1/>
        <Paragraph/>
      </header>
    );
  }

  const H1 = () =>{
    const theContext = useContext(GlobalContex);
    const { contextState: { title } } = theContext;
    return(
      <h1>{title}</h1>
    );
  }
  const Paragraph = () =>{
    const theContext = useContext(GlobalContex);
    const { contextState: { body } } = theContext;
    return(
      <p>{body}</p>
    );
  }

  const App = () => {
    const [contextState, setContextState] = useState(globalState);
  return (
    <div className="App">
      <GlobalContex.Provider value={{contextState, setContextState}}>
        <Header/>
      </GlobalContex.Provider>
    </div>
  );
}

export default App;