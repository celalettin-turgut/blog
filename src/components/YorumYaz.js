import React from 'react';
import { Form, Input, Button } from 'antd';

const YorumYaz = ({ handleYorumYaz }) => {
  const [form] = Form.useForm();

  console.log('YorumYaz');

  const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 16 },
  };

  /* eslint-disable no-template-curly-in-string */
  const validateMessages = {
    required: '${label} is required!',
  };
  /* eslint-enable no-template-curly-in-string */

  return (
    <Form
      form={form}
      {...layout}
      name='nest-messages'
      onFinish={values => {
        handleYorumYaz(values);
        form.resetFields();
      }}
      validateMessages={validateMessages}
    >
      <Form.Item name='display_name' label='Name' rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name='body' label='Commit' rules={[{ required: true }]}>
        <Input.TextArea />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 4 }}>
        <Button type='primary' htmlType='submit'>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default YorumYaz;
