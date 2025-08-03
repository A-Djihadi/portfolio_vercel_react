# Portfolio Repository

This portfolio is built using modern web technologies for a fast and efficient development experience.

## Tech Stack

- **Frontend:**  
  [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) + [Vite](https://vitejs.dev/)  
  Lightweight, fast, and easy to configure.

- **UI Framework:**  
  [TailwindCSS](https://tailwindcss.com/)  
  Rapid styling without lengthy custom CSS.

- **Backend / API:**  
  No backend required.  
  Forms handled via external services like [Formspree](https://formspree.io/) or [EmailJS](https://www.emailjs.com/).

- **Deployment:**  
  [Vercel](https://vercel.com/) or [Netlify](https://www.netlify.com/)  
  Free, simple integration with GitHub.

- **CMS (Optional):**  
  Markdown or JSON files for projects/experiences.  
  No need for heavy CMS solutions.

---

# 🎨 Web UI Size Cheat Sheet

Un guide pratique pour t’aider à choisir les **bonnes tailles (px)** pour les éléments clés de ton interface web. Idéal pour construire un design moderne, épuré et responsive.

---

## 📦 Sections

- [🔹 Icônes](#-icônes)
- [🖼️ Images](#-images)
- [🅰️ Typographie](#-typographie)
- [🧩 Composants UI](#-composants-ui)
- [🟦 Border Radius](#-border-radius)
- [📱 Accessibilité](#-accessibilité)
- [💡 Astuces & Bonnes pratiques](#-astuces--bonnes-pratiques)
- [✨ Suggestions modernes](#-suggestions-modernes)

---

## 🔹 Icônes

| Type                    | Taille recommandée |
|-------------------------|--------------------|
| Icône système (UI)      | `16px` – `24px`     |
| Icône de réseau social  | `24px` – `32px`     |
| Icône dans bouton       | `20px` – `24px`     |
| Favicon                 | `32px` – `64px` (SVG conseillé) |

✅ **Conseil :** Utilise des icônes vectorielles (SVG) pour la scalabilité et la netteté.

---

## 🖼️ Images

| Type d’image            | Taille recommandée           |
|-------------------------|------------------------------|
| Thumbnail / avatar      | `64px` – `128px`             |
| Image de contenu        | `300px` – `600px` de large   |
| Image plein écran       | `>1200px` (responsive)       |
| Logo (navbar)           | `32px` – `48px` de hauteur   |
| Logo (landing/hero)     | `64px` – `128px` (jusqu’à `256px`) |

✅ **Formats conseillés :** WebP pour la compression moderne, JPEG pour photos, SVG pour logos.

---

## 🅰️ Typographie

| Élément                 | Taille recommandée |
|-------------------------|--------------------|
| Petit texte secondaire  | `12px` – `14px`     |
| Texte de base           | `16px` – `18px`     |
| Boutons / CTA           | `16px` – `20px`     |
| Titre H4                | `20px` – `24px`     |
| Titre H3                | `24px` – `28px`     |
| Titre H2                | `32px` – `40px`     |
| Titre H1 / Hero         | `48px` – `72px`     |

✅ **Astuce :** Utilise des unités `rem` pour une meilleure adaptabilité (`1rem = 16px`).

---

## 🧩 Composants UI

| Élément                  | Taille recommandée           |
|--------------------------|------------------------------|
| Hauteur bouton           | `36px` – `48px`              |
| Largeur min. bouton      | `96px`                       |
| Champ de formulaire      | `40px` de haut               |
| Padding bouton           | `12px` – `24px` horizontal   |

✅ **Bon à savoir :** Tous les éléments cliquables doivent avoir une zone de clic d’au moins `48px x 48px`.

---

## 🟦 Border Radius

| Style                   | Valeur suggérée |
|-------------------------|------------------|
| Léger                   | `4px`            |
| Moyen (standard)        | `8px`            |
| Très doux / arrondi     | `12px` – `16px`  |
| Forme complètement ronde| `50%` (ex: avatars) |

✅ **Design trend :** `8px` est devenu un standard moderne. Combine avec des ombres douces pour du relief subtil.

---

## 📱 Accessibilité

| Élément                 | Recommandation                   |
|--------------------------|----------------------------------|
| Zone de clic minimum     | `48px x 48px`                    |
| Contraste texte/fond     | Ratio ≥ 4.5:1 (WCAG AA)          |
| Taille police min.       | `16px` sur mobile                |
| Espacement entre éléments| ≥ `8px`                          |

✅ **Astuce :** Toujours tester au doigt (mobile) et au clavier (tabulation) pour assurer l’accessibilité.

---

## 💡 Astuces & Bonnes pratiques

- 🔁 Utilise une **scale de 4px** : `4, 8, 12, 16, 24, 32, 48...`
- 🔧 Privilégie les **unités relatives** (`rem`, `em`) plutôt que `px` dans le CSS
- 📱 Pense **mobile-first** et vérifie le comportement des tailles sur petits écrans
- 🌗 Prends en compte le **dark mode** (contraste + lisibilité)

---

## ✨ Suggestions modernes (2022–2025)

- 🖤 Fond sombre + typo claire = très tendance
- 🟦 Bleu foncé, gris carbone, beige désaturé = couleurs sobres populaires
- 🔤 Typo recommandées : `Inter`, `Poppins`, `Manrope`, `Space Grotesk`, `Helvetica Neue`
- 🔄 Intègre les systèmes de design (ex: [TailwindCSS spacing scale](https://tailwindcss.com/docs/customizing-spacing))

---

