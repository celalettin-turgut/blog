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

  useEffect(() => {
    api()
      .get(`/posts/${id}`)
      .then(response => setYazi(response.data))
      .catch(e => console.log(e));
  }, []);

  return (
    <div>
      <h1>Yazi Düzenleme Formu</h1>
      {yazi.title?.length ? <YaziFormu yazi={yazi} /> : ''}
    </div>
  );
};

export default YaziDuzenle;
