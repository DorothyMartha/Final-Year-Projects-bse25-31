import React, { useEffect } from "react";
import { Container, Navbar } from "react-bootstrap";
import CreateButton from "./CreateButton";
import { useState } from "react";

function WorkSpaceNavBar({ spaceHead, btn, teamName, btnData }) {
  // const [data, setData] = useState([]);
  const [buttonShow, setButtonShow] = useState(true);
  const [team, setTeam] = useState(null);

  const handleData = (data) => {
    // setData(data);
    //if btnData is defined
    if (btnData) {
      btnData(data);
    }
  };
  useEffect(() => {
    setTeam(teamName);
  }, [teamName]);
  useEffect(() => {
    setButtonShow(btn);
  }, [btn]);

  return (
    <div>
      <Navbar className="bg-body-tertiary mb-4">
        <Container>
          <Navbar.Brand>
            {team === null ? (
              <h2>
                Space Name : <span style={{ color: "red" }}>{spaceHead}</span>
              </h2>
            ) : (
              <h2>
                Team Name : <span style={{ color: "red" }}>{spaceHead}</span>
              </h2>
            )}
          </Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              {buttonShow ? <CreateButton createData={handleData} /> : null}
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default WorkSpaceNavBar;
