import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Yorum from './Yorum';
//import YorumOku from './YorumOku';
//import YorumYaz from './YorumYaz';
import { Typography } from 'antd';

const { Title } = Typography;

const YaziDetayi = props => {
  const { id } = props.match.params;
  const [yaziDetayi, setYaziDetayi] = useState('');

  useEffect(() => {
    axios
      .get(`https://react-yazi-yorum.herokuapp.com/posts/${id}`)
      .then(response => setYaziDetayi(response.data))
      .catch(error => console.log(error));
  }, [id]);

  return (
    <div
      style={{
        maxWidth: '700px',
        minWidth: '380px',
        margin: '5px auto',
        border: '1px solid #d9d9d9',
        borderRadius: '2px',
        padding: '5px 15px ',
      }}
    >
      <Title>{yaziDetayi.title}</Title>
      <p>{yaziDetayi.created_at}</p>
      <p>{yaziDetayi.content}</p>
      {/* <YorumOku yorumlar={yorumlar} />
      <YorumYaz id={id} /> */}
      <Yorum id={id} />
    </div>
  );
};

export default YaziDetayi;
