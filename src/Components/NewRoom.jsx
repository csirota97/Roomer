import React from "react";

const NewRoom = (props) => {
  const {onSubmit} = props;
  const getFieldValues = () => {
    return [
      document.getElementById("newRoomForm-name").value,
      Number(document.getElementById("newRoomForm-length").value),
      Number(document.getElementById("newRoomForm-width").value),
      undefined
    ];
  }

  const submition = (event) => {
    event.preventDefault();
    onSubmit(...getFieldValues());

  }

  return (
    <form onSubmit={submition}>
      <label htmlFor="newRoomForm-name">Room Name</label><br/>
      <input id="newRoomForm-name" type='text'/><br/><br/>
      <label htmlFor="newRoomForm-email">Email Address</label><br/>
      <input id="newRoomForm-email" type='email'/><br/><br/>
      <label htmlFor="newRoomForm-length">Room Length</label><br/>
      <input id="newRoomForm-length" type='number'/><br/><br/>
      <label htmlFor="newRoomForm-width">Room Width</label><br/>
      <input id="newRoomForm-width" type='number'/><br/><br/>
      {/* <label htmlFor="newRoomForm-unit">Measurement Units</label>
      <input id="newRoomForm-unit" type='text'/> */}
      <button type="submit">Create Room</button>
    </form>
  );
};

export default NewRoom;