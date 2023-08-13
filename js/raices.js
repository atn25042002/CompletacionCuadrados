function calcular(){
    let a= document.getElementById("coeficienteA").value;
    let b= document.getElementById("coeficienteB").value;
    let c= document.getElementById("coeficienteC").value;
    let lista= document.getElementById("lista");
    lista.innerHTML= "<ul id='lista'></ul>";
    lista.appendChild(create("li",`La ecuacion es ${a}x² + ${b}x + ${c} = 0`));
    a= Math.sqrt(a);
    let comp= b/(2*a);
    lista.appendChild(create("li",`Completamos cuadrados: (${a}x)² + ${b}x + ${c} = 0`));
    lista.appendChild(create("p",`(${a}x)² + ${b}x + ${comp}² + ${c} = 0 + ${comp}²`));
    let dif= comp*comp - c;
    lista.appendChild(create("p",`(${a}x)² + ${b}x + ${comp}² = ${comp}² - ${c} `));
    lista.appendChild(create("li",`Factorizamos: (${a}x + ${comp})² = ${dif}`));
}

function create(ent, cont){
    let element= document.createElement(ent);
    element.classList.add("paso");
    element.textContent=cont;
    return element;
}