import { b as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, a as renderTemplate, r as renderComponent, F as Fragment } from './astro/server_DcBCas5z.mjs';
import 'piccolore';
import 'clsx';
import { c as getHeadlineColor, e as getInputBackgroundColor, f as getInputTextColor } from './styleUtils_ByUXFF-1.mjs';

const $$Astro$4 = createAstro("http://localhost:4321");
const $$Input = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Input;
  const {
    label,
    type = "text",
    id,
    name,
    placeholder = "",
    required = false,
    disabled = false,
    background = "base",
    class: className = ""
  } = Astro2.props;
  const labelClass = getHeadlineColor(background);
  const inputBgClass = getInputBackgroundColor(background);
  const inputTextClass = getInputTextColor(background);
  return renderTemplate`${maybeRenderHead()}<div class="form-group"> <label${addAttribute(id, "for")}${addAttribute(`block text-sm font-medium mb-1 ${labelClass}`, "class")}> ${label} ${required && renderTemplate`<span class="text-red-500">*</span>`} </label> <input${addAttribute(type, "type")}${addAttribute(id, "id")}${addAttribute(name, "name")}${addAttribute(placeholder, "placeholder")}${addAttribute(required, "required")}${addAttribute(disabled, "disabled")}${addAttribute(`
            w-full px-4 py-2 
            ${inputBgClass}
            ${inputTextClass}
            border border-primary/20
            rounded-lg 
            focus:ring-2 focus:ring-primary focus:border-primary 
            disabled:bg-background-dark/10 disabled:text-body-base/50 disabled:cursor-not-allowed 
            placeholder:text-body-base/50
            ${className}
        `, "class")}> </div>`;
}, "/home/user/titan-core/src/components/ui/form/Input.astro", void 0);

const $$Astro$3 = createAstro("http://localhost:4321");
const $$Textarea = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Textarea;
  const {
    label,
    id,
    name,
    rows = 4,
    placeholder = "",
    required = false,
    background = "base",
    class: className = ""
  } = Astro2.props;
  const labelClass = getHeadlineColor(background);
  const inputBgClass = getInputBackgroundColor(background);
  const inputTextClass = getInputTextColor(background);
  return renderTemplate`${maybeRenderHead()}<div class="form-group"> <label${addAttribute(id, "for")}${addAttribute(`block text-sm font-medium mb-1 ${labelClass}`, "class")}> ${label} ${required && renderTemplate`<span class="text-red-500">*</span>`} </label> <textarea${addAttribute(id, "id")}${addAttribute(name, "name")}${addAttribute(rows, "rows")}${addAttribute(placeholder, "placeholder")}${addAttribute(required, "required")}${addAttribute(`
            w-full px-4 py-2 
            ${inputBgClass}
            ${inputTextClass}
            border border-primary/20
            rounded-lg 
            focus:ring-2 focus:ring-primary focus:border-primary 
            placeholder:text-body-base/50
            ${className}
        `, "class")}></textarea> </div>`;
}, "/home/user/titan-core/src/components/ui/form/Textarea.astro", void 0);

const $$Astro$2 = createAstro("http://localhost:4321");
const $$Radio = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Radio;
  const {
    label,
    id,
    name,
    options,
    required = false,
    background = "base",
    class: className = ""
  } = Astro2.props;
  const labelClass = getHeadlineColor(background);
  const inputTextClass = getInputTextColor(background);
  return renderTemplate`${maybeRenderHead()}<div class="form-group"> <label${addAttribute(`block text-sm font-medium mb-2 ${labelClass}`, "class")}> ${label} ${required && renderTemplate`<span class="text-red-500">*</span>`} </label> <div class="space-y-2"> ${options.map((option, index) => renderTemplate`<div class="flex items-center space-x-2"> <input type="radio"${addAttribute(`${id}-${index}`, "id")}${addAttribute(name, "name")}${addAttribute(option.value, "value")}${addAttribute(required, "required")}${addAttribute(`
                        h-4 w-4 
                        border-primary/20
                        text-primary 
                        focus:ring-primary 
                        ${className}
                    `, "class")}> <label${addAttribute(`${id}-${index}`, "for")}${addAttribute(`text-sm font-medium ${inputTextClass}`, "class")}> ${option.label} </label> </div>`)} </div> </div>`;
}, "/home/user/titan-core/src/components/ui/form/Radio.astro", void 0);

const $$Astro$1 = createAstro("http://localhost:4321");
const $$Checkbox = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Checkbox;
  const {
    label,
    id,
    name,
    options,
    required = false,
    background = "base",
    class: className = ""
  } = Astro2.props;
  const labelClass = getHeadlineColor(background);
  const inputTextClass = getInputTextColor(background);
  return renderTemplate`${maybeRenderHead()}<div class="form-group"> ${options ? (
    // Multiple checkboxes
    renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <label${addAttribute(`block text-sm font-medium mb-2 ${labelClass}`, "class")}> ${label} ${required && renderTemplate`<span class="text-red-500">*</span>`} </label> <div class="space-y-2"> ${options.map((option, index) => renderTemplate`<div class="flex items-center space-x-2"> <input type="checkbox"${addAttribute(`${id}-${index}`, "id")}${addAttribute(name, "name")}${addAttribute(option.value, "value")}${addAttribute(required, "required")}${addAttribute(`
                                h-4 w-4 
                                rounded 
                                border-primary/20
                                text-primary 
                                focus:ring-primary 
                                ${className}
                            `, "class")}> <label${addAttribute(`${id}-${index}`, "for")}${addAttribute(`text-sm font-medium ${inputTextClass}`, "class")}> ${option.label} </label> </div>`)} </div> ` })}`
  ) : (
    // Single checkbox
    renderTemplate`<div class="flex items-center space-x-2"> <input type="checkbox"${addAttribute(id, "id")}${addAttribute(name, "name")}${addAttribute(required, "required")}${addAttribute(`
                    h-4 w-4 
                    rounded 
                    border-primary/20
                    text-primary 
                    focus:ring-primary 
                    ${className}
                `, "class")}> <label${addAttribute(id, "for")}${addAttribute(`text-sm font-medium ${inputTextClass}`, "class")}> ${label} ${required && renderTemplate`<span class="text-red-500">*</span>`} </label> </div>`
  )} </div>`;
}, "/home/user/titan-core/src/components/ui/form/Checkbox.astro", void 0);

const $$Astro = createAstro("http://localhost:4321");
const $$Select = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Select;
  const {
    label,
    id,
    name,
    options,
    required = false,
    placeholder = "Select an option",
    background = "base",
    class: className = ""
  } = Astro2.props;
  const labelClass = getHeadlineColor(background);
  const inputBgClass = getInputBackgroundColor(background);
  const inputTextClass = getInputTextColor(background);
  return renderTemplate`${maybeRenderHead()}<div class="form-group"> <label${addAttribute(id, "for")}${addAttribute(`block text-sm font-medium mb-1 ${labelClass}`, "class")}> ${label} ${required && renderTemplate`<span class="text-red-500">*</span>`} </label> <select${addAttribute(id, "id")}${addAttribute(name, "name")}${addAttribute(required, "required")}${addAttribute(`
            w-full px-3 py-2 
            ${inputBgClass}
            ${inputTextClass}
            border border-primary/20
            rounded-lg 
            focus:ring-2 focus:ring-primary focus:border-primary 
            ${className}
        `, "class")}> <option value="" disabled${addAttribute(!required, "selected")}> ${placeholder} </option> ${options.map((option) => renderTemplate`<option${addAttribute(option.value, "value")}> ${option.label} </option>`)} </select> </div>`;
}, "/home/user/titan-core/src/components/ui/form/Select.astro", void 0);

export { $$Input as $, $$Radio as a, $$Checkbox as b, $$Textarea as c, $$Select as d };
