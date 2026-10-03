const template = document.getElementById("character-card-temp");

function populateList(list, listElement) {
    
    list.forEach((char) => {
        const clone = template.content.cloneNode(true);
        const [link, head, age, type] = clone.querySelectorAll("a, h2, p, p");

        link.href = `/character_pages/?char=${char.id}`;
        head.textContent = `${char.name}`;

        age.textContent = `Age: ${char.age}`;
        type.textContent = `Personality Type: ${char.mbti}`;

        listElement.appendChild(clone);

    })
}

export default class CharacterList {
    constructor(dataSource, listElement) {
        this.dataSource = dataSource;
        this.listElement = listElement;
    }

    async init() {
        populateList(this.dataSource, this.listElement);
    }
}