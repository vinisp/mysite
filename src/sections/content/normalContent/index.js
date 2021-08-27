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
    <div className="titleAndSub">
      <h3>{jobInfo.title} </h3>
        <h4>{jobInfo.subTitle} </h4> </div>
        <div className="resume">{this.props.children}</div>
      <div className="TechIcons">
        <ul>
          <li> TECH ICON 1 </li>
          <li> TECH ICON 2 </li>
          <li> TECH ICON 3 </li>
        </ul>

      </div>
    </section>
    <div className="art"> 
        Illustração ou imagem
      </div>

  </div>
</>
)}

}
