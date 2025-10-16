Accessible Profile Card Component
A fully accessible, responsive profile card built with semantic HTML, modern CSS, and vanilla JavaScript. This project demonstrates best practices in web accessibility, responsive design, and test-driven development.

🌟 Live Demo
View Live Demo ← Replace with your Netlify/GitHub Pages URL
📋 Table of Contents

Features
Technologies Used
Getting Started
Project Structure
Accessibility Features
Testing
Deployment
Customization
Browser Support
Contributing
License

✨ Features
Core Requirements Met

✅ All required data-testid attributes for automated testing
✅ Semantic HTML5 structure
✅ Fully accessible (WCAG 2.1 AA compliant)
✅ Responsive design (mobile-first approach)
✅ Real-time millisecond timestamp display
✅ Keyboard navigation support
✅ Safe external links (noopener noreferrer)

Additional Features

🎨 Modern, gradient background design
⚡ Smooth animations and transitions
📱 Mobile, tablet, and desktop optimized
🔄 Auto-updating timestamp
🎯 Focus-visible indicators for accessibility
🌐 Cross-browser compatible

🛠 Technologies Used

HTML5 - Semantic markup
CSS3 - Flexbox, Grid, Custom Properties
Vanilla JavaScript - No frameworks or dependencies
No build tools required - Pure static HTML

🚀 Getting Started
Prerequisites
No special prerequisites needed! Just a modern web browser.
Installation & Local Setup

Clone the repository

bash   git clone https://github.com/YOUR_USERNAME/profile-card.git
   cd profile-card

Open in browser
Option A: Direct file opening

bash   # Simply open index.html in your browser
   open index.html  # macOS
   start index.html # Windows
   xdg-open index.html # Linux
Option B: Using a local server (recommended)
Using Python:
bash   # Python 3
   python -m http.server 8000
   
   # Python 2
   python -m SimpleHTTPServer 8000
Using Node.js (http-server):
bash   npx http-server -p 8000
Using PHP:
bash   php -S localhost:8000
Using VS Code:

Install "Live Server" extension
Right-click index.html → "Open with Live Server"


View in browser

   Navigate to: http://localhost:8000
📁 Project Structure
profile-card/
│
├── index.html          # Main HTML file (complete application)
├── README.md           # This file
├── LICENSE             # Project license
│
├── docs/               # Documentation (optional)
│   ├── TESTING.md      # Testing guidelines
│   └── ACCESSIBILITY.md # Accessibility documentation
│
└── tests/              # Test files (optional)
    └── test-ids.json   # List of all data-testid attributes
Note: This is a single-file application. All HTML, CSS, and JavaScript are contained in index.html for simplicity and easy deployment.
♿ Accessibility Features
This project follows WCAG 2.1 Level AA guidelines:
Semantic HTML

<article> for the main card container
<header> for the profile header section
<nav> for social links navigation
<section> for content groupings
<figure> with <img> for avatar
Proper heading hierarchy (<h1>, <h2>)

ARIA & Labels

Descriptive alt text on images
aria-label attributes where appropriate
aria-hidden="true" for decorative icons
Semantic link text (no "click here")

Keyboard Navigation

All interactive elements are keyboard accessible
Visible focus indicators (:focus styles)
Tab order follows logical reading flow
No keyboard traps

Visual Accessibility

High contrast ratios for text
Focus styles meet 3:1 contrast requirement
Respects prefers-reduced-motion for animations
Readable font sizes (minimum 16px body text)

Screen Reader Support

Proper document structure
Descriptive labels for all interactive elements
Time display includes context via aria-label

🧪 Testing
Required data-testid Attributes
All elements include the following test IDs for automated testing:
Elementdata-testidDescriptionCard Containertest-profile-cardMain article wrapperUser Nametest-user-nameName headingUser Biotest-user-bioBiography paragraphCurrent Timetest-user-timeTimestamp in millisecondsAvatar Imagetest-user-avatarProfile pictureSocial Linkstest-user-social-linksSocial media nav containerTwitter Linktest-user-social-twitterIndividual Twitter linkGitHub Linktest-user-social-githubIndividual GitHub linkLinkedIn Linktest-user-social-linkedinIndividual LinkedIn linkHobbies Listtest-user-hobbiesHobbies unordered listDislikes Listtest-user-dislikesDislikes unordered list
Manual Testing Checklist

 All data-testid attributes are present
 Timestamp shows current time in milliseconds
 Timestamp updates every second
 Avatar image loads correctly
 All social links open in new tab
 Links include rel="noopener noreferrer"
 Keyboard navigation works (Tab through elements)
 Focus indicators are visible
 Responsive at 320px, 768px, 1024px+ widths
 Screen reader announces content correctly
 No console errors

Automated Testing
Example test queries for your testing framework:
javascript// Using Testing Library
const card = screen.getByTestId('test-profile-card');
const name = screen.getByTestId('test-user-name');
const time = screen.getByTestId('test-user-time');
const avatar = screen.getByTestId('test-user-avatar');
const socialLinks = screen.getByTestId('test-user-social-links');
const hobbies = screen.getByTestId('test-user-hobbies');
const dislikes = screen.getByTestId('test-user-dislikes');

// Verify time is a valid timestamp
expect(Number(time.textContent)).toBeGreaterThan(Date.now() - 5000);
Browser Testing
Tested on:

✅ Chrome 120+
✅ Firefox 120+
✅ Safari 17+
✅ Edge 120+

Accessibility Testing Tools

WAVE Browser Extension
axe DevTools
Chrome Lighthouse Audit
Screen readers (NVDA, JAWS, VoiceOver)

🌐 Deployment
Deploy to GitHub Pages

Push your code to GitHub:

bash   git add .
   git commit -m "Initial commit"
   git push origin main

Enable GitHub Pages:

Go to repository Settings
Navigate to Pages section
Select source: Deploy from branch
Choose branch: main and folder: / (root)
Click Save


Your site will be live at:

   https://YOUR_USERNAME.github.io/profile-card/
Deploy to Netlify

Drag and Drop Method:

Visit Netlify Drop
Drag your project folder
Get instant URL


Git Integration:

bash   # Install Netlify CLI
   npm install -g netlify-cli
   
   # Login to Netlify
   netlify login
   
   # Deploy
   netlify deploy --prod

Manual Upload:

Zip your project folder
Go to Netlify
Drag and drop the zip file



Deploy to Vercel
bash# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
🎨 Customization
Update Profile Information
Edit the content in index.html:
html<!-- Change name -->
<h1 data-testid="test-user-name">Your Name Here</h1>

<!-- Change bio -->
<p class="bio" data-testid="test-user-bio">
    Your biography text here...
</p>

<!-- Change avatar -->
<img src="YOUR_IMAGE_URL" alt="Your description">

<!-- Update social links -->
<a href="https://twitter.com/yourhandle">Twitter</a>
Customize Colors
In the <style> section, update these CSS variables:
css/* Background gradient */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* Accent color */
background: #667eea;  /* Links and highlights */

/* Border color */
border-left: 4px solid #667eea;
Adjust Breakpoints
css/* Tablet breakpoint */
@media (min-width: 768px) { ... }

/* Desktop breakpoint */
@media (min-width: 1024px) { ... }
📱 Responsive Breakpoints
DeviceWidthLayoutMobile< 768pxVertical stack, centeredTablet768px - 1023pxSide-by-side header, 2-column gridDesktop≥ 1024pxLarger avatar, spacious layout
🤝 Contributing
Contributions are welcome! Please follow these steps:

Fork the repository
Create a feature branch (git checkout -b feature/AmazingFeature)
Commit your changes (git commit -m 'Add some AmazingFeature')
Push to the branch (git push origin feature/AmazingFeature)
Open a Pull Request

Contribution Guidelines

Maintain semantic HTML structure
Preserve all data-testid attributes
Ensure accessibility standards are met
Test on multiple browsers
Update documentation as needed

📄 License
This project is licensed under the MIT License - see the LICENSE file for details.
📞 Contact
Your Name - @yourtwitter
Project Link: https://github.com/YOUR_USERNAME/profile-card
🙏 Acknowledgments

MDN Web Docs - Web documentation
WCAG Guidelines - Accessibility standards
Unsplash - Profile image placeholder


Built with ❤️ using semantic HTML, accessible design principles, and modern web standards.