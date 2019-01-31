import React, { Component } from 'react';
import V1 from './V1';
import V2 from './V2';
import V3 from './V3';
import V4 from './V4';
import V5 from './V5';
import V6 from './V6';

import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: 'hide'
    };
  }

  renderButtons = () => {
    return (
        <div style={ { display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', padding: 20 } }>
            <div onClick={ () => this.setState({ person: 'hide' }) } style={ { paddingBottom: 10 } }>
                <button className="pure-button pure-button-primary">Hide</button>
            </div>
            <div onClick={ () => this.setState({ person: 'v1' }) } style={ { paddingBottom: 10 } }>
                <button className="pure-button pure-button-primary">V1</button>
            </div>
            <div onClick={ () => this.setState({ person: 'v2' }) } style={ { paddingBottom: 10 } }>
                <button className="pure-button pure-button-primary">V2</button>
            </div>
            <div onClick={ () => this.setState({ person: 'v3' }) } style={ { paddingBottom: 10 } }>
                <button className="pure-button pure-button-primary">V3</button>
            </div>
            <div onClick={ () => this.setState({ person: 'v4' }) } style={ { paddingBottom: 10 } }>
                <button className="pure-button pure-button-primary">V4</button>
            </div>
            <div onClick={ () => this.setState({ person: 'v5' }) } style={ { paddingBottom: 10 } }>
                <button className="pure-button pure-button-primary">V5</button>
            </div>
            <div onClick={ () => this.setState({ person: 'v6' }) } style={ { paddingBottom: 10 } }>
                <button className="pure-button pure-button-primary">V6</button>
            </div>
        </div>
      );
  }

  render() {
    if (this.state.person === 'hide') {
      return (
          <div>
              {this.renderButtons()}
          </div>
      )
    } else if (this.state.person === 'v1') {
      return (
          <div>
              {this.renderButtons()}
              <V1 />
          </div>
        );
    } else if (this.state.person === 'v2') {
      return (
          <div>
              {this.renderButtons()}
              <V2 />
          </div>
        );
    } else if (this.state.person === 'v3') {
        return (
            <div>
                {this.renderButtons()}
                <V3 />
            </div>
          );
    } else if (this.state.person === 'v4') {
        return (
            <div>
                {this.renderButtons()}
                <V4 />
            </div>
          );
    } else if (this.state.person === 'v5') {
      return (
          <div>
              {this.renderButtons()}
              <V5 />
          </div>
        );
  } else if (this.state.person === 'v6') {
    return (
        <div>
            {this.renderButtons()}
            <V6 />
        </div>
      );
} else {
      return (
          <div>Error</div>
      )
    }
  }
}
