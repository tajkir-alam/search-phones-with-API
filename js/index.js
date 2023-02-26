const loadPhones = async (search) => {
    const URL = `https://openapi.programming-hero.com/api/phones?search=${search}`;
    const res = await fetch(URL);
    const data = await res.json();
    displayPhones(data.data);
}

const displayPhones = phones => {
    const cardContainer = document.getElementById('card-container');
    cardContainer.textContent = "";
    phones.forEach(phone => {
        console.log(phone)
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('col');


        
        cardDiv.innerHTML = `
        <div class="card h-100 border-0 shadow">
            <div class="text-center py-3">
                <img src="${phone.image}" class="card-img-top w-50" alt="...">
            </div>
            <div class="card-body">
                <h5 class="card-title">${phone.phone_name}</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <button class="btn btn-primary">Details</button>
            </div>
            <div class="card-footer">
                <small class="text-muted">Last updated 3 mins ago</small>
            </div>
        </div>
        `   
        cardContainer.appendChild(cardDiv);
    });
}

const btnSearch = search => {
    const searchField = document.getElementById('search-field').value;
    loadPhones(searchField)
}

document.getElementById('search-field').addEventListener('keypress', function(e){
    if(e.key == 'Enter'){
        btnSearch();
    }
})

loadPhones('iphone')