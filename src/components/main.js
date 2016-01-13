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

//let bg_big = require('../images/bg_big.jpg');
let bg_logo_big = require('../images/bg_logo_big.png');
let btn_download_normal = require('../images/btn_download_normal.png');
let logo = require('../images/logo_small.png');
//let cn_normal = require('../images/language_china_normal.png');
let cn_selected = require('../images/language_china_selected.png');
let en_normal = require('../images/language_en_normal.png');
//let en_selected = require('../images/language_en_selected.png');

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

i18next.init({
  lng: 'zh',
  resources: {
    en: {
      translation: {
        'key': 'hello world',
        'home': 'Home',
        'about': 'About',
        'download': 'Download',
        'contact_us': 'Contact us',
        'sub_title': '',
        'come_on_no_give_up': 'Come on!Don\'t give up!'
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
  render() {
    const bg_image_url = '../images/bg_big.jpg';
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
          <Nav pullRight>
            <NavItem eventKey={1} href='#'><img src={cn_selected}/></NavItem>
            <NavItem eventKey={2} href='#'><img src={en_normal}/></NavItem>
          </Nav>
        </Navbar>
        <Grid fluid={true} style={{paddingRight:0,paddingLeft:0}}>
          <div
            style={{backgroundImage:'url('+bg_image_url+')',backgroundRepeat:'no-repeat',backgroundSize:'100% 100%'}}>
            <Row>
              <Col md={4} mdOffset={4}>
                <img src={bg_logo_big} style={{marginTop:'160px',marginBottom:'160px',width:'100%',height:'100%'}}/>
              </Col>
            </Row>
            <Row>
              <Col md={4} mdOffset={4}>
                <text
                  style={{color:'white',fontSize:'20px',letterSpacing:'4px',paddingLeft:'80px',paddingRight:'80px'}}>{i18next.t('sub_title')}</text>
              </Col>
            </Row>
            <Row>
              <Col md={4} mdOffset={4}><img src={btn_download_normal}
                                            style={{width:'100%',height:'100%',marginTop:'40px',marginBottom:'60px',paddingLeft:'120px',paddingRight:'120px'}}/></Col>
            </Row>
          </div>
        </Grid>
        <Grid>
          <Row>
            <Col md={4} mdOffset={4}>
              <div style={{marginTop:'40px',marginBottom:'60px'}}>
                <img src={x} style={{width:'20px',height:'20px'}}/>
                <text
                  style={{fontSize:'20px',letterSpacing:'4px',margin:'40px'}}>{i18next.t('come_on_no_give_up')}</text>
                <img src={x} style={{width:'20px',height:'20px'}}/>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={8} mdOffset={2}>
              <div style={{paddingTop:'100px',paddingBottom:'100px',padding:'60px'}}>
                <img src={a}/>
                <img src={b}/>
                <img src={c}/>
                <img src={d}/>
                <img src={e}/>
                <img src={f}/>
              </div>
            </Col>
          </Row>
        </Grid>
        <Grid fluid={true} style={{paddingRight:0,paddingLeft:0}}>
          <div
            style={{backgroundColor:'black',height:'620px'}}>
            <Row>
              <Col md={8} mdOffset={2}>
                <img src={bg_download}/>
              </Col>
            </Row>
            <Row>
              <Col md={4} mdOffset={4}><img src={btn_download_normal}
                                            style={{width:'100%',height:'100%',marginTop:'70px',marginBottom:'70px',paddingLeft:'120px',paddingRight:'120px'}}/>
              </Col>
            </Row>
          </div>
          <Row>
            <Col md={8} mdOffset={2}>
              <img src={bg_logo} style={{marginTop:'70px',marginBottom:'70px'}}/>
            </Col>
          </Row>

          <div
            style={{backgroundColor:'black',height:'300px'}}>
            <Row>
              <Col md={6} mdOffset={3}>
                <div style={{paddingTop:'100px',paddingBottom:'100px',paddingLeft:'80px',paddingRight:'80px'}}>
                  <img src={footer_ico_dribbble} style={{margin:'30px'}}/>
                  <img src={footer_ico_github} style={{margin:'30px'}}/>
                  <img src={footer_ico_mail} style={{margin:'30px'}}/>
                  <img src={footer_ico_weibo} style={{margin:'30px'}}/>
                  <img src={footer_ico_zhifubao} style={{margin:'30px'}}/>
                </div>
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
