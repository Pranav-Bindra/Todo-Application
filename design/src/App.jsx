import { RenderTopBar } from "./components/RenderTopBar" 
import { RenderTodos } from "./components/RenderTodos"
import backgroundImage from './assets/3122977.jpg';
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [tempTodos, setTempTodos] = useState(null);
  const [input, setInput] = useState('');

  const displayTodos = tempTodos === null ? todos : tempTodos;

  return (
    <div className="flex flex-col h-screen relative ml-2 mr-2 mt-2">
      <div className="absolute top-0 w-full h-2/5 rounded-lg">
        <div className="absolute top-0 w-full h-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-75 z-10 rounded-lg"></div>
        <div className="w-full h-full bg-cover bg-no-repeat rounded-md z-0" 
             style={{backgroundImage: `url(${backgroundImage})`}}>
        </div>
      </div>
      <div className="z-10 relative flex flex-col flex-grow">
        <div className="z-10">
          <RenderTopBar todos = {todos} setTodos = {setTodos} input = {input} setInput = {setInput} tempTodos = {tempTodos} setTempTodos= {setTempTodos}/>
        </div>
        <div className="flex-grow">
          <RenderTodos todos = {displayTodos} setTodos = {setTodos} tempTodos = {tempTodos} setTempTodos = {setTempTodos}/>
        </div>
      </div>
    </div>
  );
}

export default App;