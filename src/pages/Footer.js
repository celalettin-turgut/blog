import React from 'react';
import { Row, Col } from 'antd';
import { FooterStyle } from '../style';

const Footer = () => {
  return (
    <FooterStyle>
      <Row className='footer'>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          Column1 dssdd s d sd s d s d s
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          Column2sdsdsdsd sd s d s d s d sd
        </Col>
      </Row>
    </FooterStyle>
  );
};

export default Footer;
