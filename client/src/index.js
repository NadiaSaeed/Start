import ReactDOM from 'react-dom/client'; // Updated import
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import store from './store'
import { BrowserRouter } from "react-router-dom";

// Create a root container instead of using ReactDOM.render
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
