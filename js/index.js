const loadPhones = async (search, dataLimit) => {
    const URL = `https://openapi.programming-hero.com/api/phones?search=${search}`;
    const res = await fetch(URL);
    const data = await res.json();
    displayPhones(data.data, dataLimit);
}

const displayPhones = (phones, dataLimit) => {
    const cardContainer = document.getElementById('card-container');
    cardContainer.textContent = "";

    // No Phone Found Message
    const noPhone = document.getElementById('no-phone');
    if(phones.length === 0){
        noPhone.classList.remove('d-none')
    }
    else{
        noPhone.classList.add('d-none')
    }
    
    // Show All Button
    const showAllBtn = document.getElementById('show-all');
    if(dataLimit && phones.length >= 3){
        phones = phones.slice(0, 3);
        showAllBtn.classList.remove('d-none');
    }
    else{
        showAllBtn.classList.add('d-none');
    }

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
    document.getElementById('spinner').classList.add('d-none');
}

// Loading animation (Spinner) start
const loadingAnimation = (dataLimit) => {
    document.getElementById('spinner').classList.remove('d-none');
    const searchField = document.getElementById('search-field').value;
    loadPhones(searchField, dataLimit)
}

const btnSearch = search => {
    loadingAnimation(3);
}

document.getElementById('search-field').addEventListener('keypress', function(e){
    if(e.key == 'Enter'){
        btnSearch();
    }
})

document.getElementById('title').addEventListener('click', function(){
    loadPhones('iphone');
})

document.getElementById('show-all').addEventListener('click', function(){
    loadingAnimation();
})

loadPhones('iphone')