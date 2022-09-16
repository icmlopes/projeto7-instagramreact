function Story(props) {
    return (
        <div>
            <li class="imagem">
                <img src={props.imagem} alt="Foto perfil" />
            </li>
            <li class="usuario">
                <p>{props.nome}</p>
            </li>
        </div>
    )
}

export default function Stories() {

    const listaStory = [
        { nome: "9gag", imagem: "assets/img/9gag.svg" },
        { nome: "meowed", imagem: "assets/img/meowed.svg" },
        { nome: "barked", imagem: "assets/img/barked.svg" },
        { nome: "nathanwpylestrangeplanet", imagem: "assets/img/nathanwpylestrangeplanet.svg" },
        { nome: "wawawicomics", imagem: "assets/img/wawawicomics.svg" },
        { nome: "respondeai", imagem: "assets/img/respondeai.svg" },
        { nome: "filomoderna", imagem: "assets/img/filomoderna.svg" },
        { nome: "memeriagourmet", imagem: "assets/img/memeriagourmet.svg" }
    ]

    return (
        <ul class="stories">
            <div className="story">
                {listaStory.map((props) => <Story imagem={props.imagem} nome={props.nome}/>)}
            </div>

            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </ul>
    )
}