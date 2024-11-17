import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'
import Route from './Route/Route'

function App() {

  return (
    <div className='max-w-7xl mx-auto'>
      <Route />
      <ToastContainer/>
    </div>
  )
}

export default App
