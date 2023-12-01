import React from 'react'
import ReactDOM from 'react-dom'
const app = ({appName}) => {
	return (
		<div>{appName}</div>
		)
}
ReactDOM.render(
  <Hello appName="react jsx" />,
  document.getElementById('app')
);
