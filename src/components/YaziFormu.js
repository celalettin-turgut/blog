import React, { useState } from 'react';
import { Button, Form, Input } from 'antd';
import { api } from '../api';
import { useHistory } from 'react-router-dom';
import { YaziFormuStyle } from '../style';
import { useEffect } from 'react';

const YaziFormu = props => {
  const history = useHistory();
  const [yazi, setYazi] = useState(props?.yazi);

  console.log('YaziFormu props', props);

  const onFinish = values => {
    if (props.yazi?.title) {
      api()
        .put(`/posts/${yazi.id}`, values)
        .then(response => {
          console.log(response);
          history.push(`/posts/${yazi.id}`)
        })
        .catch(error => console.log(error));
    } else {
      api()
        .post(`/posts`, values)
        .then(() => {
          console.log(values);
          history.push('/');
        })
        .catch(error => console.log(error));
    }
  };

  const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 16 },
  };

  /* eslint-disable no-template-curly-in-string */
  const validateMessages = {
    required: '${label} is required!',
  };
  return (
    <YaziFormuStyle>
      <Form
        initialValues={{
          title: yazi?.title || '',
          content: yazi?.content || '',
        }}
        className='form'
        //form={form}
        {...layout}
        name='nest-messages'
        onFinish={onFinish}
        validateMessages={validateMessages}
      >
        <Form.Item name='title' label='Title' rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name='content' label='Body' rules={[{ required: true }]}>
          <Input.TextArea />
        </Form.Item>
        <Form.Item wrapperCol={{ span: 4, offset: 4 }}>
          <Button type='primary' htmlType='submit'>
            Send
          </Button>
        </Form.Item>
      </Form>
    </YaziFormuStyle>
  );
};

export default YaziFormu;
