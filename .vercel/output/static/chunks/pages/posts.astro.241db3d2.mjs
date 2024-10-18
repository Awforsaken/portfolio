import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead } from '../astro.15c234ab.mjs';
import 'html-escaper';

const $$Astro = createAstro();
const $$Posts = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Posts;
  return renderTemplate`${maybeRenderHead()}<p>hello</p>`;
}, "C:/Users/sinne/Documents/GitHub/portfolio/src/pages/posts.astro", void 0);

const $$file = "C:/Users/sinne/Documents/GitHub/portfolio/src/pages/posts.astro";
const $$url = "/posts";

export { $$Posts as default, $$file as file, $$url as url };
