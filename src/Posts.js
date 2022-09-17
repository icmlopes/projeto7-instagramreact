function PerfilPost(props) {
    return (
        <li class="usuario">
            <img src={props.imagem} alt="Foto" />
            <p>{props.nome}</p>
        </li>
    )
}

function Post(props) {
    return (
        <div class="conteudo">
            <img src={props.conteudo} alt="Foto feed" />
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
        { nome: "meowed", imagem: "assets/img/meowed.svg", conteudo: "assets/img/gato-telefone.svg" },
        { nome: "barked", imagem: "assets/img/barked.svg", conteudo: "assets/img/dog.svg" }
    ]

    const listaCurtida = [
        { nick: "respondeai", perfil: "assets/img/respondeai.svg" },
        { nick: "adorable_animals", perfil: "assets/img/adorable_animals.svg" }
    ]

    return (
        <ul class="posts">
            <div class="post">
                <div class="topo">

                    {listaPost.map((props) => <PerfilPost imagem={props.imagem} nome={props.nome} />)}

                    <div class="acoes">
                        <ion-icon name="ellipsis-horizontal"></ion-icon>
                    </div>
                </div>
                <div>
                    {listaPost.map((props) => <Post conteudo={props.conteudo} />)}
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

                    {listaCurtida.map((props) => <Curtida perfil={props.perfil} nick={props.nick} />)}

                </div>
            </div>
        </ul>
    )
}

/* <div class="post">
            <div class="topo">
              <div class="usuario">
                <img src="assets/img/meowed.svg" alt="Foto perfil"/>
                meowed
              </div>
              <div class="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
              </div>
            </div>

            <div class="conteudo">
              <img src="assets/img/gato-telefone.svg" alt="Foto perfil"/>
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

              <div class="curtidas">
                <img src="assets/img/respondeai.svg" alt="Foto perfil"/>
                <div class="texto">
                  Curtido por <strong>respondeai</strong> e <strong>outras 101.523 pessoas</strong>
                </div>
              </div>
            </div>
          </div>

          <div class="post">
            <div class="topo">
              <div class="usuario">
                <img src="assets/img/barked.svg" alt="Foto perfil"/>
                barked
              </div>
              <div class="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
              </div>
            </div>

            <div class="conteudo">
              <img src="assets/img/dog.svg" alt="Foto perfil"/>
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

              <div class="curtidas">
                <img src="assets/img/adorable_animals.svg" alt="Foto perfil"/>
                <div class="texto">
                  Curtido por <strong>adorable_animals</strong> e <strong>outras 99.159 pessoas</strong>
                </div>
              </div>
            </div>
          </div> */