/*Ejercicio 1:

Añadir dos elementos `<li>` a un `<ul>` (Desde JS), y unirlos al DOM de tu página HTML
    Métodos recomendados:
    - innerHTML
    - appendChild()
    - createElement()
    - createAttribute()
    - createTextNode()

*/


function spawn(){
    let main = document.querySelector("#mainContainer")
    
    let lista = document.createElement("ul")

    let classAtr = document.createAttribute("class")
    classAtr.value = "cList"
    

    //uno usando innner html
    let li1 = document.createElement("li")
    li1.innerHTML="patatas"

    //otro usando nodos
    let li2 = document.createElement("li")
    let node = document.createTextNode("nodo")

    li1.setAttributeNode(classAtr)

    let clone = classAtr.cloneNode()

    li2.setAttributeNode(clone)
    li2.appendChild(node)

    lista.appendChild(li1)
    lista.appendChild(li2)

    main.appendChild(lista)

}

/*Ejercicio 1 bis:
Nota (ejercicio avanzado): pensar el caso de añadir datos de un array de tareas de tamaño indeterminado
 (los datos ya están dentro del array)
["comprar","barrer","alimentar gato","colada"]*/
 function spawn2() {

    let main = document.querySelector("#mainContainer")
    
    let lista2 = document.createElement("ul")

    let elementos = ["comprar","barrer","alimentar gato","colada"]

    elementos.forEach(element => {
        let liN = document.createElement("li")
        let node = document.createTextNode(element)
        liN.appendChild(node)
        lista2.appendChild(liN)
    });
    
    main.appendChild(lista2)
 }

		
window.onload = () => {

	let boton = document.getElementById("creationTrigger")

	boton.addEventListener("click",superSpawn)

    function superSpawn() {
        spawn()
        spawn2()
    }

}
