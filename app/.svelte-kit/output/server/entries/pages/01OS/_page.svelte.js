import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { S as Svelte_seo } from "../../../chunks/index2.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Svelte_seo, "SvelteSeo").$$render(
    $$result,
    {
      title: "01 OS",
      description: "An Open Source Operating System with a LLM in the driver seat. A foundation for the next generation of AI devices.",
      canonical: "https://openinterpreter.com/01",
      keywords: "01OS, operating system, code interpreter, open source, programming, development",
      openGraph: {
        title: "01OS",
        description: "An Open Source Operating System with a LLM in the driver seat. A foundation for the next generation of AI devices.",
        url: "https://openinterpreter.com/01",
        type: "website",
        images: [
          {
            url: "https://openinterpreter.com/assets/thumbnail.png",
            width: 1200,
            height: 627,
            alt: "Open Interpreter Thumbnail"
          }
        ],
        site_name: "Open Interpreter"
      },
      twitter: {
        card: "summary_large_image",
        title: "01OS",
        description: "An Open Source Operating System with a LLM in the driver seat. A foundation for the next generation of AI devices.",
        image: "https://openinterpreter.com/assets/thumbnail.png"
      }
    },
    {},
    {}
  )} <div class="relative h-screen cursor-default p-5 selection:bg-black selection:text-white" data-svelte-h="svelte-1isizja"><h1>O1 OS</h1></div>`;
});
export {
  Page as default
};
