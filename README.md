# Galerie photos du Fest'Hoche #3

Ce projet est une galerie de photos pour le Fest'Hoche #3, développée avec Vue.js.

## Installation

```bash
# Installer les dépendances
npm install
```

## Développement

```bash
# Lancer le serveur de développement
npm run serve
# ou
npm start
```

## Déploiement sur GitHub Pages

Pour déployer ce projet sur GitHub Pages, suivez ces étapes :

1. Assurez-vous que votre projet est dans un dépôt GitHub.

2. Installez les dépendances si ce n'est pas déjà fait :
   ```bash
   npm install
   ```

3. Exécutez la commande de déploiement :
   ```bash
   npm run deploy
   ```

4. Votre site sera déployé sur GitHub Pages à l'adresse : `https://votre-nom-utilisateur.github.io/festhoche3/`

### Résolution des problèmes de permission

Si vous rencontrez des problèmes de permission lors du déploiement, suivez ces étapes :

1. Créez un token d'accès personnel GitHub :
   - Allez sur GitHub → Settings → Developer settings → Personal access tokens
   - Cliquez sur "Generate new token"
   - Donnez un nom à votre token et sélectionnez les scopes "repo" et "workflow"
   - Cliquez sur "Generate token" et copiez le token généré

2. Utilisez le token pour le déploiement :

   **Sous Windows (PowerShell) :**
   ```powershell
   $env:GH_TOKEN="votre_token_github"
   npm run deploy:token
   ```

   **Sous Linux/Mac :**
   ```bash
   GH_TOKEN=votre_token_github npm run deploy:token
   ```

3. Avant d'utiliser la commande `deploy:token`, modifiez le fichier `package.json` pour remplacer "username" par votre nom d'utilisateur GitHub dans la ligne :
   ```
   "deploy:token": "npm run build && gh-pages -d dist -r https://$GH_TOKEN@github.com/username/festhoche3.git"
   ```

### Résolution de l'erreur "fatal: a branch named 'gh-pages' already exists"

Si vous rencontrez l'erreur "fatal: a branch named 'gh-pages' already exists" lors du déploiement, cela signifie qu'une branche gh-pages existe déjà dans votre dépôt local. Pour résoudre ce problème, vous pouvez :

1. Utiliser la commande de nettoyage pour supprimer la branche gh-pages locale :
   ```bash
   npm run clean:gh-pages
   ```

2. Puis réessayer le déploiement :
   ```bash
   npm run deploy
   ```

   ou avec un token :
   ```bash
   npm run deploy:token
   ```

Les scripts de déploiement ont été mis à jour pour utiliser l'option `--add` qui permet d'ajouter du contenu à une branche gh-pages existante plutôt que d'essayer d'en créer une nouvelle.

### Configuration manuelle (si nécessaire)

Si vous préférez configurer manuellement le déploiement :

1. Construisez le projet :
   ```bash
   npm run build
   ```

2. Allez dans les paramètres de votre dépôt GitHub (Settings > Pages)

3. Dans la section "Source", sélectionnez la branche "gh-pages" et le dossier "/ (root)"

4. Cliquez sur "Save"

## Personnalisation

Vous pouvez personnaliser la configuration en modifiant le fichier `vue.config.js`.

### Compression des images

Les images originales ont été compressées pour améliorer les performances du site. La compression a permis de réduire la taille totale des images de 366 Mo à environ 4 Mo (réduction de 99%), tout en maintenant une qualité visuelle acceptable.

#### Comment utiliser le script de compression

Si vous souhaitez ajouter de nouvelles images ou recompresser les images existantes :

1. Placez les images originales dans le dossier `public/gallery`
2. Exécutez la commande de compression :
   ```bash
   npm run compress-images
   ```
3. Les images compressées seront générées dans le dossier `public/gallery/marta-compressed`

#### Configuration de la compression

Vous pouvez modifier les paramètres de compression en éditant le fichier `scripts/compress-images.js` :

- `quality` : Qualité JPEG (0-100), valeur par défaut : 80
- `maxWidth` : Largeur maximale des images, valeur par défaut : 1920
- `maxHeight` : Hauteur maximale des images, valeur par défaut : 1080

#### Avantages de la compression d'images

- Chargement plus rapide de la page
- Réduction de la consommation de données pour les utilisateurs
- Amélioration du référencement (SEO) grâce à de meilleures performances
- Réduction des coûts d'hébergement et de bande passante

### Configuration des chemins d'images pour GitHub Pages

Pour que les images soient correctement affichées sur GitHub Pages, deux modifications sont nécessaires :

1. Le fichier `vue.config.js` a été configuré avec :

```javascript
publicPath: process.env.NODE_ENV === 'production' ? '/festhoche3/' : '/',
```

2. Dans les composants (comme `GalleryContainer.vue`), les chemins d'images doivent être relatifs (sans slash au début) :

```javascript
// Correct - utilise le publicPath configuré
{ src: 'gallery/marta-compressed/image.jpg' }

// Incorrect - ignore le publicPath configuré
{ src: '/gallery/marta-compressed/image.jpg' }
```

Cette configuration assure que :
- En développement local, les chemins sont correctement résolus (ex: `/gallery/marta-compressed/image.jpg`)
- En production sur GitHub Pages, les chemins incluent le nom du dépôt (ex: `/festhoche3/gallery/marta-compressed/image.jpg`)

Si vous renommez le dépôt ou déployez sur un autre domaine, vous devrez ajuster la valeur de `publicPath` en conséquence.

## Sections de la galerie

La galerie est maintenant organisée en quatre sections distinctes :

1. **Le Fest'Hoche #3** - Photos d'ambiance et de décoration
2. **Concert de Marta** - Photos du groupe Marta durant la soirée concert
3. **Maevol** - Photos du groupe Maevol
4. **Elye** - Photos du groupe Elye

### Structure des dossiers

Les photos sont organisées dans les dossiers suivants :

```
public/
  gallery/
    festhoche3/             # Dossier pour les photos originales d'ambiance et de décoration
    festhoche3-compressed/  # Dossier pour les versions compressées des photos d'ambiance
    marta/                  # Dossier pour les photos originales du concert de Marta
    marta-compressed/       # Dossier pour les versions compressées des photos du concert
    maevol/                 # Dossier pour les photos originales du groupe Maevol
    maevol-compressed/      # Dossier pour les versions compressées des photos de Maevol
    elye/                   # Dossier pour les photos originales du groupe Elye
    elye-compressed/        # Dossier pour les versions compressées des photos d'Elye
```

> **Note importante :** Les dossiers `maevol-compressed` et `elye-compressed` doivent être créés et les images doivent être compressées avant de déployer le site. Voir la section "Compression des images" ci-dessous.

### Comment ajouter des photos à la section "Le Fest'Hoche #3"

1. Placez vos photos originales dans le dossier `public/gallery/festhoche3/`
2. Compressez vos photos en utilisant le script de compression (voir ci-dessous)
3. Ouvrez le fichier `src/components/GalleryContainer.vue`
4. Modifiez le tableau `festhochePhotos` pour inclure vos nouvelles photos :

```javascript
const festhochePhotos = [
  { src: 'gallery/festhoche3-compressed/votre-photo-1.jpg', width: 1620, height: 1080, alt: 'Description de la photo' },
  { src: 'gallery/festhoche3-compressed/votre-photo-2.jpg', width: 720, height: 1080, alt: 'Description de la photo' },
  // Ajoutez d'autres photos ici
];
```

Pour chaque photo, vous devez spécifier :
- `src` : le chemin vers la photo (relatif au dossier `public`)
- `width` : la largeur de la photo en pixels
- `height` : la hauteur de la photo en pixels
- `alt` : une description de la photo (pour l'accessibilité)

### Compression des images pour la section "Le Fest'Hoche #3"

Pour compresser les images de la section "Le Fest'Hoche #3", vous pouvez utiliser le même script de compression que pour les images de Marta, mais en modifiant les chemins source et destination :

1. Modifiez le fichier `scripts/compress-images.js` pour ajouter la compression des images de la section "Le Fest'Hoche #3" :

```javascript
// Ajouter après la compression des images de Marta
console.log('Compressing Fest\'Hoche #3 images...');
await compressImages(
  'public/gallery/festhoche3',
  'public/gallery/festhoche3-compressed',
  { quality: 80, maxWidth: 1920, maxHeight: 1080 }
);
```

2. Exécutez la commande de compression :
```bash
npm run compress-images
```

### Compression des images pour les sections "Maevol" et "Elye"

Pour compresser les images des sections "Maevol" et "Elye", suivez ces étapes :

1. Modifiez le fichier `scripts/compress-images.js` pour ajouter la compression des images de ces sections :

```javascript
// Ajouter après la compression des images de Fest'Hoche #3
console.log('Compressing Maevol images...');
await compressImages(
  'public/gallery/maevol',
  'public/gallery/maevol-compressed',
  { quality: 80, maxWidth: 1920, maxHeight: 1080 }
);

console.log('Compressing Elye images...');
await compressImages(
  'public/gallery/elye',
  'public/gallery/elye-compressed',
  { quality: 80, maxWidth: 1920, maxHeight: 1080 }
);
```

2. Exécutez la commande de compression :
```bash
npm run compress-images
```

3. Vérifiez que les dossiers `public/gallery/maevol-compressed` et `public/gallery/elye-compressed` ont été créés et contiennent les versions compressées des images.

### Conseils pour organiser les photos

Pour une mise en page optimale, il est recommandé d'alterner entre les photos horizontales et verticales. Voici quelques modèles que vous pouvez suivre :

1. **Modèle 1** : 2 horizontales, 1 verticale
2. **Modèle 2** : 1 verticale, 2 horizontales

La galerie détecte automatiquement l'orientation des photos en fonction de leurs dimensions :
- Si `width > height`, la photo est considérée comme horizontale et occupe 2 colonnes
- Si `width <= height`, la photo est considérée comme verticale et occupe 1 colonne mais 2 rangées
