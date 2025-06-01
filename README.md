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
