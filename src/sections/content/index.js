import {useState, useEffect} from 'react';
import {NormalContent} from './normalContent/index';
import './style.scss';

export const Content = () =>{

const [offsetY, setOffsetY] = useState(0);
const handleScroll = () => setOffsetY(window.pageYOffset);

useEffect(() => {
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll)

}, [] )

return (
<div className="content">
  <div className="titleSection"> <h2> JOBS </h2> </div>  
  {offsetY >= 1 ? 
    <NormalContent
      title="E-commerce"
      subTitle="Programando a interface"
    > <p> Quais referências utilizei ? </p>
      <p> Qual Ideia quero transmitir ? </p>
      <p> Por que escolhi esse formato ? </p>
        <p> Essas foram algumas perguntas que me fiz no processo de criação
          do meu logo, neste artigo detalhar o processo de criação </p>
        </NormalContent> : null}

  {offsetY >= 1 ? 
    <NormalContent
      title="Landing Page"
      subTitle="Paginas para converter mais."
    > <p>
        Neste artigo elenco as 10 dicas que considero mais valiosas
        para ser uma pessoa mais produtivo </p>
      </NormalContent> : null}

 </div>
  ) 
}
