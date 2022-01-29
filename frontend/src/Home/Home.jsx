import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { homeAction } from "./state/actions";
import { Row, Col } from "antd";
import moment from "moment";
import { CalenderComponent } from "./components/CalenderComponent";

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(homeAction.getData(moment().format("DD-MM-YYYY")));
  }, [dispatch]);

  return (
    <Row justify="center" align="middle" style={{ height: "inherit" }}>
      <Col
        xs={22}
        sm={22}
        md={10}
        lg={10}
        xl={10}
        style={{
          width: "300px",
          border: "1px solid #f0f0f0",
          borderRadius: "2px",
        }}
      >
        <CalenderComponent />
      </Col>
    </Row>
  );
}

export { Home };
