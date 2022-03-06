const md5 = 'e470984b1b68a3023c424cc1a59bd103';
const apiKey = 'f1499a6b93aa9419287da2c12077cadf';
const timeStamp = '1646595976';

fetch(`https://gateway.marvel.com:443/v1/public/characters?ts=${timeStamp}&apikey=${apiKey}&hash=${md5}&limit=100`)
.then((response) => {
    return response.json();
})
.then((jsonParsed) => {
    console.log(jsonParsed)
    const container = document.querySelector('.container');

    jsonParsed.data.results.forEach(element =>{
        const srcImagem = element.thumbnail.path + '.' + element.thumbnail.extension;
        const nameHero = element.name;


        createDivHero(srcImagem , nameHero , container)
    });
})


function createDivHero(srcImagem , nameHero , divToAppend){
    const divPai = document.createElement('div')
    const divFilho = document.createElement('div')
    const textName = document.createElement('text')
    const img = document.createElement('img')

    img.src = srcImagem;
    textName.textContent = nameHero;

    divFilho.appendChild(textName);
    divFilho.appendChild(img);
    divPai.appendChild(divFilho);
    divToAppend.appendChild(divPai);

    divPai.classList.add("personagens");
    divFilho.classList.add("personagem")
    textName.classList.add("textName")
}