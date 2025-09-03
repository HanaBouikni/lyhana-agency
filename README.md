# 🌐 Lyhana Agency - Creative Studio Website

Un site vitrine moderne et responsive pour **Lyhana Agency**, un studio
créatif spécialisé en **branding, design et identité visuelle**.\
Ce projet présente les services, le portfolio et les moyens de contact
de l'agence, avec des animations fluides et un design professionnel.

------------------------------------------------------------------------

## 🚀 Fonctionnalités

-   **Navigation responsive** avec menu mobile et défilement fluide.\
-   **Sections principales** :
    -   Hero section premium avec CTA (Call To Action).\
    -   About section (présentation de l'agence, chiffres clés,
        vision).\
    -   Services (branding, social media, packaging, vidéo, web design,
        motion design).\
    -   Portfolio interactif avec filtres et animations.\
    -   Formulaire de contact fonctionnel via **EmailJS**.\
-   **Animations CSS personnalisées** (float, slide, fade, morphing,
    etc.).\
-   **Notifications élégantes** via **SweetAlert2**.

------------------------------------------------------------------------

## 📂 Structure du projet

    .
    ├── index.html      # Page principale
    ├── style.css       # Styles personnalisés et animations
    ├── script.js       # Logique JavaScript (menu, défilement, formulaire)
    ├── image/          # Dossier contenant le logo et les images du portfolio

------------------------------------------------------------------------

## 🛠️ Technologies utilisées

-   **HTML5**\
-   **CSS3** (animations + custom properties)\
-   **TailwindCSS** (via CDN)\
-   **JavaScript (Vanilla)**\
-   **EmailJS** (pour l'envoi de mails)\
-   **SweetAlert2** (boîtes de dialogue interactives)

------------------------------------------------------------------------

## ⚙️ Installation & Utilisation

1.  **Cloner le projet** ou télécharger les fichiers.

    ``` bash
    git clone https://github.com/votre-utilisateur/lyhana-agency.git
    cd lyhana-agency
    ```

2.  Placer le dossier `image/` avec vos visuels (logo, portfolio, etc.).

3.  Ouvrir `index.html` dans un navigateur.

------------------------------------------------------------------------

## 📧 Configuration EmailJS

1.  Créer un compte sur [EmailJS](https://www.emailjs.com/).\
2.  Récupérer vos identifiants :
    -   `service_id`
    -   `template_id`
    -   `public_key`
3.  Modifier les valeurs dans `script.js` :

``` js
emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
```

------------------------------------------------------------------------

## ✨ Améliorations possibles

-   Ajouter un **mode sombre**.\
-   Gérer dynamiquement le portfolio via un fichier JSON.\
-   Ajouter un backend léger (Node.js/Express) pour plus de contrôle.

------------------------------------------------------------------------

## 👩‍🎨 Auteur

**Lyhana Agency**\
Créative Studio -- Branding • Design • Identité visuelle

