import { c as create_ssr_component } from "./ssr.js";
const Nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<nav class="fixed top-0 z-10 flex w-full items-center justify-between px-6 py-6 text-white sm:px-12"><div class="flex items-center space-x-4" data-svelte-h="svelte-uhwpqi"><div class="h-8 w-8 rounded-full bg-white saturate-200"></div></div> <div class="hidden text-xl md:block" data-svelte-h="svelte-1qiplt3">Open Interpreter</div> <div class="flex flex-col text-lg md:flex-row md:space-x-12"><a href="https://discord.gg/Hvz9Axh84z" class="hover:underline" data-svelte-h="svelte-1tesvs7">Discord</a> <div class="relative"><button class="hover:underline" data-svelte-h="svelte-15sugph">Docs</button> ${``}</div> <a href="https://twitter.com/hellokillian" class="hover:underline" data-svelte-h="svelte-owya4p">Contact</a><a href="https://0ggfznkwh4j.typeform.com/to/W5At4fmF" class="rounded border px-2 hover:underline" data-svelte-h="svelte-16er9ox">Careers</a></div></nav>`;
});
export {
  Nav as N
};
