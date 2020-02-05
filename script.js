const containerElem = document.querySelector('.container');

function fetchHeroes() {
    dotaHeroes().then(results => {
        console.log(results);

        results.forEach(hero => {
            containerElem.innerHTML += `
                <div class="hero">
                    <div class="hero-name">
                        <h3>${hero.localized_name}</h3>
                    </div>
                    <div class="hero-img">
                        <img class="hero-img" src="https://api.opendota.com${hero.img}" alt="Hero Avatar" />
                    </div>
                    <div class="stats">
                        <h4>STR: <span>${hero.base_str}</span></h4>
                        <h4>AGI: <span>${hero.base_agi}</span></h4>
                        <h4>INT: <span>${hero.base_int}</span></h4>
                    </div>
                </div>
            `;
        });
        
        // ============ TO DO ===============
        const strs = Array.from(containerElem.querySelectorAll('h4:nth-child(1) span'));
        const agis = Array.from(containerElem.querySelectorAll('h4:nth-child(2) span'));
        const ints = Array.from(containerElem.querySelectorAll('h4:nth-child(3) span'));
        
        strs.forEach(str => {
            console.log(str.innerHTML);
        });

    })
    .catch(err => {
        console.log(err);
    });
}

async function dotaHeroes() {
    let apiUrl = 'https://api.opendota.com/api/heroStats';

    let response = await fetch(apiUrl);
    let data = await response.json();

    return data;
}

fetchHeroes();

function finished() {
    console.log('all done')
}