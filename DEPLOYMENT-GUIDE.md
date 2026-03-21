# How to Deploy Your Website — Step by Step

## Step 1: Buy Your Domain (~2 minutes)

1. Go to **https://domains.cloudflare.com**
2. Search for **mohammedqahtani.com**
3. If available, purchase it (~$10/year at cost, no markup)
4. If taken, try alternatives:
   - `mohammedqahtani.sa`
   - `dr-mohammedq.com`
   - `mohammedq.com`

---

## Step 2: Create the GitHub Repository (~3 minutes)

1. Go to **https://github.com/new**
2. Fill in:
   - **Repository name:** `mohammedqahtani.com`
   - **Description:** `Personal website — Dr. Mohammed AlQahtani`
   - **Visibility:** Public ✅
   - Leave everything else as default
3. Click **"Create repository"**

---

## Step 3: Upload Your Files (~2 minutes)

1. On your new repository page, click **"uploading an existing file"**
2. Drag & drop ALL files from the **mohammedqahtani-website** folder:
   - `index.html` (your website)
   - `CNAME` (custom domain config)
   - `robots.txt` (SEO)
   - `sitemap.xml` (SEO)
   - `404.html` (custom error page)
3. In the commit message, type: `Initial website deployment`
4. Click **"Commit changes"**

---

## Step 4: Enable GitHub Pages (~1 minute)

1. Go to your repository **Settings** (tab at the top)
2. In the left sidebar, click **"Pages"**
3. Under **"Source"**, select **"Deploy from a branch"**
4. Under **"Branch"**, select **main** and **/ (root)**
5. Click **"Save"**
6. Wait 1-2 minutes — your site is now live at:
   `https://YOUR-USERNAME.github.io/mohammedqahtani.com/`

---

## Step 5: Connect Your Custom Domain (~5 minutes)

### On GitHub:
1. In **Settings → Pages**, under **"Custom domain"**
2. Type: `mohammedqahtani.com`
3. Click **"Save"**
4. Check **"Enforce HTTPS"** ✅

### On Cloudflare (where you bought the domain):
1. Go to your Cloudflare dashboard → select your domain
2. Go to **DNS** settings
3. Add these 4 DNS records (Type: **A**):

| Type | Name | Content          |
|------|------|------------------|
| A    | @    | 185.199.108.153  |
| A    | @    | 185.199.109.153  |
| A    | @    | 185.199.110.153  |
| A    | @    | 185.199.111.153  |

4. Also add a **CNAME** record:

| Type  | Name | Content                              |
|-------|------|--------------------------------------|
| CNAME | www  | YOUR-USERNAME.github.io              |

(Replace YOUR-USERNAME with your actual GitHub username)

5. **Important**: Set Cloudflare SSL to **"Full"** (not "Full Strict")
6. Wait 15-30 minutes for DNS to propagate

---

## Step 6: Verify Everything Works

1. Visit **https://mohammedqahtani.com** — should show your website
2. Visit **https://www.mohammedqahtani.com** — should redirect to above
3. Check the padlock icon 🔒 — HTTPS should be active
4. Test on mobile — should be responsive
5. Try both Arabic and English — language toggle should work

---

## Updating Your Website Later

Whenever you want to update the website:
1. Go to your GitHub repository
2. Click on `index.html`
3. Click the pencil icon (Edit)
4. Replace with your updated file content
5. Click **"Commit changes"**
6. Changes go live within 1-2 minutes automatically

---

## Troubleshooting

**Site not loading?**
- DNS can take up to 48 hours (usually 15-30 minutes)
- Check GitHub Pages settings are correct

**HTTPS not working?**
- Make sure Cloudflare SSL is set to "Full"
- Wait for GitHub to provision the SSL certificate (can take up to 24 hours)

**404 error?**
- Make sure the file is named `index.html` (not `Index.html` or anything else)
- Make sure GitHub Pages source is set to `main` branch, `/ (root)`

---

## Need Help?

If you get stuck on any step, just ask me and I'll guide you through it!
