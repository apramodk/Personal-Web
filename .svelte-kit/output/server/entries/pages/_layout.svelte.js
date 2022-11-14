import { c as create_ssr_component, b as add_attribute, e as escape, v as validate_component } from "../../chunks/index.js";
import { b as base } from "../../chunks/paths.js";
const app = "";
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"navbar bg-base-300"}"><div class="${"flex-1"}"><div class="${"dropdown dropdown-hover shadow rounded-box"}"><a${add_attribute("href", base, 0)} class="${"btn btn-ghost normal-case text-xl text-base-300 bg-warning hover:text-warning "}">APK</a>
            <ul class="${"dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"}"><nav><li><a href="${escape(base, true) + "/about"}" class="${"hover:text-error"}">About Me</a></li>
                    <li><a href="${escape(base, true) + "/projects"}" class="${"hover:text-error"}">Projects</a></li>
                    <li><a href="${escape(base, true) + "/learning"}" class="${"hover:text-error"}">Learning</a></li></nav></ul></div></div>
    <div class="${"flex-2"}"><input type="${"checkbox"}" class="${"toggle rounded-xl"}"></div></div>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<body data-theme="${"night"}">${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})}
  ${slots.default ? slots.default({}) : `
  
  `}</body>`;
});
export {
  Layout as default
};
