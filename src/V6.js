import React, { Component } from 'react';
import { Player } from 'video-react';
import './App.css';
import video_398 from './m/2018-12-04-21-41-05.mp4';
import img_398 from './m/2018-12-04-21-41-05.mp4.png';
import video_399 from './m/2018-12-04-21-47-31.mp4';
import img_399 from './m/2018-12-04-21-47-31.mp4.png';
import video_400 from './m/2018-12-05-21-13-56.mp4';
import img_400 from './m/2018-12-05-21-13-56.mp4.png';
import video_401 from './m/2018-12-05-21-14-23.mp4';
import img_401 from './m/2018-12-05-21-14-23.mp4.png';
import video_402 from './m/2018-12-05-21-15-54.mp4';
import img_402 from './m/2018-12-05-21-15-54.mp4.png';
import video_403 from './m/2018-12-10-22-04-25.mp4';
import img_403 from './m/2018-12-10-22-04-25.mp4.png';
import video_404 from './m/2018-12-11-00-52-29.mp4';
import img_404 from './m/2018-12-11-00-52-29.mp4.png';
import video_405 from './m/2018-12-30-02-02-39.mp4';
import img_405 from './m/2018-12-30-02-02-39.mp4.png';
import video_406 from './m/2018-12-30-02-49-55.mp4';
import img_406 from './m/2018-12-30-02-49-55.mp4.png';
import video_407 from './m/2018-12-30-03-27-15.mp4';
import img_407 from './m/2018-12-30-03-27-15.mp4.png';
import video_408 from './m/2019-01-15-22-54-08.mp4';
import img_408 from './m/2019-01-15-22-54-08.mp4.png';
import video_409 from './m/2019-01-15-23-03-59.mp4';
import img_409 from './m/2019-01-15-23-03-59.mp4.png';
import video_410 from './m/2019-01-18-21-19-19.mp4';
import img_410 from './m/2019-01-18-21-19-19.mp4.png';
import video_411 from './m/2019-01-30-21-31-45.mp4';
import img_411 from './m/2019-01-30-21-31-45.mp4.png';
import video_412 from './m/2019-01-30-21-32-34.mp4';
import img_412 from './m/2019-01-30-21-32-34.mp4.png';
import video_413 from './m/2019-01-30-21-55-13.mp4';
import img_413 from './m/2019-01-30-21-55-13.mp4.png';

export default class V6 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'video',
      video: video_398,
      image: img_398,
      oldY: 0,
      picSizeMode: 'narrow'
    };
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (this.state.video !== prevState.video || (prevState.mode !== 'video' && this.state.mode === 'video')) {
      this.setState({ oldY: document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop });
      this.refs.player.load();
      window.scrollTo(0, 0);
      this.refs.player.play();
      
    } else if (this.state.image !== prevState.image) {
        this.setState({ oldY: document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop });
        window.scrollTo(0, 0);
    }
  }

  scrollBackDown = () => {
    window.scrollTo(0, this.state.oldY);
  }

  renderImageOrVideoContainer = () => {
    if (this.state.mode === 'video') {
      return (
          <Player ref="player" loop fluid={ false } width={ 350 }>
              <source src={ this.state.video } />
          </Player>
      )
    } else if (this.state.mode === 'image') {
      return (<img className="gallery" src={ this.state.image } />)
    }
  }

  toggleImageSize = () => {
    if (this.state.picSizeMode === 'narrow') {
        this.setState({ picSizeMode: 'wider' })
    } else {
      this.setState({ picSizeMode: 'narrow' })
    }
  }  

  render() {
    return (
        <div>
            <div style={ { display: 'flex', alignItems: 'center', flexDirection: 'column' } }>
                <div style={ { padding: '1vh' } }>
                    {this.renderImageOrVideoContainer()}
                </div>
                {this.state.oldY === 0 ? '' : (
                    <div padding={ { padding: '2vh' } } onClick={ () => this.scrollBackDown() } >
                        <button className="pure-button pure-button-primary">Return to previous position</button>
                    </div>
        )}
            </div>
            <div onClick={ () => this.toggleImageSize() } style={ { position: 'fixed', width: 50, height: 30, bottom: 40, right: 40  } }>
                <button className="pure-button pure-button-secondary">X</button>
            </div>
            <div style={ { display: 'flex', justifyContent: 'center', padding: 20 } }>Dec 2018 to Jan 2019</div>
            <div style={ { display: 'flex', flexWrap: 'wrap', justifyContent: 'center' } }>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_398 }) }>
                    <img src={ img_398 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_399 }) }>
                    <img src={ img_399 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_400 }) }>
                    <img src={ img_400 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_401 }) }>
                    <img src={ img_401 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_402 }) }>
                    <img src={ img_402 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_403 }) }>
                    <img src={ img_403 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_404 }) }>
                    <img src={ img_404 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_405 }) }>
                    <img src={ img_405 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_406 }) }>
                    <img src={ img_406 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_407 }) }>
                    <img src={ img_407 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_408 }) }>
                    <img src={ img_408 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_409 }) }>
                    <img src={ img_409 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_410 }) }>
                    <img src={ img_410 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_411 }) }>
                    <img src={ img_411 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_412 }) }>
                    <img src={ img_412 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_413 }) }>
                    <img src={ img_413 } className={ this.state.picSizeMode } />
                </div>

            </div>
        </div>
    );
  }
}
