import React from 'react';
import { Button, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useAppDispatch } from '../store';
import { login } from '../store/user';
import NoteIcon from '../static/icons/note.svg';
import BirdIcon from '../static/icons/bird.svg';

const Wrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  overflow: hidden;
  > .left {
    width: 50vw;
    flex-grow: 10;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #1e4cac;
    position: relative;
    border-top-right-radius: 30% 1000px;
    border-bottom-right-radius: 30% 1000px;
    @media (max-width: 1200px) {
      display: none;
    }
  }
  > .right {
    width: 50vw;
    flex-grow: 10;
    position: relative;
  }
`;
const FromWrap = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  width: 350px;
  > .title {
    font-weight: 600;
    font-size: 27px;
  }
`;

const IntroWrap = styled.div`
  position: absolute;
  top: 20%;
  left: 45%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  gap: 20px;
  border: 10px solid red;
  //width: 350px;
  > .logo {
    display: flex;
    align-items: center;
    gap: 20px;
    border: 10px solid red;
  }
`;

const Login: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const onFinish = (values: { username: string; password: string }) => {
    dispatch(login(values.username));
    navigate('/');
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <Wrap>
      <div className="left">
        <IntroWrap>
          <div className="logo">
            <NoteIcon width="3em" height="3em" fill="#40bdff" />
            <span className="title">React Note</span>
          </div>
          <div>
            <BirdIcon width="100px" />
          </div>
        </IntroWrap>
      </div>
      <div className="right">
        <FromWrap>
          <h2 className="title">登录</h2>
          <Form
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              name="username"
              rules={[{ required: true, message: 'Please input your username!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
                Submit
              </Button>
            </Form.Item>
          </Form>
        </FromWrap>
      </div>
    </Wrap>
  );
};

export default Login;
