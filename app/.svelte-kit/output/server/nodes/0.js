import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.DHrU2ByC.js","_app/immutable/chunks/scheduler.CcMS3Mw0.js","_app/immutable/chunks/index.Dtc04KBN.js","_app/immutable/chunks/each.DdyD-znN.js","_app/immutable/chunks/index.CiBn7g07.js"];
export const stylesheets = ["_app/immutable/assets/0.LNIBVUkm.css"];
export const fonts = [];
