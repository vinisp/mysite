import './style.scss';

export const Footer = () =>{
  return(
  <>
    <footer className="footer">
      <div className="contactInfo">
        <h1> Contato </h1>
          <h3> Vinicius Silva </h3>
          <p> Whatsapp: 11 9533-47491 </p>
            <p> @: contato@silvadev.com </p>
      </div>
      <div className="socialIcons">
        <div className="linkedIn"> </div>
        <div className="behance"> </div>
        <div className="instagram"> </div>
      </div>
    </footer>
  </>
  )
}
