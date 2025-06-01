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