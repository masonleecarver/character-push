console.log("main loaded");

const userList = document.getElementById("users");

async function getUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
            throw new Error(`error, status: ${response.status}`);
        }

        const users = await response.json();
        users.forEach(user => {
            const li = document.createElement("li");
            li.innerHTML = 
            `${user.name} | ${user.email}`;
            
            userList.appendChild(li);
        });
        
    } catch (error) {
        console.error("there was a problem: ", error);
    }
}

userList.textContent = "Loading users...";
getUsers();