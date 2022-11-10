import { c as create_ssr_component, b as add_attribute, v as validate_component } from "../../chunks/index.js";
const app = "";
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let yes = false;
  return `<div class="${"navbar rounded-3xl bg-primary"}"><div class="${"flex-1"}"><div class="${"dropdown dropdown-hover shadow rounded-box"}"><label class="${"btn m-1 rounded-3xl"}">Click</label>
            <ul class="${"dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"}"><li>About Me</li>
                <li>My Projects</li>
                <li>Learn With Me</li></ul></div></div>
    <div class="${"flex-1"}"><button class="${"btn btn-ghost normal-case text-xl"}"><h1>APK</h1></button></div>
    <div class="${"flex-2"}"><input type="${"checkbox"}" class="${"toggle rounded-xl"}"${add_attribute("checked", yes, 1)}></div></div>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})}
${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
