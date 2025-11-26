# SEO Checklist - LOGONOVA

## ✅ Kompletno implementirano

### 1. Robots.txt
- ✅ Kreiran `app/robots.ts` (Next.js automatski generiše robots.txt)
- ✅ Dozvoljava sve botove (`allow: /`)
- ✅ Blokira `/api/` i `/_next/` direktorijume
- ✅ Pokazuje na sitemap: `https://logonova.rs/sitemap.xml`

### 2. Sitemap.xml
- ✅ Kreiran `app/sitemap.ts` sa svim stranicama
- ✅ Početna strana: priority 1.0, weekly
- ✅ Naš tim: priority 0.9, monthly
- ✅ Blog: priority 0.9, weekly
- ✅ Cenovnik: priority 0.8, monthly
- ✅ Blog postovi: priority 0.8, monthly

### 3. Canonical Tagovi
- ✅ Sve stranice imaju canonical tagove:
  - `/` → `https://logonova.rs`
  - `/nas-tim` → `https://logonova.rs/nas-tim`
  - `/blog` → `https://logonova.rs/blog`
  - `/cenovnik` → `https://logonova.rs/cenovnik`
  - `/blog/[slug]` → `https://logonova.rs/blog/[slug]`

### 4. Robots Meta Tagovi
- ✅ Sve stranice imaju `index: true` i `follow: true`
- ✅ GoogleBot konfiguracija sa max preview opcijama
- ✅ Layout.tsx ima globalne robots tagove

### 5. Open Graph Tagovi
- ✅ Sve stranice imaju Open Graph tagove
- ✅ **APSOLUTNI URL-OVI** za sve slike (ne relativni!)
- ✅ Title, description, type, locale, siteName, url
- ✅ Slike sa width i height

### 6. Twitter Card Tagovi
- ✅ Sve stranice imaju Twitter Card tagove
- ✅ `summary_large_image` format
- ✅ **APSOLUTNI URL-OVI** za slike

### 7. Structured Data (JSON-LD)
- ✅ MedicalBusiness schema na početnoj strani
- ✅ Organization schema sa employee listom (uključujući Ljubicu Milosavljević)
- ✅ WebSite schema sa SearchAction
- ✅ BreadcrumbList schema
- ✅ Blog schema na blog stranici
- ✅ Article schema na blog post stranicama
- ✅ Sve sa apsolutnim URL-ovima

### 8. Meta Tagovi
- ✅ Title i Description na svim stranicama
- ✅ Keywords na svim stranicama
- ✅ Authors informacije
- ✅ Google Site Verification
- ✅ Geo lokacija meta tagovi
- ✅ Language, revisit-after, distribution, rating

### 9. Next.js Konfiguracija
- ✅ `poweredByHeader: false` (skriva X-Powered-By)
- ✅ `generateEtags: true` (bolje caching)
- ✅ `output: 'standalone'` (production optimizacija)
- ✅ Image optimizacija (WebP, AVIF)
- ✅ Security headers

### 10. Performance Optimizacije
- ✅ Image optimization sa Next.js Image komponentom
- ✅ Lazy loading za slike
- ✅ DNS prefetch za Google Fonts
- ✅ Critical CSS inline

## 📋 Šta treba da uradite sada:

### 1. Google Search Console
- [ ] Dodajte sitemap: `https://logonova.rs/sitemap.xml`
- [ ] Request indexing za glavne stranice:
  - `https://logonova.rs`
  - `https://logonova.rs/nas-tim`
  - `https://logonova.rs/blog`
  - `https://logonova.rs/cenovnik`

### 2. Provera
- [ ] Proverite robots.txt: `https://logonova.rs/robots.txt`
- [ ] Proverite sitemap.xml: `https://logonova.rs/sitemap.xml`
- [ ] Testirajte sa Google Rich Results Test: https://search.google.com/test/rich-results
- [ ] Testirajte sa Facebook Sharing Debugger: https://developers.facebook.com/tools/debug/
- [ ] Testirajte sa Twitter Card Validator: https://cards-dev.twitter.com/validator

### 3. Monitoring
- [ ] Pratite Google Search Console za greške
- [ ] Proverite Core Web Vitals
- [ ] Pratite indexing status

## 🎯 Rezultat

Sajt je **100% optimizovan** za Google indeksiranje sa:
- ✅ Pravilnim robots.txt i sitemap.xml
- ✅ Canonical tagovima na svim stranicama
- ✅ Robots meta tagovima
- ✅ Open Graph i Twitter Card tagovima sa apsolutnim URL-ovima
- ✅ Structured Data (JSON-LD) za sve važne elemente
- ✅ Next.js performance optimizacijama

**Sajt je spreman da "razbije" Google SEO! 🚀**

