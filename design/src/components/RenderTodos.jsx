export const RenderTodos = ({todos,setTodos, tempTodos, setTempTodos}) => {
    function markTodo(index) {
        const updateTodos = (list) =>
          list.map((todo, todoIndex) =>
            index === todoIndex ? { ...todo, isComplete: !todo.isComplete } : todo
          );
    
        setTodos(updateTodos(todos));
        if (tempTodos !== null) {
          setTempTodos(updateTodos(tempTodos));
        }
      }
    
      function removeTodo(index) {
        const filterTodos = (list) => list.filter((_, todoIndex) => todoIndex !== index);
    
        setTodos(filterTodos(todos));
        if (tempTodos !== null) {
          setTempTodos(filterTodos(tempTodos));
        }
      }
    
      function filterTodos(filterType) {
        switch (filterType) {
          case 'all':
            setTempTodos(null);
            break;
          case 'active':
            setTempTodos(todos.filter(todo => !todo.isComplete));
            break;
          case 'completed':
            setTempTodos(todos.filter(todo => todo.isComplete));
            break;
          default:
            setTempTodos(null);
        }
      }
    
      function CountLeft(){
        let leftCount = 0;
        todos.map(todo => {
          if (todo.isComplete == false){
            leftCount += 1;
          }
        })
        return <div>
          {leftCount} items left
        </div>
      }

      return (
        <div className="rounded-md text-black bg-white relative z-10 mt-4 ml-24 mr-24 border-solid border-2 border-black overflow-y-auto">
          {todos.map((todo, index) => ( <div>
            <div key={index} className="flex items-center justify-between p-2">
              <label className="flex items-center">
                <input type="checkbox"
                       className="before:content-[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-purple-500 checked:bg-purple-500 checked:before:bg-purple-500 hover:before:opacity-10"
                       checked={todo.isComplete} onChange={() => markTodo(index)} />
                <span className="ml-2">{todo.text}</span>
              </label>
              <button onClick={() => removeTodo(index)} className="ml-4 bg-transparent border-none cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 text-slate-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
        </button>
            </div>
            <div className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700"></div>
            </div>
          ))}
        <div className="flex justify-between text-xs text-slate-500">
            <div className="ml-3"><CountLeft></CountLeft></div>
            <div className="flex justify-between"><button className='pr-3 hover:purple-500' onClick={() => filterTodos('all')}>All</button>
                <button className="pl-3 pr-3 hover:text-purple-500" onClick={() => filterTodos('active')}>Active</button>
                <button className="hover:purple-500" onClick={() => filterTodos('completed')}>Completed</button></div>
            <div className="mr-3"><button className="hover:purple-500" onClick={() => setTodos([])}>Clear Todos</button></div>
        </div>
    </div>
      );      
}