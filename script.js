const bodyElem = document.querySelector('.list-body');

function fetchHeroes() {
    dotaHeroes().then(results => {
        console.log(results);

        results.forEach(hero => {

            bodyElem.innerHTML += `
                <tr>
                    <td><img class="hero-img" src="https://api.opendota.com${hero.icon}" alt="Hero Avatar" />${hero.localized_name}</td>
                    <td>${hero.base_str}</td>
                    <td>${hero.base_agi}</td>
                    <td>${hero.base_int}</td>
                </tr>
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