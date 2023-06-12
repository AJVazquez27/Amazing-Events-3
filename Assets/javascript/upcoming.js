let currentDate = new Date(data.currentDate)

for (let i = 0; i < data.events.length; i++) { 
    let eventdate = new Date(data.events[i].date)

    if (eventdate > currentDate) {
        let upcoming = document.getElementById("cards")
            upcoming.innerHTML += ` 
            <div class="card borderPink backPink mt-3 mb-2" style="width: 18rem;">
                <img src="${data.events[i].image}" class="card-img-top" alt="${data.events[i].name}">
                <div class="card-body">
                    <h5 class="card-title">${data.events[i].name}</h5>
                    <p class="card-text">${data.events[i].description}</p>
                    <div class="d-flex justify-content-evenly centerI">
                        <p class="price">Price: $${data.events[i].price}</p>
                        <a class="btn btn-primary href="../pages/details.html?id=${events._id}">More details</a>
                    </div>
                </div>
            </div>`
        }
}
