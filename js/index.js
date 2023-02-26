const loadPhones = async () => {
    const URL = `https://openapi.programming-hero.com/api/phones?search=iphone`;
    const res = await fetch(URL);
    const data = await res.json();
    displayPhones(data);
}

const displayPhones = phones => {
    console.log(phones);
}



loadPhones()