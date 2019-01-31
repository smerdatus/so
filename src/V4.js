import React, { Component } from 'react';
import { Player } from 'video-react';
import './App.css';
import video_221 from './m/2018-09-01-18-27-10.mp4';
import img_221 from './m/2018-09-01-18-27-10.mp4.png';
import video_222 from './m/2018-09-01-18-28-21.mp4';
import img_222 from './m/2018-09-01-18-28-21.mp4.png';
import video_223 from './m/2018-09-01-19-04-35.mp4';
import img_223 from './m/2018-09-01-19-04-35.mp4.png';
import video_224 from './m/2018-09-01-22-45-55.mp4';
import img_224 from './m/2018-09-01-22-45-55.mp4.png';
import video_225 from './m/2018-09-01-23-04-07.mp4';
import img_225 from './m/2018-09-01-23-04-07.mp4.png';
import video_226 from './m/2018-09-02-01-50-24.mp4';
import img_226 from './m/2018-09-02-01-50-24.mp4.png';
import video_227 from './m/2018-09-04-15-46-24.mp4';
import img_227 from './m/2018-09-04-15-46-24.mp4.png';
import video_228 from './m/2018-09-04-16-03-17.mp4';
import img_228 from './m/2018-09-04-16-03-17.mp4.png';
import video_229 from './m/2018-09-04-16-24-31.mp4';
import img_229 from './m/2018-09-04-16-24-31.mp4.png';
import video_230 from './m/2018-09-04-17-24-15.mp4';
import img_230 from './m/2018-09-04-17-24-15.mp4.png';
import video_231 from './m/2018-09-04-19-45-07.mp4';
import img_231 from './m/2018-09-04-19-45-07.mp4.png';
import video_232 from './m/2018-09-04-23-13-27.mp4';
import img_232 from './m/2018-09-04-23-13-27.mp4.png';
import video_233 from './m/2018-09-04-23-24-24.mp4';
import img_233 from './m/2018-09-04-23-24-24.mp4.png';
import video_234 from './m/2018-09-05-23-55-59.mp4';
import img_234 from './m/2018-09-05-23-55-59.mp4.png';
import video_235 from './m/2018-09-06-19-54-29.mp4';
import img_235 from './m/2018-09-06-19-54-29.mp4.png';
import video_236 from './m/2018-09-06-20-00-18.mp4';
import img_236 from './m/2018-09-06-20-00-18.mp4.png';
import video_237 from './m/2018-09-06-20-03-25.mp4';
import img_237 from './m/2018-09-06-20-03-25.mp4.png';
import video_238 from './m/2018-09-07-22-36-33.mp4';
import img_238 from './m/2018-09-07-22-36-33.mp4.png';
import video_239 from './m/2018-09-07-22-37-53.mp4';
import img_239 from './m/2018-09-07-22-37-53.mp4.png';
import video_240 from './m/2018-09-07-22-41-58.mp4';
import img_240 from './m/2018-09-07-22-41-58.mp4.png';
import video_241 from './m/2018-09-08-16-11-46.mp4';
import img_241 from './m/2018-09-08-16-11-46.mp4.png';
import video_242 from './m/2018-09-08-16-17-50.mp4';
import img_242 from './m/2018-09-08-16-17-50.mp4.png';
import video_243 from './m/2018-09-08-16-20-20.mp4';
import img_243 from './m/2018-09-08-16-20-20.mp4.png';
import video_244 from './m/2018-09-08-16-25-05.mp4';
import img_244 from './m/2018-09-08-16-25-05.mp4.png';
import video_245 from './m/2018-09-08-16-32-16.mp4';
import img_245 from './m/2018-09-08-16-32-16.mp4.png';
import video_246 from './m/2018-09-09-15-24-53.mp4';
import img_246 from './m/2018-09-09-15-24-53.mp4.png';
import video_247 from './m/2018-09-09-16-14-28.mp4';
import img_247 from './m/2018-09-09-16-14-28.mp4.png';
import video_248 from './m/2018-09-09-16-16-03.mp4';
import img_248 from './m/2018-09-09-16-16-03.mp4.png';
import video_249 from './m/2018-09-09-16-23-43.mp4';
import img_249 from './m/2018-09-09-16-23-43.mp4.png';
import video_250 from './m/2018-09-10-19-19-27.mp4';
import img_250 from './m/2018-09-10-19-19-27.mp4.png';
import video_251 from './m/2018-09-10-20-21-21.mp4';
import img_251 from './m/2018-09-10-20-21-21.mp4.png';
import video_252 from './m/2018-09-10-20-22-14.mp4';
import img_252 from './m/2018-09-10-20-22-14.mp4.png';
import video_253 from './m/2018-09-10-20-23-07.mp4';
import img_253 from './m/2018-09-10-20-23-07.mp4.png';
import video_254 from './m/2018-09-13-17-53-29.mp4';
import img_254 from './m/2018-09-13-17-53-29.mp4.png';
import video_255 from './m/2018-09-13-22-58-28.mp4';
import img_255 from './m/2018-09-13-22-58-28.mp4.png';
import video_256 from './m/2018-09-14-12-34-01.mp4';
import img_256 from './m/2018-09-14-12-34-01.mp4.png';
import video_257 from './m/2018-09-14-14-47-33.mp4';
import img_257 from './m/2018-09-14-14-47-33.mp4.png';
import video_258 from './m/2018-09-14-15-24-35.mp4';
import img_258 from './m/2018-09-14-15-24-35.mp4.png';
import video_259 from './m/2018-09-15-14-59-52.mp4';
import img_259 from './m/2018-09-15-14-59-52.mp4.png';
import video_260 from './m/2018-09-15-18-40-11.mp4';
import img_260 from './m/2018-09-15-18-40-11.mp4.png';
import video_261 from './m/2018-09-15-18-40-57.mp4';
import img_261 from './m/2018-09-15-18-40-57.mp4.png';
import video_262 from './m/2018-09-15-18-57-18.mp4';
import img_262 from './m/2018-09-15-18-57-18.mp4.png';
import video_263 from './m/2018-09-16-00-22-04.mp4';
import img_263 from './m/2018-09-16-00-22-04.mp4.png';
import video_264 from './m/2018-09-16-22-34-28.mp4';
import img_264 from './m/2018-09-16-22-34-28.mp4.png';
import video_265 from './m/2018-09-16-22-34-51.mp4';
import img_265 from './m/2018-09-16-22-34-51.mp4.png';
import video_266 from './m/2018-09-18-00-23-33.mp4';
import img_266 from './m/2018-09-18-00-23-33.mp4.png';
import video_267 from './m/2018-09-18-00-42-00.mp4';
import img_267 from './m/2018-09-18-00-42-00.mp4.png';
import video_268 from './m/2018-09-18-00-54-41.mp4';
import img_268 from './m/2018-09-18-00-54-41.mp4.png';
import video_269 from './m/2018-09-18-01-09-11.mp4';
import img_269 from './m/2018-09-18-01-09-11.mp4.png';
import video_270 from './m/2018-09-18-02-23-16.mp4';
import img_270 from './m/2018-09-18-02-23-16.mp4.png';
import video_271 from './m/2018-09-19-00-01-37.mp4';
import img_271 from './m/2018-09-19-00-01-37.mp4.png';
import video_272 from './m/2018-09-19-00-05-28.mp4';
import img_272 from './m/2018-09-19-00-05-28.mp4.png';
import video_273 from './m/2018-09-19-00-18-47.mp4';
import img_273 from './m/2018-09-19-00-18-47.mp4.png';
import video_274 from './m/2018-09-19-00-23-52.mp4';
import img_274 from './m/2018-09-19-00-23-52.mp4.png';
import video_275 from './m/2018-09-19-00-41-38.mp4';
import img_275 from './m/2018-09-19-00-41-38.mp4.png';
import video_276 from './m/2018-09-19-19-29-52.mp4';
import img_276 from './m/2018-09-19-19-29-52.mp4.png';
import video_277 from './m/2018-09-19-19-38-17.mp4';
import img_277 from './m/2018-09-19-19-38-17.mp4.png';
import video_278 from './m/2018-09-20-03-11-44.mp4';
import img_278 from './m/2018-09-20-03-11-44.mp4.png';
import video_279 from './m/2018-09-21-02-44-02.mp4';
import img_279 from './m/2018-09-21-02-44-02.mp4.png';
import video_280 from './m/2018-09-21-02-52-35.mp4';
import img_280 from './m/2018-09-21-02-52-35.mp4.png';
import video_281 from './m/2018-09-23-20-52-40.mp4';
import img_281 from './m/2018-09-23-20-52-40.mp4.png';
import video_282 from './m/2018-09-23-21-00-57.mp4';
import img_282 from './m/2018-09-23-21-00-57.mp4.png';
import video_283 from './m/2018-09-25-19-50-24.mp4';
import img_283 from './m/2018-09-25-19-50-24.mp4.png';
import video_284 from './m/2018-09-25-20-13-24.mp4';
import img_284 from './m/2018-09-25-20-13-24.mp4.png';
import video_285 from './m/2018-09-25-20-23-34.mp4';
import img_285 from './m/2018-09-25-20-23-34.mp4.png';
import video_286 from './m/2018-09-26-20-27-50.mp4';
import img_286 from './m/2018-09-26-20-27-50.mp4.png';
import video_287 from './m/2018-09-27-02-27-40.mp4';
import img_287 from './m/2018-09-27-02-27-40.mp4.png';
import video_288 from './m/2018-09-27-21-17-10.mp4';
import img_288 from './m/2018-09-27-21-17-10.mp4.png';
import video_289 from './m/2018-09-27-21-22-55.mp4';
import img_289 from './m/2018-09-27-21-22-55.mp4.png';
import video_290 from './m/2018-09-27-21-51-27.mp4';
import img_290 from './m/2018-09-27-21-51-27.mp4.png';
import video_291 from './m/2018-09-27-21-54-08.mp4';
import img_291 from './m/2018-09-27-21-54-08.mp4.png';
import video_292 from './m/2018-09-29-16-39-54.mp4';
import img_292 from './m/2018-09-29-16-39-54.mp4.png';
import video_293 from './m/2018-09-29-19-12-27.mp4';
import img_293 from './m/2018-09-29-19-12-27.mp4.png';
import video_294 from './m/2018-09-29-19-28-49.mp4';
import img_294 from './m/2018-09-29-19-28-49.mp4.png';
import video_295 from './m/2018-09-29-19-35-58.mp4';
import img_295 from './m/2018-09-29-19-35-58.mp4.png';
import video_296 from './m/2018-09-30-16-24-55.mp4';
import img_296 from './m/2018-09-30-16-24-55.mp4.png';
import video_297 from './m/2018-09-30-16-31-29.mp4';
import img_297 from './m/2018-09-30-16-31-29.mp4.png';
import video_298 from './m/2018-09-30-16-34-16.mp4';
import img_298 from './m/2018-09-30-16-34-16.mp4.png';

export default class V4 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'video',
      video: video_221,
      image: img_221,
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
            <div style={ { display: 'flex', justifyContent: 'center', padding: 20 } }>Sept 2018</div>
            <div style={ { display: 'flex', flexWrap: 'wrap', justifyContent: 'center' } }>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_221 }) }>
                    <img src={ img_221 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_222 }) }>
                    <img src={ img_222 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_223 }) }>
                    <img src={ img_223 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_224 }) }>
                    <img src={ img_224 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_225 }) }>
                    <img src={ img_225 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_226 }) }>
                    <img src={ img_226 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_227 }) }>
                    <img src={ img_227 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_228 }) }>
                    <img src={ img_228 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_229 }) }>
                    <img src={ img_229 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_230 }) }>
                    <img src={ img_230 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_231 }) }>
                    <img src={ img_231 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_232 }) }>
                    <img src={ img_232 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_233 }) }>
                    <img src={ img_233 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_234 }) }>
                    <img src={ img_234 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_235 }) }>
                    <img src={ img_235 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_236 }) }>
                    <img src={ img_236 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_237 }) }>
                    <img src={ img_237 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_238 }) }>
                    <img src={ img_238 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_239 }) }>
                    <img src={ img_239 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_240 }) }>
                    <img src={ img_240 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_241 }) }>
                    <img src={ img_241 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_242 }) }>
                    <img src={ img_242 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_243 }) }>
                    <img src={ img_243 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_244 }) }>
                    <img src={ img_244 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_245 }) }>
                    <img src={ img_245 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_246 }) }>
                    <img src={ img_246 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_247 }) }>
                    <img src={ img_247 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_248 }) }>
                    <img src={ img_248 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_249 }) }>
                    <img src={ img_249 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_250 }) }>
                    <img src={ img_250 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_251 }) }>
                    <img src={ img_251 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_252 }) }>
                    <img src={ img_252 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_253 }) }>
                    <img src={ img_253 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_254 }) }>
                    <img src={ img_254 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_255 }) }>
                    <img src={ img_255 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_256 }) }>
                    <img src={ img_256 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_257 }) }>
                    <img src={ img_257 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_258 }) }>
                    <img src={ img_258 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_259 }) }>
                    <img src={ img_259 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_260 }) }>
                    <img src={ img_260 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_261 }) }>
                    <img src={ img_261 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_262 }) }>
                    <img src={ img_262 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_263 }) }>
                    <img src={ img_263 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_264 }) }>
                    <img src={ img_264 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_265 }) }>
                    <img src={ img_265 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_266 }) }>
                    <img src={ img_266 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_267 }) }>
                    <img src={ img_267 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_268 }) }>
                    <img src={ img_268 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_269 }) }>
                    <img src={ img_269 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_270 }) }>
                    <img src={ img_270 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_271 }) }>
                    <img src={ img_271 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_272 }) }>
                    <img src={ img_272 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_273 }) }>
                    <img src={ img_273 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_274 }) }>
                    <img src={ img_274 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_275 }) }>
                    <img src={ img_275 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_276 }) }>
                    <img src={ img_276 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_277 }) }>
                    <img src={ img_277 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_278 }) }>
                    <img src={ img_278 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_279 }) }>
                    <img src={ img_279 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_280 }) }>
                    <img src={ img_280 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_281 }) }>
                    <img src={ img_281 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_282 }) }>
                    <img src={ img_282 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_283 }) }>
                    <img src={ img_283 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_284 }) }>
                    <img src={ img_284 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_285 }) }>
                    <img src={ img_285 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_286 }) }>
                    <img src={ img_286 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_287 }) }>
                    <img src={ img_287 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_288 }) }>
                    <img src={ img_288 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_289 }) }>
                    <img src={ img_289 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_290 }) }>
                    <img src={ img_290 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_291 }) }>
                    <img src={ img_291 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_292 }) }>
                    <img src={ img_292 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_293 }) }>
                    <img src={ img_293 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_294 }) }>
                    <img src={ img_294 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_295 }) }>
                    <img src={ img_295 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_296 }) }>
                    <img src={ img_296 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_297 }) }>
                    <img src={ img_297 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_298 }) }>
                    <img src={ img_298 } className={ this.state.picSizeMode } />
                </div>
            </div>
        </div>
    );
  }
}
