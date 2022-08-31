import { useState } from 'react'
import './App.css';

function App() {
  const [toDos, setToDos] = useState([])
  const [toDo, setTodo] = useState(' ')
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
      </div>
      <div className="input">
        <input value={toDo} onChange={(e) => setTodo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={() => setToDos([...toDos, { id: Date.now(), text: toDo, status: false }])} className="fas fa-plus"></i>
      </div>
      <div className="subHeading">
        <br />
        <h2>All Tasks </h2>
      </div>
      {
        toDos.map((obj) => {
          return (
            <div className="todos">
              <div className="todo">
                <div className="left">
                  <input onChange={(e) => {
                    console.log(e.target.checked)
                    console.log(obj)
                    setToDos(toDos.filter(obj2 => {
                      if (obj2.id === obj.id) {
                        obj2.status = e.target.checked
                      }
                      return obj2
                    }))
                  }} value={obj.status} type="checkbox" name="" id="" />
                  <p>{obj.text}</p>
                </div>
                <div className="right">
                  <i onClick={(i) =>{
                    console.log('before index')
                    console.log(i)  
                    console.log('after index');
                    const test = [...toDos];
                    test.splice(i, 1);

                    setToDos(test)
                  }
                  } className="fas fa-times"></i>
                </div>
              </div>
            </div>
          )
        })
      }
      <div className="subHeading">
        <br />
        <h2>Tasks Done </h2>
      </div>
      {
        toDos.map((obj) => {
          if (obj.status) {
            return (
              <div className="input">
                <input type="text" value={obj.text} disabled/>

              </div>
            )
          }
          return null
        })
      }


    </div>
  );
}

export default App;
