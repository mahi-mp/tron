import React from "react";
import { Link } from "react-router-dom";
import { Form, Row, Input, Button, Typography } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import styles from "../styles/Admin.module.css";

const { Text } = Typography;

function validateMessages(label) {
  return {
    required: `${label} is required!`,
    types: {
      email: `${label} is not a valid email!`,
      number: `${label} is not a valid number!`,
    },
  };
}

function Login({ onFinish }) {
  return (
    <div>
      <div>
        <h1 className={styles.custFormH1}>Sign In</h1>
      </div>
      <Form
        name="normal_login"
        className={styles.loginForm}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        validateMessages={validateMessages}
      >
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              type: "email",
            },
          ]}
        >
          <Input
            allowClear
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Enter your Email"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input.Password
            allowClear
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Enter your Password"
          />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className={styles.btnPrimary}
          >
            Log in
          </Button>
          <Row justify="center">
            <Text type="secondary">
              Not yet a member ?<Link to="/signup"> Sign up now</Link>
            </Text>
          </Row>
        </Form.Item>
      </Form>
    </div>
  );
}
export { Login };
