import React from 'react';
import FontAwesome from 'react-fontawesome';

class SharePanel extends React.Component {
  constructor() {
    super();

    this._onFacebookHandler = this._onFacebookHandler.bind(this);
    this._onTwitterHandler = this._onTwitterHandler.bind(this);
  }

  _onTwitterHandler() {
    window.open('https://twitter.com/intent/tweet?text=Check out Remembero, a game where you need to train your memory to score high! https://goo.gl/EJzpu9 by @kwyrzykowski');
  }

  _onFacebookHandler() {
    FB.ui({
      method: 'feed',
      name: 'Remembero',
      link: 'https://goo.gl/EJzpu9',
      caption: 'Remembero - exercise your memory',
      description: 'Check out Remembero, a game where you need to train your memory to score high!',
      message: 'Message here'
    });
  }

  render() {
    return(
      <ul className="share-panel-list">
        <li className="share-panel-list__item">
          <a className="share-panel-list__link" onClick={this._onFacebookHandler}>
            <FontAwesome name="facebook" size="2x" />
          </a>
        </li>
        <li className="share-panel-list__item">
          <a className="share-panel-list__link" onClick={this._onTwitterHandler}>
            <FontAwesome name="twitter" size="2x" />
          </a>
        </li>
      </ul>
    )
  }
}

export default SharePanel;
