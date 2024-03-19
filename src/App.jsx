import Home from './pages/Home'
import productStore from "./redux/store";
import { Provider } from 'react-redux';
function App() {

  return (
    <>
      <Provider store = {productStore}>
        <Home/>
      </Provider>
    </>
  )
}

export default App
