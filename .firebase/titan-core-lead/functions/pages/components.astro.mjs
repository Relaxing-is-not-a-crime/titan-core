import { b as createAstro, c as createComponent, r as renderComponent, e as renderScript, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_DcBCas5z.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_CXXdqrRG.mjs';
import { $ as $$Hero, h as heroImage, a as $$Features, f as featureLists, b as $$RecentPosts, c as $$SplitPanel, s as styleGuideImage, d as $$CtaBanner, e as $$Logos, l as logoLists, g as $$Stats, i as statsLists, j as $$Faqs, k as faqLists } from '../chunks/developer_3SnoSA1K.mjs';
import { $ as $$InnerHero } from '../chunks/InnerHero_DDJ_fu-S.mjs';
import { $ as $$TeamGrid } from '../chunks/TeamGrid_4cOUXR2c.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const defaultHero = new Proxy({"src":"/_astro/default-hero.D-v8eEMA.jpg","width":1408,"height":768,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/user/titan-core/src/assets/images/home/default-hero.jpg";
							}
							
							return target[name];
						}
					});

const $$Astro = createAstro("http://localhost:4321");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const seoTitle = "Component Library - Titan Core";
  const seoDescription = "Explore the complete component library of Titan Core, a modern, high-performance Astro theme for developer portfolios and documentation sites.";
  const componentSections = [
    { id: "hero", name: "Hero", icon: "layout" },
    { id: "innerHero", name: "Inner Hero", icon: "layout-template" },
    { id: "features", name: "Features", icon: "package" },
    { id: "recentPosts", name: "Recent Posts", icon: "file-text" },
    { id: "splitPanel", name: "Split Panel", icon: "columns" },
    { id: "ctaBanner", name: "CTA Banner", icon: "megaphone" },
    { id: "logos", name: "Logos", icon: "briefcase" },
    { id: "stats", name: "Stats", icon: "bar-chart" },
    { id: "faqs", name: "FAQs", icon: "help-circle" },
    { id: "teamGrid", name: "Team Grid", icon: "users" }
  ];
  const heroContent = {
    title: "Create Stunning Hero Sections",
    description: "The Hero component is perfect for creating impactful first impressions. It supports background images, overlay opacity control, and multiple call-to-action buttons to drive user engagement.",
    buttons: [
      {
        text: "Primary Action",
        link: "/contact",
        target: "_self"
      },
      {
        text: "Secondary Action",
        link: "https://github.com/titan-studio-themes/titan-core",
        target: "_blank"
      }
    ],
    backgroundImage: heroImage,
    overlayOpacity: 0.2
  };
  const innerHeroContent = {
    title: "Inner Hero for Secondary Pages",
    description: "A more compact hero component designed specifically for inner pages, providing consistent branding while taking up less vertical space.",
    backgroundImage: defaultHero,
    overlayOpacity: 0.5
  };
  const featuresSection = {
    eyebrow: "COMPONENT FEATURES",
    title: "Showcase Product Features & Benefits",
    description: "The Features component is ideal for highlighting key features, benefits, or services in a visually appealing grid layout with icons and descriptions.",
    features: featureLists.main.features,
    button: {
      text: "View All Features",
      link: "/features",
      variant: "primary"
    }
  };
  const FooterCta = {
    eyebrow: "GET STARTED TODAY",
    title: "Start Building With Titan Core",
    description: "Titan Core is open-source and constantly improving. Join our community of developers to contribute, get support, or showcase what you've built.",
    hideCta: false,
    button: {
      text: "Download Titan Core",
      link: "https://github.com/titan-studio-themes/titan-core",
      target: "_blank"
    }
  };
  const styleGuideSection = {
    eyebrow: "FLEXIBLE LAYOUTS",
    headline: "Text & Image Combinations",
    description: "The SplitPanel component allows you to create beautiful side-by-side layouts with text on one side and images on the other. Perfect for product showcases, about sections, or feature highlights.",
    image: {
      src: styleGuideImage,
      alt: "Developer working on code"
    },
    buttons: [
      {
        text: "Learn More",
        link: "/split-panel",
        variant: "primary"
      }
    ]
  };
  const sideBySideStats = {
    eyebrow: "IMPRESSIVE NUMBERS",
    title: "Showcase Key Metrics & Achievements",
    description: "The Stats component helps you highlight important metrics, achievements, or growth numbers in a visually compelling way that draws attention to your success.",
    variant: "side-by-side",
    background: "dark",
    stats: statsLists.withContent.stats,
    content: {
      title: "Performance Metrics",
      description: "Titan Core is designed for speed and efficiency. Our lightweight framework ensures fast load times and smooth user experiences.",
      button: {
        text: "Learn More",
        link: "/performance",
        variant: "primary"
      }
    }
  };
  const mainCta = {
    eyebrow: "CALL TO ACTION",
    title: "Drive User Engagement",
    description: "The CTA Banner component is designed to convert visitors into customers with compelling headlines, persuasive copy, and prominent call-to-action buttons.",
    button: {
      text: "Take Action Now",
      link: "/contact",
      variant: "primary",
      target: "_self"
    }
  };
  const logosSection = {
    eyebrow: "SOCIAL PROOF",
    headline: "Build Trust With Brand Logos",
    subheadline: "The Logos component displays partner or client logos to build credibility and trust with your visitors.",
    logos: logoLists.main.logos
  };
  const faqsSection = {
    eyebrow: "COMMON QUESTIONS",
    title: "Answer Customer Questions",
    description: "The FAQs component helps address common questions and concerns, reducing support inquiries while building trust and confidence in your product or service.",
    faqs: faqLists.main.faqs
  };
  const recentPostsSection = {
    eyebrow: "CONTENT MARKETING",
    title: "Showcase Your Latest Content",
    description: "The RecentPosts component automatically displays your latest blog posts or articles, helping drive traffic to your content and keeping your site fresh and engaging.",
    button: {
      text: "View All Posts",
      link: "/blog",
      variant: "primary"
    }
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "footerCta": FooterCta, "title": seoTitle, "description": seoDescription, "data-astro-cid-s6oksyhy": true }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="fixed left-4 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block" data-astro-cid-s6oksyhy> <div class="bg-white rounded-lg shadow-xl p-3 w-52" data-astro-cid-s6oksyhy> <div class="flex items-center mb-3 pb-2 border-b" data-astro-cid-s6oksyhy> <h3 class="font-bold text-sm" data-astro-cid-s6oksyhy>Components</h3> </div> <nav data-astro-cid-s6oksyhy> <ul class="space-y-1" data-astro-cid-s6oksyhy> ${componentSections.map((section) => renderTemplate`<li data-astro-cid-s6oksyhy> <a${addAttribute(`#${section.id}`, "href")} class="component-nav-link flex items-center p-1.5 rounded-md hover:bg-gray-100 transition-colors text-xs"${addAttribute(section.id, "data-section")} data-astro-cid-s6oksyhy> <span class="icon mr-1.5"${addAttribute(section.icon, "data-lucide")} data-astro-cid-s6oksyhy></span> <span data-astro-cid-s6oksyhy>${section.name}</span> </a> </li>`)} </ul> </nav> </div> </div>  <section id="hero" class="component-section relative mb-16" data-astro-cid-s6oksyhy> <div class="component-wrapper relative transition-all duration-500" data-astro-cid-s6oksyhy> <div class="component-label hidden absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-primary text-white py-1 px-3 rounded-md text-xs font-medium z-10 shadow-md" data-astro-cid-s6oksyhy>
Hero Component
</div> ${renderComponent($$result2, "Hero", $$Hero, { "content": heroContent, "data-astro-cid-s6oksyhy": true })} </div> </section> <section id="innerHero" class="component-section relative mb-16" data-astro-cid-s6oksyhy> <div class="component-wrapper relative transition-all duration-500" data-astro-cid-s6oksyhy> <div class="component-label hidden absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-primary text-white py-1 px-3 rounded-md text-xs font-medium z-10 shadow-md" data-astro-cid-s6oksyhy>
Inner Hero Component
</div> ${renderComponent($$result2, "InnerHero", $$InnerHero, { "content": innerHeroContent, "data-astro-cid-s6oksyhy": true })} </div> </section> <section id="features" class="component-section relative mb-16" data-astro-cid-s6oksyhy> <div class="component-wrapper relative transition-all duration-500" data-astro-cid-s6oksyhy> <div class="component-label hidden absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-primary text-white py-1 px-3 rounded-md text-xs font-medium z-10 shadow-md" data-astro-cid-s6oksyhy>
Features Component
</div> ${renderComponent($$result2, "Features", $$Features, { "content": featuresSection, "padding": "base", "background": "light", "data-astro-cid-s6oksyhy": true })} </div> </section> <section id="recentPosts" class="component-section relative mb-16" data-astro-cid-s6oksyhy> <div class="component-wrapper relative transition-all duration-500" data-astro-cid-s6oksyhy> <div class="component-label hidden absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-primary text-white py-1 px-3 rounded-md text-xs font-medium z-10 shadow-md" data-astro-cid-s6oksyhy>
Recent Posts Component
</div> ${renderComponent($$result2, "RecentPosts", $$RecentPosts, { "content": recentPostsSection, "background": "base", "padding": "base", "postsToShow": 3, "category": "Theme Usage", "data-astro-cid-s6oksyhy": true })} </div> </section> <section id="splitPanel" class="component-section relative mb-16" data-astro-cid-s6oksyhy> <div class="component-wrapper relative transition-all duration-500" data-astro-cid-s6oksyhy> <div class="component-label hidden absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-primary text-white py-1 px-3 rounded-md text-xs font-medium z-10 shadow-md" data-astro-cid-s6oksyhy>
Split Panel Component
</div> ${renderComponent($$result2, "SplitPanel", $$SplitPanel, { "content": styleGuideSection, "imagePosition": "right", "background": "light", "padding": "base", "data-astro-cid-s6oksyhy": true })} </div> </section> <section id="ctaBanner" class="component-section relative mb-16" data-astro-cid-s6oksyhy> <div class="component-wrapper relative transition-all duration-500" data-astro-cid-s6oksyhy> <div class="component-label hidden absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-primary text-white py-1 px-3 rounded-md text-xs font-medium z-10 shadow-md" data-astro-cid-s6oksyhy>
CTA Banner Component
</div> ${renderComponent($$result2, "CtaBanner", $$CtaBanner, { "content": mainCta, "variant": "contained", "background": "light", "padding": "base", "data-astro-cid-s6oksyhy": true })} </div> </section> <section id="logos" class="component-section relative mb-16" data-astro-cid-s6oksyhy> <div class="component-wrapper relative transition-all duration-500" data-astro-cid-s6oksyhy> <div class="component-label hidden absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-primary text-white py-1 px-3 rounded-md text-xs font-medium z-10 shadow-md" data-astro-cid-s6oksyhy>
Logos Component
</div> ${renderComponent($$result2, "Logos", $$Logos, { "content": logosSection, "background": "base", "padding": "base", "data-astro-cid-s6oksyhy": true })} </div> </section> <section id="stats" class="component-section relative mb-16" data-astro-cid-s6oksyhy> <div class="component-wrapper relative transition-all duration-500" data-astro-cid-s6oksyhy> <div class="component-label hidden absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-primary text-white py-1 px-3 rounded-md text-xs font-medium z-10 shadow-md" data-astro-cid-s6oksyhy>
Stats Component
</div> ${renderComponent($$result2, "Stats", $$Stats, { "content": sideBySideStats, "background": "dark", "padding": "base", "data-astro-cid-s6oksyhy": true })} </div> </section> <section id="faqs" class="component-section relative mb-16" data-astro-cid-s6oksyhy> <div class="component-wrapper relative transition-all duration-500" data-astro-cid-s6oksyhy> <div class="component-label hidden absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-primary text-white py-1 px-3 rounded-md text-xs font-medium z-10 shadow-md" data-astro-cid-s6oksyhy>
FAQs Component
</div> ${renderComponent($$result2, "Faqs", $$Faqs, { "content": faqsSection, "background": "base", "padding": "base", "data-astro-cid-s6oksyhy": true })} </div> </section> <section id="teamGrid" class="component-section relative mb-16" data-astro-cid-s6oksyhy> <div class="component-wrapper relative transition-all duration-500" data-astro-cid-s6oksyhy> <div class="component-label hidden absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-primary text-white py-1 px-3 rounded-md text-xs font-medium z-10 shadow-md" data-astro-cid-s6oksyhy>
Team Grid Component
</div> ${renderComponent($$result2, "TeamGrid", $$TeamGrid, { "padding": "base", "data-astro-cid-s6oksyhy": true })} </div> </section> ` })} ${renderScript($$result, "/home/user/titan-core/src/pages/components/index.astro?astro&type=script&index=0&lang.ts")} `;
}, "/home/user/titan-core/src/pages/components/index.astro", void 0);

const $$file = "/home/user/titan-core/src/pages/components/index.astro";
const $$url = "/components";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
