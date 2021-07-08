import React from 'react';
import { useEffect, useState } from 'react';
import YaziFormu from './YaziFormu';
import { api } from '../api';

const data = {
  title: 'Title deneme',
  content: 'Content deneme',
};

const YaziDuzenle = props => {
  const { id } = props.match.params;
  const [yazi, setYazi] = useState({});

  console.log('1111', yazi);

  useEffect(() => {
    console.log('44444');
    api()
      .get(`/posts/${id}`)
      .then(response => setYazi(response.data))
      .catch(e => console.log(e));
  }, []);

  console.log('22222');

  return (
    <div>
      {console.log('3333')}
      {console.log(yazi)}
      <h1>Yazi Düzenleme Formu</h1>
      {yazi.title?.length ? <YaziFormu yazi={yazi} /> : ''}
    </div>
  );
};

export default YaziDuzenle;
