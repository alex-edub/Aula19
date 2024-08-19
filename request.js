const url=
"https://servicodados.ibge.gov.br/api/v1/localidades/estados/ce/municipios"
const cidades = document.getElementById("cidadesSelect");
function criarEAddElemento(cidade){
    const cidadeOption = document.createElement("option");
    var cidadeNome = document.createTextNode(cidade.nome);
    cidadeOption.appendChild(cidadeNome);
    cidadesSelect.appendChild(cidadeOption);
}
async function buscarCidadesCE(){
    try{
        const resposta=await fetch(url);
        const json = await resposta.json();

        json.forEach(criarEAddElemento);
    }catch(error){
        alert ("Não foi possível carregar as cidades");
        console.log(error);
    }
    }
buscarCidadesCE()