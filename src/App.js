import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css'; // Stil dosyanızı import edin
import { Provider } from 'react-redux'; // react-redux'dan Provider'ı import edin
import store from './store'; // Redux store'unuzu import edin
import Board from './components/Board';
import Score from './components/Score';

const App = () => (
  <Provider store={store}> {/* Provider bileşeni ile Redux store'unu sağlayın */}
    <div className="app">
      <h1>Memory Game</h1>
      <Score />
      <Board />
    </div>
  </Provider>
);

export default App;