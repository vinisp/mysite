import React from 'react';
import './style.scss'

export class InvertContent extends React.Component {
  render(){
  const jobInfo = {
  title: this.props.title,
  subTitle: this.props.subTitle
  }
  return(
<>
<div className="content-box">
  <div className="art"> 
        Illustração ou imagem
  </div>
    <section className="textContent">
      <h1>{jobInfo.title} </h1>
      <h3> {jobInfo.subTitle} </h3>
      <div className="resume">{this.props.children}</div>
    </section>
</div>
</>
)}

}
