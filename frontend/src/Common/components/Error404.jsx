import React from "react";
import { Result, Button } from "antd";
import { Link } from "react-router-dom";

function Error404({ flag }) {
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        flag && (
          <Button type="primary">
            <Link to="/dashboard">Back Home</Link>
          </Button>
        )
      }
    />
  );
}

export { Error404 };
