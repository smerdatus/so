import React, { Component } from 'react';
import { Player } from 'video-react';
import './App.css';
import video_94 from './m/2018-06-11-15-58-09.mp4';
import img_94 from './m/2018-06-11-15-58-09.mp4.png';
import video_95 from './m/2018-06-11-15-58-19.mp4';
import img_95 from './m/2018-06-11-15-58-19.mp4.png';
import video_96 from './m/2018-06-12-14-13-11.mp4';
import img_96 from './m/2018-06-12-14-13-11.mp4.png';
import video_97 from './m/2018-06-12-16-15-55.mp4';
import img_97 from './m/2018-06-12-16-15-55.mp4.png';
import video_98 from './m/2018-06-12-16-16-19.mp4';
import img_98 from './m/2018-06-12-16-16-19.mp4.png';
import video_99 from './m/2018-06-12-16-16-41.mp4';
import img_99 from './m/2018-06-12-16-16-41.mp4.png';
import video_100 from './m/2018-06-13-22-32-03.mp4';
import img_100 from './m/2018-06-13-22-32-03.mp4.png';
import video_101 from './m/2018-06-13-22-34-17.mp4';
import img_101 from './m/2018-06-13-22-34-17.mp4.png';
import video_102 from './m/2018-06-16-19-02-50.mp4';
import img_102 from './m/2018-06-16-19-02-50.mp4.png';
import video_103 from './m/2018-06-16-19-04-12.mp4';
import img_103 from './m/2018-06-16-19-04-12.mp4.png';
import video_104 from './m/2018-06-16-20-09-43.mp4';
import img_104 from './m/2018-06-16-20-09-43.mp4.png';
import video_105 from './m/2018-06-16-20-11-19.mp4';
import img_105 from './m/2018-06-16-20-11-19.mp4.png';
import video_106 from './m/2018-06-19-03-56-30.mp4';
import img_106 from './m/2018-06-19-03-56-30.mp4.png';
import video_107 from './m/2018-06-20-22-34-02.mp4';
import img_107 from './m/2018-06-20-22-34-02.mp4.png';
import video_108 from './m/2018-06-22-19-42-03.mp4';
import img_108 from './m/2018-06-22-19-42-03.mp4.png';
import video_109 from './m/2018-06-23-20-27-24.mp4';
import img_109 from './m/2018-06-23-20-27-24.mp4.png';
import video_110 from './m/2018-06-24-18-10-34.mp4';
import img_110 from './m/2018-06-24-18-10-34.mp4.png';
import video_111 from './m/2018-06-24-18-18-27.mp4';
import img_111 from './m/2018-06-24-18-18-27.mp4.png';
import video_112 from './m/2018-06-24-19-30-34.mp4';
import img_112 from './m/2018-06-24-19-30-34.mp4.png';
import video_113 from './m/2018-06-25-20-00-10.mp4';
import img_113 from './m/2018-06-25-20-00-10.mp4.png';
import video_114 from './m/2018-06-25-20-04-18.mp4';
import img_114 from './m/2018-06-25-20-04-18.mp4.png';
import video_115 from './m/2018-06-25-20-06-46.mp4';
import img_115 from './m/2018-06-25-20-06-46.mp4.png';
import video_116 from './m/2018-06-26-18-09-29.mp4';
import img_116 from './m/2018-06-26-18-09-29.mp4.png';
import video_117 from './m/2018-06-26-21-35-57.mp4';
import img_117 from './m/2018-06-26-21-35-57.mp4.png';
import video_118 from './m/2018-06-26-21-36-56.mp4';
import img_118 from './m/2018-06-26-21-36-56.mp4.png';
import video_119 from './m/2018-06-26-21-38-46.mp4';
import img_119 from './m/2018-06-26-21-38-46.mp4.png';
import video_120 from './m/2018-06-27-15-35-17.mp4';
import img_120 from './m/2018-06-27-15-35-17.mp4.png';
import video_121 from './m/2018-06-29-17-02-20.mp4';
import img_121 from './m/2018-06-29-17-02-20.mp4.png';
import video_122 from './m/2018-07-02-23-37-41.mp4';
import img_122 from './m/2018-07-02-23-37-41.mp4.png';
import video_123 from './m/2018-07-03-00-05-32.mp4';
import img_123 from './m/2018-07-03-00-05-32.mp4.png';
import video_124 from './m/2018-07-03-00-14-18.mp4';
import img_124 from './m/2018-07-03-00-14-18.mp4.png';
import video_125 from './m/2018-07-03-00-16-47.mp4';
import img_125 from './m/2018-07-03-00-16-47.mp4.png';
import video_126 from './m/2018-07-04-18-19-34.mp4';
import img_126 from './m/2018-07-04-18-19-34.mp4.png';
import video_127 from './m/2018-07-04-23-29-28.mp4';
import img_127 from './m/2018-07-04-23-29-28.mp4.png';
import video_128 from './m/2018-07-05-22-30-34.mp4';
import img_128 from './m/2018-07-05-22-30-34.mp4.png';
import video_129 from './m/2018-07-05-22-32-50.mp4';
import img_129 from './m/2018-07-05-22-32-50.mp4.png';
import video_130 from './m/2018-07-05-22-34-52.mp4';
import img_130 from './m/2018-07-05-22-34-52.mp4.png';
import video_131 from './m/2018-07-05-23-10-28.mp4';
import img_131 from './m/2018-07-05-23-10-28.mp4.png';
import video_132 from './m/2018-07-08-00-11-22.mp4';
import img_132 from './m/2018-07-08-00-11-22.mp4.png';
import video_133 from './m/2018-07-08-00-14-09.mp4';
import img_133 from './m/2018-07-08-00-14-09.mp4.png';
import video_134 from './m/2018-07-08-00-16-44.mp4';
import img_134 from './m/2018-07-08-00-16-44.mp4.png';
import video_135 from './m/2018-07-11-20-08-27.mp4';
import img_135 from './m/2018-07-11-20-08-27.mp4.png';
import video_136 from './m/2018-07-11-20-41-19.mp4';
import img_136 from './m/2018-07-11-20-41-19.mp4.png';
import video_137 from './m/2018-07-11-21-10-44.mp4';
import img_137 from './m/2018-07-11-21-10-44.mp4.png';
import video_138 from './m/2018-07-16-19-52-21.mp4';
import img_138 from './m/2018-07-16-19-52-21.mp4.png';
import video_139 from './m/2018-07-18-23-28-47.mp4';
import img_139 from './m/2018-07-18-23-28-47.mp4.png';
import video_140 from './m/2018-07-19-00-46-10.mp4';
import img_140 from './m/2018-07-19-00-46-10.mp4.png';
import video_141 from './m/2018-07-20-13-31-18.mp4';
import img_141 from './m/2018-07-20-13-31-18.mp4.png';
import video_142 from './m/2018-07-23-20-17-24.mp4';
import img_142 from './m/2018-07-23-20-17-24.mp4.png';
import video_143 from './m/2018-07-24-19-34-51.mp4';
import img_143 from './m/2018-07-24-19-34-51.mp4.png';
import video_144 from './m/2018-07-24-19-49-33.mp4';
import img_144 from './m/2018-07-24-19-49-33.mp4.png';
import video_145 from './m/2018-07-25-20-41-20.mp4';
import img_145 from './m/2018-07-25-20-41-20.mp4.png';
import video_146 from './m/2018-07-26-20-32-06.mp4';
import img_146 from './m/2018-07-26-20-32-06.mp4.png';
import video_147 from './m/2018-07-26-21-06-23.mp4';
import img_147 from './m/2018-07-26-21-06-23.mp4.png';
import video_148 from './m/2018-07-26-21-39-36.mp4';
import img_148 from './m/2018-07-26-21-39-36.mp4.png';
import video_149 from './m/2018-07-29-18-09-52.mp4';
import img_149 from './m/2018-07-29-18-09-52.mp4.png';
import video_150 from './m/2018-07-29-20-41-08.mp4';
import img_150 from './m/2018-07-29-20-41-08.mp4.png';
import video_151 from './m/2018-07-30-05-06-26.mp4';
import img_151 from './m/2018-07-30-05-06-26.mp4.png';
import video_152 from './m/2018-07-30-15-58-03.mp4';
import img_152 from './m/2018-07-30-15-58-03.mp4.png';
import video_153 from './m/2018-07-30-15-59-32.mp4';
import img_153 from './m/2018-07-30-15-59-32.mp4.png';

export default class V2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'video',
      video: video_94,
      image: img_94,
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
            <div style={ { display: 'flex', justifyContent: 'center', padding: 20 } }>Jun 11, 2018 to July 30, 2018</div>
            <div style={ { display: 'flex', flexWrap: 'wrap', justifyContent: 'center' } }>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_94 }) }>
                    <img src={ img_94 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_95 }) }>
                    <img src={ img_95 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_96 }) }>
                    <img src={ img_96 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_97 }) }>
                    <img src={ img_97 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_98 }) }>
                    <img src={ img_98 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_99 }) }>
                    <img src={ img_99 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_100 }) }>
                    <img src={ img_100 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_101 }) }>
                    <img src={ img_101 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_102 }) }>
                    <img src={ img_102 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_103 }) }>
                    <img src={ img_103 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_104 }) }>
                    <img src={ img_104 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_105 }) }>
                    <img src={ img_105 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_106 }) }>
                    <img src={ img_106 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_107 }) }>
                    <img src={ img_107 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_108 }) }>
                    <img src={ img_108 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_109 }) }>
                    <img src={ img_109 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_110 }) }>
                    <img src={ img_110 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_111 }) }>
                    <img src={ img_111 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_112 }) }>
                    <img src={ img_112 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_113 }) }>
                    <img src={ img_113 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_114 }) }>
                    <img src={ img_114 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_115 }) }>
                    <img src={ img_115 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_116 }) }>
                    <img src={ img_116 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_117 }) }>
                    <img src={ img_117 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_118 }) }>
                    <img src={ img_118 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_119 }) }>
                    <img src={ img_119 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_120 }) }>
                    <img src={ img_120 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_121 }) }>
                    <img src={ img_121 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_122 }) }>
                    <img src={ img_122 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_123 }) }>
                    <img src={ img_123 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_124 }) }>
                    <img src={ img_124 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_125 }) }>
                    <img src={ img_125 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_126 }) }>
                    <img src={ img_126 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_127 }) }>
                    <img src={ img_127 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_128 }) }>
                    <img src={ img_128 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_129 }) }>
                    <img src={ img_129 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_130 }) }>
                    <img src={ img_130 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_131 }) }>
                    <img src={ img_131 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_132 }) }>
                    <img src={ img_132 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_133 }) }>
                    <img src={ img_133 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_134 }) }>
                    <img src={ img_134 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_135 }) }>
                    <img src={ img_135 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_136 }) }>
                    <img src={ img_136 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_137 }) }>
                    <img src={ img_137 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_138 }) }>
                    <img src={ img_138 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_139 }) }>
                    <img src={ img_139 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_140 }) }>
                    <img src={ img_140 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_141 }) }>
                    <img src={ img_141 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_142 }) }>
                    <img src={ img_142 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_143 }) }>
                    <img src={ img_143 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_144 }) }>
                    <img src={ img_144 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_145 }) }>
                    <img src={ img_145 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_146 }) }>
                    <img src={ img_146 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_147 }) }>
                    <img src={ img_147 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_148 }) }>
                    <img src={ img_148 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_149 }) }>
                    <img src={ img_149 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_150 }) }>
                    <img src={ img_150 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_151 }) }>
                    <img src={ img_151 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_152 }) }>
                    <img src={ img_152 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_153 }) }>
                    <img src={ img_153 } className={ this.state.picSizeMode } />
                </div>
            </div>
        </div>
    );
  }
}
