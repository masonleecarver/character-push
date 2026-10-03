import { loadHeaderFooter, getLocalStorage, setLocalStorage, generateID } from "./utils.js";

loadHeaderFooter();

document.getElementById("character-form").addEventListener('submit', async function(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const dataObject = Object.fromEntries(formData.entries());

    const character = {
        id: generateID(),
        ...dataObject
    }

    console.log(`Attemping to add character...`)
    try {

        let char_list = getLocalStorage("char-list") || [];
        char_list.push(character);
        setLocalStorage("char-list", char_list);

        console.log("character saved succesfully");
        
        // window.location = "../create.html";

    } catch (err) {
        console.log(`Error saving character: ${err}`);
    }

})