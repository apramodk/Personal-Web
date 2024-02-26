import { c as create_ssr_component, e as escape, f as null_to_empty } from "../../../chunks/ssr.js";
const css = {
  code: ".backg.svelte-1h7co40{display:flex;width:100%;justify-content:center;align-items:center}.backd.svelte-1h7co40{display:flex;width:100%;justify-content:center;align-items:center;backdrop-filter:blur(10px)}.Card_wrapper.svelte-1h7co40{display:flex;justify-content:center;align-items:center;height:20rem}.card.svelte-1h7co40{background-color:#f3f4f6;width:100%;max-width:300px;padding:1rem;margin:1rem;border-radius:10px;box-shadow:0 0 10px rgba(0, 0, 0, 0.1);transition:all 0.3s ease}.expanded.svelte-1h7co40{display:flex;flex-direction:column;background-color:#f3f4f6;width:fit-content;padding:1rem;margin:1rem;border-radius:10px;box-shadow:0 0 10px rgba(0, 0, 0, 0.1);transition:all 0.3s ease;height:fit-content;margin-top:15rem;max-height:30rem;overflow-y:scroll;z-index:100;position:fixed}.cardHeader.svelte-1h7co40{display:flex;justify-content:space-between;align-items:center}.cardTitle.svelte-1h7co40{display:flex;flex-direction:column}.cardToggleBack.svelte-1h7co40{display:flex;justify-content:center;align-items:center}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<main class="${escape(null_to_empty("backg"), true) + " svelte-1h7co40"}"><div class="Card_wrapper svelte-1h7co40"><div class="${escape(null_to_empty("card"), true) + " svelte-1h7co40"}" id="card">${`<h2 data-svelte-h="svelte-1kp1ken">LED Game</h2> <p data-svelte-h="svelte-1qxty2f">Simple LED game controlled by capacitive touch sensors</p> <button data-svelte-h="svelte-oi0jh5">Read More</button>`}</div></div> </main>`;
});
export {
  Page as default
};
