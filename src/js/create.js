import { loadHeaderFooter } from "./utils.js";

loadHeaderFooter();

document.getElementById("character-form").addEventListener('submit', async function(event) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(event.target);
    const dataObject = Object.fromEntries(formData.entries());
    
    try {
        const res = await fetch("/api/characters", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(dataObject)
        });

        if (!res.ok) {
            throw new Error(`HTTP error: ${res.status}`);
        }

        const result = await res.json();
        console.log("character saved", result);
        
        window.location = "../create.html";

    } catch (err) {
        console.log(`Error saving character: ${err}`);
    }

    

})