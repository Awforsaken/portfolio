import { c as createAstro, a as createComponent, r as renderTemplate, f as addAttribute, d as renderComponent, e as renderHead, m as maybeRenderHead } from '../astro.15c234ab.mjs';
import 'html-escaper';
import { c as contentfulClient, $ as $$Header, a as $$Layout } from './_slug_.astro.c5834198.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro();
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index$1;
  const entries = await contentfulClient.getEntries({
    content_type: "post"
  });
  const availableTags = ["Personal", "Web dev", "Work", "UX/UI", "Design"];
  const name = "barry";
  return renderTemplate(_a || (_a = __template(['<head>\n  <link rel="stylesheet" href="/styles/global.css">\n  <link rel="stylesheet" href="/styles/type.css">\n  <link rel="stylesheet" href="/styles/colours.css">\n  <link rel="stylesheet" href="/styles/bento.css">\n\n  <link rel="preconnect" href="https://fonts.googleapis.com">\n  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n  <link href="https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet">\n\n  <script src="https://code.jquery.com/jquery-3.6.0.min.js" defer><\/script>\n  <script src="/filter.js" defer><\/script>\n', "</head>\n<body>\n  ", '\n  <div class="core-width outline">\n    <div class="hero padded">\n      <h1 class="h1 mono text-high"><span class="highlight-red">Dan</span>ielius M.</h1>\n      <div class="text-low mono">UX & UI designer</div>\n      <div class="text-mid text-max text-high">\n        I am a UX and UI designer, general creative who loves tinkering with code...\n      </div>\n      <div class="mono">\n        This work in progress and I still have things to do:\n        <ul>\n          <li>mobile header</li>\n          <li>styling for portfolio bento // clean up bento.css</li>\n          <li>sort out about me section</li>\n        </ul>\n      </div>\n    </div>\n  </div>\n\n  <div class="outline">\n    <div class="core-width lined outline h-2rem"></div>\n  </div>\n  <div class="outline">\n    <div class="core-width outline">\n      <h1 class="h2 padded mono">Project highlights</h1>\n    \n    </div>\n  </div>\n  <div class="outline">\n          <!-- Manually configured checkboxes for filtering -->\n   <div id="tag-filters" class="outline core-width lined">\n  ', '\n    <span>\n      <input type="checkbox" id="orange" name="orange" checked>\n      <label for="orange">Orange</label>\n    </span>\n</div>      \n  </div>\n  <div class="outline">\n    <div class="core-width outline">\n      <!-- Display blog posts dynamically -->\n      <div class="bento-container lined" id="post-container">\n        ', '\n      </div>\n    </div>\n  </div>\n  <div class="outline">\n    <div class="core-width lined outline h-2rem"></div>\n  </div>\n  \n\n  \n\n  ', "\n</body>"])), renderHead(), renderComponent($$result, "Header", $$Header, {}), availableTags.map((tag) => renderTemplate`<label${addAttribute(tag, "key")} class="tag-filter-option outline mono">
      <input type="checkbox"${addAttribute(tag, "value")} checked>
      <span>${tag}</span>
    </label>`), entries.items.map((item) => {
    const sizeClass = item.fields.size || "size-small";
    const imageUrl = item.fields.titleImage?.fields.file.url;
    const postTags = item.fields.tagging || [];
    const tagClasses = postTags.map((tag) => tag.replace(/\s+/g, "-").toLowerCase()).join(" ");
    const slug = item.fields.slug;
    return renderTemplate`<a${addAttribute(`/posts/${slug}`, "href")}${addAttribute(slug, "key")}${addAttribute(`bento-item outline ${sizeClass} ${tagClasses}`, "class")}${addAttribute(imageUrl ? `background-image: url(${imageUrl});` : "", "style")}${addAttribute(postTags.join(","), "data-tags")}>  
              
                
                <div class="bento-info-card">
                  <h2 class="h5 mono">${item.fields.title}</h2>
                </div>
        
                ${postTags.length > 0 && renderTemplate`<div class="bento-tags">
                    ${postTags.map((tag) => renderTemplate`<span${addAttribute(tag, "key")} class="tag mono">${tag}</span>`)}
                  </div>`}
              
            </a>`;
  }), name);
}, "C:/Users/sinne/Documents/GitHub/portfolio/src/pages/index.astro", void 0);

const $$file$1 = "C:/Users/sinne/Documents/GitHub/portfolio/src/pages/index.astro";
const $$url$1 = "";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "WIP" }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead()}<p>WIP</p>
` })}`;
}, "C:/Users/sinne/Documents/GitHub/portfolio/src/pages/about/index.astro", void 0);

const $$file = "C:/Users/sinne/Documents/GitHub/portfolio/src/pages/about/index.astro";
const $$url = "/about";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { index as a, index$1 as i };
