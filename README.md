# Modern Portfolio Template

A modern, responsive portfolio template built with Next.js and Tailwind CSS.

## Features

- Responsive design that works on all devices
- Modern UI with smooth animations using Framer Motion
- SEO optimized
- Easy to customize
- Built with Next.js and Tailwind CSS

## Getting Started

### Prerequisites

- Node.js (14.x or later)
- npm or yarn

### Installation

1. Clone this repository or download the files
2. Navigate to the project directory
3. Install dependencies:

```bash
npm install
# or
yarn install
```

4. Start the development server:

```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Customization

### Personal Information

Edit the components to include your personal information:

- Update your name, title, and bio in `components/Hero.js` and `components/About.js`
- Add your social media links in `components/Hero.js`, `components/Contact.js`, and `components/Footer.js`
- Update contact information in `components/Contact.js` and `components/Footer.js`

### Projects

Edit the projects array in `components/Projects.js` to showcase your own projects:

```javascript
const projects = [
  {
    title: 'Your Project Name',
    backgroundImg: '/projects/your-project-image.jpg',
    projectUrl: '/project/your-project',
    tech: 'Technologies Used',
  },
  // Add more projects
];
```

### Skills

Edit the skills array in `components/Skills.js` to showcase your skills:

```javascript
const skills = [
  { name: 'Your Skill', icon: '/skills/your-skill-icon.png' },
  // Add more skills
];
```

### Images

Add your images to the `public` folder:
- Create a `public/assets` folder for profile and about images
- Create a `public/projects` folder for project images
- Create a `public/skills` folder for skill icons

## Deployment

This portfolio template can be easily deployed to Vercel:

1. Push your code to a GitHub repository
2. Import your repository to Vercel
3. Deploy

## License

This project is open source and available under the MIT License.

## Credits

Created by [Your Name]
