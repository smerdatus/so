import React, { Component } from 'react';
import { Player } from 'video-react';
import './App.css';
import video_154 from './m/2018-08-01-16-31-25.mp4';
import img_154 from './m/2018-08-01-16-31-25.mp4.png';
import video_155 from './m/2018-08-01-20-44-47.mp4';
import img_155 from './m/2018-08-01-20-44-47.mp4.png';
import video_156 from './m/2018-08-04-20-32-32.mp4';
import img_156 from './m/2018-08-04-20-32-32.mp4.png';
import video_157 from './m/2018-08-04-21-18-22.mp4';
import img_157 from './m/2018-08-04-21-18-22.mp4.png';
import video_158 from './m/2018-08-04-21-21-01.mp4';
import img_158 from './m/2018-08-04-21-21-01.mp4.png';
import video_159 from './m/2018-08-04-21-22-51.mp4';
import img_159 from './m/2018-08-04-21-22-51.mp4.png';
import video_160 from './m/2018-08-06-18-25-20.mp4';
import img_160 from './m/2018-08-06-18-25-20.mp4.png';
import video_161 from './m/2018-08-06-18-27-02.mp4';
import img_161 from './m/2018-08-06-18-27-02.mp4.png';
import video_162 from './m/2018-08-06-20-58-52.mp4';
import img_162 from './m/2018-08-06-20-58-52.mp4.png';
import video_163 from './m/2018-08-06-21-40-31.mp4';
import img_163 from './m/2018-08-06-21-40-31.mp4.png';
import video_164 from './m/2018-08-06-21-41-59.mp4';
import img_164 from './m/2018-08-06-21-41-59.mp4.png';
import video_165 from './m/2018-08-06-21-48-04.mp4';
import img_165 from './m/2018-08-06-21-48-04.mp4.png';
import video_166 from './m/2018-08-06-22-42-59.mp4';
import img_166 from './m/2018-08-06-22-42-59.mp4.png';
import video_167 from './m/2018-08-07-17-26-17.mp4';
import img_167 from './m/2018-08-07-17-26-17.mp4.png';
import video_168 from './m/2018-08-07-18-24-53.mp4';
import img_168 from './m/2018-08-07-18-24-53.mp4.png';
import video_169 from './m/2018-08-07-18-33-58.mp4';
import img_169 from './m/2018-08-07-18-33-58.mp4.png';
import video_170 from './m/2018-08-07-18-42-26.mp4';
import img_170 from './m/2018-08-07-18-42-26.mp4.png';
import video_171 from './m/2018-08-08-22-19-12.mp4';
import img_171 from './m/2018-08-08-22-19-12.mp4.png';
import video_172 from './m/2018-08-08-22-20-31.mp4';
import img_172 from './m/2018-08-08-22-20-31.mp4.png';
import video_173 from './m/2018-08-08-22-28-23.mp4';
import img_173 from './m/2018-08-08-22-28-23.mp4.png';
import video_174 from './m/2018-08-08-22-36-02.mp4';
import img_174 from './m/2018-08-08-22-36-02.mp4.png';
import video_175 from './m/2018-08-08-22-45-35.mp4';
import img_175 from './m/2018-08-08-22-45-35.mp4.png';
import video_176 from './m/2018-08-09-21-26-36.mp4';
import img_176 from './m/2018-08-09-21-26-36.mp4.png';
import video_177 from './m/2018-08-09-21-27-54.mp4';
import img_177 from './m/2018-08-09-21-27-54.mp4.png';
import video_178 from './m/2018-08-09-21-29-01.mp4';
import img_178 from './m/2018-08-09-21-29-01.mp4.png';
import video_179 from './m/2018-08-09-21-31-12.mp4';
import img_179 from './m/2018-08-09-21-31-12.mp4.png';
import video_180 from './m/2018-08-09-21-31-58.mp4';
import img_180 from './m/2018-08-09-21-31-58.mp4.png';
import video_181 from './m/2018-08-09-21-34-58.mp4';
import img_181 from './m/2018-08-09-21-34-58.mp4.png';
import video_182 from './m/2018-08-10-19-34-56.mp4';
import img_182 from './m/2018-08-10-19-34-56.mp4.png';
import video_183 from './m/2018-08-10-19-46-34.mp4';
import img_183 from './m/2018-08-10-19-46-34.mp4.png';
import video_184 from './m/2018-08-10-20-09-50.mp4';
import img_184 from './m/2018-08-10-20-09-50.mp4.png';
import video_185 from './m/2018-08-13-17-16-05.mp4';
import img_185 from './m/2018-08-13-17-16-05.mp4.png';
import video_186 from './m/2018-08-13-17-29-03.mp4';
import img_186 from './m/2018-08-13-17-29-03.mp4.png';
import video_187 from './m/2018-08-14-20-55-28.mp4';
import img_187 from './m/2018-08-14-20-55-28.mp4.png';
import video_188 from './m/2018-08-14-20-56-06.mp4';
import img_188 from './m/2018-08-14-20-56-06.mp4.png';
import video_189 from './m/2018-08-14-20-56-41.mp4';
import img_189 from './m/2018-08-14-20-56-41.mp4.png';
import video_190 from './m/2018-08-15-21-05-49.mp4';
import img_190 from './m/2018-08-15-21-05-49.mp4.png';
import video_191 from './m/2018-08-15-21-07-08.mp4';
import img_191 from './m/2018-08-15-21-07-08.mp4.png';
import video_192 from './m/2018-08-15-21-34-06.mp4';
import img_192 from './m/2018-08-15-21-34-06.mp4.png';
import video_193 from './m/2018-08-15-22-05-08.mp4';
import img_193 from './m/2018-08-15-22-05-08.mp4.png';
import video_194 from './m/2018-08-17-20-22-00.mp4';
import img_194 from './m/2018-08-17-20-22-00.mp4.png';
import video_195 from './m/2018-08-17-20-23-48.mp4';
import img_195 from './m/2018-08-17-20-23-48.mp4.png';
import video_196 from './m/2018-08-17-20-25-13.mp4';
import img_196 from './m/2018-08-17-20-25-13.mp4.png';
import video_197 from './m/2018-08-17-20-26-32.mp4';
import img_197 from './m/2018-08-17-20-26-32.mp4.png';
import video_198 from './m/2018-08-17-20-27-48.mp4';
import img_198 from './m/2018-08-17-20-27-48.mp4.png';
import video_199 from './m/2018-08-19-20-15-10.mp4';
import img_199 from './m/2018-08-19-20-15-10.mp4.png';
import video_200 from './m/2018-08-23-18-58-36.mp4';
import img_200 from './m/2018-08-23-18-58-36.mp4.png';
import video_201 from './m/2018-08-25-00-57-06.mp4';
import img_201 from './m/2018-08-25-00-57-06.mp4.png';
import video_202 from './m/2018-08-25-20-46-22.mp4';
import img_202 from './m/2018-08-25-20-46-22.mp4.png';
import video_203 from './m/2018-08-25-21-09-08.mp4';
import img_203 from './m/2018-08-25-21-09-08.mp4.png';
import video_204 from './m/2018-08-25-21-20-03.mp4';
import img_204 from './m/2018-08-25-21-20-03.mp4.png';
import video_205 from './m/2018-08-25-21-44-24.mp4';
import img_205 from './m/2018-08-25-21-44-24.mp4.png';
import video_206 from './m/2018-08-25-21-53-11.mp4';
import img_206 from './m/2018-08-25-21-53-11.mp4.png';
import video_207 from './m/2018-08-28-18-53-15.mp4';
import img_207 from './m/2018-08-28-18-53-15.mp4.png';
import video_208 from './m/2018-08-28-19-10-00.mp4';
import img_208 from './m/2018-08-28-19-10-00.mp4.png';
import video_209 from './m/2018-08-28-19-29-43.mp4';
import img_209 from './m/2018-08-28-19-29-43.mp4.png';
import video_210 from './m/2018-08-29-00-21-38.mp4';
import img_210 from './m/2018-08-29-00-21-38.mp4.png';
import video_211 from './m/2018-08-29-21-06-49.mp4';
import img_211 from './m/2018-08-29-21-06-49.mp4.png';
import video_212 from './m/2018-08-29-21-09-45.mp4';
import img_212 from './m/2018-08-29-21-09-45.mp4.png';
import video_213 from './m/2018-08-29-21-13-43.mp4';
import img_213 from './m/2018-08-29-21-13-43.mp4.png';
import video_214 from './m/2018-08-30-19-32-54.mp4';
import img_214 from './m/2018-08-30-19-32-54.mp4.png';
import video_215 from './m/2018-08-30-19-52-23.mp4';
import img_215 from './m/2018-08-30-19-52-23.mp4.png';
import video_216 from './m/2018-08-30-20-33-20.mp4';
import img_216 from './m/2018-08-30-20-33-20.mp4.png';
import video_217 from './m/2018-08-30-20-54-43.mp4';
import img_217 from './m/2018-08-30-20-54-43.mp4.png';
import video_218 from './m/2018-08-31-02-04-07.mp4';
import img_218 from './m/2018-08-31-02-04-07.mp4.png';
import video_219 from './m/2018-08-31-02-23-29.mp4';
import img_219 from './m/2018-08-31-02-23-29.mp4.png';
import video_220 from './m/2018-08-31-02-44-37.mp4';
import img_220 from './m/2018-08-31-02-44-37.mp4.png';

export default class V3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'video',
      video: video_154,
      image: img_154,
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
            <div style={ { display: 'flex', justifyContent: 'center', padding: 20 } }>August 2018</div>
            <div style={ { display: 'flex', flexWrap: 'wrap', justifyContent: 'center' } }>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_154 }) }>
                    <img src={ img_154 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_155 }) }>
                    <img src={ img_155 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_156 }) }>
                    <img src={ img_156 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_157 }) }>
                    <img src={ img_157 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_158 }) }>
                    <img src={ img_158 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_159 }) }>
                    <img src={ img_159 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_160 }) }>
                    <img src={ img_160 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_161 }) }>
                    <img src={ img_161 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_162 }) }>
                    <img src={ img_162 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_163 }) }>
                    <img src={ img_163 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_164 }) }>
                    <img src={ img_164 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_165 }) }>
                    <img src={ img_165 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_166 }) }>
                    <img src={ img_166 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_167 }) }>
                    <img src={ img_167 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_168 }) }>
                    <img src={ img_168 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_169 }) }>
                    <img src={ img_169 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_170 }) }>
                    <img src={ img_170 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_171 }) }>
                    <img src={ img_171 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_172 }) }>
                    <img src={ img_172 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_173 }) }>
                    <img src={ img_173 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_174 }) }>
                    <img src={ img_174 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_175 }) }>
                    <img src={ img_175 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_176 }) }>
                    <img src={ img_176 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_177 }) }>
                    <img src={ img_177 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_178 }) }>
                    <img src={ img_178 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_179 }) }>
                    <img src={ img_179 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_180 }) }>
                    <img src={ img_180 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_181 }) }>
                    <img src={ img_181 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_182 }) }>
                    <img src={ img_182 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_183 }) }>
                    <img src={ img_183 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_184 }) }>
                    <img src={ img_184 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_185 }) }>
                    <img src={ img_185 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_186 }) }>
                    <img src={ img_186 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_187 }) }>
                    <img src={ img_187 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_188 }) }>
                    <img src={ img_188 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_189 }) }>
                    <img src={ img_189 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_190 }) }>
                    <img src={ img_190 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_191 }) }>
                    <img src={ img_191 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_192 }) }>
                    <img src={ img_192 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_193 }) }>
                    <img src={ img_193 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_194 }) }>
                    <img src={ img_194 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_195 }) }>
                    <img src={ img_195 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_196 }) }>
                    <img src={ img_196 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_197 }) }>
                    <img src={ img_197 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_198 }) }>
                    <img src={ img_198 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_199 }) }>
                    <img src={ img_199 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_200 }) }>
                    <img src={ img_200 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_201 }) }>
                    <img src={ img_201 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_202 }) }>
                    <img src={ img_202 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_203 }) }>
                    <img src={ img_203 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_204 }) }>
                    <img src={ img_204 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_205 }) }>
                    <img src={ img_205 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_206 }) }>
                    <img src={ img_206 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_207 }) }>
                    <img src={ img_207 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_208 }) }>
                    <img src={ img_208 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_209 }) }>
                    <img src={ img_209 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_210 }) }>
                    <img src={ img_210 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_211 }) }>
                    <img src={ img_211 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_212 }) }>
                    <img src={ img_212 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_213 }) }>
                    <img src={ img_213 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_214 }) }>
                    <img src={ img_214 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_215 }) }>
                    <img src={ img_215 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_216 }) }>
                    <img src={ img_216 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_217 }) }>
                    <img src={ img_217 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_218 }) }>
                    <img src={ img_218 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_219 }) }>
                    <img src={ img_219 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_220 }) }>
                    <img src={ img_220 } className={ this.state.picSizeMode } />
                </div>
            </div>
        </div>
    );
  }
}
