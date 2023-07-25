import React, { useState } from "react";
import './Block.scss';
import { useDoubleTap } from 'use-double-tap';

const Block = (props) => {
  const {width, widthText, height, heightText, color, children, name, draggable, clearance1, clearance2, clearance3, clearance4} = props;
  /**
   * 0: red
   * 1: orange
   * 2: yellow
   * 3: green
   * 4: blue
   * 5: grey
   */
  const colorOptions = {0: ['#ffb3ba', '#ff6775'], 1: ['#ffdfba', '#ffbc6e' ], 2: ['#ffffba', '#ffff6e'], 3: ['#baffc9', '#6eff8d'], 4: ['#bae1ff','#6ec0ff'], 5: ['#BCBCBC', '#959595']}

  const colorSelection = colorOptions[color];

  const [positionX, setPositionX] = useState(0);
  const [positionY, setPositionY] = useState(0);
  const [mouseDown, setMouseDown] = useState(false);
  const [touchDown, setTouchDown] = useState(false);
  const [mouseDownPosX, setMouseDownPosX] = useState(0);
  const [mouseDownPosY, setMouseDownPosY] = useState(0);
  const [touchDownPosX, setTouchDownPosX] = useState(0);
  const [touchDownPosY, setTouchDownPosY] = useState(0);
  const [rotateState, setRotateState] = useState(0);
  
  const incrementRotateState = () => {
    setRotateState((rotateState+1)%8)
  }

  const bind = useDoubleTap(draggable ? (e) => {
    e.stopPropagation();
    incrementRotateState();
  } : () => {});

  const dragPosition = draggable ? {left: `${positionX}px`, top: `${positionY}px`} : {}

  const _onMouseMove = (e) => {
    // e.stopPropagation();
    if (mouseDown && draggable) {
      setPositionX(positionX + e.nativeEvent.offsetX - mouseDownPosX);
      setPositionY(positionY + e.nativeEvent.offsetY - mouseDownPosY);
    }
  };

  const _onMouseDown = (e) => {
    setMouseDownPosX(e.nativeEvent.offsetX);
    setMouseDownPosY(e.nativeEvent.offsetY);
    setMouseDown(true);
  };
  const _onMouseUp = () => {
    setMouseDown(false);
  };


  const _onTouchMove = (e) => {
    if (touchDown && draggable) {
      const rect = e.target.getBoundingClientRect();
      setPositionX(positionX + (e.targetTouches[0].pageX - rect.left) - touchDownPosX);
      setPositionY(positionY + (e.targetTouches[0].pageY - rect.top) - touchDownPosY);
    }
  };

  const _onTouchStart = (e) => {
    if (draggable) {
      const rect = e.target.getBoundingClientRect();
      setTouchDownPosX(e.targetTouches[0].pageX - rect.left);
      setTouchDownPosY(e.targetTouches[0].pageY - rect.top);
    setTouchDown(true);
    }
  };

  const _onTouchEnd = () => {
    if (draggable) {
    setTouchDown(false);
    }
  };

  return (
    <div
      className="blockBody"
      style={{
        background: colorSelection[0],
        height,
        width,
        border: `2px solid ${colorSelection[1]}`,
        ...dragPosition,
        transform: `rotate(${360/8*rotateState}deg)`,
      }}
      onMouseDown={_onMouseDown}
      onMouseMove={_onMouseMove}
      onMouseUp={_onMouseUp}
      onTouchMove={_onTouchMove}
      onTouchStart={_onTouchStart}
      onTouchEnd={_onTouchEnd}
      {...bind}
    >
      {
        clearance1 &&
        (<div
          className="clearance c1"
          style={{height: `${clearance1}px`, width, border: `2px solid ${colorSelection[1]}`, top: `-${Math.abs(clearance1)+4}px`, left: '-2px'}}
        />)
      }
      {
        clearance2 &&
        (<div
          className="clearance c2"
          style={{width: `${clearance2}px`, height, border: `2px solid ${colorSelection[1]}`, left: `-${Math.abs(clearance2)+4}px`, top: '-2px'}}
        />)
      }
      {
        clearance3 &&
        (<div
          className="clearance c3"
          style={{height: `${clearance3}px`, width, border: `2px solid ${colorSelection[1]}`, bottom: `-${Math.abs(clearance3)+4}px`, left: '-2px'}}
        />)
      }
      {
        clearance4 &&
        (<div
          className="clearance c4"
          style={{width: `${clearance4}px`, height, border: `2px solid ${colorSelection[1]}`, right: `-${Math.abs(clearance4)+4}px`, top: '-2px'}}
        />)
      }

      <span className="heightText">
        {heightText}
      </span>
      <span className="widthText">
        {widthText}
      </span>
      <span className="blockName">
        {name}
      </span>
      {children}
    </div>
  );
};

export default Block;