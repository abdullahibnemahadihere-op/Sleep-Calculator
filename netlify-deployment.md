# Netlify Deployment Steps

## Prerequisites
- GitHub account
- Netlify account (free tier available)

## Step-by-Step Deployment Guide

### 1. Prepare Your Repository
1. Create a new repository on GitHub
2. Upload the following files to your repository:
   - `index.html`
   - `script.js`
   - Any other project files

### 2. Connect to Netlify
1. Go to [netlify.com](https://netlify.com) and sign in or create an account
2. Click "New site from Git" button
3. Select "GitHub" as your Git provider
4. Authorize Netlify to access your GitHub account if prompted
5. Select the repository containing your Sleep Calculator files

### 3. Configure Build Settings
In the deploy settings, configure as follows:
- **Branch to deploy**: `main` (or `master`)
- **Build command**: Leave empty (no build process needed)
- **Publish directory**: `/` (root directory)

### 4. Deploy Site
1. Click "Deploy site"
2. Wait for Netlify to build and deploy your site
3. Your site will be available at a unique Netlify URL (e.g., `your-site-name.netlify.app`)

### 5. Customize Domain (Optional)
1. Go to "Site settings" > "Domain management"
2. Click "Add custom domain"
3. Follow Netlify's instructions to connect your custom domain

## Project Configuration Details

This project is specifically configured for static hosting with the following characteristics:
- No build process required
- All dependencies loaded via CDN (Tailwind CSS)
- Single page application with client-side JavaScript
- Responsive design works on all device sizes

## Troubleshooting

### Common Issues
1. **Site not updating**: 
   - Ensure you're pushing to the correct branch
   - Check Netlify build logs for errors

2. **Styles not loading**:
   - Verify Tailwind CSS CDN link is working
   - Check browser console for any errors

3. **JavaScript not working**:
   - Ensure script.js is in the root directory
   - Check browser console for JavaScript errors

### Support
If you encounter any issues not covered here:
1. Check the browser's developer console for errors
2. Verify all files are in the correct locations
3. Contact Netlify support for deployment-specific issues