import { loadHeaderFooter, getLocalStorage } from "./utils.js";
import CharacterList from "./CharacterList.mjs";

loadHeaderFooter();

const charDiv = document.getElementById("your-characters");
const charSource = getLocalStorage("char-list");

const charList = new CharacterList(charSource, charDiv);

charList.init();