import React from "react";

const NewItem = (props) => {
  const {onSubmit} = props;
  const getFieldValues = () => {

    const c1 = Number(document.getElementById("newItemForm-c1").value) === 0 ? undefined : Number(document.getElementById("newItemForm-c1").value);
    const c2 = Number(document.getElementById("newItemForm-c2").value) === 0 ? undefined : Number(document.getElementById("newItemForm-c2").value);
    const c3 = Number(document.getElementById("newItemForm-c3").value) === 0 ? undefined : Number(document.getElementById("newItemForm-c3").value);
    const c4 = Number(document.getElementById("newItemForm-c4").value) === 0 ? undefined : Number(document.getElementById("newItemForm-c4").value);
    return [
      document.getElementById("newItemForm-name").value,
      Number(document.getElementById("newItemForm-length").value),
      Number(document.getElementById("newItemForm-width").value),
      Number(document.getElementById("newItemForm-color").value),
      c1,
      c2,
      c3,
      c4,
    ];
  }

  const submition = (event) => {
    event.preventDefault();
    onSubmit(...getFieldValues());

  }

  return (
    <form onSubmit={submition}>
      <label htmlFor="newItemForm-name">Item Name</label><br/>
      <input id="newItemForm-name" type='text'/><br/><br/>
      <label htmlFor="newItemForm-length">Item Length</label><br/>
      <input id="newItemForm-length" type='number'/><br/><br/>
      <label htmlFor="newItemForm-width">Item Width</label><br/>
      <input id="newItemForm-width" type='number'/><br/><br/>
      <label htmlFor="newItemForm-color">Item Color</label><br/>
      <input id="newItemForm-color" type='number'/><br/><br/>
      <label htmlFor="newItemForm-c1">Clearance Top (Length)</label><br/>
      <input id="newItemForm-c1" type='number'/><br/><br/>
      <label htmlFor="newItemForm-c2">Clearance Left (Width)</label><br/>
      <input id="newItemForm-c2" type='number'/><br/><br/>
      <label htmlFor="newItemForm-c3">Clearance Bottom (Length)</label><br/>
      <input id="newItemForm-c3" type='number'/><br/><br/>
      <label htmlFor="newItemForm-c4">Clearance Right (Width)</label><br/>
      <input id="newItemForm-c4" type='number'/><br/><br/>
      {/* <label htmlFor="newRoomForm-unit">Measurement Units</label>
      <input id="newRoomForm-unit" type='text'/> */}
      <button type="submit">Create Item</button>
    </form>
  );
};

export default NewItem;