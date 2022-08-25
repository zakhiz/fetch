const divPersonajes = document.getElementById("divPersonajes")
fetch('./json/personajes.json')
.then(response => response.json())
.then(personajes=>{
    personajes.forEach((personajes,indice) => {
        divPersonajes.innerHTML += `
          <div class="card" id="personaje${indice}" style="width: 18rem; margin: 5px;">
            <img src="./img/${personajes.img}" class="card-img-top" alt="...">
            <div class="card-body">
             <h5 class="card-title">${personajes.nombre}</h5>
            <p class="card-text">${personajes.tipo}</p>
            <p class="card-text">hp: ${personajes.vida}</p>
            <p class="card-text">Estilo: ${personajes.tipoDeDaño}</p>
            <p class="card-text">Daño: ${personajes.daño}</p>
            </div>
           </div>
        `
    });
})