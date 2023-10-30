 
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './redux/Store.jsx'
import NvOff from './Component/Component/NvOff.jsx'
 
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
      <NvOff/>
    <App />
  
    </Provider>
)
