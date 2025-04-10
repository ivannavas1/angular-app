
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/angular-app/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/angular-app/home",
    "route": "/angular-app"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-V5FBC3UJ.js"
    ],
    "route": "/angular-app/home"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 557, hash: 'da13737fd6bda7790bd8d17786379bbc23113feee136da3eca616ff1a57a2105', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1070, hash: 'b8819a4f1f26784c4042eec7d0455b22d251f026413576916fb238b662a0cb7b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home/index.html': {size: 5237, hash: 'dcf11c2bc8bb5403e4347f4547e27981fbab25c1fbfdc993d22c9618cd0f0bd8', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
