import Head from "next/head";
import Image from "next/image";
import styles from "@styles/Home.module.css";



export default function Home() {
  return (
    <>
     <header>
      <nav>
        <h1>LeiFácil</h1>
        <div className="procurar"><input type="text" placeholder="Oque você procura?" />
         <input type="submit" />
         </div>
         <li>
          <a href="Leis">Leis</a>
          <a href="Decretos">Decretos</a>
          <a href="Editais">Editais</a>
         </li>
      </nav>
     </header>
     <div className="carta">
      <h1>Carta aos leitores, público, clientes e cidadãos</h1>
      <p>
        Prezados,

O Diário Oficial do Estado de São Paulo está em um importante processo de transformação tecnológica, iniciado em 7 de março de 2024, conforme o Decreto Estadual nº 67.717/23.

Com a migração completa para o novo sistema, todas as edições passarão a ser inteiramente digitais, oferecendo uma experiência mais ágil, prática e segura para consulta e publicação nos diversos cadernos. O acesso ao Diário Oficial será realizado exclusivamente pelo site www.doe.sp.gov.br, onde todo o conteúdo estará disponível em formato digital, assegurando a manutenção da transparência nos atos publicados pelo Governo do Estado de São Paulo e suas esferas administrativas.

Atualmente, os cadernos Executivo – Seções I, II e III, Legislativo, Jucesp, Municípios e Empresarial já são disponibilizados apenas na nova plataforma (www.doe.sp.gov.br). Estamos empenhados em expandir essa modernização para os demais cadernos, garantindo uma experiência ainda mais eficiente para o público e os órgãos publicantes.

Nosso compromisso é com a inovação, a modernidade e a agilidade, sempre em benefício da população e da administração pública.

Agradecemos a sua confiança.

Companhia de Processamento de Dados do Estado de São Paulo - Prodesp</p>
     </div>

     <footer>
  <img 
    src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Bras%C3%A3o_do_estado_de_S%C3%A3o_Paulo.svg/1762px-Bras%C3%A3o_do_estado_de_S%C3%A3o_Paulo.svg.png"
    height="100vh" 
    width="150vh%" 
    alt="Logo do Governo do Estado de São Paulo"
  />
</footer>

    </>
  );
}

