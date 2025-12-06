import { c as createComponent, b as createAstro, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_DcBCas5z.mjs';
import 'piccolore';
import { c as $$, a as $$Button, s as siteConfig, $ as $$Layout } from '../chunks/Layout_CXXdqrRG.mjs';
import { $ as $$InnerHero } from '../chunks/InnerHero_DDJ_fu-S.mjs';
import { $ as $$Input, a as $$Radio, b as $$Checkbox, c as $$Textarea, d as $$Select } from '../chunks/Select_CtC-5QP7.mjs';
import { g as getPaddingClass, a as getBackgroundColor, b as getTextColor } from '../chunks/styleUtils_ByUXFF-1.mjs';
import { $ as $$Mail } from '../chunks/Mail_C8TlQ5wf.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$2 = createAstro("http://localhost:4321");
const $$MapPin = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$MapPin;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "map-pin", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path> <circle cx="12" cy="10" r="3"></circle> ` })}`;
}, "/home/user/titan-core/node_modules/lucide-astro/dist/MapPin.astro", void 0);

const $$Astro$1 = createAstro("http://localhost:4321");
const $$Phone = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Phone;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "phone", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path> ` })}`;
}, "/home/user/titan-core/node_modules/lucide-astro/dist/Phone.astro", void 0);

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  const hearAboutOptions = [
    { label: "Search Engine", value: "search" },
    { label: "Social Media", value: "social" },
    { label: "Friend/Colleague", value: "referral" },
    { label: "Other", value: "other" }
  ];
  const interestOptions = [
    { label: "Web Development", value: "web" },
    { label: "Mobile Development", value: "mobile" },
    { label: "Design Services", value: "design" },
    { label: "Consulting", value: "consulting" }
  ];
  const serviceOptions = [
    { label: "Website Development", value: "website" },
    { label: "Mobile App Development", value: "mobile" },
    { label: "UI/UX Design", value: "design" },
    { label: "Digital Marketing", value: "marketing" },
    { label: "Consulting", value: "consulting" }
  ];
  const budgetOptions = [
    { label: "$5,000 - $10,000", value: "5-10k" },
    { label: "$10,000 - $25,000", value: "10-25k" },
    { label: "$25,000 - $50,000", value: "25-50k" },
    { label: "$50,000+", value: "50k+" }
  ];
  const formBackground = "light";
  return renderTemplate`${maybeRenderHead()}<form class="space-y-6 bg-white p-6 rounded-lg"> <div class="grid grid-cols-1 md:grid-cols-2 gap-4"> ${renderComponent($$result, "Input", $$Input, { "label": "Name", "id": "name", "name": "name", "required": true, "background": formBackground })} ${renderComponent($$result, "Input", $$Input, { "label": "Email", "type": "email", "id": "email", "name": "email", "required": true, "background": formBackground })} </div> <div class="grid grid-cols-1 md:grid-cols-2 gap-4"> ${renderComponent($$result, "Input", $$Input, { "label": "Phone", "type": "tel", "id": "phone", "name": "phone", "background": formBackground })} ${renderComponent($$result, "Input", $$Input, { "label": "Company", "id": "company", "name": "company", "background": formBackground })} </div> <div class="grid grid-cols-1 md:grid-cols-2 gap-4"> ${renderComponent($$result, "Radio", $$Radio, { "label": "How did you hear about us?", "id": "hear-about", "name": "hear-about", "options": hearAboutOptions, "required": true, "background": formBackground })} ${renderComponent($$result, "Checkbox", $$Checkbox, { "label": "Areas of Interest", "id": "interests", "name": "interests", "options": interestOptions, "background": formBackground })} </div> ${renderComponent($$result, "Textarea", $$Textarea, { "label": "Message", "id": "message", "name": "message", "required": true, "background": formBackground })} ${renderComponent($$result, "Checkbox", $$Checkbox, { "label": "I agree to the terms and conditions", "id": "terms", "name": "terms", "required": true, "background": formBackground })} <div class="grid grid-cols-1 md:grid-cols-2 gap-4"> ${renderComponent($$result, "Select", $$Select, { "label": "What service are you interested in?", "id": "service", "name": "service", "options": serviceOptions, "required": true, "placeholder": "Choose a service", "background": formBackground })} ${renderComponent($$result, "Select", $$Select, { "label": "Budget Range", "id": "budget", "name": "budget", "options": budgetOptions, "required": true, "placeholder": "Select your budget", "background": formBackground })} </div> <div class="mt-6"> ${renderComponent($$result, "Button", $$Button, {}, { "default": ($$result2) => renderTemplate`Submit` })} </div> </form>`;
}, "/home/user/titan-core/src/components/forms/Contact.astro", void 0);

const $$Astro = createAstro("http://localhost:4321");
const $$ContactInfo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ContactInfo;
  const {
    content,
    background = "base",
    padding,
    paddingTop,
    paddingBottom
  } = Astro2.props;
  const bgColor = getBackgroundColor(background);
  const textColor = getTextColor(background);
  const paddingClass = getPaddingClass({ padding, paddingTop, paddingBottom });
  return renderTemplate`${maybeRenderHead()}<section${addAttribute([bgColor, paddingClass], "class:list")}> <div class="site-container px-4"> <div class="grid grid-cols-1 md:grid-cols-2 gap-8"> <div> <h2${addAttribute([textColor], "class:list")}>Contact Information</h2> <p${addAttribute([textColor], "class:list")}>
We're here to help you with your questions and concerns.
</p> <p${addAttribute([textColor], "class:list")}>
You can contact us via email or phone.
</p> <div${addAttribute(["flex flex-col gap-2 mt-4", textColor], "class:list")}> <div${addAttribute(["flex items-center gap-2"], "class:list")}>${renderComponent($$result, "Mail", $$Mail, { "aria-hidden": "true" })} <a${addAttribute(`mailto:${siteConfig.Socials.Email}`, "href")}>${siteConfig.Socials.Email}</a></div> <div${addAttribute(["flex items-center gap-2"], "class:list")}>${renderComponent($$result, "Phone", $$Phone, { "aria-hidden": "true" })} <a${addAttribute(`tel:${siteConfig.Socials.Phone}`, "href")}>${siteConfig.Socials.Phone}</a></div> <div${addAttribute(["flex items-center gap-2"], "class:list")}>${renderComponent($$result, "MapPin", $$MapPin, { "aria-hidden": "true" })} <a${addAttribute(`https://maps.google.com/?q=${siteConfig.Socials.Location}`, "href")}>${siteConfig.Socials.Location}</a></div> </div> </div> <div> ${renderComponent($$result, "Contact", $$Contact, {})} </div> </div> </div> </section>`;
}, "/home/user/titan-core/src/components/sections/ContactInfo.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const heroContent = {
    title: "Contact Us",
    description: "Contact us for more information"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Contact Us", "description": "Contact us for more information" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "InnerHero", $$InnerHero, { "content": heroContent })} ${renderComponent($$result2, "ContactInfo", $$ContactInfo, { "background": "base", "padding": "base" })} ` })}`;
}, "/home/user/titan-core/src/pages/contact/index.astro", void 0);

const $$file = "/home/user/titan-core/src/pages/contact/index.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
