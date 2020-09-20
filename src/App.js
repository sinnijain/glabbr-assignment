import React from 'react';
import './App.css';
import LogInPage from './components/LogInPage';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <LogInPage />
      </div>
    </Provider>
    
  );
}

export default App;
