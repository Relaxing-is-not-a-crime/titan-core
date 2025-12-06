import { b as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, a as renderTemplate } from './astro/server_DcBCas5z.mjs';
import 'piccolore';
import 'clsx';

const $$Astro = createAstro("http://localhost:4321");
const $$Date = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Date;
  const { date } = Astro2.props;
  const dateObj = new Date(date instanceof Date ? date.getTime() : date);
  if (isNaN(dateObj.getTime())) {
    throw new Error("Invalid date provided to Date component");
  }
  const formattedDate = dateObj.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  }).replace(/(\d+)(?=(,))/, (match) => {
    const day = parseInt(match);
    const suffix = ["th", "st", "nd", "rd"][day % 10 > 3 || day > 20 ? 0 : day % 10];
    return day + suffix;
  });
  return renderTemplate`${maybeRenderHead()}<time${addAttribute(dateObj.toISOString(), "datetime")} class="text-sm text-body-base"> ${formattedDate} </time>`;
}, "/home/user/titan-core/src/components/ui/Date.astro", void 0);

export { $$Date as $ };
