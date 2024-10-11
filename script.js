//muutetaan DOM -elementit muuttujiksi myöhempää käyttöä varten
const taskInput = document.getElementById("task"); //tehtävien syöttökenttä
const addButton = document.getElementById("add-button"); //tehtävien lisäysnappi
const list = document.getElementById("list"); //tehtävälista
const message = document.getElementById("message"); //käyttäjälle lähetettävien viestien kenttä
const taskCounter = document.getElementById("task-counter"); //tehtävälaskuri

//listan nimen muokkauksessa käytettävät elementit
const listName = document.getElementById("listname"); //listan nimi (h2)
const inputField = document.getElementById("editListName"); //listan muokkauskenttä
const submitButton = document.getElementById("submitButton"); //uuden nimen tallentamisnappi

function errorMsg(msg){ //antaa käyttäjälle punaisen error -viestin!
    message.textContent = msg;
    message.style.color = "red";
}
function successMsg(msg) { //vihreä success -viesti
    message.textContent = msg;
    message.style.color = "green"
}

function addItem() { //lisätään tehtävä listaan
    const taskText = taskInput.value;
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
        updateTaskCounter(); //päivitetään tehtävälaskuri
    });
    
    //luodaan tehtävälle poistonappi
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.className = "delete-btn"

    //poistetaan tehtävä
    deleteBtn.addEventListener("click", function(event){
        event.stopPropagation(); //Tämän avulla tehtävää ei merkitä tehdyksi, kun poista -nappia painetaan
        li.remove(); 
        updateTaskCounter(); //päivitetään tehtävälaskuri
    });

    li.append(deleteBtn);
    list.append(li);
    successMsg("Tehtävä lisätty!");
    updateTaskCounter(); //päivitetään tehtävälaskuri
}
/* halutaanko poistaa ylim. merkkejä? esim ylim.välilyönnit  */



function changeListName() { //otsikkoa painaessa otsikko muuttuu tekstikentäksi, jossa voit muokata otsikkoa
    //muutetaan tekstinsyöttö ja nappi näkyväksi
    inputField.style.display = "inline";
    submitButton.style.display = "hidden";
    inputField.value = listName.textContent; // asetetaan input-kenttään nykyinen otsikko valmiiksi muokattavaksi
    listName.style.display = "none";

    inputField.focus(); //Laitetaan laatikko focusiin, jotta voit suoraan kirjoittaa asioita, kun painat otsikkoa
    inputField.select() //valitaan laatikon sisältö helpottamaan sen muuttamista
}

function submitListName() { //päivittää syötetyn listan nimen
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

function updateTaskCounter() { //päivittää tehtävälaskurin
    const allTasks = document.querySelectorAll("#list li").length; // Kaikkien tehtävien määrä
    const completedTasks = document.querySelectorAll("#list li.done").length; // Suoritettujen tehtävien määrä
    taskCounter.textContent = `Suoritetut tehtävät: ${completedTasks}/${allTasks}`; // Päivitetään laskuri
}