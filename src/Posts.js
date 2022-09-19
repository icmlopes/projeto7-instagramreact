import React from "react";

function PerfilPost(props) {
  console.log(props.index)

  return (
    <div class="post">
      <div class="topo">

        <li class="usuario">
          <img src={props.imagem} alt="Foto" />
          <p>{props.nome}</p>
        </li>

        <div class="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>
  
      <div class="conteudo">
      <img src={props.conteudo} alt="Foto feed" />
      </div>

      <div class="fundo">
          <div class="acoes">
            <div>
              <ion-icon name="heart-outline"></ion-icon>
              <ion-icon name="chatbubble-outline"></ion-icon>
              <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
            <div>
              <ion-icon name="bookmark-outline"></ion-icon>
            </div>
          </div>

          <Curtida perfil={props.perfilCurtida} nick={props.curtida} />

        </div>

    </div>
  )
}

function Curtida(props) {
  return (
    <div class="curtidas">
      <img src={props.perfil} alt="Foto perfil" />
      <li class="texto">
        Curtido por <strong>{props.nick}</strong> e <strong>outras 101.523 pessoas</strong>
      </li>
    </div>
  )
}

export default function Posts() {

  const listaPost = [
    { nome: "meowed", imagem: "assets/img/meowed.svg", conteudo: "assets/img/gato-telefone.svg", curtida: "respondeai", perfilCurtida: "assets/img/respondeai.svg" },
    { nome: "barked", imagem: "assets/img/barked.svg", conteudo: "assets/img/dog.svg", curtida: "adorable_animals", perfilCurtida: "assets/img/adorable_animals.svg" }
  ]

  return (
    <ul class="posts">
      
        {listaPost.map((infoPost) => <PerfilPost imagem={infoPost.imagem} nome={infoPost.nome} conteudo={infoPost.conteudo} curtida={infoPost.curtida} perfilCurtida={infoPost.perfilCurtida}/>)}

    </ul>
  )
}