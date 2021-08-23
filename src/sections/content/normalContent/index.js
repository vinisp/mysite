import React from 'react';
import './style.scss'

export class NormalContent extends React.Component {
  render(){
  const jobInfo = {
  title: this.props.title,
  subTitle: this.props.subTitle,
  resume: this.props.resume,
  strongTerm: this.props.strongTerm
  }
  return(
<>
  <main className="content-box">
    <section className="textContent">
      <div>

      <h1>{jobInfo.title} </h1>
        <h3> {jobInfo.subTitle} </h3>
          <p> <strong> {jobInfo.strongTerm} </strong> {jobInfo.resume} </p>

        </div>
    </section>
    <div className="art"> 
        Illustração ou imagem
      </div>
  </main>

  </>
)}

}
