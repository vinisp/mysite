import {NormalContent} from './normalContent/index';
import {InvertContent} from './invertContent/index';
import './style.scss'

export const Content = () =>{
return (
  <>
  <div className="content">
    <NormalContent
      title="Teste1"
      subTitle="Testando"
      resume="Apenas um teste"
      strongTerm="Organizando" />

    <InvertContent
      title="Teste2"
      subTitle="Testando de novo"
      resume="Segundo teste"
      strongTerm="Aqui vai outro teste" />

    <NormalContent
      title="teste3"
      subTitle="Bora testar"
      resume="Terceiro teste"
      strongTerm="Nada como testar de novo"

      />

  </div>
  </>
  ) 
}
