import React from 'react';
import './App.css';
import AppStyle from './style';
import { Layout } from 'antd';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import YaziListesi from './components/YaziListesi';
import YaziDetayi from './components/YaziDetayi';
import Footer from './pages/Footer';
import Header from './pages/Header';
import YaziFormu from './components/YaziFormu';

const { Sider, Content } = Layout;
const App = () => {
  return (
    <Router>
      <AppStyle>
        <Layout className='siteContainer'>
          <Header />

          <Content style={{ display: 'flex' }}>
            <Route path='/' exact component={YaziListesi} />
            <Route path='/posts/:id' component={YaziDetayi} />
            <Route path='/yazi-olustur' component={YaziFormu} />
          </Content>
        </Layout>
      </AppStyle>
      <Footer />
    </Router>
  );
};

export default App;
