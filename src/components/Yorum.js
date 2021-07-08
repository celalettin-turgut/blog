import React, { useEffect, useState } from 'react';
import YorumYaz from './YorumYaz';
import YorumOku from './YorumOku';
import { api } from '../api';

const Yorum = ({ id }) => {
  const [yorumlar, setYorumlar] = useState([]);

  useEffect(() => {
    api()
      .get(`/posts/${id}/comments`)
      .then(response => setYorumlar(response.data));
  }, [id]);

  const handleYorum = values => {
    console.log(values);
    api()
      .post(`/posts/${id}/comments`, values)
      .then(response => setYorumlar([...yorumlar, response.data]))
      .catch(error => console.log(error));
  };

  return (
    <div>
      <YorumOku yorumlar={yorumlar} id={id} />
      <YorumYaz handleYorumYaz={handleYorum} />
    </div>
  );
};

export default Yorum;
