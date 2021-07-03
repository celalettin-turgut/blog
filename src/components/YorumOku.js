import React, { useState, useEffect } from 'react';
import { Comment, Tooltip, Avatar } from 'antd';
import moment from 'moment';

const YorumOku = ({ yorumlar }) => {
  console.log('Yorumlar', yorumlar);

  const renderedYorum = yorumlar.map(yorum => {
    return (
      <Comment
        key={yorum.id}
        //actions={actions}
        author={yorum.display_name}
        avatar={
          <Avatar
            src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
            alt='Guest'
          />
        }
        content={<p>{yorum.body}</p>}
        datetime={
          <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
            <span>{moment().fromNow()}</span>
          </Tooltip>
        }
      />
    );
  });

  return <div>{renderedYorum}</div>;
};

export default YorumOku;
