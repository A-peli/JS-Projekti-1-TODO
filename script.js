//muutetaan DOM -elementit muuttujiksi myöhempää käyttöä varten
const newTask = document.getElementById("task");
const addButton = document.getElementById("add-button");
const list = document.getElementById("list");
const message = document.getElementById("message")


/* jotenki näin?:
1. Tarkista käyttäjän syöttämä teksti
    jos tyhjä, error
2. luo tyhjä list item
3. lisää käyttäjän syöttämä teksti list itemiin
4. syötä list item listaan
*/
function addItem() { //lisätään tehtävä listaan
    const taskText = newTask.value;
    console.log(task.value);
    if (taskText === '') { //Tarkistetaan onko tehtävä tyhjä
        errorMsg("Tehtävä ei voi olla tyhjä!")
        return;
    }
    const li = document.createElement("li");
    li.textContent = taskText;
    list.append(li);
    successMsg("Tehtävä lisätty!")
}
/* halutaanko poistaa ylim. merkkejä? esim ylim.välilyönnit  */


function errorMsg(msg){ //antaa käyttäjälle punaisen error -viestin!
    message.textContent = msg;
    message.style.color = "red"
}

function successMsg(msg) {
    message.textContent = msg;
    message.style.color = "green"
}
