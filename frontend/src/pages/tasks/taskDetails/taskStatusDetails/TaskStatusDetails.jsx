import React, { useState, useEffect } from "react";

import { Container } from "react-bootstrap";
import Stack from "react-bootstrap/Stack";
import { Form } from "react-bootstrap";
import ProgressBar from "react-bootstrap/ProgressBar";
// import BsCalendarDate fron

function TaskStatusDetails({ row }) {
  const [selectedRow, setSelectedRow] = useState("");
  useEffect(() => {
    setSelectedRow(row);
  }, [row]);
  // console.log(selectedRow);
  return (
    <>
      <Container style={{ backgroundColor: "#EDF4F4" }}>
        <Stack direction="vertical" gap={3}>
          <div>
            <Form.Group>
              <Form.Label>A - Task Priority</Form.Label>
              <Form.Select readOnly value={selectedRow.priority} size="md">
                <option>High</option>
                <option>Medium select</option>
                <option>Low</option>
                <option>Critical</option>
              </Form.Select>
            </Form.Group>
          </div>
          <div>
            <Form.Group>
              <Form.Label>B - Description</Form.Label>
              <Form.Control
                value={selectedRow.description}
                as="textarea"
                rows={3}
                col={3}
                readOnly
              />
            </Form.Group>
          </div>
          <div>
            <Form.Group>
              <Form.Label>C - File</Form.Label>
              <Form.Control readOnly value={selectedRow.priority} />
            </Form.Group>
          </div>
          <div>
            <Form.Group>
              <Form.Label>D - Status</Form.Label>
              <Form.Select readOnly value={selectedRow.priority} size="md">
                <option>OnHold </option>
                <option>In Progress</option>
                <option>Low</option>
                <option>Awaiting Review</option>
                <option>Completed</option>
                <option>Not Started</option>
              </Form.Select>
            </Form.Group>
          </div>
          <div>
            <Form.Group>
              <Form.Label>E - Key Note/Comment</Form.Label>
              <Form.Control
                readOnly
                value={selectedRow.comment}
                // placeholder="Delayed shipping. Waiting for parts to arrive."
              />
            </Form.Group>
          </div>
          <div>
            <Form.Group>
              <Form.Label> F - Start Date </Form.Label>
              <Form.Control readOnly value={selectedRow.startDate} />
            </Form.Group>
          </div>
          <div>
            <Form.Group>
              <Form.Label>G - Due Date</Form.Label>
              <Form.Control readOnly value={selectedRow.dueDate} />
            </Form.Group>
          </div>
          <div>
            <Form.Group style={{ marginBottom: "20px" }}>
              <Form.Label>H - Progress Bar</Form.Label>
              <ProgressBar animated now={100} />
            </Form.Group>
          </div>
        </Stack>
      </Container>
    </>
  );
}

export default TaskStatusDetails;
