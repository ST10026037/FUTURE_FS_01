# ⚙️ Setup & Deployment Guide

This guide explains how to set up, run, and deploy the portfolio website locally and to GitHub.

---

## 📋 Prerequisites

Before you begin, make sure you have the following installed:

- A modern web browser (Google Chrome, Firefox, Edge, or Safari)
- [Git](https://git-scm.com/) — for version control and pushing to GitHub
- A code editor (e.g. [Visual Studio Code](https://code.visualstudio.com/))

---

## 🖥️ Running Locally

No server or installation is required. The site is built with plain HTML, CSS and JavaScript.

**Steps:**

1. Download or clone the project folder to your computer
2. Open the folder in your file explorer
3. Double-click `index.html` — it will open in your default browser

That's it! The site runs entirely in the browser with no build tools needed.

---

## 📤 Pushing to GitHub

Follow these steps to push your portfolio to a GitHub repository.

### Step 1 — Open your terminal

On **Mac**: Press `Cmd + Space`, type **Terminal**, and press Enter  
On **Windows**: Press `Win + R`, type **cmd**, and press Enter

### Step 2 — Navigate to your project folder

```bash
cd /path/to/MyPortfolioWebsite
```

> Replace `/path/to/` with the actual location of your folder.

### Step 3 — Stage your files

```bash
git add index.html style.css script.js profile.jpg README.md SETUP_AND_DEPLOYMENT.md
```

### Step 4 — Commit your changes

```bash
git commit -m "Add portfolio website files"
```

### Step 5 — Push to GitHub

```bash
git push origin main
```

Your files will now be visible on your GitHub repository.

---

## 🌍 Deploying Online (Optional)

To make your portfolio accessible on the internet for free, you can use **GitHub Pages**:

1. Go to your repository on [github.com](https://github.com)
2. Click **Settings** → **Pages** (in the left sidebar)
3. Under **Branch**, select `main` and click **Save**
4. After a minute, your site will be live at:

```
https://<your-github-username>.github.io/<repository-name>/
```

---

## 📁 File Reference

| File | Purpose |
|---|---|
| `index.html` | Main webpage structure |
| `style.css` | All styling and animations |
| `script.js` | JavaScript interactivity |
| `profile.jpg` | Profile photo used in About section |
| `README.md` | Project overview and documentation |
| `SETUP_AND_DEPLOYMENT.md` | This file |

---

## 🆘 Troubleshooting

| Problem | Solution |
|---|---|
| Profile photo not showing | Ensure `profile.jpg` is a real JPEG (not HEIC). Convert on Mac using: `sips -s format jpeg profile.jpg --out profile.jpg` |
| Changes not appearing after edit | Do a hard refresh: `Ctrl + Shift + R` (Windows) or `Cmd + Shift + R` (Mac) |
| `git push` asks for a password | Use a [GitHub Personal Access Token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) instead of your password |
| Page looks broken | Make sure `style.css` and `script.js` are in the same folder as `index.html` |

---

© 2026 Omphile Hlongwane. All Rights Reserved.
