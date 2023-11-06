 
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './redux/Store.jsx'
import MainSideBar from './Component/Component/MainSideBar.jsx'
<<<<<<< HEAD
   
=======
  
>>>>>>> 439afe43bfeef0a26b450ba7a0d315a866f1101c
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
      <MainSideBar/>
    <App />
  
    </Provider>
)
