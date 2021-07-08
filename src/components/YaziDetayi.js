import { api } from '../api';
import React, { useEffect, useState } from 'react';
import Yorum from './Yorum';
import { Link, useHistory } from 'react-router-dom';
import { Typography, Button } from 'antd';

const { Title } = Typography;

const YaziDetayi = props => {
  const { id } = props.match.params;
  const [yaziDetayi, setYaziDetayi] = useState('');

  const history = useHistory();

  useEffect(() => {
    api()
      .get(`/posts/${id}`)
      .then(response => setYaziDetayi(response.data))
      .catch(error => console.log(error));
  }, [id]);

  const removeItem = () => {
    api().delete(`posts/${id}`).then(r => history.push('/')).catch('Hata')
  }

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
      <Link to={`/posts/${id}/edit`}>Düzenle</Link>
      <Button onClick={removeItem} type='default'>Sil</Button>
      <p>{yaziDetayi.content}</p>
      {/* <YorumOku yorumlar={yorumlar} />
      <YorumYaz id={id} /> */}
      <Yorum id={id} />
    </div>
  );
};

export default YaziDetayi;
