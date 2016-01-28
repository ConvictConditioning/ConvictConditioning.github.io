require('normalize.css');
require('styles/App.css');

import React from 'react';
import i18next from 'i18next';
import {
  Navbar,
  Nav,
  NavItem,
  Grid,
  Row,
  Col,
  Modal
} from 'react-bootstrap'
import LanguageDetector from 'i18next-browser-languagedetector/lib';
var UAParser = require('user-agent-parser');

let bg_big = require('../images/bg_big.jpg');
let cn_normal = require('../images/language_china_normal.png');
let cn_selected = require('../images/language_china_selected.png');
let en_normal = require('../images/language_en_normal.png');
let en_selected = require('../images/language_en_selected.png');

let x = require('../images/x.png');
let a = require('../images/posture_a.png');
let b = require('../images/posture_b.png');
let c = require('../images/posture_c.png');
let d = require('../images/posture_d.png');
let e = require('../images/posture_e.png');
let f = require('../images/posture_f.png');

let bg_download = require('../images/bg_download.png');

let footer_ico_dribbble = require('../images/footer_ico_dribbble.png');
let footer_ico_github = require('../images/footer_ico_github.png');
let footer_ico_mail = require('../images/footer_ico_mail.png');
let footer_ico_weibo = require('../images/footer_ico_weibo.png');
let footer_ico_zhifubao = require('../images/footer_ico_zhifubao.png');
let zhifubao_donte = require('../images/zhifubao_donte.png');
let qr = require('../images/qr.png');
let apple = require('../images/apple.png');
let play = require('../images/google_play.png');
var images_zh = require('../images/zh/index');
var images_en = require('../images/en/index');
var parser = new UAParser();
parser.setUA(window.navigator.userAgent);

i18next
  .use(LanguageDetector)
  .init({
    fallbackLng: 'en',
    resources: {
      en: {
        translation: {
          'key': 'hello world',
          'home': 'Home',
          'about': 'About',
          'download': 'Download',
          'contact_us': 'Contact us',
          'sub_title': 'Convict Conditioning, Lost skills acquired strong ability', //FIXME
          'come_on_no_give_up': 'Never Stop!',
          'pushUp': 'PUSH UP',
          'deep': 'SQUAT',
          'pullUp': 'PULL UP',
          'leg': 'LEG RAISE',
          'bridge': 'BRIDGE',
          'handstand': 'HANDSTAND'
        }
      },
      zh: {
        translation: {
          'key': '你好 中国',
          'home': '首页',
          'about': '关于',
          'download': '下载',
          'contact_us': '联系我们',
          'sub_title': '《专业囚徒健身》用失传的技艺练就强大的生存能力',
          'come_on_no_give_up': '加油! 别放弃! ',
          'pushUp': '俯卧撑',
          'deep': '深蹲',
          'pullUp': '引体向上',
          'leg': '举腿',
          'bridge': '桥',
          'handstand': '倒立撑'
        }
      }
    }
  });
class AppComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      lng: i18next.language,
      showModal: false,
      showDownloadModal: false,
      images : i18next.language.startsWith('zh') ? images_zh : images_en
    }
  }

  closeDonte() {
    this.setState({showModal: false});
  }

  openDonte() {
    this.setState({showModal: true});
  }

  closeDownload() {
    this.setState({showDownloadModal: false});
  }

  openDownload() {
    this.setState({showDownloadModal: true});
  }

  download() {
    if (parser.getResult().os.name === 'iOS') {
      window.location = 'http://a.app.qq.com/o/simple.jsp?pkgname=com.prisonerfitness&g_f=991653';  //微推广
    } else if (parser.getResult().os.name === 'Android') {
      window.location = 'http://a.app.qq.com/o/simple.jsp?pkgname=com.prisonerfitness&g_f=991653';  //微推广
    } else {
      this.openDownload(); //打开 /download.html 页面进行跳转
    }
  }

  selectLng(key) {
    var self = this;
    i18next.changeLanguage(key, () => {
      // resources have been loaded
      //console.log(err,t);
      self.setState({lng: key,images:key.startsWith('zh') ? images_zh : images_en});

    });
  }

  render() {

    var downloadButton;
    if(this.state.lng.startsWith('zh')){
      downloadButton = <Row><Col md={2} mdOffset={5} xs={6} xsOffset={3}>
                        <img src={this.state.images.btn_download_normal} onClick={this.download.bind(this)}
                             style={{width:'100%',height:'100%',marginTop:'70px',marginBottom:'70px'}}/>
                      </Col></Row>
    }else{
      downloadButton =
      <Row style={{paddingTop:'70px',paddingBottom:'70px'}}>
        <Col md={2} mdOffset={4} xs={4} xsOffset={2}>
          <img src={apple} onClick={this.download.bind(this)}
               style={{width:'100%',height:'100%',}}/>
        </Col>
        <Col md={2} mdOffset={0} xs={4} xsOffset={0}>
          <img src={play} onClick={this.download.bind(this)}
               style={{width:'100%',height:'100%',}}/>
        </Col>
      </Row>

    }

    return (
      <div className='index'>
        <Navbar style={{marginBottom:0}}>
          <Navbar.Header>
            <Navbar.Brand>
              <img src={this.state.images.logo}/>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem eventKey={1} href='#home'>{i18next.t('home')}</NavItem>
            <NavItem eventKey={2} href='#about'>{i18next.t('about')}</NavItem>
            <NavItem eventKey={2} href='#download'>{i18next.t('download')}</NavItem>
            <NavItem eventKey={2} href='#about'>{i18next.t('contact_us')}</NavItem>
          </Nav>
          <Nav pullRight onSelect={this.selectLng.bind(this)}>
            <NavItem eventKey={'zh'} href='#'><img src={this.state.lng.startsWith('zh') ? cn_selected : cn_normal}/></NavItem>
            <NavItem eventKey={'en'} href='#'><img src={this.state.lng.startsWith('en') ? en_selected : en_normal}/></NavItem>
          </Nav>
        </Navbar>
        <Modal show={this.state.showModal} onHide={this.closeDonte.bind(this)} bsSize='small'>
          <Modal.Body>
            <img src={zhifubao_donte}/><br />
            <text>这是一款公益性质的App, 请我们喝杯咖啡让我们更有干劲吧!</text>
          </Modal.Body>
        </Modal>
        <Modal show={this.state.showDownloadModal} onHide={this.closeDownload.bind(this)} bsSize='small'>
          <Modal.Body style={{backgroundColor:'black'}}>
            <img src={qr}/>
          </Modal.Body>
        </Modal>
        <a id='home' />
        <Grid fluid={true} style={{paddingRight:0,paddingLeft:0}}>
          <div
            style={{backgroundImage:'url('+bg_big+')',backgroundRepeat:'no-repeat',backgroundSize:'100% 100%'}}>
            <Row>
              <Col md={4} mdOffset={4} xs={10} xsOffset={1}>
                <img src={this.state.images.bg_logo_big} style={{marginTop:'160px',marginBottom:'160px',width:'100%',height:'100%'}}/>
              </Col>
            </Row>
            <Row>
              <Col md={4} mdOffset={4} xs={10} xsOffset={1} style={{textAlign:'center'}}>
                <text
                  className='desc'
                  style={{color:'white'}}>{i18next.t('sub_title')}</text>
              </Col>
            </Row>
            {downloadButton}
          </div>
        </Grid>
        <Grid>
          <Row style={{marginTop:'40px'}}>
            <Col md={1} mdOffset={4} xs={1} xsOffset={3} style={{textAlign:'center'}}>
              <img src={x} className='x'/>
            </Col>
            <Col md={2} xs={4} style={{textAlign:'center'}}>
              <text
                className='desc'>{i18next.t('come_on_no_give_up')}</text>

            </Col>
            <Col md={1} mdOffset={0} xs={1} xsOffset={0} style={{textAlign:'center'}}>
              <img src={x} className='x'/>
            </Col>
          </Row>
          <Row className='posture'>
            <Col md={2} mdOffset={0} xs={4} xsOffset={0} className='line' style={{textAlign:'center'}}>
              <img src={a}/><br />
              <text>{i18next.t('pushUp')}</text>
            </Col>
            <Col md={2} mdOffset={0} xs={4} xsOffset={0} className='line' style={{textAlign:'center'}}>
              <img src={b}/><br />
              <text>{i18next.t('deep')}</text>
            </Col>
            <Col md={2} mdOffset={0} xs={4} xsOffset={0} className='line' style={{textAlign:'center'}}>
              <img src={c}/><br />
              <text>{i18next.t('pullUp')}</text>
            </Col>
            <Col md={2} mdOffset={0} xs={4} xsOffset={0} className='line' style={{textAlign:'center'}}>
              <img src={d}/><br />
              <text>{i18next.t('leg')}</text>
            </Col>
            <Col md={2} mdOffset={0} xs={4} xsOffset={0} className='line' style={{textAlign:'center'}}>
              <img src={e}/><br />
              <text>{i18next.t('bridge')}</text>
            </Col>
            <Col md={2} mdOffset={0} xs={4} xsOffset={0} style={{textAlign:'center'}}>
              <img src={f}/><br />
              <text>{i18next.t('handstand')}</text>
            </Col>
          </Row>

        </Grid>
        <a id='download' />
        <Grid fluid={true} style={{paddingRight:0,paddingLeft:0}}>
          <div
            style={{backgroundColor:'black'}} className='download'>
            <Row>
              <Col md={8} mdOffset={2} xs={12} xsOffset={0}>
                <img src={bg_download} style={{width:'100%',height:'100%'}}/>
              </Col>
            </Row>
              {downloadButton}
          </div>
          <a id='about' />
          <Row>
            <Col md={8} mdOffset={2} xs={12} xsOffset={0}>
              <img src={this.state.images.bg_logo} style={{width:'100%',height:'100%',marginTop:'70px',marginBottom:'70px'}}/>
            </Col>
          </Row>

          <Row style={{backgroundColor:'black',height:'300px'}} className='foot' >
            <Col md={2} mdOffset={0} xs={2} xsOffset={0}>
              <img src={footer_ico_dribbble} className='footIcon' style={{marginTop:'130px',textAlign:'center'}}/>
            </Col>
            <Col md={2} mdOffset={0} xs={2} xsOffset={0}>
              <a href='https://github.com/buhe'>
                <img src={footer_ico_github} className='footIcon' style={{marginTop:'130px',textAlign:'center'}}/></a>
            </Col>
            <Col md={2} mdOffset={0} xs={2} xsOffset={0}>
              <a href="mailto:bugu1986@126.com?subject=CC Support">
                <img src={footer_ico_mail} className='footIcon' style={{marginTop:'130px',textAlign:'center'}}/>
              </a>
            </Col>
            <Col md={2} mdOffset={0} xs={2} xsOffset={0}>
              <a href="http://weibo.com/u/5640438289">
                <img src={footer_ico_weibo} className='footIcon' style={{marginTop:'130px',textAlign:'center'}}/>
              </a>
            </Col>
            <Col md={2} mdOffset={0} xs={2} xsOffset={0}>
              <img src={footer_ico_zhifubao} className='footIcon' style={{marginTop:'130px',textAlign:'center'}}
                   onClick={this.openDonte.bind(this)}/>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

AppComponent.defaultProps = {};

export default AppComponent;
