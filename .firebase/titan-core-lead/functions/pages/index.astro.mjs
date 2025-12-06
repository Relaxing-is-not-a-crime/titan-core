import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate } from '../chunks/astro/server_DcBCas5z.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_CXXdqrRG.mjs';
import { $ as $$Hero, h as heroImage, a as $$Features, f as featureLists, b as $$RecentPosts, c as $$SplitPanel, s as styleGuideImage, d as $$CtaBanner, e as $$Logos, l as logoLists, g as $$Stats, i as statsLists, j as $$Faqs, k as faqLists } from '../chunks/developer_3SnoSA1K.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("http://localhost:4321");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const seoTitle = "Modern, High-Performance Astro Theme";
  const seoDescription = "A modern, high-performance Astro theme for developer portfolios and documentation sites.";
  const heroContent = {
    title: "The Foundation for Beautiful Astro JS Websites",
    description: "Titan Core is a minimal, performance-focused Astro JS theme that serves as the perfect foundation for your next web project. Built with clean code and modern best practices, it's designed to be extended and customized to your specific needs.",
    buttons: [
      {
        text: "Get Started",
        link: "/contact",
        target: "_self"
      },
      {
        text: "View on GitHub",
        link: "https://github.com/rspisarski/titan-core",
        target: "_blank"
      }
    ],
    backgroundImage: heroImage,
    overlayOpacity: 0.2
  };
  const featuresSection = {
    eyebrow: "CORE FEATURES",
    title: "Everything You Need, Nothing You Don't",
    description: "Titan Core gives you a solid foundation with essential features while staying lightweight and customizable. Start with a clean slate and build exactly what you need without the bloat.",
    features: featureLists.main.features,
    button: {
      text: "View Theme Info",
      link: "/theme-info",
      variant: "primary"
    }
  };
  const FooterCta = {
    eyebrow: "Join The Community",
    title: " Start Building With Titan Core Today",
    description: "Titan Core is open-source and constantly improving. Join our community of developers to contribute, get support, or showcase what you've built.",
    hideCta: false,
    button: {
      text: "Download Titan Core",
      link: "https://github.com/rspisarski/titan-core",
      target: "_blank"
    }
  };
  const styleGuideSection = {
    eyebrow: "Design System",
    headline: "Consistent & Beautiful Components",
    description: "Titan Core comes with a complete style guide to ensure your projects maintain visual consistency. From typography to interactive elements, we've carefully crafted each component.",
    image: {
      src: styleGuideImage,
      alt: "Featured image"
    },
    buttons: [
      {
        text: "Explore Style Guide",
        link: "/style-guide",
        variant: "primary"
      }
    ]
  };
  const sideBySideStats = {
    eyebrow: "Stats",
    title: "Built for Speed and Flexibility",
    description: "Titan Core is designed with performance and developer experience in mind. Our lightweight theme gives you all the essentials without the bloat, letting you build exactly what you need with impressive speed.",
    variant: "side-by-side",
    stats: statsLists.withContent.stats,
    content: {
      title: "Built for Speed and Flexibility",
      description: "Titan Core is designed with performance and developer experience in mind. Our lightweight theme gives you all the essentials without the bloat, letting you build exactly what you need with impressive speed.",
      button: {
        text: "Discover Titan Core",
        link: "/theme-info",
        variant: "primary"
      }
    }
  };
  const mainCta = {
    eyebrow: "Build Blocks",
    title: "Ready-to-Use Components",
    description: "Save development time with our pre-built, accessible components. Each one is designed to integrate seamlessly with your projects while maintaining excellent performance.",
    button: {
      text: "View All Components",
      link: "/components",
      variant: "primary",
      target: "_self"
    }
  };
  const logosSection = {
    eyebrow: "Our Clients",
    logos: logoLists.main.logos
  };
  const faqsSection = {
    eyebrow: "FAQs",
    title: "Frequently Asked Questions",
    description: "Find answers to common questions about our platform and services.",
    faqs: faqLists.main.faqs
  };
  const recentPostsSection = {
    eyebrow: "LATEST INSIGHTS",
    title: " Learn From Our Experience",
    description: "Explore our latest articles on Astro JS development, theme customization tips, and web performance best practices.",
    button: {
      text: "View All Posts",
      link: "/blog",
      variant: "primary"
    }
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "footerCta": FooterCta, "title": seoTitle, "description": seoDescription }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, { "content": heroContent })} ${renderComponent($$result2, "Features", $$Features, { "content": featuresSection, "padding": "base", "background": "light" })} ${renderComponent($$result2, "RecentPosts", $$RecentPosts, { "content": recentPostsSection, "background": "base", "padding": "base", "postsToShow": 3, "category": "Theme Usage" })} ${renderComponent($$result2, "SplitPanel", $$SplitPanel, { "content": styleGuideSection, "imagePosition": "right", "background": "light", "padding": "base" })} ${renderComponent($$result2, "CtaBanner", $$CtaBanner, { "content": mainCta, "variant": "contained", "background": "light", "paddingBottom": "base" })} ${renderComponent($$result2, "Logos", $$Logos, { "content": logosSection, "background": "base", "padding": "small" })} ${renderComponent($$result2, "Stats", $$Stats, { "content": sideBySideStats, "background": "dark", "padding": "base" })} ${renderComponent($$result2, "Faqs", $$Faqs, { "content": faqsSection, "background": "base", "padding": "base" })} ` })}`;
}, "/home/user/titan-core/src/pages/index.astro", void 0);

const $$file = "/home/user/titan-core/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
