
const events = data.events

 const $contenedor = document.getElementById("card-det")

 const params = new URLSearchParams(location.search)// es el pedazo de informacion extraida de la url

 const id = params.get("id") // el id (parametro) extraido de la info saca de la url
 
 const idEncontrado = events.find(elemento => elemento._id === id)

const idFind = events.find( elemento => elemento._id === id )

$contenedor.innerHTML =`
        <div class="d-flex p-5">
                <img class="detImg" src="${idFind.image}" alt="${idFind.name}"></img>
                <div class="cont ms-5">
                    <h1>${idFind.name}</h1>
                    <h2>${idFind.date}</h2>
                    <p class="detP">${idFind.description}</p>
                    <p class="detP">Place: ${idFind.place}</p>
                    <p class="detP">Capacity:${idFind.capacity}</p>
                    <p class="detP">Assistance:${idFind.assistance}</p>
                    <p class="detP">Price: $${idFind.price}</p>
                </div>
        </div>
`
