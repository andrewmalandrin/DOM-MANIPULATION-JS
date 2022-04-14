var titleElement = createElements('title','JS -> DOM - Project')
document.head.appendChild(titleElement)
//titleElement.innerHTML = "JS -> DOM - Project"

var headerElement = createElements('header')
var h1Element = createElements("h1", "Boa noite")

var mainElement = createElements("main")
var pElement = createElements("p", "Este é o main")
var buttonElement = createElements("button", "Este é o main")
buttonElement.addEventListener('click', changeP2)
var p2Element = createElements("p")
p2Element.id = "p2"
p2Element.style.color = "#FF0000"

var footerElement = createElements("footer")
var pElementFooter = createElements("p", "Este é o footer")



function createElements(elementType, inner){
    var createdElement = document.createElement(elementType) 
    if(typeof inner !== "undefined"){
        createdElement.innerHTML = inner
    }
    return createdElement
}

function changeP2(){
    document.getElementById("p2").innerHTML = "clicou"
}

function organizeBodyStructure(headerElement, h1Element, mainElement, pElement, buttonElement, p2Element, footerElement, pElementFooter){
        
    var documentBody = document.createElement('div')
        documentBody.class = "container"
        
        footerElement.appendChild(pElementFooter)
        
        mainElement.appendChild(pElement)
        mainElement.appendChild(buttonElement)
        mainElement.appendChild(p2Element)
        
        headerElement.appendChild(h1Element)
        documentBody.appendChild(headerElement)
        documentBody.appendChild(mainElement)
        documentBody.appendChild(footerElement)

        return documentBody

}

console.log("rodando")
const rootStructure = organizeBodyStructure(headerElement, h1Element, mainElement, pElement, buttonElement, p2Element, footerElement, pElementFooter)

document.body.appendChild(rootStructure)