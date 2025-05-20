
import { RouterProvider } from 'react-router'
import './App.css'
import { router } from './pages/routes/router'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <>
     <RouterProvider router={router}/>
    </>
  )
}

export default App
