import { b as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, r as renderComponent, a as renderTemplate } from './astro/server_DcBCas5z.mjs';
import 'piccolore';
import { g as getCollection } from './_astro_content_C5Ri5SWs.mjs';
import { g as getPaddingClass } from './styleUtils_ByUXFF-1.mjs';
import { $ as $$Image } from './_astro_assets_BQYnmcSW.mjs';

const $$Astro = createAstro("http://localhost:4321");
const $$TeamGrid = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$TeamGrid;
  const { padding, paddingTop, paddingBottom } = Astro2.props;
  const paddingClass = getPaddingClass({ padding, paddingTop, paddingBottom });
  const teamMembers = await getCollection("team", ({ data }) => {
    return data.publish !== false;
  });
  const sortedTeamMembers = teamMembers.sort((a, b) => a.data.order - b.data.order);
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(["relative", paddingClass], "class:list")}> <div class="site-container mx-auto px-4"> <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 xl:gap-x-8 xl:gap-y-14"> ${sortedTeamMembers.map((member, index) => renderTemplate`<div class="flex flex-col group" data-aos="fade-up"${addAttribute(index * 100, "data-aos-delay")} data-aos-duration="800"> <a${addAttribute(`/team/${member.id}`, "href")} class="flex flex-col group rounded-md"> <div class="relative mb-4 overflow-hidden rounded-md"> <span class="absolute inset-0 -mt-12 h-400 w-1/2 translate-x-[250%] rotate-12 bg-white opacity-20  group-hover:transition-all  group-hover:duration-300 ease-out group-hover:translate-x-[-250%] z-10"></span> ${member.data.headshot ? renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": member.data.headshot, "alt": "", "width": 896, "height": 1280, "quality": 80, "format": "webp", "class": "w-full h-auto aspect-[3/4] object-cover rounded-md group-hover:scale-[1.02] hover:brightness-110 transition-all duration-500 ease-in-out", "loading": "eager", "decoding": "async" })}` : renderTemplate`<div class="w-full aspect-[3/4] bg-gray-200 rounded-md flex items-center justify-center"> <span class="text-gray-400">No Image</span> </div>`} </div> <h3 class="text-h5 font-medium transition-colors duration-500 group-hover:text-primary"> ${member.data.name} </h3> <p class="text-xsmall text-body-base">${member.data.jobTitle}</p> </a> </div>`)} </div> </div> </section>`;
}, "/home/user/titan-core/src/components/sections/TeamGrid.astro", void 0);

export { $$TeamGrid as $ };
