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
              <Col md={4} mdOffset={4}>
                <text style={{color:'white',fontSize:'20px',letterSpacing:'4px',paddingLeft:'40px',paddingRight:'40px'}}>{i18next.t('sub_title')}</text>
              </Col>
              <Col md={4} mdOffset={4}><img src={btn_download_normal} style={{width:'100%',height:'100%',marginTop:'40px',marginBottom:'60px',paddingLeft:'120px',paddingRight:'120px'}}/></Col>
            </Row>
          </div>
          <Row>
            <Col>
              <text>{i18next.t('come_on_no_give_up')}</text>
            </Col>
          </Row>
        </Grid>

      </div>
    );
  }
}

AppComponent.defaultProps = {};

export default AppComponent;
