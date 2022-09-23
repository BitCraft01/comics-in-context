import React, { useContext } from "react";
import stylesContext from "./StylesContext";
import { useContext } from './StylesContext'


export default function CollectorButton() {
  const buttonStyling = React.useContext(stylesContext)
  return (
    <div>
      <button style={buttonStyling}>
        Click Here!
      </button>
    </div>
  );
}