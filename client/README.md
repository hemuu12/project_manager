# Restaurant - Next.js Restaurant Website

#DEMO: https://restaurent-nextjs-five.vercel.app/

A modern, responsive restaurant website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Tech Stack**: Next.js 14, TypeScript, Tailwind CSS
- **Smooth Animations**: Framer Motion for beautiful transitions
- **Responsive Design**: Mobile-first approach
- **SEO Optimized**: Built-in SEO features with Next.js
- **Performance**: Optimized images and fast loading
- **Accessibility**: WCAG compliant components
- **Type Safety**: Full TypeScript support

## 📁 Project Structure

```
Restaurant-nextjs/
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── about/          # About page
│   │   ├── booking/        # Booking page
│   │   ├── contact/        # Contact page
│   │   ├── menu/           # Menu page
│   │   ├── service/        # Service page
│   │   ├── team/           # Team page
│   │   ├── testimonial/    # Testimonial page
│   │   ├── globals.css     # Global styles
│   │   ├── layout.tsx      # Root layout
│   │   └── page.tsx        # Home page
│   ├── components/         # Reusable components
│   │   ├── Navbar.tsx      # Navigation component
│   │   ├── Hero.tsx        # Hero section
│   │   ├── Services.tsx    # Services section
│   │   ├── About.tsx       # About section
│   │   ├── Footer.tsx      # Footer component
│   │   └── BackToTop.tsx   # Back to top button
│   ├── hooks/              # Custom hooks
│   │   ├── useScroll.ts    # Scroll effects
│   │   └── useCounter.ts   # Counter animations
│   ├── lib/                # Utilities and data
│   │   └── data.ts         # Static data
│   └── types/              # TypeScript types
│       └── index.ts        # Type definitions
├── public/
│   └── images/             # Static images
└── tailwind.config.ts      # Tailwind configuration
```

## 🛠️ Technologies Used

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type safety and better development experience
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **Lucide React**: Icon library
- **Headless UI**: Accessible UI components

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/PhanNhatLoi/restaurant-nextjs.git
   cd restaurant-nextjs
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📱 Pages

- **Home** (`/`): Landing page with hero, services, and about sections
- **About** (`/about`): Detailed about us page
- **Services** (`/service`): Services showcase
- **Menu** (`/menu`): Food menu with category filters
- **Contact** (`/contact`): Contact form and information
- **Booking** (`/booking`): Table reservation form
- **Team** (`/team`): Team members showcase
- **Testimonial** (`/testimonial`): Customer testimonials

## 🎨 Customization

### Colors

The color scheme is defined in `tailwind.config.ts`:

```typescript
colors: {
  primary: '#FEA116',  // Orange
  light: '#F1F8FF',    // Light blue
  dark: '#0F172B',     // Dark blue
}
```

### Fonts

Custom fonts are configured in `layout.tsx`:

- **Heebo**: Primary font
- **Nunito**: Secondary font
- **Pacifico**: Decorative font

### Animations

Custom animations are defined in `tailwind.config.ts` and components use Framer Motion for smooth transitions.

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📦 Key Components

### Navbar

- Responsive navigation with mobile menu
- Sticky header with scroll effects
- Dropdown menu for pages

### Hero

- Full-screen hero section
- Animated content and rotating image
- Call-to-action buttons

### Services

- Grid layout with hover effects
- Animated icons and content
- Responsive design

### About

- Image grid with animations
- Counter animations for statistics
- Responsive layout

### Footer

- Multi-column layout
- Social media links
- Contact information

## 🎯 Performance Optimizations

- **Image Optimization**: Next.js Image component
- **Code Splitting**: Automatic with Next.js
- **Lazy Loading**: Components load when needed
- **Font Optimization**: Google Fonts with display swap
- **CSS Optimization**: Tailwind CSS purging

## 🔍 SEO Features

- **Meta Tags**: Dynamic meta tags for each page
- **Open Graph**: Social media sharing
- **Structured Data**: Ready for schema markup
- **Sitemap**: Can be generated with next-sitemap
- **Robots.txt**: SEO-friendly configuration

## 📱 Responsive Design

The website is fully responsive with breakpoints:

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🚀 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Other Platforms

```bash
npm run build
npm run start
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Original design inspiration from Bootstrap restaurant template
- Icons from Lucide React
- Animations powered by Framer Motion
- Built with Next.js and Tailwind CSS

---

**Happy coding! 🍽️**
