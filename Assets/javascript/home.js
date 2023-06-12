let card = document.getElementById ("cards")

function cargarCards(event) {
return ` 
<div class="card borderPink backPink mt-3 mb-2" style="width: 18rem;">
    <img src="${event.image}" class="card-img-top" alt="${event.name}">
    <div class="card-body">
        <h5 class="card-title">${event.name}</h5>
        <p class="card-text">${event.description}</p>
        <div class="d-flex justify-content-evenly centerI">
            <p class="price">Price: $${event.price}</p>
            <a href="/Assets/pages/details.html?id=${event._id}" class="btn btn-primary">More details</a>
        </div>
    </div>
</div>`
}

function cargarDatos (events, index){
    let template = ""
    for (let event of events) {
        template += cargarCards(event)
    }
    index.innerHTML = template
}

cargarDatos(data.events, card)

const categories = data.events.map(data => data.category)
const categoriesNoRepeat = new Set (categories)
const catList = Array.from(categoriesNoRepeat)

console.log(catList)

const checkContainer = document.getElementById("category-check")

function checkbox(category){
    return `
    <label for="${category}">${category}</label>
    <input class="me-3" type="checkbox" id="${category}" name="Category" value="${category}">
    `
}

function showCheckbox(catList, html){
    let checkboxTemplate = ""
    for (let check of catList){
        checkboxTemplate += checkbox(check)
    }
    html.innerHTML = checkboxTemplate
}

showCheckbox(catList, checkContainer)

let eventCheck = document.querySelectorAll("input[type=checkbox]")
let checkList = []


for ( let i=0; i < eventCheck.length; i++){
    eventCheck[i].addEventListener("change", function(){
        checkList = []
        for (i=0; i < eventCheck.length; i++){
            if (eventCheck[i].checked){
                checkList.push(eventCheck[i].value)
                console.log(checkList)
            }
            else if (checkList.length === 0){
                cargarDatos(data.events, card)  
            }
            else{
                const filter = data.events.filter(cat => checkList.includes(cat.category))
                cargarDatos(filter, card)
            }
        }

    })
} 

console.log(eventCheck) 
