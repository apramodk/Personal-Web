import { c as create_ssr_component, d as each, e as escape } from "../../../../chunks/index.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-ead1b0{width:100vw;max-height:90vh;padding-top:50px;padding-left:20px;padding-right:20px;overflow:hidden;display:flex;justify-content:center}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let tabs = ["Introduction", "Behavioral", "Technical"];
  $$result.css.add(css);
  return `<main class="${"svelte-ead1b0"}"><div class="${"card card-side w-screen h-screen bg-secondary shadow-md"}"><div class="${"menu w-52 bg-secondary-focus"}">${each(tabs, (tab, index) => {
    return `<li><button>${escape(tab)}</button></li>`;
  })}</div>

        <div class="${"card-body"}"><div class="${["card-body overflow-auto", ""].join(" ").trim()}"><div class="${"hero min-h-screen bg-base-200"}"><div class="${"hero-content text-center"}"><div class="${"max-w-md"}"><h1 class="${"text-5xl font-bold"}">Hello there</h1>
                            <p class="${"py-6"}">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <button class="${"btn btn-primary"}">Get Started</button></div></div></div></div>

            <div class="${["card-body overflow-auto", "hidden"].join(" ").trim()}"><div class="${"hero min-h-screen bg-base-200"}"><div class="${"hero-content text-center"}"><div class="${"max-w-md"}"><h1 class="${"text-5xl font-bold"}">Hello there</h1>
                            <p class="${"py-6"}">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <button class="${"btn btn-primary"}">Get Started</button></div></div></div></div>

            <div class="${["card-body overflow-auto", "hidden"].join(" ").trim()}"><div class="${"hero min-h-screen bg-base-200"}"><div class="${"hero-content text-center"}"><div class="${"max-w-md"}"><h1 class="${"text-5xl font-bold"}">Hello there</h1>
                            <p class="${"py-6"}">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <button class="${"btn btn-primary"}">Get Started</button></div></div></div></div></div></div>
</main>`;
});
export {
  Page as default
};
