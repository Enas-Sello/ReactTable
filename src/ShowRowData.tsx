/////////// IMPORTS
///
//import classes from './Search.module.css'
///
/////////// Types
///

import { useState } from "react"

/////////// HELPER VARIABLES & FUNCTIONS
///

///
export const ShowRowData = ({ setEditData, editData }) => {
  /////////// VARIABLES
  ///
  /////////// CUSTOM HOOKS
  ///
  // work with origin or value or check if input name === header 
  const data = editData.filter((x) => {
    return x.value !== undefined
  })
  ///
  /////////// STATES
  ///
  const [popUp, setPopUp] = useState(data)
  ///
  /////////// SIDE EFFECTS
  ///
  console.log("data", popUp)
  ///
  /////////// IF CASES
  ///

  ///
  /////////// FUNCTIONS & EVENTS
  ///

  ///
  return (
    <>
      {popUp.map((item) => {
        console.log(item.column.Header)
      })}
    </>
  )
}
