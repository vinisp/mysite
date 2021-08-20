import React from 'react' 

export class Training extends React.Component {
  render() {
    const text = this.props.text;
    return (
    <h2>
    {text}
    </h2>)
  }
}
