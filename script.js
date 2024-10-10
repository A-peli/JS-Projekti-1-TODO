//muutetaan DOM -elementit muuttujiksi myöhempää käyttöä varten
const newTask = document.getElementById("task");
const addButton = document.getElementById("add-button");
const list = document.getElementById("list");
const message = document.getElementById("message");

/* jotenki näin?:
1. Tarkista käyttäjän syöttämä teksti
    jos tyhjä, error
2. luo tyhjä list item
3. lisää käyttäjän syöttämä teksti list itemiin
4. syötä list item listaan
*/
function errorMsg(msg){ //antaa käyttäjälle punaisen error -viestin!
    message.textContent = msg;
    message.style.color = "red";
}
function successMsg(msg) {
    message.textContent = msg;
    message.style.color = "green"
}

function addItem() { //lisätään tehtävä listaan
    const taskText = newTask.value;
    if (taskText === '') { //Tarkistetaan onko tehtävä tyhjä
        errorMsg("Tehtävä ei voi olla tyhjä!")
        return;
    }
    if (taskText.length < 3) { //Tarkistetaan onko tehtävä tyhjä
        errorMsg("Tehtävän tulee olla vähintään 3 merkkiä!")
        return;
    }

    const li = document.createElement("li");
    li.textContent = taskText;
    
    //tehdään event, jolla saadaan klikattua tehtävä tehdyksi
    li.addEventListener("click", function() {
        li.classList.toggle("done"); //togglee luokan done päältä tai pois
    });
    
    //luodaan tehtävälle poistonappi
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.className = "delete-btn"

    //poistetaan tehtävä
    deleteBtn.addEventListener("click", function(event){
        event.stopPropagation(); //Tämän avulla tehtävää ei merkitä tehdyksi, kun poista -nappia painetaan
        li.remove(); 
    });

    li.append(deleteBtn);
    list.append(li);
    successMsg("Tehtävä lisätty!");
}
/* halutaanko poistaa ylim. merkkejä? esim ylim.välilyönnit  */

//listan nimen muokkauksessa käytettävät elementit haettuna ID:llä
const listName = document.getElementById("listname");
const inputField = document.getElementById("editListName");
const submitButton = document.getElementById("submitButton");

function changeListName() { //otsikkoa painaessa otsikko muuttuu tekstikentäksi, jossa voit muokata otsikkoa
    //muutetaan tekstinsyöttö ja nappi näkyväksi
    inputField.style.display = "inline";
    submitButton.style.display = "inline";
    inputField.value = listName.textContent; // asetetaan input-kenttään nykyinen otsikko valmiiksi muokattavaksi
    listName.style.display = "none";

    inputField.focus(); //Laitetaan laatikko focusiin, jotta voit suoraan kirjoittaa asioita, kun painat otsikkoa
}

function submitListName() {
    const listName = document.getElementById("listname");
    const inputField = document.getElementById("editListName");
    const submitButton = document.getElementById("submitButton");
    if (inputField.value === '' || inputField.value.length < 3) { //Tarkistetaan onko kenttä tyhjä tai alle kolmen merkin pituinen
        console.log(inputField.textContent)
        errorMsg("Nimen minimipituus on 3 merkkiä!")
        return;
    }
    // Päivitetään otsikko ja näytetään h2, piilotetaan input-kenttä ja nappi
    listName.textContent = inputField.value;
    listName.style.display = "block";
    inputField.style.display = "none";
    submitButton.style.display = "none";
}