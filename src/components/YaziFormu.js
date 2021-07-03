import React from 'react';
import { Button, Form, Input } from 'antd';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { YaziFormuStyle } from '../style';

const YaziFormu = () => {
  const history = useHistory();
  //const [form] = Form.useForm();

  const onFinish = values => {
    console.log(values);
    axios
      .post(`https://react-yazi-yorum.herokuapp.com/posts`, values)
      .then(() => history.push('/'))
      .catch(error => console.log(error));
  };

  console.log('YaziFormu');

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
