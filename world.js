document.addEventListener('DOMContentLoaded', function() {

    const lookupButton=document.getElementById('lookup');
    const rDiv=document.getElementById('result');
    const country=document.getElementById('country');
    const citiesButton=document.getElementById('cities');


    lookupButton.addEventListener('click', function() {

        const countryValue=country.value;
        const url = `world.php?country=${encodeURIComponent(countryValue)}`;

        fetch(url)

            .then(aj_resp => aj_resp.text())
            .then(html_results=> {
                rDiv.innerHTML =html_results;
            })
            .catch(e=>{ //just to catch in case there's an error
                rDiv.innerHTML = "<p>Error: Unable to load data!</p>";
                console.error(e);
            });

    });

    citiesButton.addEventListener('click', function() {
        const countryValue=country.value;
        const url = `cities.php?country=${encodeURIComponent(countryValue)}`;

        fetch(url)
        .then(aj_resp => aj_resp.text())
        .then(html_results => {
            rDiv.innerHTML= html_results;
        })
        .catch (e=>{  //again, just to catch in case there's an error
            rDiv.innerHTML = "<p>Error: Unable to load data!</p>";
            console.error(e);
        });
    });
});
