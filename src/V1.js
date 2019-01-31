import React, { Component } from 'react';
import { Player } from 'video-react';
import './App.css';
import video_0 from './m/2017-01-26 07-o.mp4';
import img_0 from './m/2017-01-26 07-o.mp4.png';
import video_1 from './m/2017-08-05 01-WIfph_o.mp4';
import img_1 from './m/2017-08-05 01-WIfph_o.mp4.png';
import video_2 from './m/2017-08-05 01-fEKbD_o.mp4';
import img_2 from './m/2017-08-05 01-fEKbD_o.mp4.png';
import video_3 from './m/2017-08-09 03-ABPlE_o.mp4';
import img_3 from './m/2017-08-09 03-ABPlE_o.mp4.png';
import video_4 from './m/2017-08-15 04-SMKZi_o.mp4';
import img_4 from './m/2017-08-15 04-SMKZi_o.mp4.png';
import video_5 from './m/2017-09-24 23-lWKNs_o.mp4';
import img_5 from './m/2017-09-24 23-lWKNs_o.mp4.png';
import video_6 from './m/2017-09-27 04-YVKAD_o.mp4';
import img_6 from './m/2017-09-27 04-YVKAD_o.mp4.png';
import video_7 from './m/2017-10-08 07-gAiFu_o.mp4';
import img_7 from './m/2017-10-08 07-gAiFu_o.mp4.png';
import video_8 from './m/2017-12-09 07-QSneS_o.mp4';
import img_8 from './m/2017-12-09 07-QSneS_o.mp4.png';
import video_9 from './m/2017-12-18 05-MnNcF_o.mp4';
import img_9 from './m/2017-12-18 05-MnNcF_o.mp4.png';
import video_10 from './m/2017-12-19 07-PPDnb_o.mp4';
import img_10 from './m/2017-12-19 07-PPDnb_o.mp4.png';
import video_11 from './m/2017-12-27 14-sDtzZ_o.mp4';
import img_11 from './m/2017-12-27 14-sDtzZ_o.mp4.png';
import video_12 from './m/2018-01-02 11-Hzouy_o.mp4';
import img_12 from './m/2018-01-02 11-Hzouy_o.mp4.png';
import video_13 from './m/2018-01-02 11-KYlJE_o.mp4';
import img_13 from './m/2018-01-02 11-KYlJE_o.mp4.png';
import video_14 from './m/2018-01-02 11-XqZOD_o.mp4';
import img_14 from './m/2018-01-02 11-XqZOD_o.mp4.png';
import video_15 from './m/2018-01-02 11-jIriY_o.mp4';
import img_15 from './m/2018-01-02 11-jIriY_o.mp4.png';
import video_16 from './m/2018-01-04 12-PVemw_o.mp4';
import img_16 from './m/2018-01-04 12-PVemw_o.mp4.png';
import video_17 from './m/2018-01-10 07-hkwHv_o.mp4';
import img_17 from './m/2018-01-10 07-hkwHv_o.mp4.png';
import video_18 from './m/2018-01-23 06-zSPaVg_o.mp4';
import img_18 from './m/2018-01-23 06-zSPaVg_o.mp4.png';
import video_19 from './m/2018-02-02 03-JUtEgE_o.mp4';
import img_19 from './m/2018-02-02 03-JUtEgE_o.mp4.png';
import video_20 from './m/2018-02-02 03-cakXka_o.mp4';
import img_20 from './m/2018-02-02 03-cakXka_o.mp4.png';
import video_21 from './m/2018-02-02 04-AIPdSY_o.mp4';
import img_21 from './m/2018-02-02 04-AIPdSY_o.mp4.png';
import video_22 from './m/2018-02-02 04-wCtDmC_o.mp4';
import img_22 from './m/2018-02-02 04-wCtDmC_o.mp4.png';
import video_23 from './m/2018-02-06 10-mUiqRs_o.mp4';
import img_23 from './m/2018-02-06 10-mUiqRs_o.mp4.png';
import video_24 from './m/2018-02-18 04-gZVkzE_o.mp4';
import img_24 from './m/2018-02-18 04-gZVkzE_o.mp4.png';
import video_25 from './m/2018-02-19 02-jgSuyw_o.mp4';
import img_25 from './m/2018-02-19 02-jgSuyw_o.mp4.png';
import video_26 from './m/2018-02-19 03-kAGiSx_o.mp4';
import img_26 from './m/2018-02-19 03-kAGiSx_o.mp4.png';
import video_27 from './m/2018-02-21 06-qzLwAi_o.mp4';
import img_27 from './m/2018-02-21 06-qzLwAi_o.mp4.png';
import video_28 from './m/2018-02-21 06-vtQazQ_o.mp4';
import img_28 from './m/2018-02-21 06-vtQazQ_o.mp4.png';
import video_29 from './m/2018-02-21 07-LkcFmH_o.mp4';
import img_29 from './m/2018-02-21 07-LkcFmH_o.mp4.png';
import video_30 from './m/2018-02-21 07-iROqKn_o.mp4';
import img_30 from './m/2018-02-21 07-iROqKn_o.mp4.png';
import video_31 from './m/2018-02-21 10-onqhuc_o.mp4';
import img_31 from './m/2018-02-21 10-onqhuc_o.mp4.png';
import video_32 from './m/2018-02-23 06-tJfBON_o.mp4';
import img_32 from './m/2018-02-23 06-tJfBON_o.mp4.png';
import video_33 from './m/2018-02-26 05-DxLMMN_o.mp4';
import img_33 from './m/2018-02-26 05-DxLMMN_o.mp4.png';
import video_34 from './m/2018-02-26 05-ofASFt_o.mp4';
import img_34 from './m/2018-02-26 05-ofASFt_o.mp4.png';
import video_35 from './m/2018-02-26 05-pNfwqw_o.mp4';
import img_35 from './m/2018-02-26 05-pNfwqw_o.mp4.png';
import video_36 from './m/2018-02-26 05-sVbeNP_o.mp4';
import img_36 from './m/2018-02-26 05-sVbeNP_o.mp4.png';
import video_37 from './m/2018-02-26 05-tCvQRH_o.mp4';
import img_37 from './m/2018-02-26 05-tCvQRH_o.mp4.png';
import video_38 from './m/2018-02-26 05-vjjBzf_o.mp4';
import img_38 from './m/2018-02-26 05-vjjBzf_o.mp4.png';
import video_39 from './m/2018-02-26 07-fXIwTC_o.mp4';
import img_39 from './m/2018-02-26 07-fXIwTC_o.mp4.png';
import video_40 from './m/2018-03-03 10-yLVtzB_o.mp4';
import img_40 from './m/2018-03-03 10-yLVtzB_o.mp4.png';
import video_41 from './m/2018-03-09 08-SsJoYV_o.mp4';
import img_41 from './m/2018-03-09 08-SsJoYV_o.mp4.png';
import video_42 from './m/2018-03-09 08-nfxSPn_o.mp4';
import img_42 from './m/2018-03-09 08-nfxSPn_o.mp4.png';
import video_43 from './m/2018-03-09 08-uuKoea_o.mp4';
import img_43 from './m/2018-03-09 08-uuKoea_o.mp4.png';
import video_44 from './m/2018-03-09 09-ROBGdn_o.mp4';
import img_44 from './m/2018-03-09 09-ROBGdn_o.mp4.png';
import video_45 from './m/2018-03-11 06-TIXmpn_o.mp4';
import img_45 from './m/2018-03-11 06-TIXmpn_o.mp4.png';
import video_46 from './m/2018-03-11 06-mjgUbt_o.mp4';
import img_46 from './m/2018-03-11 06-mjgUbt_o.mp4.png';
import video_47 from './m/2018-03-21 05-TIVWXn_o.mp4';
import img_47 from './m/2018-03-21 05-TIVWXn_o.mp4.png';
import video_48 from './m/2018-03-21 05-wLlpkG_o.mp4';
import img_48 from './m/2018-03-21 05-wLlpkG_o.mp4.png';
import video_49 from './m/2018-03-28 04-isiSSR_o.mp4';
import img_49 from './m/2018-03-28 04-isiSSR_o.mp4.png';
import video_50 from './m/2018-03-28 04-ueeIBX_o.mp4';
import img_50 from './m/2018-03-28 04-ueeIBX_o.mp4.png';
import video_51 from './m/2018-03-28 05-OtFSgg_o.mp4';
import img_51 from './m/2018-03-28 05-OtFSgg_o.mp4.png';
import video_52 from './m/2018-03-28 05-Tflcgo_o.mp4';
import img_52 from './m/2018-03-28 05-Tflcgo_o.mp4.png';
import video_53 from './m/2018-03-28 05-YmZMKX_o.mp4';
import img_53 from './m/2018-03-28 05-YmZMKX_o.mp4.png';
import video_54 from './m/2018-03-28 05-mEVmvf_o.mp4';
import img_54 from './m/2018-03-28 05-mEVmvf_o.mp4.png';
import video_55 from './m/2018-03-29 00-hSRWSJ_o.mp4';
import img_55 from './m/2018-03-29 00-hSRWSJ_o.mp4.png';
import video_56 from './m/2018-03-29 07-SavtYq_o.mp4';
import img_56 from './m/2018-03-29 07-SavtYq_o.mp4.png';
import video_57 from './m/2018-03-29 23-hDSrvq_o.mp4';
import img_57 from './m/2018-03-29 23-hDSrvq_o.mp4.png';
import video_58 from './m/2018-03-31 08-XLyMon_o.mp4';
import img_58 from './m/2018-03-31 08-XLyMon_o.mp4.png';
import video_59 from './m/2018-03-31 08-ZtftpT_o.mp4';
import img_59 from './m/2018-03-31 08-ZtftpT_o.mp4.png';
import video_60 from './m/2018-04-02 01-TwlMlJ_o.mp4';
import img_60 from './m/2018-04-02 01-TwlMlJ_o.mp4.png';
import video_61 from './m/2018-04-02 08-GeUUZF_o.mp4';
import img_61 from './m/2018-04-02 08-GeUUZF_o.mp4.png';
import video_62 from './m/2018-04-02 09-LNpxnY_o.mp4';
import img_62 from './m/2018-04-02 09-LNpxnY_o.mp4.png';
import video_63 from './m/2018-04-02 10-Fdzbnd_o.mp4';
import img_63 from './m/2018-04-02 10-Fdzbnd_o.mp4.png';
import video_64 from './m/2018-04-05 08-CcZmbs_o.mp4';
import img_64 from './m/2018-04-05 08-CcZmbs_o.mp4.png';
import video_65 from './m/2018-04-15 01-JzUVSp_o.mp4';
import img_65 from './m/2018-04-15 01-JzUVSp_o.mp4.png';
import video_66 from './m/2018-04-15 03-LGfsnu_o.mp4';
import img_66 from './m/2018-04-15 03-LGfsnu_o.mp4.png';
import video_67 from './m/2018-04-15 06-JMtnMQ_o.mp4';
import img_67 from './m/2018-04-15 06-JMtnMQ_o.mp4.png';
import video_68 from './m/2018-04-15 06-WPfdCS_o.mp4';
import img_68 from './m/2018-04-15 06-WPfdCS_o.mp4.png';
import video_69 from './m/2018-04-17 04-CpHJhI_o.mp4';
import img_69 from './m/2018-04-17 04-CpHJhI_o.mp4.png';
import video_70 from './m/2018-04-17 06-nYfJfH_o.mp4';
import img_70 from './m/2018-04-17 06-nYfJfH_o.mp4.png';
import video_71 from './m/2018-04-25 10-SUJeZy_o.mp4';
import img_71 from './m/2018-04-25 10-SUJeZy_o.mp4.png';
import video_72 from './m/2018-04-25 10-eKWUKd_o.mp4';
import img_72 from './m/2018-04-25 10-eKWUKd_o.mp4.png';
import video_73 from './m/2018-04-25 10-jHCWnL_o.mp4';
import img_73 from './m/2018-04-25 10-jHCWnL_o.mp4.png';
import video_74 from './m/2018-04-25 10-nFmxew_o.mp4';
import img_74 from './m/2018-04-25 10-nFmxew_o.mp4.png';
import video_75 from './m/2018-04-25 10-xBHwgH_o.mp4';
import img_75 from './m/2018-04-25 10-xBHwgH_o.mp4.png';
import video_76 from './m/2018-04-25 10-xTcvTK_o.mp4';
import img_76 from './m/2018-04-25 10-xTcvTK_o.mp4.png';
import video_77 from './m/2018-04-26 04-ViOUbC_o.mp4';
import img_77 from './m/2018-04-26 04-ViOUbC_o.mp4.png';
import video_78 from './m/2018-05-05 07-CIdPDB_o.mp4';
import img_78 from './m/2018-05-05 07-CIdPDB_o.mp4.png';
import video_79 from './m/2018-05-05 07-YGPYwH_o.mp4';
import img_79 from './m/2018-05-05 07-YGPYwH_o.mp4.png';
import video_80 from './m/2018-05-05 07-bkdfgQ_o.mp4';
import img_80 from './m/2018-05-05 07-bkdfgQ_o.mp4.png';
import video_81 from './m/2018-05-06 06-ATGWdW_o.mp4';
import img_81 from './m/2018-05-06 06-ATGWdW_o.mp4.png';
import video_82 from './m/2018-05-06 06-cLUMxz_o.mp4';
import img_82 from './m/2018-05-06 06-cLUMxz_o.mp4.png';
import video_83 from './m/2018-05-06 06-rzDfaW_o.mp4';
import img_83 from './m/2018-05-06 06-rzDfaW_o.mp4.png';
import video_84 from './m/2018-05-06 07-KWIBYN_o.mp4';
import img_84 from './m/2018-05-06 07-KWIBYN_o.mp4.png';
import video_85 from './m/2018-05-07 01-TspHUF_o.mp4';
import img_85 from './m/2018-05-07 01-TspHUF_o.mp4.png';
import video_86 from './m/2018-05-07 01-xNgQuk_o.mp4';
import img_86 from './m/2018-05-07 01-xNgQuk_o.mp4.png';
import video_87 from './m/2018-05-07 07-SUlaFP_o.mp4';
import img_87 from './m/2018-05-07 07-SUlaFP_o.mp4.png';
import video_88 from './m/2018-05-09 03-RdAYog_o.mp4';
import img_88 from './m/2018-05-09 03-RdAYog_o.mp4.png';
import video_89 from './m/2018-05-10 03-BAkZpo_o.mp4';
import img_89 from './m/2018-05-10 03-BAkZpo_o.mp4.png';
import video_90 from './m/2018-05-10 03-CGGtdI_o.mp4';
import img_90 from './m/2018-05-10 03-CGGtdI_o.mp4.png';
import video_91 from './m/2018-05-14 00-DAKlQi_o.mp4';
import img_91 from './m/2018-05-14 00-DAKlQi_o.mp4.png';
import video_92 from './m/2018-05-14 00-vBsJmD_o.mp4';
import img_92 from './m/2018-05-14 00-vBsJmD_o.mp4.png';
import video_93 from './m/2018-05-15 09-CgdQIx_o.mp4';
import img_93 from './m/2018-05-15 09-CgdQIx_o.mp4.png';

export default class V1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'video',
      video: video_0,
      image: img_0,
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
            <div style={ { display: 'flex', justifyContent: 'center', padding: 20 } }>Jan 26, 2017 to May 15, 2018</div>
            <div style={ { display: 'flex', flexWrap: 'wrap', justifyContent: 'center' } }>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_0 }) }>
                    <img src={ img_0 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_1 }) }>
                    <img src={ img_1 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_2 }) }>
                    <img src={ img_2 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_3 }) }>
                    <img src={ img_3 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_4 }) }>
                    <img src={ img_4 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_5 }) }>
                    <img src={ img_5 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_6 }) }>
                    <img src={ img_6 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_7 }) }>
                    <img src={ img_7 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_8 }) }>
                    <img src={ img_8 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_9 }) }>
                    <img src={ img_9 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_10 }) }>
                    <img src={ img_10 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_11 }) }>
                    <img src={ img_11 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_12 }) }>
                    <img src={ img_12 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_13 }) }>
                    <img src={ img_13 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_14 }) }>
                    <img src={ img_14 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_15 }) }>
                    <img src={ img_15 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_16 }) }>
                    <img src={ img_16 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_17 }) }>
                    <img src={ img_17 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_18 }) }>
                    <img src={ img_18 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_19 }) }>
                    <img src={ img_19 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_20 }) }>
                    <img src={ img_20 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_21 }) }>
                    <img src={ img_21 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_22 }) }>
                    <img src={ img_22 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_23 }) }>
                    <img src={ img_23 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_24 }) }>
                    <img src={ img_24 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_25 }) }>
                    <img src={ img_25 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_26 }) }>
                    <img src={ img_26 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_27 }) }>
                    <img src={ img_27 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_28 }) }>
                    <img src={ img_28 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_29 }) }>
                    <img src={ img_29 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_30 }) }>
                    <img src={ img_30 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_31 }) }>
                    <img src={ img_31 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_32 }) }>
                    <img src={ img_32 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_33 }) }>
                    <img src={ img_33 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_34 }) }>
                    <img src={ img_34 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_35 }) }>
                    <img src={ img_35 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_36 }) }>
                    <img src={ img_36 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_37 }) }>
                    <img src={ img_37 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_38 }) }>
                    <img src={ img_38 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_39 }) }>
                    <img src={ img_39 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_40 }) }>
                    <img src={ img_40 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_41 }) }>
                    <img src={ img_41 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_42 }) }>
                    <img src={ img_42 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_43 }) }>
                    <img src={ img_43 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_44 }) }>
                    <img src={ img_44 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_45 }) }>
                    <img src={ img_45 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_46 }) }>
                    <img src={ img_46 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_47 }) }>
                    <img src={ img_47 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_48 }) }>
                    <img src={ img_48 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_49 }) }>
                    <img src={ img_49 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_50 }) }>
                    <img src={ img_50 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_51 }) }>
                    <img src={ img_51 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_52 }) }>
                    <img src={ img_52 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_53 }) }>
                    <img src={ img_53 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_54 }) }>
                    <img src={ img_54 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_55 }) }>
                    <img src={ img_55 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_56 }) }>
                    <img src={ img_56 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_57 }) }>
                    <img src={ img_57 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_58 }) }>
                    <img src={ img_58 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_59 }) }>
                    <img src={ img_59 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_60 }) }>
                    <img src={ img_60 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_61 }) }>
                    <img src={ img_61 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_62 }) }>
                    <img src={ img_62 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_63 }) }>
                    <img src={ img_63 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_64 }) }>
                    <img src={ img_64 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_65 }) }>
                    <img src={ img_65 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_66 }) }>
                    <img src={ img_66 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_67 }) }>
                    <img src={ img_67 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_68 }) }>
                    <img src={ img_68 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_69 }) }>
                    <img src={ img_69 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_70 }) }>
                    <img src={ img_70 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_71 }) }>
                    <img src={ img_71 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_72 }) }>
                    <img src={ img_72 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_73 }) }>
                    <img src={ img_73 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_74 }) }>
                    <img src={ img_74 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_75 }) }>
                    <img src={ img_75 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_76 }) }>
                    <img src={ img_76 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_77 }) }>
                    <img src={ img_77 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_78 }) }>
                    <img src={ img_78 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_79 }) }>
                    <img src={ img_79 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_80 }) }>
                    <img src={ img_80 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_81 }) }>
                    <img src={ img_81 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_82 }) }>
                    <img src={ img_82 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_83 }) }>
                    <img src={ img_83 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_84 }) }>
                    <img src={ img_84 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_85 }) }>
                    <img src={ img_85 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_86 }) }>
                    <img src={ img_86 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_87 }) }>
                    <img src={ img_87 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_88 }) }>
                    <img src={ img_88 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_89 }) }>
                    <img src={ img_89 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_90 }) }>
                    <img src={ img_90 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_91 }) }>
                    <img src={ img_91 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_92 }) }>
                    <img src={ img_92 } className={ this.state.picSizeMode } />
                </div>
                <div style={ { padding: '1vh' } } onClick={ () => this.setState({ mode: 'video', video: video_93 }) }>
                    <img src={ img_93 } className={ this.state.picSizeMode } />
                </div>
            </div>
        </div>
    );
  }
}
