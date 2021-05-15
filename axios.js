//const axios = require('axios');  //is nodejs voor in console

async function fetchData() {
    try {
        const result = await axios.get('https://api.chucknorris.io/jokes/random');
        console.log(result.data.value);

//de container moet in de async functie staan anders werkt het niet, de waarde bestaat niet buiten de functie
        const message1 = document.createElement('p'); // creëer een html element, paragraaf in dit geval.
//message1.setAttribute('class','norris'); // ken een css klasse toe aan dit element
        message1.textContent = (result.data.value); // declareer welke javascript output gebruikt gaat worden
        container1.appendChild(message1); // voeg toe "append"


    } catch(e) {
        console.error(e);
    }
}

const joke = fetchData();

const container1 = document.getElementById("chuck"); // target een html element via id
// const message1 = document.createElement('p'); // creëer een html element, paragraaf in dit geval.
// //message1.setAttribute('class','norris'); // ken een css klasse toe aan dit element
// message1.textContent = joke; // declareer welke javascript output gebruikt gaat worden
// container1.appendChild(message1); // voeg toe "append"

///
