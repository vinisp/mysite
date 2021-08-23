import {useState, useEffect} from 'react'
import {NormalContent} from './normalContent/index';
import {InvertContent} from './invertContent/index';
import './style.scss'

export const Content = () =>{

const [offsetY, setOffsetY] = useState(0);
const handleScroll = () => setOffsetY(window.pageYOffset);

useEffect(() => {
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll)

}, [])

return (
<>


<div className="content">

  {offsetY >= 144 ? 
    <NormalContent
      title="Teste1"
      subTitle="Testando"
      resume="Apenas um teste"
      strongTerm="Organizando" /> : null }

  {offsetY >= 614 ? 
    <InvertContent
      title="Teste2"
      subTitle="Testando de novo"
      resume="Segundo teste"
      strongTerm="Aqui vai outro teste" /> : null }

  {offsetY >= 1140 ?
    <NormalContent
      title="teste3"
      subTitle="Bora testar"
      resume="Terceiro teste"
        strongTerm="Nada como testar de novo"
      /> : null}

  </div>
  </>
  ) 
}
