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
  Col
} from 'react-bootstrap'
import LanguageDetector from 'i18next-browser-languagedetector/lib';

let bg_big = require('../images/bg_big.jpg');
let bg_logo_big = require('../images/bg_logo_big.png');
let btn_download_normal = require('../images/btn_download_normal.png');
let logo = require('../images/logo_small.png');
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
let bg_logo = require('../images/bg_logo.png');

let footer_ico_dribbble = require('../images/footer_ico_dribbble.png');
let footer_ico_github = require('../images/footer_ico_github.png');
let footer_ico_mail = require('../images/footer_ico_mail.png');
let footer_ico_weibo = require('../images/footer_ico_weibo.png');
let footer_ico_zhifubao = require('../images/footer_ico_zhifubao.png');

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
          'sub_title': 'Lost skills acquired strong ability', //FIXME
          'come_on_no_give_up': 'Never Stop!'
        }
      },
      zh: {
        translation: {
          'key': '你好 中国',
          'home': '首页',
          'about': '关于',
          'download': '下载',
          'contact_us': '联系我们',
          'sub_title': '用失传的技艺练就强大的生存能力',
          'come_on_no_give_up': '加油! 别放弃! '
        }
      }
    }
  });
class AppComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      lng: i18next.language
    }
  }

  selectLng(key) {
    var self = this;
    i18next.changeLanguage(key, (err, t) => {
      // resources have been loaded
      //console.log(err,t);
      self.setState({lng: key});

    });
  }

  render() {
    return (
      <div className='index'>
        <Navbar style={{marginBottom:0}}>
          <Navbar.Header>
            <Navbar.Brand>
              <img src={logo}/>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem eventKey={1} href='#'>{i18next.t('home')}</NavItem>
            <NavItem eventKey={2} href='#'>{i18next.t('about')}</NavItem>
            <NavItem eventKey={2} href='#'>{i18next.t('download')}</NavItem>
            <NavItem eventKey={2} href='#'>{i18next.t('contact_us')}</NavItem>
          </Nav>
          <Nav pullRight onSelect={this.selectLng.bind(this)}>
            <NavItem eventKey={'zh'} href='#'><img src={this.state.lng === 'zh' ? cn_selected : cn_normal}/></NavItem>
            <NavItem eventKey={'en'} href='#'><img src={this.state.lng === 'en' ? en_selected : en_normal}/></NavItem>
          </Nav>
        </Navbar>
        <Grid fluid={true} style={{paddingRight:0,paddingLeft:0}}>
          <div
            style={{backgroundImage:'url('+bg_big+')',backgroundRepeat:'no-repeat',backgroundSize:'100% 100%'}}>
            <Row>
              <Col md={4} mdOffset={4} xs={10} xsOffset={1}>
                <img src={bg_logo_big} style={{marginTop:'160px',marginBottom:'160px',width:'100%',height:'100%'}}/>
              </Col>
            </Row>
            <Row>
              <Col md={4} mdOffset={4} xs={10} xsOffset={1} style={{textAlign:'center'}}>
                <text
                  className='desc'
                  style={{color:'white'}}>{i18next.t('sub_title')}</text>
              </Col>
            </Row>
            <Row>
              <Col md={2} mdOffset={5} xs={6} xsOffset={3}><img src={btn_download_normal}
                                                                style={{width:'100%',height:'100%',marginTop:'40px',marginBottom:'60px'}}/></Col>
            </Row>
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
            <Col md={1} mdOffset={3} xs={4} xsOffset={0}>
              <img src={a}/>
            </Col>
            <Col md={1} mdOffset={0} xs={4} xsOffset={0}>
              <img src={b}/>
            </Col>
            <Col md={1} mdOffset={0} xs={4} xsOffset={0}>
              <img src={c}/>
            </Col>
            <Col md={1} mdOffset={0} xs={4} xsOffset={0}>
              <img src={d}/>
            </Col>
            <Col md={1} mdOffset={0} xs={4} xsOffset={0}>
              <img src={e}/>
            </Col>
            <Col md={1} mdOffset={0} xs={4} xsOffset={0}>
              <img src={f}/>
            </Col>
          </Row>
        </Grid>
        <Grid fluid={true} style={{paddingRight:0,paddingLeft:0}}>
          <div
            style={{backgroundColor:'black'}} className='download'>
            <Row>
              <Col md={8} mdOffset={2} xs={12} xsOffset={0}>
                <img src={bg_download} style={{width:'100%',height:'100%'}}/>
              </Col>
            </Row>
            <Row>
              <Col md={2} mdOffset={5} xs={6} xsOffset={3}><img src={btn_download_normal}
                                                                style={{width:'100%',height:'100%',marginTop:'70px',marginBottom:'70px'}}/>
              </Col>
            </Row>
          </div>
          <Row>
            <Col md={8} mdOffset={2} xs={12} xsOffset={0}>
              <img src={bg_logo} style={{width:'100%',height:'100%',marginTop:'70px',marginBottom:'70px'}}/>
            </Col>
          </Row>

          <div
            style={{backgroundColor:'black',height:'300px'}}>
            <Row>
              <Col md={1} mdOffset={4} xs={1} xsOffset={0}>
                <img src={footer_ico_dribbble} style={{marginTop:'130px',textAlign:'center'}}/>
              </Col>
              <Col md={1} mdOffset={0} xs={1} xsOffset={1}>
                <img src={footer_ico_github} style={{marginTop:'130px',textAlign:'center'}}/>
              </Col>
              <Col md={1} mdOffset={0} xs={1} xsOffset={1}>
                <img src={footer_ico_mail} style={{marginTop:'130px',textAlign:'center'}}/>
              </Col>
              <Col md={1} mdOffset={0} xs={1} xsOffset={1}>
                <img src={footer_ico_weibo} style={{marginTop:'130px',textAlign:'center'}}/>
              </Col>
              <Col md={1} mdOffset={0} xs={1} xsOffset={1}>
                <img src={footer_ico_zhifubao} style={{marginTop:'130px',textAlign:'center'}}/>
              </Col>
            </Row>
          </div>
        </Grid>
      </div>
    );
  }
}

AppComponent.defaultProps = {};

export default AppComponent;
