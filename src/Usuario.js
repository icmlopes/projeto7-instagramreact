import React from "react"

export default function Usuario() {

    

    const [nome, setNome] = React.useState("catanacomics")
    const [foto, setFoto] = React.useState("assets/img/catanacomics.svg")

    function alterarFoto(){
        const fotoPrompt = prompt("Link da foto aqui!")
        setFoto(fotoPrompt)
    }

    return (
        <div class="usuario">
            <img onClick={alterarFoto} src={foto}/>
            <div class="texto">
                <strong>catanacomics</strong>
                <span>
                    {nome}
                    <button onClick={() => setNome(prompt("Insira seu nome"))}><ion-icon name="pencil"></ion-icon></button>
                </span>
            </div>
        </div>
    )
}