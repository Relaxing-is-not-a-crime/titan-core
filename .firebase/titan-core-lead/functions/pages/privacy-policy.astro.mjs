import { c as createComponent, r as renderComponent, a as renderTemplate } from '../chunks/astro/server_DcBCas5z.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_CXXdqrRG.mjs';
import { $ as $$InnerHero } from '../chunks/InnerHero_DDJ_fu-S.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const heroContent = {
    title: "Privacy Policy",
    description: "Privacy Policy for our website"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Privacy Policy", "description": "Privacy Policy for our website" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "InnerHero", $$InnerHero, { "content": heroContent })} ` })}`;
}, "/home/user/titan-core/src/pages/privacy-policy/index.astro", void 0);

const $$file = "/home/user/titan-core/src/pages/privacy-policy/index.astro";
const $$url = "/privacy-policy";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
