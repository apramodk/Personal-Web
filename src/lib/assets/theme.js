import { theme } from "../../../tailwind.config.cjs";

export const themes = [
    "dark",
    "autumn", 
    "winter",
]
let ind = 0;
export function chngTheme(chkBool){
    ind = chkBool;
}
export var curTheme = chkBool[ind];