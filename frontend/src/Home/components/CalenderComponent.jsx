import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { Calendar, Popover, Button, Space } from "antd";
import moment from "moment";
import { time } from "../../Common/constant";
import { homeAction } from "../state/actions";

function CalenderComponent() {
  const dispatch = useDispatch();
  const { homeData } = useSelector((state) => state.home);

  const text = <span>Select Time</span>;
  let getTimeStatus = (time) => {
    if (homeData) {
      let tempArr = homeData.filter((item) => item.time === time);
      if (tempArr.length > 0) return true;
      return false;
    }
    return false;
  };
  const content = (
    <Space direction="vertical">
      {time.map((element, index) => (
        <Link
          to={
            getTimeStatus(element)
              ? `/editProfileDetails/${element}`
              : `/profileDetails/${element}`
          }
        >
          <Button
            style={
              getTimeStatus(element)
                ? { width: "150px", background: "#dd200acc" }
                : { width: "150px", background: "#2ee32e" }
            }
            id={index}
          >
            {element}
          </Button>
        </Link>
      ))}
    </Space>
  );

  let dateCellRender = (value) => {
    let customDate = moment().format("YYYY-MM-DD");
    if (value && value < moment(customDate, "YYYY-MM-DD")) {
      return (
        <Button id={uuidv4()} disabled>
          {value.date()}
        </Button>
      );
    } else {
      return (
        <Popover
          id={uuidv4()}
          placement="right"
          title={text}
          content={content}
          trigger="click"
          style={{ textAlign: "center" }}
        >
          <Button style={{ zIndex: 11 }}>{value.date()}</Button>
        </Popover>
      );
    }
  };

  let handleSelectDate = (date) => {
    dispatch(homeAction.dateSelection(moment(date._d).format("DD-MM-YYYY")));
    dispatch(homeAction.getData(moment(date._d).format("DD-MM-YYYY")));
  };

  return (
    <Calendar
      onSelect={handleSelectDate}
      id={uuidv4()}
      headerRender={false}
      fullscreen={false}
      dateFullCellRender={dateCellRender}
      disabledDate={(current) => {
        let customDate = moment().format("YYYY-MM-DD");
        return current && current < moment(customDate, "YYYY-MM-DD");
      }}
    />
  );
}
export { CalenderComponent };
