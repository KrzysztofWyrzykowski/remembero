import React from 'react';
import ReactDOM from 'react-dom';

import GameEngine from './components/GameEngine';
import Footer from './components/Footer';

import './assets/stylesheets/styles.scss';

class Layout extends React.Component {
  render() {
    return (
      <div>
        <GameEngine />
        <Footer />
      </div>
    )
  }
}

ReactDOM.render(
  <Layout />, document.getElementById('app')
);
