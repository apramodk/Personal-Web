import { c as create_ssr_component, e as escape, v as validate_component } from "../../chunks/index.js";
import { b as base } from "../../chunks/paths.js";
const app = "";
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"navbar bg-base-300"}"><div class="${"flex-1"}"><a href="${escape(base, true) + "/"}" class="${"btn btn-ghost normal-case text-xl text-primary hover:text-secondary hover:bg-primary"}">APK</a></div>
    <div class="${"flex-none"}"><nav><a href="${escape(base, true) + "/about"}" class="${"btn btn-ghost normal-case text-primary hover:text-secondary hover:bg-primary"}">About Me</a>
                <a href="${escape(base, true) + "/projects"}" class="${"btn btn-ghost normal-case text-primary hover:text-secondary hover:bg-primary"}">Projects</a>
                <a href="${escape(base, true) + "/learning"}" class="${"btn btn-ghost normal-case text-primary hover:text-secondary hover:bg-primary"}">Learning</a></nav></div></div>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<body data-theme="${"luxury"}">${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})}
  ${slots.default ? slots.default({}) : `
  `}</body>`;
});
export {
  Layout as default
};
