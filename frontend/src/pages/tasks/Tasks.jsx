import React, { useState } from "react";
import { Card, Button, Form } from "react-bootstrap";
// import TaskListTable from "../../components/taskListTable/TaskListTable";
// import ProgressBar from "react-bootstrap/ProgressBar";
import Stack from "react-bootstrap/Stack";

export default function Tasks({ taskInfo, childModalShowRequest }) {
  const [task, setTask] = useState([ ]);
  const [taskInput, setTaskInput] = useState({
    name: "",
    priority: "",
    description: "",
    comment: "",
    startDate: "",
    dueDate: "",
  });

  const handleTaskCreate = () => {
    setTask([...task, taskInput]);
      taskInfo(task);
      console.log(task);
    setTaskInput({
      name: "",
      priority: "",
      description: "",
      comment: "",
      startDate: "",
      dueDate: "",
    });
      childModalShowRequest(true)
  };
  console.log(taskInput);
  // const handleInputChange = (fieldName, value) => {
  //     setTaskInput(prevInput => ({
  //         ...prevInput,
  //         [fieldName]: value
  //     }));
  // };

  return (
    <>
      <Card>
        <Card.Body>
          {/* <Card.Title><strong>Create New Task</strong></Card.Title> */}
          <Form>
            <Form.Group controlId="taskName">
              <Form.Label>
                <strong>Task Name</strong>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter task name"
                required
                value={taskInput.name}
                // required/
                onChange={(e) =>
                  setTaskInput({ ...taskInput, name: e.target.value })
                }
              />
            </Form.Group>
            <Stack direction="vertical" gap={3}>
              <div>
                <Form.Group>
                  <Form.Label>
                    <strong>Task Priority</strong>
                  </Form.Label>
                  <Form.Select
                    size="md"
                    required
                    value={taskInput.priority}
                    onChange={(e) => {
                      setTaskInput({ ...taskInput, priority: e.target.value });
                    }}
                  >
                    <option>High</option>
                    <option>Medium</option>
                    <option>Low</option>
                    <option>Critical</option>
                  </Form.Select>
                </Form.Group>
              </div>
              <div>
                <Form.Group>
                  <Form.Label>
                    <strong>Description</strong>
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    col={3}
                    required
                    onChange={(e) =>
                      setTaskInput({
                        ...taskInput,
                        description: e.target.value,
                      })
                    }
                  />
                </Form.Group>
              </div>
              <div>
                <Form.Group>
                  <Form.Label>
                    <strong>Key Note/Comment</strong>
                  </Form.Label>
                  <Form.Control
                    required
                    placeholder="e.g Delayed shipping. Waiting for parts to arrive."
                    onChange={(e) =>
                      setTaskInput({ ...taskInput, comment: e.target.value })
                    }
                  />
                </Form.Group>
              </div>
              <div>
                <Form.Group>
                  <Form.Label>
                    <strong>Start Date</strong>
                  </Form.Label>
                  <Form.Control
                    type="date"
                    required
                    onChange={(e) =>
                      setTaskInput({ ...taskInput, startDate: e.target.value })
                    }
                  />
                </Form.Group>
              </div>
              <div>
                <Form.Group>
                  <Form.Label>
                    <strong>Due Date</strong>
                  </Form.Label>
                  <Form.Control
                    type="date"
                    required
                    onChange={(e) =>
                      setTaskInput({ ...taskInput, dueDate: e.target.value })
                    }
                  />
                </Form.Group>
              </div>
            </Stack>

            <Button variant="primary" onClick={handleTaskCreate}>
              Create Task
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
}
