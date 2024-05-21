import React from "react";
import { ListGroup } from "react-bootstrap";

function Sidebar() {
const rooms = ["Dr 1", "Nurse 1", "Nurse 2"]; 
return (
<>
<h2>Chat Rooms</h2>
{/* <ListGroup>
    {rooms.map((room, idx) => (
        <ListGroup.Item key={idx}>{room}</ListGroup.Item>
    ))}
</ListGroup> */}
{/* <h2>Members</h2> */}
</>);
}

export default Sidebar;