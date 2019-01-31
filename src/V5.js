import React, { Component } from 'react';
import { Player } from 'video-react';
import './App.css';
import video_299 from './m/2018-10-01-19-19-55.mp4';
import img_299 from './m/2018-10-01-19-19-55.mp4.png';
import video_300 from './m/2018-10-01-19-21-34.mp4';
import img_300 from './m/2018-10-01-19-21-34.mp4.png';
import video_301 from './m/2018-10-01-19-24-29.mp4';
import img_301 from './m/2018-10-01-19-24-29.mp4.png';
import video_302 from './m/2018-10-02-19-21-03.mp4';
import img_302 from './m/2018-10-02-19-21-03.mp4.png';
import video_303 from './m/2018-10-02-20-23-59.mp4';
import img_303 from './m/2018-10-02-20-23-59.mp4.png';
import video_304 from './m/2018-10-02-20-32-22.mp4';
import img_304 from './m/2018-10-02-20-32-22.mp4.png';
import video_305 from './m/2018-10-03-20-44-10.mp4';
import img_305 from './m/2018-10-03-20-44-10.mp4.png';
import video_306 from './m/2018-10-03-21-07-26.mp4';
import img_306 from './m/2018-10-03-21-07-26.mp4.png';
import video_307 from './m/2018-10-06-16-09-44.mp4';
import img_307 from './m/2018-10-06-16-09-44.mp4.png';
import video_308 from './m/2018-10-09-22-25-34.mp4';
import img_308 from './m/2018-10-09-22-25-34.mp4.png';
import video_309 from './m/2018-10-10-23-17-22.mp4';
import img_309 from './m/2018-10-10-23-17-22.mp4.png';
import video_310 from './m/2018-10-10-23-36-44.mp4';
import img_310 from './m/2018-10-10-23-36-44.mp4.png';
import video_311 from './m/2018-10-13-20-38-45.mp4';
import img_311 from './m/2018-10-13-20-38-45.mp4.png';
import video_312 from './m/2018-10-13-20-46-46.mp4';
import img_312 from './m/2018-10-13-20-46-46.mp4.png';
import video_313 from './m/2018-10-14-21-11-40.mp4';
import img_313 from './m/2018-10-14-21-11-40.mp4.png';
import video_314 from './m/2018-10-15-23-47-48.mp4';
import img_314 from './m/2018-10-15-23-47-48.mp4.png';
import video_315 from './m/2018-10-15-23-48-26.mp4';
import img_315 from './m/2018-10-15-23-48-26.mp4.png';
import video_316 from './m/2018-10-15-23-49-07.mp4';
import img_316 from './m/2018-10-15-23-49-07.mp4.png';
import video_317 from './m/2018-10-15-23-49-35.mp4';
import img_317 from './m/2018-10-15-23-49-35.mp4.png';
import video_318 from './m/2018-10-16-20-20-05.mp4';
import img_318 from './m/2018-10-16-20-20-05.mp4.png';
import video_319 from './m/2018-10-16-20-24-02.mp4';
import img_319 from './m/2018-10-16-20-24-02.mp4.png';
import video_320 from './m/2018-10-16-20-25-01.mp4';
import img_320 from './m/2018-10-16-20-25-01.mp4.png';
import video_321 from './m/2018-10-16-20-29-01.mp4';
import img_321 from './m/2018-10-16-20-29-01.mp4.png';
import video_322 from './m/2018-10-16-20-29-54.mp4';
import img_322 from './m/2018-10-16-20-29-54.mp4.png';
import video_323 from './m/2018-10-17-19-13-12.mp4';
import img_323 from './m/2018-10-17-19-13-12.mp4.png';
import video_324 from './m/2018-10-17-19-13-51.mp4';
import img_324 from './m/2018-10-17-19-13-51.mp4.png';
import video_325 from './m/2018-10-17-19-14-51.mp4';
import img_325 from './m/2018-10-17-19-14-51.mp4.png';
import video_326 from './m/2018-10-17-19-15-54.mp4';
import img_326 from './m/2018-10-17-19-15-54.mp4.png';
import video_327 from './m/2018-10-19-21-34-22.mp4';
import img_327 from './m/2018-10-19-21-34-22.mp4.png';
import video_328 from './m/2018-10-21-23-31-50.mp4';
import img_328 from './m/2018-10-21-23-31-50.mp4.png';
import video_329 from './m/2018-10-22-00-01-01.mp4';
import img_329 from './m/2018-10-22-00-01-01.mp4.png';
import video_330 from './m/2018-10-22-00-05-38.mp4';
import img_330 from './m/2018-10-22-00-05-38.mp4.png';
import video_331 from './m/2018-10-22-00-11-59.mp4';
import img_331 from './m/2018-10-22-00-11-59.mp4.png';
import video_332 from './m/2018-10-23-22-36-30.mp4';
import img_332 from './m/2018-10-23-22-36-30.mp4.png';
import video_333 from './m/2018-10-23-22-58-01.mp4';
import img_333 from './m/2018-10-23-22-58-01.mp4.png';
import video_334 from './m/2018-10-23-23-28-53.mp4';
import img_334 from './m/2018-10-23-23-28-53.mp4.png';
import video_335 from './m/2018-10-23-23-43-09.mp4';
import img_335 from './m/2018-10-23-23-43-09.mp4.png';
import video_336 from './m/2018-10-28-15-23-04.mp4';
import img_336 from './m/2018-10-28-15-23-04.mp4.png';
import video_337 from './m/2018-10-28-15-35-31.mp4';
import img_337 from './m/2018-10-28-15-35-31.mp4.png';
import video_338 from './m/2018-10-28-15-41-47.mp4';
import img_338 from './m/2018-10-28-15-41-47.mp4.png';
import video_339 from './m/2018-10-28-15-52-43.mp4';
import img_339 from './m/2018-10-28-15-52-43.mp4.png';
import video_340 from './m/2018-10-28-16-24-27.mp4';
import img_340 from './m/2018-10-28-16-24-27.mp4.png';
import video_341 from './m/2018-10-29-15-59-20.mp4';
import img_341 from './m/2018-10-29-15-59-20.mp4.png';
import video_342 from './m/2018-11-01-21-20-24.mp4';
import img_342 from './m/2018-11-01-21-20-24.mp4.png';
import video_343 from './m/2018-11-01-21-21-17.mp4';
import img_343 from './m/2018-11-01-21-21-17.mp4.png';
import video_344 from './m/2018-11-01-21-23-30.mp4';
import img_344 from './m/2018-11-01-21-23-30.mp4.png';
import video_345 from './m/2018-11-01-22-38-37.mp4';
import img_345 from './m/2018-11-01-22-38-37.mp4.png';
import video_346 from './m/2018-11-02-20-54-31.mp4';
import img_346 from './m/2018-11-02-20-54-31.mp4.png';
import video_347 from './m/2018-11-03-18-34-27.mp4';
import img_347 from './m/2018-11-03-18-34-27.mp4.png';
import video_348 from './m/2018-11-03-18-36-24.mp4';
import img_348 from './m/2018-11-03-18-36-24.mp4.png';
import video_349 from './m/2018-11-03-18-38-06.mp4';
import img_349 from './m/2018-11-03-18-38-06.mp4.png';
import video_350 from './m/2018-11-03-18-39-13.mp4';
import img_350 from './m/2018-11-03-18-39-13.mp4.png';
import video_351 from './m/2018-11-03-18-46-35.mp4';
import img_351 from './m/2018-11-03-18-46-35.mp4.png';
import video_352 from './m/2018-11-03-18-47-02.mp4';
import img_352 from './m/2018-11-03-18-47-02.mp4.png';
import video_353 from './m/2018-11-03-23-43-24.mp4';
import img_353 from './m/2018-11-03-23-43-24.mp4.png';
import video_354 from './m/2018-11-04-01-09-02.mp4';
import img_354 from './m/2018-11-04-01-09-02.mp4.png';
import video_355 from './m/2018-11-04-01-12-16.mp4';
import img_355 from './m/2018-11-04-01-12-16.mp4.png';
import video_356 from './m/2018-11-04-20-20-34.mp4';
import img_356 from './m/2018-11-04-20-20-34.mp4.png';
import video_357 from './m/2018-11-05-22-52-50.mp4';
import img_357 from './m/2018-11-05-22-52-50.mp4.png';
import video_358 from './m/2018-11-05-22-54-21.mp4';
import img_358 from './m/2018-11-05-22-54-21.mp4.png';
import video_359 from './m/2018-11-05-23-49-20.mp4';
import img_359 from './m/2018-11-05-23-49-20.mp4.png';
import video_360 from './m/2018-11-07-22-02-45.mp4';
import img_360 from './m/2018-11-07-22-02-45.mp4.png';
import video_361 from './m/2018-11-08-18-13-12.mp4';
import img_361 from './m/2018-11-08-18-13-12.mp4.png';
import video_362 from './m/2018-11-08-18-13-41.mp4';
import img_362 from './m/2018-11-08-18-13-41.mp4.png';
import video_363 from './m/2018-11-08-21-13-39.mp4';
import img_363 from './m/2018-11-08-21-13-39.mp4.png';
import video_364 from './m/2018-11-08-21-14-39.mp4';
import img_364 from './m/2018-11-08-21-14-39.mp4.png';
import video_365 from './m/2018-11-10-18-42-30.mp4';
import img_365 from './m/2018-11-10-18-42-30.mp4.png';
import video_366 from './m/2018-11-10-18-43-49.mp4';
import img_366 from './m/2018-11-10-18-43-49.mp4.png';
import video_367 from './m/2018-11-10-18-45-52.mp4';
import img_367 from './m/2018-11-10-18-45-52.mp4.png';
import video_368 from './m/2018-11-11-18-52-41.mp4';
import img_368 from './m/2018-11-11-18-52-41.mp4.png';
import video_369 from './m/2018-11-11-19-01-36.mp4';
import img_369 from './m/2018-11-11-19-01-36.mp4.png';
import video_370 from './m/2018-11-11-19-03-18.mp4';
import img_370 from './m/2018-11-11-19-03-18.mp4.png';
import video_371 from './m/2018-11-11-19-08-43.mp4';
import img_371 from './m/2018-11-11-19-08-43.mp4.png';
import video_372 from './m/2018-11-11-19-12-43.mp4';
import img_372 from './m/2018-11-11-19-12-43.mp4.png';
import video_373 from './m/2018-11-11-19-16-39.mp4';
import img_373 from './m/2018-11-11-19-16-39.mp4.png';
import video_374 from './m/2018-11-12-00-22-44.mp4';
import img_374 from './m/2018-11-12-00-22-44.mp4.png';
import video_375 from './m/2018-11-12-17-23-03.mp4';
import img_375 from './m/2018-11-12-17-23-03.mp4.png';
import video_376 from './m/2018-11-12-17-24-07.mp4';
import img_376 from './m/2018-11-12-17-24-07.mp4.png';
import video_377 from './m/2018-11-12-17-25-41.mp4';
import img_377 from './m/2018-11-12-17-25-41.mp4.png';
import video_378 from './m/2018-11-12-17-35-06.mp4';
import img_378 from './m/2018-11-12-17-35-06.mp4.png';
import video_379 from './m/2018-11-12-17-57-47.mp4';
import img_379 from './m/2018-11-12-17-57-47.mp4.png';
import video_380 from './m/2018-11-12-18-01-17.mp4';
import img_380 from './m/2018-11-12-18-01-17.mp4.png';
import video_381 from './m/2018-11-12-19-10-42.mp4';
import img_381 from './m/2018-11-12-19-10-42.mp4.png';
import video_382 from './m/2018-11-12-19-49-19.mp4';
import img_382 from './m/2018-11-12-19-49-19.mp4.png';
import video_383 from './m/2018-11-15-14-15-10.mp4';
import img_383 from './m/2018-11-15-14-15-10.mp4.png';
import video_384 from './m/2018-11-17-23-08-36.mp4';
import img_384 from './m/2018-11-17-23-08-36.mp4.png';
import video_385 from './m/2018-11-17-23-18-58.mp4';
import img_385 from './m/2018-11-17-23-18-58.mp4.png';
import video_386 from './m/2018-11-17-23-29-35.mp4';
import img_386 from './m/2018-11-17-23-29-35.mp4.png';
import video_387 from './m/2018-11-19-23-05-12.mp4';
import img_387 from './m/2018-11-19-23-05-12.mp4.png';
import video_388 from './m/2018-11-19-23-07-20.mp4';
import img_388 from './m/2018-11-19-23-07-20.mp4.png';
import video_389 from './m/2018-11-19-23-16-45.mp4';
import img_389 from './m/2018-11-19-23-16-45.mp4.png';
import video_390 from './m/2018-11-20-21-13-22.mp4';
import img_390 from './m/2018-11-20-21-13-22.mp4.png';
import video_391 from './m/2018-11-20-21-25-00.mp4';
import img_391 from './m/2018-11-20-21-25-00.mp4.png';
import video_392 from './m/2018-11-20-21-28-29.mp4';
import img_392 from './m/2018-11-20-21-28-29.mp4.png';
import video_393 from './m/2018-11-21-21-37-06.mp4';
import img_393 from './m/2018-11-21-21-37-06.mp4.png';
import video_394 from './m/2018-11-21-21-43-57.mp4';
import img_394 from './m/2018-11-21-21-43-57.mp4.png';
import video_395 from './m/2018-11-25-15-02-27.mp4';
import img_395 from './m/2018-11-25-15-02-27.mp4.png';
import video_396 from './m/2018-11-25-15-04-55.mp4';
import img_396 from './m/2018-11-25-15-04-55.mp4.png';
import video_397 from './m/2018-11-25-15-07-32.mp4';
import img_397 from './m/2018-11-25-15-07-32.mp4.png';

export default class V5 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'video',
      video: video_299,
      image: img_299,
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
            <div style={ { display: 'flex', justifyContent: 'center', padding: 20 } }>Oct and Nov 2018</div>
            <div style={ { display: 'flex', flexWrap: 'wrap', justifyContent: 'center' } }>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_299 }) }>
                    <img src={ img_299 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_300 }) }>
                    <img src={ img_300 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_301 }) }>
                    <img src={ img_301 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_302 }) }>
                    <img src={ img_302 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_303 }) }>
                    <img src={ img_303 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_304 }) }>
                    <img src={ img_304 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_305 }) }>
                    <img src={ img_305 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_306 }) }>
                    <img src={ img_306 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_307 }) }>
                    <img src={ img_307 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_308 }) }>
                    <img src={ img_308 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_309 }) }>
                    <img src={ img_309 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_310 }) }>
                    <img src={ img_310 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_311 }) }>
                    <img src={ img_311 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_312 }) }>
                    <img src={ img_312 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_313 }) }>
                    <img src={ img_313 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_314 }) }>
                    <img src={ img_314 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_315 }) }>
                    <img src={ img_315 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_316 }) }>
                    <img src={ img_316 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_317 }) }>
                    <img src={ img_317 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_318 }) }>
                    <img src={ img_318 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_319 }) }>
                    <img src={ img_319 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_320 }) }>
                    <img src={ img_320 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_321 }) }>
                    <img src={ img_321 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_322 }) }>
                    <img src={ img_322 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_323 }) }>
                    <img src={ img_323 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_324 }) }>
                    <img src={ img_324 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_325 }) }>
                    <img src={ img_325 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_326 }) }>
                    <img src={ img_326 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_327 }) }>
                    <img src={ img_327 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_328 }) }>
                    <img src={ img_328 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_329 }) }>
                    <img src={ img_329 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_330 }) }>
                    <img src={ img_330 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_331 }) }>
                    <img src={ img_331 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_332 }) }>
                    <img src={ img_332 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_333 }) }>
                    <img src={ img_333 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_334 }) }>
                    <img src={ img_334 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_335 }) }>
                    <img src={ img_335 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_336 }) }>
                    <img src={ img_336 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_337 }) }>
                    <img src={ img_337 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_338 }) }>
                    <img src={ img_338 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_339 }) }>
                    <img src={ img_339 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_340 }) }>
                    <img src={ img_340 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_341 }) }>
                    <img src={ img_341 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_342 }) }>
                    <img src={ img_342 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_343 }) }>
                    <img src={ img_343 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_344 }) }>
                    <img src={ img_344 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_345 }) }>
                    <img src={ img_345 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_346 }) }>
                    <img src={ img_346 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_347 }) }>
                    <img src={ img_347 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_348 }) }>
                    <img src={ img_348 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_349 }) }>
                    <img src={ img_349 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_350 }) }>
                    <img src={ img_350 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_351 }) }>
                    <img src={ img_351 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_352 }) }>
                    <img src={ img_352 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_353 }) }>
                    <img src={ img_353 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_354 }) }>
                    <img src={ img_354 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_355 }) }>
                    <img src={ img_355 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_356 }) }>
                    <img src={ img_356 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_357 }) }>
                    <img src={ img_357 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_358 }) }>
                    <img src={ img_358 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_359 }) }>
                    <img src={ img_359 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_360 }) }>
                    <img src={ img_360 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_361 }) }>
                    <img src={ img_361 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_362 }) }>
                    <img src={ img_362 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_363 }) }>
                    <img src={ img_363 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_364 }) }>
                    <img src={ img_364 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_365 }) }>
                    <img src={ img_365 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_366 }) }>
                    <img src={ img_366 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_367 }) }>
                    <img src={ img_367 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_368 }) }>
                    <img src={ img_368 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_369 }) }>
                    <img src={ img_369 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_370 }) }>
                    <img src={ img_370 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_371 }) }>
                    <img src={ img_371 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_372 }) }>
                    <img src={ img_372 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_373 }) }>
                    <img src={ img_373 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_374 }) }>
                    <img src={ img_374 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_375 }) }>
                    <img src={ img_375 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_376 }) }>
                    <img src={ img_376 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_377 }) }>
                    <img src={ img_377 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_378 }) }>
                    <img src={ img_378 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_379 }) }>
                    <img src={ img_379 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_380 }) }>
                    <img src={ img_380 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_381 }) }>
                    <img src={ img_381 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_382 }) }>
                    <img src={ img_382 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_383 }) }>
                    <img src={ img_383 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_384 }) }>
                    <img src={ img_384 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_385 }) }>
                    <img src={ img_385 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_386 }) }>
                    <img src={ img_386 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_387 }) }>
                    <img src={ img_387 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_388 }) }>
                    <img src={ img_388 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_389 }) }>
                    <img src={ img_389 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_390 }) }>
                    <img src={ img_390 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_391 }) }>
                    <img src={ img_391 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_392 }) }>
                    <img src={ img_392 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_393 }) }>
                    <img src={ img_393 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_394 }) }>
                    <img src={ img_394 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_395 }) }>
                    <img src={ img_395 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_396 }) }>
                    <img src={ img_396 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_397 }) }>
                    <img src={ img_397 } className={ this.state.picSizeMode } />
                </div>
            </div>
        </div>
    );
  }
}
