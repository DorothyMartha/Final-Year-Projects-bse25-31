import React from "react";
import WorkSpaceNavBar from "../../components/NavBar/WorkSpaceNavBar";
import WorkSpaceBody from "./WorkSpaceBody";
import { useState } from "react";
export default function WorkSpace() {
  const [navToggle, setNavToggle] = useState("Available WorkSpaces");
  const [data, setData] = useState([]);
  const [btn, setBtn] = useState(true);
  const [team, setTeam] = useState(null);

  const handleData = (data) => {
    setData(data);
  };
  const teamInfo = (info) => {
    setTeam(info);
  };
  // console.log("dataaaa......",data);

  const handleWorkSpace = (data) => {
    // console.log("space name is ", data);
    setNavToggle(data);
    setBtn(false);
  };
  const newWorkSpace = data;
  return (
    <>
      {/* btn - to control visibility of the create button */}
      <WorkSpaceNavBar
        teamName={team}
        btn={btn}
        spaceHead={navToggle}
        btnData={handleData}
      />
      <WorkSpaceBody
        teamInfo={teamInfo}
        btn={btn}
        toggle={handleWorkSpace}
        fromWorkSpace={newWorkSpace}
      />
    </>
  );
}
