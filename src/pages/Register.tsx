import { Button, Form, Input, Card } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import { autoChangeUserInfo, selectUser } from "../features/user/userSlice";
import { useAppDispatch, useAppSelector } from "../app/hooks";

import styled from "styled-components";

const LoginBox = styled.div`
  height: 330px;
  width: 600px;
  margin: 20px auto;
  margin-bottom: 100px;
  text-align: center;
`;

export const Register: React.FC = () => {
  // Hook
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser)

  // 如果已经登录则返回首页
  if(user.uid!==0){
    navigate('/')
  }

  // 注册
  const onFinish = (data: any) => {
    dispatch(autoChangeUserInfo(data))
  };

  return (
    <LoginBox>
      {/*将注册框视为卡片*/}
      <Card
        title="注册"
        style={{ backgroundColor: "#fcfcfc" }}
      >
        <br />
        {/*Form表单*/}
        <Form
          name="register"
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 15 }}
          onFinish={onFinish}
        >

          {/*注册需要的信息*/}
          <div>
            <Form.Item
              label="姓名"
              name="name"
              rules={[{ required: true, message: "请输入您的姓名" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="邮箱"
              name="email"
              rules={[{ required: true, message: "请输入您的邮箱" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="密码"
              name="password"
              rules={[{ required: true, message: "请输入您的密码" }]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item
              label="确认密码"
              name="confirmPassword"
              rules={[{ required: true, message: "请确认您的密码" }]}
            >
              <Input.Password />
            </Form.Item>
          </div>

          {/*注册按钮*/}
          <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
            <Button type="primary" htmlType="submit">
              注册
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </LoginBox>
  );
};
