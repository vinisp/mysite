import './style.scss';

export const Footer = () =>{
  return(
  <>
    <footer className="footer">
      <div>
        <ul>
            <li>Imagem do linkedin</li>
            <li>Imagem do instagram</li>
            <li>Imagem Behance ou dribble </li>
        </ul>
          </div>
        <div>
          <h4>Contatos e endereço</h4>
          <ul>
            <li>Endereço de e-mail</li>
            <li>Telefone</li>
            <li>Endereço</li>
          </ul>
        </div>
        <div>
          
          <p>Enviar uma menssagem </p>
            <form>
              <input type="text" placeholder="Nome..." />
              <input type="text" placeholder="e-mail..." />
              <input type="text" placeholder="Título" />
              <input type="text" placeholder="Assunto" />
            <textarea>
              </textarea>
                <input type="submit" value="Enviar"/>
          </form>
           </div>
    </footer>

  </>
  )
}
