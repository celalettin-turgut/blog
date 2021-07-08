import React, { useState, useEffect } from 'react';
import { List, Button } from 'antd';
import { api } from '../api';
import { Link } from 'react-router-dom';

//const { Title, Text } = Typography;

const YaziListesi = () => {
  const [yaziListesi, setYaziListesi] = useState([]);
  useEffect(() => {
    api()
      .get('/posts')
      .then(response => setYaziListesi(response.data));
  }, []);

  return (
    <React.Fragment>
      <Button>
        <Link to='/yazi-ekle'>Yazi ekle</Link>
      </Button>
      <List
        style={{ width: '700px', margin: '5px auto' }}
        size='large'
        grid={{ gutter: 16, column: 1 }}
        bordered
        itemLayout='horizontal'
        dataSource={yaziListesi}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              title={<Link to={`/posts/${item.id}`}>{item.title}</Link>}
              description={item.created_at}
            />
          </List.Item>
        )}
      />
    </React.Fragment>
  );
};

export default YaziListesi;
