import { c as createComponent, r as renderComponent, a as renderTemplate } from '../chunks/astro/server_DcBCas5z.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_CXXdqrRG.mjs';
import { $ as $$InnerHero } from '../chunks/InnerHero_DDJ_fu-S.mjs';
import { $ as $$TeamGrid } from '../chunks/TeamGrid_4cOUXR2c.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const seoTitle = "Our Team";
  const seoDescription = "Our team is made up of a diverse group of people who are passionate about building amazing websites with ease.";
  const heroContent = {
    title: "Our Team",
    description: "Meet the people behind the magic"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": seoTitle, "description": seoDescription }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "InnerHero", $$InnerHero, { "content": heroContent })} ${renderComponent($$result2, "TeamGrid", $$TeamGrid, { "padding": "base" })} ` })}`;
}, "/home/user/titan-core/src/pages/team/index.astro", void 0);

const $$file = "/home/user/titan-core/src/pages/team/index.astro";
const $$url = "/team";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
