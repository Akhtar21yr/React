import { useSelector } from 'react-redux'
import AddTodo from './componenets/AddTodo'
import Todos from './componenets/Todos'

function App() {

  
  return (
    <div className=''>
      <AddTodo />
      <Todos />
    </div>
  )
}

export default App