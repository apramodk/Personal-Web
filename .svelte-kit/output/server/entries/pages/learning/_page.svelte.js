import { c as create_ssr_component, e as escape } from "../../../chunks/index.js";
import { b as base } from "../../../chunks/paths.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-uf4274{width:100vw;padding-top:50px;display:flex;justify-content:center}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<main class="${"svelte-uf4274"}"><div class="${"grid grid-cols-3 gap-4"}"><div class="${"grid w-72 h-24 btn border card bg-base-300 place-items-center"}">Picking A Language</div>
        <a href="${escape(base, true) + "/learning/Interview"}" class="${"grid w-72 h-24 btn border card bg-base-300 place-items-center"}">Interview Prep</a>
        <div class="${"grid w-72 h-24 btn border card bg-base-300 place-items-center"}">Data Structs and Algorithims</div>
        <div class="${"grid w-72 h-24 btn border card bg-base-300 place-items-center"}">Web Development</div>
        <a href="${"https://www.youtube.com/watch?v=xvFZjo5PgG0"}" class="${"grid w-72 h-24 btn border card bg-base-300 place-items-center"}">Machine Learning</a></div>
</main>`;
});
export {
  Page as default
};
