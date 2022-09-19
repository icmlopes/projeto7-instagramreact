function SugestaoSeguir(props) {
    return (
        <div class="sugestao">
            <li class="usuario">
                <img src={props.imagem} alt="Foto perfil" />
                <div class="texto">
                    <p class="nome">{props.nome}</p>
                    <p class="razao">{props.razao}</p>
                </div>
            </li>
            <div class="seguir">Seguir</div>
        </div>
    )
}

export default function Sugestoes() {

    const listaSugestoes = [
        { nome: "bad.vibes.memes", imagem: "assets/img/bad.vibes.memes.svg", razao: "Segue você" },
        { nome: "chibirdart", imagem: "assets/img/chibirdart.svg", razao: "Segue você" },
        { nome: "razoesparaacreditar", imagem: "assets/img/razoesparaacreditar.svg", razao: "Novo no instagram" },
        { nome: "adorable_animals", imagem: "assets/img/adorable_animals.svg", razao: "Segue você" },
        { nome: "smallcutecats", imagem: "assets/img/smallcutecats.svg", razao: "Segue você" },
    ]

    return (
        <ul class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>



            {listaSugestoes.map((props) => <SugestaoSeguir imagem={props.imagem} nome={props.nome} razao={props.razao} />)}

        </ul>   

             

            /* <div class="sugestao">
                <div class="usuario">
                    <img src="assets/img/bad.vibes.memes.svg" alt="Foto perfil"/>
                    <div class="texto">
                        <div class="nome">bad.vibes.memes</div>
                        <div class="razao">Segue você</div>
                    </div>
                </div>

                <div class="seguir">Seguir</div>
            </div>

            <div class="sugestao">
                <div class="usuario">
                    <img src="assets/img/chibirdart.svg" alt="Foto perfil"/>
                    <div class="texto">
                        <div class="nome">chibirdart</div>
                        <div class="razao">Segue você</div>
                    </div>
                </div>

                <div class="seguir">Seguir</div>
            </div>

            <div class="sugestao">
                <div class="usuario">
                    <img src="assets/img/razoesparaacreditar.svg" alt="Foto perfil"/>
                    <div class="texto">
                        <div class="nome">razoesparaacreditar</div>
                        <div class="razao">Novo no Instagram</div>
                    </div>
                </div>

                <div class="seguir">Seguir</div>
            </div>

            <div class="sugestao">
                <div class="usuario">
                    <img src="assets/img/adorable_animals.svg" alt="Foto perfil"/>
                    <div class="texto">
                        <div class="nome">adorable_animals</div>
                        <div class="razao">Segue você</div>
                    </div>
                </div>

                <div class="seguir">Seguir</div>
            </div>

            <div class="sugestao">
                <div class="usuario">
                    <img src="assets/img/smallcutecats.svg" alt="Foto perfil"/>
                    <div class="texto">
                        <div class="nome">smallcutecats</div>
                        <div class="razao">Segue você</div>
                    </div>
                </div>

                <div class="seguir">Seguir</div>
            </div> */
    )
}