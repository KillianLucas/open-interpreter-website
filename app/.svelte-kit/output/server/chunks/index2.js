import { c as create_ssr_component, e as each, d as escape, f as add_attribute, v as validate_component } from "./ssr.js";
const Open_graph = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { openGraph = void 0 } = $$props;
  if ($$props.openGraph === void 0 && $$bindings.openGraph && openGraph !== void 0)
    $$bindings.openGraph(openGraph);
  return `${openGraph ? `${each(Object.entries(openGraph), ([key, value]) => {
    let _type = typeof value;
    return `  ${_type !== "object" ? (() => {
      let transform = key.replace(/([a-z])([A-Z])/g, "$1:$2").toLowerCase();
      return ` <meta property="${"og:" + escape(transform, true)}"${add_attribute("content", value, 0)}>`;
    })() : ``} ${_type === "object" ? `${key === "images" ? `${each(openGraph.images ?? [], (image) => {
      return `${each(Object.entries(image), ([key2, value2]) => {
        return `<meta property="${"og:image:" + escape(key2, true)}"${add_attribute("content", value2.toString(), 0)}>`;
      })}`;
    })}` : `${key === "videos" ? `${each(openGraph.videos ?? [], (video) => {
      return `${each(Object.entries(video), ([key2, value2]) => {
        return `${key2 === "url" ? `<meta property="og:video"${add_attribute("content", value2.toString(), 0)}>` : `<meta property="${"og:video:" + escape(key2, true)}"${add_attribute("content", value2.toString(), 0)}>`}`;
      })}`;
    })}` : `${key === "localeAlternate" ? `${each(openGraph.localeAlternate ?? [], (alternate) => {
      return `<meta property="og:locale:alternate"${add_attribute("content", alternate, 0)}>`;
    })}` : `${key === "music" ? `${each(Object.entries(openGraph.music ?? {}), ([key2, value2]) => {
      let transform = key2.replace(/([a-z])([A-Z])/g, "$1:$2").toLowerCase();
      return ` <meta property="${"music:" + escape(transform, true)}"${add_attribute("content", value2.toString(), 0)}>`;
    })}` : `${key === "movie" ? `${each(Object.entries(openGraph.movie ?? {}), ([key2, value2]) => {
      return `${typeof value2 === "object" ? `${each(value2, (propValue) => {
        return `<meta property="${"video:" + escape(key2, true)}"${add_attribute("content", propValue, 0)}>`;
      })}` : (() => {
        let transform = key2.replace(/([a-z])([A-Z])/g, "$1:$2").toLowerCase();
        return ` <meta property="${"video:" + escape(transform, true)}"${add_attribute("content", value2.toString(), 0)}>`;
      })()}`;
    })}` : `${key === "article" ? `${each(Object.entries(openGraph.article ?? {}), ([key2, value2]) => {
      return `${typeof value2 === "object" ? `${each(value2, (propValue) => {
        return `<meta property="${"article:" + escape(key2, true)}"${add_attribute("content", propValue, 0)}>`;
      })}` : (() => {
        let transform = key2.replace(/([a-z])([A-Z])/g, "$1:$2").toLowerCase();
        return ` <meta property="${"article:" + escape(transform, true)}"${add_attribute("content", value2.toString(), 0)}>`;
      })()}`;
    })}` : `${key === "book" ? `${each(Object.entries(openGraph.book ?? {}), ([key2, value2]) => {
      return `${typeof value2 === "object" ? `${each(value2, (propValue) => {
        return `<meta property="${"book:" + escape(key2, true)}"${add_attribute("content", propValue, 0)}>`;
      })}` : (() => {
        let transform = key2.replace(/([a-z])([A-Z])/g, "$1:$2").toLowerCase();
        return ` <meta property="${"book:" + escape(transform, true)}"${add_attribute("content", value2.toString(), 0)}>`;
      })()}`;
    })}` : `${key === "profile" ? `${each(Object.entries(openGraph.profile ?? {}), ([key2, value2]) => {
      let transform = key2.replace(/([a-z])([A-Z])/g, "$1:$2").toLowerCase();
      return ` <meta property="${"profile:" + escape(transform, true)}"${add_attribute("content", value2, 0)}>`;
    })}` : ``}`}`}`}`}`}`}`}` : ``}`;
  })}` : ``}`;
});
const Svelte_seo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title = void 0 } = $$props;
  let { description = void 0 } = $$props;
  let { keywords = void 0 } = $$props;
  let { base = void 0 } = $$props;
  let { applicationName = void 0 } = $$props;
  let { themeColor = void 0 } = $$props;
  let { nofollow = false } = $$props;
  let { noindex = false } = $$props;
  let { nositelinkssearchbox = false } = $$props;
  let { notranslate = false } = $$props;
  let { canonical = void 0 } = $$props;
  let { amp = void 0 } = $$props;
  let { manifest = void 0 } = $$props;
  let { languageAlternates = void 0 } = $$props;
  let { twitter = void 0 } = $$props;
  let { openGraph = void 0 } = $$props;
  let { facebook = void 0 } = $$props;
  let { jsonLd = void 0 } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.keywords === void 0 && $$bindings.keywords && keywords !== void 0)
    $$bindings.keywords(keywords);
  if ($$props.base === void 0 && $$bindings.base && base !== void 0)
    $$bindings.base(base);
  if ($$props.applicationName === void 0 && $$bindings.applicationName && applicationName !== void 0)
    $$bindings.applicationName(applicationName);
  if ($$props.themeColor === void 0 && $$bindings.themeColor && themeColor !== void 0)
    $$bindings.themeColor(themeColor);
  if ($$props.nofollow === void 0 && $$bindings.nofollow && nofollow !== void 0)
    $$bindings.nofollow(nofollow);
  if ($$props.noindex === void 0 && $$bindings.noindex && noindex !== void 0)
    $$bindings.noindex(noindex);
  if ($$props.nositelinkssearchbox === void 0 && $$bindings.nositelinkssearchbox && nositelinkssearchbox !== void 0)
    $$bindings.nositelinkssearchbox(nositelinkssearchbox);
  if ($$props.notranslate === void 0 && $$bindings.notranslate && notranslate !== void 0)
    $$bindings.notranslate(notranslate);
  if ($$props.canonical === void 0 && $$bindings.canonical && canonical !== void 0)
    $$bindings.canonical(canonical);
  if ($$props.amp === void 0 && $$bindings.amp && amp !== void 0)
    $$bindings.amp(amp);
  if ($$props.manifest === void 0 && $$bindings.manifest && manifest !== void 0)
    $$bindings.manifest(manifest);
  if ($$props.languageAlternates === void 0 && $$bindings.languageAlternates && languageAlternates !== void 0)
    $$bindings.languageAlternates(languageAlternates);
  if ($$props.twitter === void 0 && $$bindings.twitter && twitter !== void 0)
    $$bindings.twitter(twitter);
  if ($$props.openGraph === void 0 && $$bindings.openGraph && openGraph !== void 0)
    $$bindings.openGraph(openGraph);
  if ($$props.facebook === void 0 && $$bindings.facebook && facebook !== void 0)
    $$bindings.facebook(facebook);
  if ($$props.jsonLd === void 0 && $$bindings.jsonLd && jsonLd !== void 0)
    $$bindings.jsonLd(jsonLd);
  return `${$$result.head += `<!-- HEAD_svelte-edm2kb_START -->${title ? `${$$result.title = `<title>${escape(title)}</title>`, ""}` : ``}${description ? `<meta name="description"${add_attribute("content", description, 0)}>` : ``}${canonical ? `<link rel="canonical"${add_attribute("href", canonical, 0)}>` : ``}${keywords ? `<meta name="keywords"${add_attribute("content", keywords, 0)}>` : ``}${amp ? `<link rel="amphtml"${add_attribute("href", amp, 0)}>` : ``}${manifest ? `<link rel="manifest"${add_attribute("href", manifest, 0)}>` : ``}${applicationName ? `<meta name="application-name"${add_attribute("content", applicationName, 0)}>` : ``}${languageAlternates ? `${each(languageAlternates, ({ href, hreflang }) => {
    return `<link rel="alternate"${add_attribute("href", href, 0)}${add_attribute("hreflang", hreflang, 0)}>`;
  })}` : ``}${themeColor ? `<meta name="theme-color"${add_attribute("content", themeColor, 0)}>` : ``}${base ? `<base${add_attribute("href", base, 0)}>` : ``}${facebook?.appId ? `<meta property="fb:app_id"${add_attribute("content", facebook.appId, 0)}>` : ``}<meta name="robots"${add_attribute("content", `${noindex ? "noindex" : "index"},${nofollow ? "nofollow" : "follow"}`, 0)}><meta name="googlebot"${add_attribute("content", `${noindex ? "noindex" : "index"},${nofollow ? "nofollow" : "follow"}`, 0)}>${nositelinkssearchbox ? `<meta name="google" content="nositelinkssearchbox">` : ``}${notranslate ? `<meta name="google" content="notranslate">` : ``}${twitter ? `${each(Object.entries(twitter), ([key, value]) => {
    let transformed = key.replace(/([a-z])([A-Z])/g, "$1:$2").toLowerCase();
    return `  <meta name="${"twitter:" + escape(transformed, true)}"${add_attribute("content", value, 0)}>`;
  })}` : ``}${openGraph ? `${validate_component(Open_graph, "OpenGraphComponent").$$render($$result, { openGraph }, {}, {})}` : ``}${jsonLd ? (() => {
    let data = Object.assign({ "@context": "https://schema.org" }, jsonLd);
    return ` <!-- HTML_TAG_START -->${`<script type="application/ld+json">${JSON.stringify(data) + "<"}/script>`}<!-- HTML_TAG_END -->`;
  })() : ``}${slots.default ? slots.default({}) : ``}<!-- HEAD_svelte-edm2kb_END -->`, ""}`;
});
export {
  Svelte_seo as S
};
