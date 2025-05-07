import { useState } from 'react'
import ToDoItem from './components/ToDoItem'
import './App.css'

function App () {
  /* 1. Creo el estado donde guardare la información del input */
  const [inputValue, setInputValue] = useState('')

  /* 4. Creo un nuevo estado para manejar la lista de tareas */
  const [todoList, setTodoList] = useState([])

  /* 3. Creo una función que se ejecuta cuando se hace click al boton agregar */
  /* 5. Modificar la función para que agregue la tarea a la lista */
  const handleAdd = () => {
    // console.log('Agregue:', inputValue)
    setTodoList([...todoList, inputValue])
    setInputValue('') // Limpiar el input después de agregar la tarea
  }

  /* 6. Función que se ejecuta cuando se hace clic en eliminar */
  const deleteTodo = (index) => {
    setTodoList(todoList.filter((_, i) => i !== index))
  }

  return (
    <>
      <h1>Lista de Tareas</h1>
      {/* 2. Usar un evento onChange para guardar la información del estado, apenas esta sea tecleada. La información del input la obtenemos de event.target.value */}
      <input
        type='text'
        placeholder='Escribe una tarea'
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />
      <button onClick={handleAdd}>Agregar</button>
      {/* ul>li{Item $}*3>button{Eliminar} */}
      <ul>
        {
          todoList.map((todo, index) => (
            <ToDoItem
              key={index}
              todoName={todo}
              handleDelete={() => deleteTodo(index)}
            />
          ))
        }
      </ul>
    </>
  )
}

export default App
