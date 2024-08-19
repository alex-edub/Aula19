function pegarValor() {
    return myInput.value;
    // myInput.value;
}
const createButton = (text, callback) => {
    const button = document.createElement("span");
    button.textContent = text;
    button.addEventListener("click", callback);
    return button;
}
function CriarElementoLI(texto) {
    const liElemento = document.createElement("li");
    liElemento.textContent = texto;

    const checkButton = createButton("V", () => 
    liElemento.classList.toggle("check"));
    liElemento.appendChild(checkButton);
    return liElemento;
}

function LimparInput() {
    document.getElementById("myInput").value = "";
}
function novoItem() {
    const valorInput = pegarValor();
    if (valorInput.trim() !== "") {
        const liElemento = CriarElementoLI(valorInput);
        document.getElementById("myUL").appendChild(liElemento);
        LimparInput();
    } else {
        alert("Digite um valor antes de adicionar à lista.")

    }
}