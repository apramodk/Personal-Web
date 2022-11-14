import { writable } from "svelte/store";
import {browser} from '$app/environment';

const storedTheme = browser.localStorage.getItem("theme");
export const storeTheme = writable(storedTheme);

storeTheme.subscribe(value => {
    browser.localStorage.setItem("theme", value === 'night' ? 'night' : 'retro');
});