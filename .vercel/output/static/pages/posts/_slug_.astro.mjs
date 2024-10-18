export { renderers } from '../../renderers.mjs';
export { onRequest } from '../../_empty-middleware.mjs';
import '../../chunks/astro.15c234ab.mjs';
import 'html-escaper';
import 'react';
import 'react-dom/server';

const page = () => import('../../chunks/pages/_slug_.astro.c5834198.mjs').then(n => n._);

export { page };
