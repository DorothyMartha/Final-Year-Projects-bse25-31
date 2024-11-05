
import React, {useEffect, useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import Stack from "react-bootstrap/Stack";

export default function CreateTask({showModal, onTaskCreate, memberAvailable, onHide}) {
    const [presentMembers, setPresentMembers] = useState([]);
    const [taskInput, setTaskInput] = useState({
        name: "",
        priority: "",
        // presentMember:{
        //     id:"",
        //     name:"",
        // },
        description: "",
        comment: "",
        startDate: "",
        dueDate: ""
    });
    useEffect(() => {
        setPresentMembers(memberAvailable);
    }, [memberAvailable]);
    // console.log("Member Available",presentMembers)

    const handleTaskCreate = () => {
        onTaskCreate(taskInput); // Notify the parent component about the new task
        setTaskInput({
            name: "",
            priority: "",
            presentMember:{
                id:"",
                name:"",
            },
            description: "",
            comment: "",
            startDate: "",
            dueDate: ""
        });
    };

    useEffect(() => {
        if (showModal) {
            setTaskInput({
                name: "",
                priority: "",
                presentMember:{
                    id:"",
                    name:"",
                },
                description: "",
                comment: "",
                startDate: "",
                dueDate: ""
            });
        }
    }, [showModal]);
    return (
        <>
            <Modal  show={showModal} onHide={onHide}>
                <Modal.Header closeButton>
                    <Modal.Title>Create New Task</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="taskName">
                            <Form.Label><strong>Task Name</strong></Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter task name"
                                value={taskInput.name}
                                onChange={(e) => setTaskInput({...taskInput, name: e.target.value})}
                            />
                        </Form.Group>
                        <Stack direction="vertical" gap={3}>
                            <div>
                                <Form.Group>
                                    <Form.Label><strong>Task Priority</strong></Form.Label>
                                    <Form.Select
                                        size="md"
                                        value={taskInput.priority}
                                        onChange={(e)=>{setTaskInput({...taskInput, priority: e.target.value})}}
                                    >
                                        <option>--Select--</option>
                                        <option>High</option>
                                        <option>Medium</option>
                                        <option>Low</option>
                                        <option>Critical</option>
                                    </Form.Select>
                                </Form.Group>
                            </div>
                            <div>
                                <Form.Group>
                                    <Form.Label><strong>Attach Member</strong></Form.Label>
                                    <Form.Select
                                        size="md"
                                        style={{ backgroundColor: "#EAF2F8"}}
                                        value={taskInput.presentMember}
                                        onChange={(e) => setTaskInput({...taskInput, presentMember: e.target.value})}
                                    >
                                        <option>--Select--</option>
                                        {presentMembers.map((presentMember, index) => (
                                            //
                                            <li key={index} value={presentMember.id}>
                                                {presentMember.name}
                                                {/* {console.log("member group",presentMember.name)} */}
                                            </li>
                                        ))}
                                    </Form.Select>
                                </Form.Group>
                            </div>

                            <div>
                                <Form.Group>
                                    <Form.Label><strong>Description</strong></Form.Label>
                                    <Form.Control as="textarea" rows={3} col={3} onChange={(e) => setTaskInput({...taskInput, description: e.target.value})}/>
                                </Form.Group>
                            </div>
                            <div>
                                <Form.Group>
                                    <Form.Label><strong>Key Note/Comment</strong></Form.Label>
                                    <Form.Control
                                        placeholder="Delayed shipping. Waiting for parts to arrive."
                                        onChange={(e) => setTaskInput({...taskInput, comment: e.target.value})}
                                    />
                                </Form.Group>
                            </div>
                            <div>
                                <Form.Group>
                                    <Form.Label><strong>Start Date</strong></Form.Label>
                                    <Form.Control
                                        type="date"
                                        onChange={(e) => setTaskInput({...taskInput, startDate: e.target.value})}
                                    />
                                </Form.Group>
                            </div>
                            <div>
                                <Form.Group>
                                    <Form.Label><strong>Due Date</strong></Form.Label>
                                    <Form.Control
                                        type="date"
                                        onChange={(e) => setTaskInput({...taskInput, dueDate: e.target.value})}
                                    />
                                </Form.Group>
                            </div>
                        </Stack>

                        <Button variant="primary" onClick={handleTaskCreate}>
                            Create Task
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}

