import React from 'react';
import './App.css';
import AppStyle from './style';
import { Layout } from 'antd';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import YaziListesi from './components/YaziListesi';
import YaziDetayi from './components/YaziDetayi';
import Footer from './pages/Footer';
import Header from './pages/Header';
import YaziEkle from './components/YaziEkle';
import YaziDuzenle from './components/YaziDuzenle';

const { Sider, Content } = Layout;
const App = () => {
  return (
    <Router>
      <AppStyle>
        <Layout className='siteContainer'>
          <Header />

          <Content style={{ display: 'flex' }}>
            <Route path='/' exact component={YaziListesi} />
            <Route path='/posts/:id' exact component={YaziDetayi} />
            <Route path='/yazi-ekle' component={YaziEkle} />
            <Route path='/posts/:id/edit' component={YaziDuzenle} />
          </Content>
        </Layout>
      </AppStyle>
      <Footer />
    </Router>
  );
};

export default App;
