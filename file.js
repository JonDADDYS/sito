
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header  nav a');
 
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
 
        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
};




function inserisci(){
    let nome = document.getElementById("id_cliente_nome").value;
    let cognome = document.getElementById("id_cliente_cognome").value;
    let modello = document.getElementById("id_casco").value;
    let taglia = document.querySelector("id_taglia").value;

    aggiungiParagrafo(nome + " " + cognome + " " + modello + " " + taglia )

}

function aggiungiParagrafo(testo){
    let mioParagrafo = document.createElement("p")

    mioParagrafo.classList.add

    let tmp = document.createTextNode(testo)

    mioParagrafo.appendChild(tmp)

    let div = document.getElementById("container_tabella")

    div.appendChild(mioParagrafo)
}

function prendi_dati(){

    let input =[]

     input[0] = document.getElementById("id_cliente_nome").value

     input[1] = document.getElementById("id_cliente_cognome").value

     input[2] = document.getElementById("id_casco").value

     input[3] = document.getElementById("id_taglia").value

     aggiungiRiga(input)

}

function aggiungiRiga(informazioni){

    let riga = document.createElement("tr")

    for(let i =0; i<4; i++){

        let cella1 = document.createElement("td")

        let contenuto = document.createTextNode(informazioni[i])

        cella1.appendChild(contenuto)



    riga.appendChild(cella1)

}

let tbody = document.querySelector("#id_info")

tbody.appendChild(riga)


  



  
}


let bottone = document.getElementById("bottone_inserisci");

bottone.addEventListener("click", inserisci)
bottone.addEventListener("click", prendi_dati)