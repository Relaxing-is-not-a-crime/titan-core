import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, e as renderScript, d as addAttribute } from '../chunks/astro/server_DcBCas5z.mjs';
import 'piccolore';
import { $ as $$Layout, a as $$Button } from '../chunks/Layout_CXXdqrRG.mjs';
import { $ as $$InnerHero } from '../chunks/InnerHero_DDJ_fu-S.mjs';
import { a as getBackgroundColor, b as getTextColor, c as getHeadlineColor, d as getEyebrowColor } from '../chunks/styleUtils_ByUXFF-1.mjs';
import { $ as $$Input, c as $$Textarea, d as $$Select, b as $$Checkbox, a as $$Radio } from '../chunks/Select_CtC-5QP7.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("http://localhost:4321");
const $$StyleGuide = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$StyleGuide;
  const title = "Style Guide";
  const description = "A style guide for Astro Basics";
  const heroContent = {
    title,
    description
  };
  const backgrounds = ["base", "light", "dark"];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "description": description }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "InnerHero", $$InnerHero, { "content": heroContent })} ${maybeRenderHead()}<div class="max-w-4xl mx-auto px-4 py-12"> <section id="colors" class="mb-12"> <h2 class="text-2xl font-bold text-headline mb-6">Colors</h2> <div class="grid grid-cols-2 md:grid-cols-4 gap-4"> <div> <div class="h-24 bg-primary rounded-lg mb-2"></div> <p class="text-sm font-medium text-body-base">Primary</p> </div> <div> <div class="h-24 bg-secondary rounded-lg mb-2"></div> <p class="text-sm font-medium text-body-base">Secondary</p> </div> <div> <div class="h-24 bg-accent rounded-lg mb-2"></div> <p class="text-sm font-medium text-body-base">Accent</p> </div> <div> <div class="h-24 rounded-lg mb-2 bg-background-dark"></div> <p class="text-sm font-medium text-body-base">Dark</p> </div> </div> </section> </div> <div class="max-w-4xl mx-auto px-4 mb-8"> <h2 class="text-2xl font-bold mb-6 text-headline">Background Variants</h2> <div class="flex space-x-4 rounded-xl p-4 bg-background-white border border-background-dark"> ${backgrounds.map((bg) => renderTemplate`<button type="button"${addAttribute(`
                        w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-center transition-colors cursor-pointer
                        border border-primary
                        ${bg === "base" ? "bg-background text-headline" : ""}
                        ${bg === "light" ? "bg-background-light text-headline-light" : ""}
                        ${bg === "dark" ? "bg-background-dark text-headline-dark" : ""}
                        hover:opacity-90
                    `, "class")}${addAttribute(bg, "data-tab")}> ${bg === "base" ? "Default" : bg.charAt(0).toUpperCase() + bg.slice(1)} </button>`)} </div> </div> ${backgrounds.map((bg) => renderTemplate`<div${addAttribute(bg, "data-content")}${addAttribute(`${getBackgroundColor(bg)} ${getTextColor(bg)} py-12 ${bg === "base" ? "" : "hidden"}`, "class")}> <div class="max-w-4xl mx-auto px-4"> <h2${addAttribute(`text-3xl font-bold mb-8 ${getHeadlineColor(bg)}`, "class")}>
Style Guide - ${bg.charAt(0).toUpperCase() + bg.slice(1)} Background
</h2>  <section${addAttribute(`typography-${bg}`, "id")} class="mb-12"> <h2${addAttribute(`text-2xl font-bold mb-6 ${getHeadlineColor(bg)}`, "class")}>Typography</h2> <div class="space-y-4"> <h1${addAttribute(getHeadlineColor(bg), "class")}>Heading 1</h1> <h2${addAttribute(getHeadlineColor(bg), "class")}>Heading 2</h2> <h3${addAttribute(getHeadlineColor(bg), "class")}>Heading 3</h3> <h4${addAttribute(getHeadlineColor(bg), "class")}>Heading 4</h4> <h5${addAttribute(getHeadlineColor(bg), "class")}>Heading 5</h5> <h6${addAttribute(getHeadlineColor(bg), "class")}>Heading 6</h6> <div class="my-8"> <p${addAttribute(`text-sm uppercase tracking-wider font-medium ${getEyebrowColor(bg)}`, "class")}>Eyebrow Text - Small uppercase text used above headlines</p> </div> <div class="my-8"> <p class="mb-4">Body text - Regular paragraph text looks like this. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> <p class="text-sm mb-4">Small text - Smaller paragraph text looks like this.</p> <p class="text-xs">Extra small text - The smallest text size we use.</p> </div> </div> </section>  <section${addAttribute(`links-${bg}`, "id")} class="mb-12"> <h2${addAttribute(`text-2xl font-bold mb-6 ${getHeadlineColor(bg)}`, "class")}>Links</h2> <div class="space-y-4"> <p><a href="#" class="text-primary hover:underline">Regular Link</a></p> <p><a href="#" class="text-primary hover:underline font-bold">Bold Link</a></p> <p><a href="#" class="text-primary underline hover:no-underline">Underlined Link</a></p> </div> </section>  <section${addAttribute(`buttons-${bg}`, "id")} class="mb-12"> <h2${addAttribute(`text-2xl font-bold mb-6 ${getHeadlineColor(bg)}`, "class")}>Buttons</h2> <div class="space-y-4"> <div class="flex flex-col gap-4 items-start"> ${renderComponent($$result2, "Button", $$Button, { "variant": "primary", "size": "md" }, { "default": ($$result3) => renderTemplate`Primary Button` })} ${renderComponent($$result2, "Button", $$Button, { "variant": "secondary", "size": "md" }, { "default": ($$result3) => renderTemplate`Secondary Button` })} ${renderComponent($$result2, "Button", $$Button, { "variant": "accent", "size": "md" }, { "default": ($$result3) => renderTemplate`Accent Button` })} ${renderComponent($$result2, "Button", $$Button, { "disabled": true }, { "default": ($$result3) => renderTemplate`Disabled Button` })} </div> </div> </section>  <section${addAttribute(`forms-${bg}`, "id")} class="mb-12"> <h2${addAttribute(`text-2xl font-bold mb-6 ${getHeadlineColor(bg)}`, "class")}>Form Elements</h2> <div class="space-y-6 max-w-md"> ${renderComponent($$result2, "Input", $$Input, { "label": "Text Input", "id": `text-input-${bg}`, "name": "text-input", "placeholder": "Enter some text", "background": bg })} ${renderComponent($$result2, "Input", $$Input, { "label": "Email Input", "type": "email", "id": `email-input-${bg}`, "name": "email-input", "placeholder": "Enter your email", "background": bg })} ${renderComponent($$result2, "Textarea", $$Textarea, { "label": "Textarea", "id": `textarea-${bg}`, "name": "textarea", "placeholder": "Enter your message", "background": bg })} ${renderComponent($$result2, "Select", $$Select, { "label": "Select Menu", "id": `select-${bg}`, "name": "select", "options": [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" }
  ], "background": bg })} ${renderComponent($$result2, "Checkbox", $$Checkbox, { "label": "Single Checkbox", "id": `checkbox-single-${bg}`, "name": "checkbox-single", "background": bg })} ${renderComponent($$result2, "Checkbox", $$Checkbox, { "label": "Multiple Checkboxes", "id": `checkbox-multiple-${bg}`, "name": "checkbox-multiple", "options": [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" }
  ], "background": bg })} ${renderComponent($$result2, "Radio", $$Radio, { "label": "Radio Buttons", "id": `radio-${bg}`, "name": `radio-${bg}`, "options": [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" }
  ], "background": bg })} <div class="space-y-2"> ${renderComponent($$result2, "Input", $$Input, { "label": "Required Input", "id": `required-input-${bg}`, "name": "required-input", "required": true, "placeholder": "This field is required", "background": bg })} ${renderComponent($$result2, "Input", $$Input, { "label": "Disabled Input", "id": `disabled-input-${bg}`, "name": "disabled-input", "disabled": true, "placeholder": "This field is disabled", "background": bg })} </div> </div> </section> </div> </div>`)}${renderScript($$result2, "/home/user/titan-core/src/pages/style-guide.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "/home/user/titan-core/src/pages/style-guide.astro", void 0);

const $$file = "/home/user/titan-core/src/pages/style-guide.astro";
const $$url = "/style-guide";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$StyleGuide,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
