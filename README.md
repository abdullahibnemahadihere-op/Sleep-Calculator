# Sleep Calculator

A lightweight, fast-loading sleep cycle calculator that helps you determine the ideal times to fall asleep based on your desired wake-up time. Built with HTML, Tailwind CSS, and vanilla JavaScript.

## Features

- **Sleep Cycle Calculation**: Calculates optimal bedtime based on 90-minute sleep cycles
- **Modern UI**: Clean, responsive design with dark mode by default
- **Mobile-First**: Works beautifully on all device sizes
- **Lightweight**: No frameworks, fast loading times
- **Production Ready**: Deploy directly to Netlify or any static hosting service

## How It Works

The calculator uses the scientifically-backed 90-minute sleep cycle principle:

1. **Sleep Cycles**: Each sleep cycle lasts approximately 90 minutes
2. **Fall Asleep Time**: Accounts for 15 minutes to fall asleep
3. **Optimal Wake Up**: Waking at the end of a cycle helps you feel refreshed

The app calculates 4-6 sleep cycle options (4.5-9 hours) and highlights the recommended 5-6 cycle options for optimal rest.

## File Structure

```
├── index.html
├── script.js
└── README.md
```

## Tech Stack

- **HTML5**: Semantic markup for accessibility
- **Tailwind CSS**: Styling via CDN (no build process)
- **Vanilla JavaScript**: Interactivity and calculations

## SEO Optimization

- Proper meta tags for description and keywords
- Open Graph tags for social sharing
- Canonical URL for search engines
- Semantic HTML structure

## Deployment

### Netlify Deployment Steps

1. Create a new repository on GitHub with the project files
2. Sign up/login to [Netlify](https://netlify.com)
3. Click "New site from Git"
4. Connect your GitHub repository
5. Set build settings:
   - Build command: Leave empty
   - Publish directory: `/`
6. Deploy site

That's it! Your sleep calculator will be live with a Netlify URL.

## Local Development

To run locally, simply open `index.html` in your browser or serve it with any local server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server
```

## Suggested Upgrades for Version 2

1. **Bedtime Calculator**: Reverse calculation to find wake-up times based on bedtime
2. **Sleep Quality Score**: Track and analyze sleep patterns
3. **Theme Switcher**: Toggle between light and dark modes
4. **Local Storage**: Save user preferences
5. **Wake Up Gradient**: Visual representation of energy levels based on cycle count

## License

Open source under the MIT License.

## Author

Made with ❤️ by Sleep Calculator team