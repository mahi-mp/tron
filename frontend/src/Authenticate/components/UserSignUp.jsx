import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  UserOutlined,
  EyeTwoTone,
  EyeInvisibleOutlined,
  LockOutlined,
} from "@ant-design/icons";
import { Form, Input, Card, Button, Row, Typography } from "antd";
import { Navigate, Link } from "react-router-dom";
import styles from "../styles/Admin.module.css";
import { adminAction } from "../state/actions";

const { Text } = Typography;

function UserSignUp() {
  const dispatch = useDispatch();
  const { signUpEventData } = useSelector((state) => state.authenticate);

  let onFinish = (values) => {
    dispatch(adminAction.signUpEvent(values));
  };

  return signUpEventData.length === undefined ? (
    <Navigate replace to="/login" />
  ) : (
    <div style={{ padding: "0 5rem" }} className={styles.alignAdmin}>
      <Card className={styles.custForm}>
        <div style={{ paddingBottom: "1rem" }}>
          <h1 className={styles.custFormH1}>Sign Up</h1>
          <h2 className={styles.custFormH2}>
            Sign Up to try our amazing services
          </h2>
        </div>
        <div style={{ height: "100%", transition: "height 0.25s linear" }}>
          <Form
            layout="vertical"
            name="1normal_login_page1"
            className={styles.loginForm}
            onFinish={onFinish}
            scrollToFirstError
          >
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  type: "email",
                  message: "Please input your email!",
                },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Enter your Email"
                allowClear
              />
            </Form.Item>
            <Form.Item
              name="password"
              label="Password"
              rules={[
                {
                  required: true,
                  message: "Please input your Password!",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (value.length > 5) {
                      return Promise.resolve();
                    }

                    return Promise.reject(
                      new Error("Required minimum 6 characters password!")
                    );
                  },
                }),
              ]}
            >
              <Input.Password
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Enter your Password"
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
                allowClear
              />
            </Form.Item>
            <Form.Item
              name="phoneNumber"
              label="Phone Number"
              rules={[{ required: true }]}
              style={{
                margin: "0 8px",
              }}
            >
              <Input placeholder="Input Phone Number" allowClear />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className={styles.btnPrimary}
                style={{
                  margin: "14px 0",
                }}
              >
                Get Started
              </Button>
              <Row justify="center">
                <Text type="secondary">
                  <Link to="/login"> Back to login</Link>
                </Text>
              </Row>
            </Form.Item>
          </Form>
        </div>
      </Card>
    </div>
  );
}
export { UserSignUp };
