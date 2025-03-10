import { Provider } from "react-redux"
import "./App.css"
import Dashboard from "./pages/Dashboard"
import { store } from "./store/store"
import { ToastContainer } from "react-toastify"

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Provider store={store}>
      
      <Dashboard />
      </Provider>
     
    </div>
  )
}

export default App

