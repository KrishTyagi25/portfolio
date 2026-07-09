# 🚀 Personal Portfolio — Krish Tyagi

A modern, premium developer portfolio built with cutting-edge web technologies. Designed to be fast, interactive, and visually impressive while remaining clean and recruiter-friendly.

🌐 **Live:** [your-portfolio.vercel.app](https://your-portfolio.vercel.app)

---

## ✨ Features

- **Dark glassmorphism UI** with smooth gradients and premium lighting effects
- **Three.js particle background** with interactive 3D animations in the hero
- **Framer Motion** scroll-triggered animations and page transitions
- **Custom glow cursor** with magnetic hover effects
- **Bento grid layouts** for About and Skills sections
- **Project showcase** with modal popups and detailed previews
- **Coding profiles** — LeetCode, Codeforces, and GitHub stats
- **Contact form** powered by EmailJS (no backend needed)
- **Resume download** button with ATS-friendly PDF
- **Fully responsive** — mobile, tablet, and desktop
- **SEO optimized** with Open Graph metadata

---

## 🛠️ Tech Stack

| Category | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion + GSAP |
| 3D Graphics | Three.js + React Three Fiber |
| Icons | Lucide React + React Icons |
| Email | EmailJS |
| Deployment | Vercel |
| Fonts | Syne + Space Grotesk + JetBrains Mono |

---

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── resume.pdf
│   └── projects/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   └── Footer.tsx
│   │   ├── ui/
│   │   │   └── CustomCursor.tsx
│   │   ├── three/
│   │   │   └── ParticleBackground.tsx
│   │   └── sections/
│   │       ├── Hero.tsx
│   │       ├── About.tsx
│   │       ├── Skills.tsx
│   │       ├── Projects.tsx
│   │       ├── Experience.tsx
│   │       ├── CodingProfiles.tsx
│   │       ├── Resume.tsx
│   │       └── Contact.tsx
│   └── data/
│       └── config.ts
├── .env.local
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/KrishTyagi25/portfolio.git
cd portfolio

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Fill in your EmailJS credentials in .env.local

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Environment Variables

Create a `.env.local` file in the root:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

Get your keys from [emailjs.com](https://emailjs.com)

---

## 🎨 Customization

All personal data is centralized in one file:

```
src/data/config.ts
```

Edit this file to update:
- Your name, bio, email, location
- Social links (GitHub, LinkedIn, LeetCode, Codeforces)
- Projects with descriptions, tech stack, and links
- Skills with proficiency levels
- Coding stats (LeetCode solved, CF rating, GitHub stats)

---

## 📦 Deployment

### Deploy to Vercel (Recommended)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

Or connect your GitHub repo on [vercel.com](https://vercel.com) for automatic deployments on every push.

### Add Environment Variables on Vercel

Vercel Dashboard → Your Project → Settings → Environment Variables → Add your EmailJS keys

---

## 📄 Sections

| # | Section | Description |
|---|---|---|
| 1 | Hero | Full-screen landing with 3D particle background |
| 2 | About | Bio, education, and goals in bento grid layout |
| 3 | Skills | Categorized tech stack with animated progress bars |
| 4 | Projects | Showcase with modal popups and live demo links |
| 5 | Experience | Timeline with open-to-work status |
| 6 | Coding | LeetCode, Codeforces, and GitHub stats |
| 7 | Resume | One-click ATS-friendly resume download |
| 8 | Contact | EmailJS-powered contact form |

---

## 🧑‍💻 Author

**Krish Tyagi**
- 📧 [krishtyagi0125@gmail.com](mailto:krishtyagi0125@gmail.com)
- 💼 [linkedin.com/in/KrishTyagi25](https://linkedin.com/in/KrishTyagi25)
- 🐙 [github.com/KrishTyagi25](https://github.com/KrishTyagi25)

---

## 📜 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">
  <p>Built with ❤️ by Krish Tyagi</p>
  <p>⭐ Star this repo if you found it helpful!</p>
</div>
