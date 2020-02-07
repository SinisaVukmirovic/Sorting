const tableBodyElem = document.querySelector('.list-body');

function fetchHeroes() {
    dotaHeroes().then(results => {
        console.log(results);

        results.forEach(hero => {

            tableBodyElem.innerHTML += `
                <tr>
                    <td><img class="hero-img" src="https://api.opendota.com${hero.icon}" alt="Hero Icon" />${hero.localized_name}</td>
                    <td>${hero.base_str}</td>
                    <td>${hero.base_agi}</td>
                    <td>${hero.base_int}</td>
                </tr>
            `;
        });

        sortStats();


        const stats = Array.from(tableBodyElem.querySelectorAll('tr td:not(:first-child)'));

        // ============ TO DO ======================
        const sortedStats = stats.sort((a, b) => {});

        // stats.forEach(stat => {
        //     console.log(stat.innerHTML);
        // });

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

// ======== TO DO ==========
function sortStats() {
    
}