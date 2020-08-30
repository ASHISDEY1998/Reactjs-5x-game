import React from 'react';
import Inputpage from "./component/Inputpage"
import Outputpage from "./component/Outputpage"
import './App.css';

function App() {
const [pagetype,setpagetype]=React.useState("input")
const [matrix,setmatrix]=React.useState(0)

const callpage=(whichpage)=>{
  // eslint-disable-next-line default-case
  switch(whichpage){
    case "input":
    return <Inputpage update={setmatrix} updatePage={setpagetype}/>;
    case "output":
    return <Outputpage matrix={matrix}/>
  }
}
  return (
    <div className="App">
      <header className="App-header">
        {callpage(pagetype)}
      </header>
    </div>
  );
}

export default App;
