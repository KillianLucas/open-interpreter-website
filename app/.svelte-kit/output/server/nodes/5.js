

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/01-brutalist/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.6kHEG5Ew.js","_app/immutable/chunks/scheduler.CcMS3Mw0.js","_app/immutable/chunks/index.Dtc04KBN.js"];
export const stylesheets = ["_app/immutable/assets/5.CCplrnuM.css"];
export const fonts = [];
