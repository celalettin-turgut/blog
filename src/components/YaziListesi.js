import React, { useState, useEffect } from 'react';
import { List } from 'antd';
import axios from 'axios';
import { Link } from 'react-router-dom';

//const { Title, Text } = Typography;

const YaziListesi = () => {
  const [yaziListesi, setYaziListesi] = useState([]);
  useEffect(() => {
    axios
      .get('https://react-yazi-yorum.herokuapp.com/posts')
      .then(response => setYaziListesi(response.data));
  }, []);

  return (
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
    // <div className='yazi-listesi' style={{ weight: '500px' }}>
    //   {yaziListesi.map(post => {
    //     return (
    //       <div key={post.id}>
    //         <Link to={`/posts/${post.id}`}>
    //           <Title level={4}>{post.title}</Title>
    //         </Link>
    //         <Text>{post.created_at}</Text>
    //       </div>
    //     );
    //   })}
    // </div>
  );
};

export default YaziListesi;
