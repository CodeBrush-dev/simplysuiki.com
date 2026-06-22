// Single-file SEO snippet (CONFIG + META_DATA + LD_DATA + runtime)

(function () {
  "use strict";


  const CONFIG = {
    baseUrlFallback: "https://www.simplysuiki.com",
    googleSiteVerification: ""
  };

  // === DATA (from your previous meta-tags.js) ===
  const META_DATA = {"meta_tags_list":[{"page_url":"https://www.simplysuiki.com","title_tag":"Psychodynamic Psychotherapy London | Simply Suiki","meta_description":"Psychodynamic psychotherapy in Peckham, South London. Online and in-person adult counselling and emotional support with a neurodivergent Black therapist."},{"page_url":"https://www.simplysuiki.com/about-me","title_tag":"Online Therapy London for Adults | Simply Suiki","meta_description":"One-to-one psychodynamic psychotherapy and adult counselling in Peckham, South London. Online and in-person support for your mental wellbeing."},{"page_url":"https://www.simplysuiki.com/specialisms","title_tag":"Trauma Support & Abuse Recovery London | Simply Suiki","meta_description":"Specialist trauma support, abuse recovery, grief counselling and relationship counselling for adults in London. Compassionate, psychodynamic therapy."},{"page_url":"https://www.simplysuiki.com/approach","title_tag":"Anxiety Therapy & Emotional Support London | Simply Suiki","meta_description":"Psychodynamic counselling in London focusing on emotional support, anxiety, relationships and long-term mental wellbeing for adults."},{"page_url":"https://www.simplysuiki.com/faqs","title_tag":"Adult Counselling in London FAQs | Simply Suiki","meta_description":"Adult counselling FAQs: fees, sessions, accessibility and confidentiality for psychodynamic psychotherapy in Peckham, South London."},{"page_url":"https://www.simplysuiki.com/contact-3","title_tag":"Psychodynamic Psychotherapy London Contact | Simply Suiki","meta_description":"Contact Simply Suiki in Peckham, South London to arrange psychodynamic psychotherapy, online therapy and adult counselling sessions."},{"page_url":"https://www.simplysuiki.com/accessibility-statement","title_tag":"Accessibility | Psychotherapy Practice London | Simply Suiki","meta_description":"Accessibility information for Simply Suiki psychotherapy and counselling practice in London, including wheelchair-accessible therapy room details."}],"keywords":["psychodynamic psychotherapy london","mental wellbeing london","trauma support london","relationship counselling london","abuse recovery london","online therapy london","emotional support london","grief counselling london","anxiety therapy london","adult counselling london"]};

  // === DATA (from your previous LD.js) ===
  const LD_DATA = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.simplysuiki.com/#localbusiness",
  "name": "Simply Suiki",
  "url": "https://www.simplysuiki.com/",
  "description": "Simply Suiki provides one-to-one psychodynamic psychotherapy and counselling for adults in Peckham, South London, UK.",
  "image": [
    "https://static.wixstatic.com/media/e2beb5_aae14a6d939444d4951b21fd1ac37e64~mv2.jpeg/v1/crop/x_0,y_22,w_1052,h_1251/fill/w_329,h_391,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/professional%20photo%20website.jpeg",
    "https://static.wixstatic.com/media/e2beb5_aae14a6d939444d4951b21fd1ac37e64%7Emv2.jpeg/v1/fill/w_192%2Ch_192%2Clg_1%2Cusm_0.66_1.00_0.01/e2beb5_aae14a6d939444d4951b21fd1ac37e64%7Emv2.jpeg"
  ],
  "email": "mailto:suikimorgan@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Print Village, 58 Chadwick Road, Peckham",
    "addressLocality": "London",
    "postalCode": "SE15 4PU",
    "addressCountry": "GB"
  },
  "areaServed": {
    "@type": "AdministrativeArea",
    "name": "Peckham, South London, UK"
  },
  "knowsAbout": [
    "psychodynamic psychotherapy",
    "counselling for adults",
    "abuse",
    "emotional abuse",
    "physical abuse",
    "neglect",
    "sexual abuse",
    "financial abuse",
    "coercive and controlling behaviour",
    "relationships",
    "relationship loss",
    "grief and bereavement",
    "divorce",
    "miscarriage",
    "betrayal",
    "trauma",
    "bullying",
    "community violence",
    "family member with mental health issues",
    "substance abuse in the home",
    "witnessing domestic violence",
    "sudden separation from a loved one",
    "poverty",
    "racism",
    "discrimination",
    "mental wellbeing",
    "stress",
    "depression",
    "anxiety"
  ],
  "founder": {
    "@type": "Person",
    "name": "Suiki Morgan",
    "email": "mailto:suikimorgan@gmail.com",
    "jobTitle": "Psychodynamic Psychotherapist",
    "description": "Neurodivergent black psychodynamic psychotherapist offering one-to-one psychotherapy and counselling for adults 18 and over in Peckham, South London.",
    "sameAs": [
      "https://namedrop.io/suikimorgan"
    ]
  },
  "sameAs": [
    "https://namedrop.io/suikimorgan"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Psychotherapy and Counselling Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "name": "Initial 50-minute psychotherapy consultation",
        "price": "35",
        "priceCurrency": "GBP",
        "description": "Initial 50-minute psychodynamic psychotherapy and counselling consultation for adults, charged at half price and payable on the day of the appointment."
      },
      {
        "@type": "Offer",
        "name": "Weekly psychotherapy session",
        "price": "70",
        "priceCurrency": "GBP",
        "description": "Subsequent weekly 50-minute psychodynamic psychotherapy and counselling sessions for adults. Sensible fee adjustments can be negotiated."
      },
      {
        "@type": "Offer",
        "name": "Initial 15-minute telephone consultation",
        "price": "0",
        "priceCurrency": "GBP",
        "description": "Free initial 15-minute telephone consultation to discuss therapy and ask questions."
      }
    ]
  }
};

  /* ===== Helpers ===== */
  function clamp(str, max) {
    if (typeof str !== "string") str = String(str ?? "");
    return str.length <= max ? str : str.slice(0, Math.max(0, max - 1)) + "…";
  }

  function stripTrailingSlash(p) {
    if (!p) return "/";
    return p.length > 1 && p.endsWith("/") ? p.slice(0, -1) : p;
  }

  function normalizePathFromUrl(url) {
    try {
      const u = new URL(url);
      return stripTrailingSlash(u.pathname || "/");
    } catch {
      const m = String(url || "").match(/^https?:\/\/[^/]+(\/[^?#]*)?/i);
      return stripTrailingSlash((m && m[1]) || "/");
    }
  }

  function removeLangPrefix(pathname) {
    const m = String(pathname || "/").match(
      /^\/([a-z]{2}(?:-[A-Z]{2})?)(?=\/|$)(.*)$/
    );
    if (!m) return pathname || "/";
    const rest = stripTrailingSlash(m[2] || "/");
    return rest || "/";
  }

  function currentPagePath() {
    const path = window.location.pathname || "/";
    return stripTrailingSlash(path || "/");
  }

  function currentKeyCandidates() {
    const path = currentPagePath();
    const origin = (window.location.origin || "").replace(/\/$/, "");
    const full = origin + path;

    if (path === "/") {
      return [full, "/"];
    }

    const noLang = removeLangPrefix(path);
    return [full, path, stripTrailingSlash(path), noLang, stripTrailingSlash(noLang)];
  }

  function buildIndex(metaJson) {
    const list = (metaJson && metaJson.meta_tags_list) || [];
    const index = {};
    for (const item of list) {
      const path = normalizePathFromUrl(item.page_url);
      let origin = "";
      try {
        origin = new URL(item.page_url).origin;
      } catch {
        origin = "";
      }
      const full = origin ? origin.replace(/\/$/, "") + path : "";

      const entry = {
        title: item.title_tag || "",
        description: item.meta_description || "",
      };

      index[path] = entry;
      index[stripTrailingSlash(path)] = entry;
      if (full) index[full] = entry;
    }
    return index;
  }

  function _stripQuotes(s) {
    return String(s ?? "")
      .replace(/["'“”‘’„«»]/g, "")
      .replace(/\s+/g, " ")
      .replace(/^[\s\-–—·,;:]+|[\s\-–—·,;:]+$/g, "")
      .trim();
  }

  function normalizeKeywordsList(input, opts) {
    const { maxKeywords = 20 } = opts || {};
    if (input == null) return [];
    let items = Array.isArray(input)
      ? input.slice()
      : typeof input === "string"
      ? input.split(",")
      : [];
    const seen = new Set();
    return items
      .map(_stripQuotes)
      .filter((s) => s && s.length >= 2)
      .filter((s) => {
        const k = s.toLowerCase();
        if (seen.has(k)) return false;
        seen.add(k);
        return true;
      })
      .slice(0, maxKeywords);
  }

  function normalizeKeywords(input, opts) {
    const { maxKeywords = 20, maxLength = 280 } = opts || {};
    const list = normalizeKeywordsList(input, { maxKeywords });
    const content = list.join(", ");
    return content.length > maxLength ? content.slice(0, maxLength) : content;
  }

  function applyAltFallbacks(keywordsPool) {
    if (!Array.isArray(keywordsPool) || keywordsPool.length === 0) return;
    try {
      const images = Array.from(document.querySelectorAll("img"));
      let i = 0;
      images.forEach((img) => {
        const curAlt = (img.getAttribute("alt") || "").trim().toLowerCase();
        const shouldReplace =
          !curAlt ||
          curAlt.endsWith(".jpg") ||
          curAlt.endsWith(".png") ||
          curAlt === "image" ||
          curAlt === "img";
        if (shouldReplace) {
          img.setAttribute("alt", keywordsPool[i % keywordsPool.length]);
          i++;
        }
      });
    } catch {
      /* ignore */
    }
  }

  function optimizeImages() {
    try {
      const images = Array.from(document.querySelectorAll("img"));
      if ("IntersectionObserver" in window) {
        const io = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target;
              io.unobserve(img);
              // hook for tracking / lazy work if needed
            }
          });
        });
        images.forEach((img, index) => {
          if (index > 0) io.observe(img);
        });
      }
    } catch (err) {
      console.error("Image optimization error:", err);
    }
  }

  function upsertMeta(nameOrProperty, content, useProperty) {
    const selector = useProperty
      ? `meta[property="${nameOrProperty}"]`
      : `meta[name="${nameOrProperty}"]`;
    let el = document.head.querySelector(selector);
    if (!el) {
      el = document.createElement("meta");
      if (useProperty) el.setAttribute("property", nameOrProperty);
      else el.setAttribute("name", nameOrProperty);
      document.head.appendChild(el);
    }
    el.setAttribute("content", content);
  }

  function upsertLink(rel, href) {
    let link = document.head.querySelector(`link[rel="${rel}"]`);
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", rel);
      document.head.appendChild(link);
    }
    link.setAttribute("href", href);
  }

  function injectJsonLd(ldObject) {
    if (!ldObject) return;
    try {
      const existing = Array.from(
        document.head.querySelectorAll('script[type="application/ld+json"]')
      );
      existing.forEach((el) => {
        el.parentNode.removeChild(el);
      });

      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(ldObject);
      document.head.appendChild(script);
    } catch (err) {
      console.error("Error injecting JSON-LD:", err);
    }
  }

  function applyJsonLd() {
    injectJsonLd(LD_DATA);
  }

  function applySeoFromJson() {
    try {
      const metaJson = META_DATA;
      const index = buildIndex(metaJson);

      const path = currentPagePath();
      const isHome = path === "/";

      const fallbackBase =
        (CONFIG && CONFIG.baseUrlFallback) ? CONFIG.baseUrlFallback : "";
      const baseUrl = (window.location.origin || fallbackBase).replace(/\/$/, "");
      const canonicalUrl = baseUrl + path;

      const keys = currentKeyCandidates();
      let entry = null;
      for (const k of keys) {
        if (index[k]) {
          entry = index[k];
          break;
        }
      }

      if (!entry) {
        return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
      }

      const title = clamp(entry.title, 60);
      const desc = clamp(entry.description, 185);

      document.title = title;

      const metaList = [
        { type: "name", key: "description", content: desc },
        { type: "property", key: "og:url", content: canonicalUrl },
        { type: "name", key: "resource-hints", content: "preload" },
        { type: "name", key: "format-detection", content: "telephone=yes" },
        { type: "name", key: "mobile-web-app-capable", content: "yes" },
        { type: "name", key: "apple-mobile-web-app-capable", content: "yes" },
      ];

      // opcjonalnie dodaj google-site-verification, jeśli jest w CONFIG
      if (CONFIG && CONFIG.googleSiteVerification) {
        metaList.push({
          type: "name",
          key: "google-site-verification",
          content: CONFIG.googleSiteVerification
        });
      }

      if (isHome && metaJson && metaJson.keywords) {
        const kwContent = normalizeKeywords(metaJson.keywords, {
          maxKeywords: 25,
          maxLength: 512,
        });
        if (kwContent) {
          metaList.push({ type: "name", key: "keywords", content: kwContent });
        }
      }

      metaList.forEach((m) => {
        upsertMeta(m.key, m.content, m.type === "property");
      });

      upsertLink("canonical", canonicalUrl);

      return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
    } catch (err) {
      console.error("Error meta settings:", err);
      return [];
    }
  }

  function initSnippetSEO() {
    const keywordsPool = applySeoFromJson();
    const path = currentPagePath();
    if (path === "/") {
      applyJsonLd();
    }
    optimizeImages();
    applyAltFallbacks(keywordsPool);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSnippetSEO);
  } else {
    initSnippetSEO();
  }
})();
