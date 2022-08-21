import React from 'react'
import "./../index.css"
function Innerlist(props) {
  return (
    <li ><input className="checkbox" type="checkbox"/>  { props.content}</li>
  )
}

export default Innerlist