import React from 'react';
import { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from "react-bootstrap";
import TaskListTable from "../../../components/taskListTable/TaskListTable";
import CreateTask from "../../../components/createTask/CreateTask";
import TeamMember from "../../../components/createTask/teamMembers/TeamMember";
import WorkSpaceNavBar from '../../../components/NavBar/WorkSpaceNavBar';
import { useParams } from "react-router-dom";



export default function TeamOverView() {
    const { teamname } = useParams();

    const [taskModalShow, setTaskModalShow] = useState(false);
    const [tasks, setTasks] = useState([]);
    const [memberAvailable, setMemberAvailable] = useState([])

    const addNewTask = (newTask) => {
        setTasks([...tasks, newTask]);
        setTaskModalShow(false);
    };
    const availableMembers = (data) => {
        setMemberAvailable([...memberAvailable, data]);
    }
    // console.log("available member...",memberAvailable)

    return (
        <>
            <WorkSpaceNavBar teamName={teamname} btn={false} spaceHead={teamname} />
            <div>
                <Container>
                    <TeamMember availableMembers={availableMembers} />
                </Container>
            </div>
            <div className='mt-3'>
                <Container>
                    <Row>
                        <h3>2. <strong>Tasks</strong></h3>
                        <hr />

                        <Col sm={4}>
                            <Button variant="outline-primary" className="mb-2" onClick={() => setTaskModalShow(true)}>Add Task</Button>
                            <CreateTask memberAvailable={memberAvailable} showModal={taskModalShow} onTaskCreate={addNewTask} onHide={(() => setTaskModalShow(false))} />
                        </Col>
                    </Row>
                </Container>
                <Container >
                    <Row>
                        <Col>

                            <TaskListTable taskListData={tasks} />
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}