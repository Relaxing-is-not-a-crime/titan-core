import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CzvwK8OB.mjs';
import { manifest } from './manifest_BVZTWTNw.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/blog/_page_.astro.mjs');
const _page3 = () => import('./pages/blog.astro.mjs');
const _page4 = () => import('./pages/blog/_---slug_.astro.mjs');
const _page5 = () => import('./pages/category/_slug_/_page_.astro.mjs');
const _page6 = () => import('./pages/category/_---slug_.astro.mjs');
const _page7 = () => import('./pages/components.astro.mjs');
const _page8 = () => import('./pages/contact.astro.mjs');
const _page9 = () => import('./pages/legal/_slug_.astro.mjs');
const _page10 = () => import('./pages/legal.astro.mjs');
const _page11 = () => import('./pages/privacy-policy.astro.mjs');
const _page12 = () => import('./pages/style-guide.astro.mjs');
const _page13 = () => import('./pages/team.astro.mjs');
const _page14 = () => import('./pages/team/_---slug_.astro.mjs');
const _page15 = () => import('./pages/theme-info/techspecs.astro.mjs');
const _page16 = () => import('./pages/theme-info.astro.mjs');
const _page17 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/node.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/blog/[page].astro", _page2],
    ["src/pages/blog/index.astro", _page3],
    ["src/pages/blog/[...slug].astro", _page4],
    ["src/pages/category/[slug]/[page].astro", _page5],
    ["src/pages/category/[...slug].astro", _page6],
    ["src/pages/components/index.astro", _page7],
    ["src/pages/contact/index.astro", _page8],
    ["src/pages/legal/[slug].astro", _page9],
    ["src/pages/legal/index.astro", _page10],
    ["src/pages/privacy-policy/index.astro", _page11],
    ["src/pages/style-guide.astro", _page12],
    ["src/pages/team/index.astro", _page13],
    ["src/pages/team/[...slug].astro", _page14],
    ["src/pages/theme-info/TechSpecs.astro", _page15],
    ["src/pages/theme-info/index.astro", _page16],
    ["src/pages/index.astro", _page17]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "mode": "standalone",
    "client": "file:///home/user/titan-core/dist/client/",
    "server": "file:///home/user/titan-core/dist/server/",
    "host": false,
    "port": 4321,
    "assets": "_astro",
    "experimentalStaticHeaders": false
};
const _exports = createExports(_manifest, _args);
const handler = _exports['handler'];
const startServer = _exports['startServer'];
const options = _exports['options'];
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { handler, options, pageMap, startServer };
