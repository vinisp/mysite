import {useState, useEffect} from 'react';
import {NormalContent} from './normalContent/index';
import {InvertContent} from './invertContent/index';
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

  {offsetY >= 144 ? 
    <NormalContent
      title="Logo Vinicius"
      subTitle="Como criei meu logo"
    > <p> Quais referências utilizei ? </p>
      <p> Qual Ideia quero transmitir ? </p>
      <p> Por que escolhi esse formato ? </p>
        <p> Essas foram algumas perguntas que me fiz no processo de criação
          do meu logo, neste artigo detalhar o processo de criação </p>
        </NormalContent> : null}

  {offsetY >= 600 ? 
    <InvertContent
      title="10 dicas para ser mais produtivo"
      subTitle="Disciplina, organização e foco"
    > <p>
        Neste artigo elenco as 10 dicas que considero mais valiosas
        para ser uma pessoa mais produtivo </p>
          </InvertContent> : null}

  {offsetY >= 1000 ?
    <NormalContent
      title="1. Trabalhos que tenho vontande de fazer"
      subTitle="Plataforma de E-commerce"
    > <p>  
      Trabalhei durante uma década com atendimento ao cliente em serviços de Sac e e-commerce,
      tive o contato com diversos sistemas e plataformas,
      se eu tivesse que desenvolver um sistema como faria.
      </p>
    </NormalContent> : null}
</div>
  ) 
}
