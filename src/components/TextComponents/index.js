import React from 'react'
import './index.css'

function Title(props) {
  return <h1 className="title">{props.children}</h1>
}
function SubTitle(props) {
  return <h2 className="subtitle">{props.children}</h2>
}
function Text(props) {
  return <p className="text">{props.children}</p>
}
function CodeContainer(props) {
  return (
    <div className="codecontainer">
      <p className="code">{props.children}</p>
    </div>
  )
}
function Code(props) {
  return <p className="code">{props.children}</p>
}

export { Title, SubTitle, Text, CodeContainer, Code }