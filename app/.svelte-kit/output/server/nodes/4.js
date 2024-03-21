

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/01/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.vcGsZR0v.js","_app/immutable/chunks/scheduler.CcMS3Mw0.js","_app/immutable/chunks/index.Dtc04KBN.js","_app/immutable/chunks/Nav.DBDmFr9F.js"];
export const stylesheets = [];
export const fonts = [];
