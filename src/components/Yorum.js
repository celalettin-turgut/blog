import React, { useEffect, useState } from 'react';
import YorumYaz from './YorumYaz';
import YorumOku from './YorumOku';
import axios from 'axios';

const Yorum = ({ id }) => {
  const [yorumlar, setYorumlar] = useState([]);

  useEffect(() => {
    axios
      .get(`https://react-yazi-yorum.herokuapp.com/posts/${id}/comments`)
      .then(response => setYorumlar(response.data));
  }, [id]);

  const handleYorum = values => {
    console.log(values);
    axios
      .post(
        `https://react-yazi-yorum.herokuapp.com/posts/${id}/comments`,
        values
      )
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
