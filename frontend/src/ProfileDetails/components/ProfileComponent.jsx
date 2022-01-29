import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate, Navigate } from "react-router-dom";
import { profileAction } from "../state/actions";
import { Form, Input, Button } from "antd";
import { Loading } from "../../Common/components/Loading";

function ProfileComponent({ initialData, path }) {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const { timeStamp } = useParams();
  const back = useNavigate();

  const { profilePostData, editProfilePostData } = useSelector(
    (state) => state.profileDetails
  );
  const { selectedDtate } = useSelector((state) => state.home);
  const [initialDataUpdate, setInitialDataUpdate] = useState(true);
  useEffect(() => {
    if (path === "editProfileDetails") {
      setTimeout(() => {
        setInitialDataUpdate(false);
      }, 50);
    } else {
      setInitialDataUpdate(false);
    }
  }, [path]);

  useEffect(() => {
    return () => {
      dispatch(profileAction.resetprofilePost());
    };
  }, [dispatch]);

  if (profilePostData !== null || editProfilePostData !== null) {
    return <Navigate replace to="/" />;
  }

  const onFinish = (values) => {
    if (path === "editProfileDetails")
      dispatch(
        profileAction.editProfilePost(
          values,
          timeStamp,
          selectedDtate,
          initialData._id
        )
      );
    else dispatch(profileAction.profilePost(values, timeStamp, selectedDtate));
  };

  let handleBackButton = () => {
    back(-1);
  };

  return (
    <>
      {initialDataUpdate ? (
        <Loading />
      ) : (
        <Form
          form={form}
          initialValues={{
            firstName: initialData && initialData.firstName,
            lastName: initialData && initialData.lastName,
            phoneNumber: initialData && initialData.phoneNumber,
          }}
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            label="First Name"
            name="firstName"
            rules={[
              {
                required: true,
                message: "Please input your First Name!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Last Name"
            name="lastName"
            rules={[
              {
                required: true,
                message: "Please input your Last Name!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Phone Number"
            name="phoneNumber"
            rules={[
              {
                required: true,
                message: "Please input your phoneNumber!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button
              style={{ marginRight: "10px" }}
              onClick={() => handleBackButton()}
              type="primary"
            >
              Cancel
            </Button>

            <Button type="primary" htmlType="submit">
              Save
            </Button>
          </Form.Item>
        </Form>
      )}
    </>
  );
}
export { ProfileComponent };
