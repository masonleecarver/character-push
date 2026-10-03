import { getLocalStorage, setLocalStorage } from "./utils.js";

export default class CharacterDetails {

    constructor(charID, dataSource) {
        this.charID = charID;
        this.char = {};
        this.dataSource = dataSource;
    }

    init() {
        this.char = this.findElementById(this.charID);
        console.log(this.char.name);
        this.renderCharDetails();
    }

    renderCharDetails() {
        charDetailsTemplate(this.char);
    }

    findElementById(id) {
        return this.dataSource.find(char => char.id === id);
    }

}

function charDetailsTemplate(char) {
    const [name, hobby1, hobby2, hobby3, 
        trait1, trait2, trait3, trait4, trait5, trait6,
        desire1, desire2,
        block,
        age, mbti, enam] = 
    document.querySelectorAll("#name, #hobby1, #hobby2, #hobby3, #enam, #trait1, #trait2, #trait3, #trait4, #trait5, #trait6, #hobby1, #hobby2, #hobby3, #desire1, #desire2, #block, #age, #mbti, #enam");

    name.textContent = char.name;
    age.textContent = char.age;
    mbti.textContent = char.mbti;
    enam.textContent = char.enam;
    trait1.textContent = char.trait1;
    trait2.textContent = char.trait2;
    trait3.textContent = char.trait3;
    trait4.textContent = char.trait4;
    trait5.textContent = char.trait5;
    trait6.textContent = char.trait6;
    hobby1.textContent = char.hobby1;
    hobby2.textContent = char.hobby2;
    hobby3.textContent = char.hobby3;
    desire1.textContent = char.desire1;
    desire2.textContent = char.desire2;
    block.textContent = char.block;

}