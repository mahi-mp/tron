import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useLocation } from "react-router-dom";
import { Row, Col, Card } from "antd";
import { ProfileComponent } from "./components/ProfileComponent";
import { profileAction } from "./state/actions";

function ProfileDetails() {
  const [initialData, setInitialData] = useState(null);
  const { timeStamp } = useParams();
  const location = useLocation();
  let path = location.pathname.split("/")[1];

  const dispatch = useDispatch();
  const { homeData } = useSelector((state) => state.home);

  useEffect(() => {
    if (homeData.length > 0) {
      let tempArr = homeData.filter((item) => item.time === timeStamp);
      setInitialData(tempArr[0]);
    }
    return () => {
      dispatch(profileAction.resetprofilePost());
    };
  }, [dispatch, homeData, timeStamp]);

  return (
    <Row justify="center" align="middle" style={{ height: "inherit" }}>
      <Col xs={22} sm={22} md={10} lg={10} xl={10}>
        <Card>
          <ProfileComponent initialData={initialData} path={path} />
        </Card>
      </Col>
    </Row>
  );
}

export { ProfileDetails };
