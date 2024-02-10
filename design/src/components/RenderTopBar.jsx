export const RenderTopBar = ({
    todos,setTodos, input,setInput, tempTodos, setTempTodos
}) => {

    function inputChange(e) {
        setInput(e.target.value);
      }

    function addTodo() {
        if (input.trim()) {
          const newTodo = { text: input, isComplete: false };
          setTodos([...todos, newTodo]);
          if (tempTodos !== null) {
            setTempTodos([...tempTodos, newTodo]);
          }
          setInput('');
        }
      }
    return (
        <div>
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 opacity-75"></div>
            <div className="relative z-10">
                <div className="text-3xl text-white font-semibold font-mono pt-14 pl-24">T O D O</div>
                <div className="flex justify-between rounded-md w-58 bg-white mt-6 p-1.5 ml-24 mr-24">
                    <input type = "text" value = {input} name = "todo" id = "price" className='block w-full pl-2 mr-2' placeholder='Start typing...'
                    onChange={inputChange}></input>
                    <button className="rounded-md bg-purple-700 text-white text-sm p-2"
                    onClick = {addTodo}>Create</button>
                </div>
            </div>
        </div>
    );
};