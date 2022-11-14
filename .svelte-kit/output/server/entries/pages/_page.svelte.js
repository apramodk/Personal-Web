import { c as create_ssr_component } from "../../chunks/index.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-dbaro6{width:100vw;padding-top:20px;height:auto;display:flex;justify-content:center;align-items:center}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<main class="${"svelte-dbaro6"}"><div class="${"card card-side bg-neutral shadow-xl"}"><figure class="${"object-cover"}"></figure>
        <div class="${"card-body"}"><h2 class="${"card-title text-primary"}">Welcome to my website!</h2>
            <p>My name is Akash Pramod Kumar. I&#39;m currently attending the University of Tennessee at Knoxville   <br> 
                computer science. I made this website to document my personal projects as well as post my   <br>
                learning material for anyone to see! This home page should give a quick preview of some of  <br>
                the things you&#39;ll find on my website. 
            </p></div></div>
</main>`;
});
export {
  Page as default
};
