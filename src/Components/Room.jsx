import React, { useState } from "react";
import Block from "./Block";
import './Room.scss';
import NewRoom from "./NewRoom";
import NewItem from "./NewItem";

const Room = (props) => {
  const [room, setRoom] = useState({});
  const [isNewItemDialogShown, setIsNewItemDialogShown] = useState(false);
  const [items, setItems] = useState([]);

  const newRoomSubmit = (name, height, width, unit) => {
    setRoom({name, width, height, unit});
  }
  const newItemSubmit = (name, height, width, color, clearance1, clearance2, clearance3, clearance4) => {
    setItems([...items, {name, width, height, color, clearance1, clearance2, clearance3, clearance4}]);
    setIsNewItemDialogShown(false);
  }
  const newItem = () => {};

  if (Object.keys(room).length > 0 && !isNewItemDialogShown) {
    return (
      <>
        <h1>{room.name}</h1>
        <div className="roomBlock" style={{height: `calc(90vw*${room.height / room.width} + 15px)`}}>
          <div
            className="roomBlockContainer"
            style={{
              width: "90vw",
              height: `calc(90vw*${room.height / room.width})`
            }}
          >

            <Block
              color={5}
              width="90vw"
              height={`calc(90vw*${room.height / room.width})`}
              widthText={`${room.width}ft`}
              heightText={`${room.height}ft`}
              children={
                items.map(item => (
                  <Block
                  color={item.color}
                  height={`calc(90vw*${item.height/room.height})`}
                  width={`calc(${item.width/room.width}*90vw)`}
                  clearance1={item.clearance1}
                  clearance2={item.clearance2}
                  clearance3={item.clearance3}
                  clearance4={item.clearance4}
                  widthText={`${item.width}ft`}
                  heightText={`${item.height}ft`}
                  name={item.name}
                  draggable
                />
                ))
              }
            />
          </div>
        </div>

        <button onClick={() => setIsNewItemDialogShown(true)}>New Item</button>
      </>
    );
  } else if (isNewItemDialogShown) {
    return (
      <NewItem onSubmit={newItemSubmit}/>
    );
  } else {
    return (
      <NewRoom onSubmit={newRoomSubmit}/>
    );
  }
};

export default Room;