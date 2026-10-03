import { loadHeaderFooter, getLocalStorage, getParam } from "./utils.js";
import CharacterDetails from "./CharacterDetails.mjs";

const dataSource = getLocalStorage("char-list");
const charID = getParam("char");

const character = new CharacterDetails(charID, dataSource);

character.init();

loadHeaderFooter();