import React from 'react';
import './style.scss'

export class NormalContent extends React.Component {
  render(){
  const jobInfo = {
  title: this.props.title,
  subTitle: this.props.subTitle,
  }
  return(
<>
<div className="content-box">
  
    <section className="textContent">
      <h3>{jobInfo.title} </h3>
      <h4>{jobInfo.subTitle} </h4>
      <div className="resume">{this.props.children}</div>
    </section>
    <div className="art"> 
        Illustração ou imagem
      </div>

  </div>
</>
)}

}
