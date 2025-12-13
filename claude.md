Claude Code Prompt: Web Design & Development Agency Homepage
Project Overview
Build a visually stunning, high-performance homepage for a web design and development agency based in Melbourne, Australia. The site should showcase expertise, build trust, and convert visitors into clients through compelling design, smooth animations, and strategic trust indicators.
Technical Stack

Framework: Next.js 14+ (App Router)
Styling: Tailwind CSS
Animations: Framer Motion (primary) with consideration for GSAP for complex timeline animations
Performance: Optimize for Core Web Vitals (0-2 second load time)
Responsive: Mobile-first design approach

Color Palette & Design References
[INSERT YOUR COLOR CODES HERE]

Primary: #ff9900
Secondary: #3399ff

Homepage Structure & Sections

1. Header/Navigation
   Best Practices:

Keep navigation to 5-7 main items maximum
Sticky header with subtle animation on scroll
Clear, descriptive labels (avoid clever/vague wording)
Mobile: Hamburger menu with smooth slide-in animation
Include prominent CTA button in header (e.g., "Get a Quote", "Start Your Project")

Implementation:

- Logo (left aligned)
- Navigation menu (Services, Work, About, Contact)
- CTA Button (right aligned, contrasting color)
- Mobile: Animated hamburger → slide-in menu

2. Hero Section (Above the Fold)
   Purpose: Capture attention in 50 milliseconds and communicate value proposition immediately
   Best Practices:

Full-height or near-full-height hero
Clear, benefit-focused headline (not generic corporate speak)
Compelling subheadline that addresses client pain points
Strong visual: High-quality image/video or interactive 3D element
Primary CTA button with hover animation
Consider: Animated background elements, gradient effects, or kinetic typography

Content Structure:

- Headline: Direct, results-focused (e.g., "Transform Your Digital Presence" or "Melbourne's Award-Winning Web Design Agency")
- Subheadline: 1-2 sentences explaining WHO you help and HOW
- Primary CTA: "Start Your Project" or "Get a Free Consultation"
- Secondary CTA (optional): "View Our Work"
- Visual: Hero image/video or animated illustration
- Social proof snippet: "Trusted by 100+ businesses" with mini logos
  Animation Ideas:

Fade-in text with stagger effect (Framer Motion)
Parallax scrolling on background
Floating elements or particles (subtle)
CTA button: Scale on hover, ripple effect on click

3. Trust Indicators / Social Proof Section
   Purpose: Immediately establish credibility and reduce visitor skepticism
   Types of Social Proof:

Client Logos

Display 6-12 well-known client logos in grayscale
Animate: Horizontal marquee/carousel (infinite loop)
Label: "Trusted by Leading Brands" or "Clients We've Served"

Statistics/Numbers

Display 3-4 key metrics in large, bold typography
Examples: "250+ Projects Delivered", "98% Client Satisfaction", "15 Years Experience"
Animation: CountUp effect when section enters viewport

Awards & Recognition

Industry awards, certifications, badges
Display prominently with subtle hover effects

Layout:

- Section headline: "Trusted by Melbourne's Leading Businesses"
- Client logos marquee (infinite horizontal scroll)
- Stats counter (3-4 key numbers in grid/row)
- Award badges (if applicable)

4. Services Section
   Best Practices:

Limit to 3-6 core services
Use card-based layout with hover effects
Each service: Icon/illustration + Title + Brief description (2-3 lines)
Link to detailed service pages

Layout Options:

Bento grid layout (modular, asymmetric boxes)
Card grid (3 columns on desktop, stack on mobile)
Split-screen approach for featured services

Services to Highlight:

- Web Design & Development
- E-commerce Solutions
- Brand Identity & UX/UI
- Website Maintenance & Support
- SEO & Digital Marketing (if applicable)
- Custom Web Applications
  Animation Ideas:

Cards: Lift/scale on hover
Staggered fade-in as user scrolls
Gradient background shift on hover
Icon: Rotate or bounce on hover

5. Featured Work / Portfolio Preview
   Purpose: Showcase best projects and demonstrate expertise
   Best Practices:

Showcase 3-6 best projects
Include: Project image + Client name + Brief description + Results (if possible)
Use high-quality mockups/screenshots
Link to full case studies

Layout Options:

Grid with hover overlay animations
Horizontal scroll section
Split-screen with image/text alternating
Interactive hover effects revealing project details

Animation Ideas:

Image zoom/scale on hover
Overlay slide-in with project details
Parallax effect on scroll
Project images: Fade/slide in with stagger

6. Value Proposition / Why Choose Us
   Purpose: Differentiate from competitors and address objections
   Content:

- Section headline: "Why Melbourne Businesses Choose Us"
- 3-4 key differentiators:
  • Client-focused approach
  • Fast turnaround times
  • Transparent pricing
  • Ongoing support
  • Local Melbourne team
  • Proven track record
  Layout:

Icon + Headline + Description cards
Split-screen with visual on one side
Timeline-style layout showing process

Animation:

Icons: Subtle bounce or pulse on viewport enter
Section: Fade-in with slide-up effect
Background: Gradient animation or geometric shapes

7. Testimonials Section
   Purpose: Build trust through authentic client feedback
   Best Practices:

Include full name, photo, company name, and job title
Use real testimonials (avoid generic praise)
3-6 testimonials displayed prominently
Video testimonials (highly effective if available)

Layout Options:

Carousel/slider with navigation dots
Grid layout (2-3 columns)
Featured testimonial + smaller testimonials
Animated testimonial cards (Frogger-style movement)

Content Structure:

- Client photo (circular or square)
- Quote (2-4 sentences, specific results/benefits)
- Client name
- Job title
- Company name
- Optional: Star rating
  Animation:

Auto-rotating carousel (Framer Motion AnimatePresence)
Fade transition between testimonials
Cards: Subtle floating/hover animation
Entrance: Slide-in with opacity change

8. Process / How We Work
   Purpose: Reduce uncertainty and show professionalism
   Best Practices:

Show 4-6 step process
Keep descriptions brief and clear
Use numbers or icons for each step

Steps Example:

1. Discovery & Strategy
2. Design & Prototyping
3. Development & Testing
4. Launch & Optimization
5. Ongoing Support
   Layout:

Horizontal timeline (desktop) / Vertical (mobile)
Numbered steps with icons
Interactive accordion sections

Animation:

Progressive reveal as user scrolls
Line connecting steps animates in
Step cards: Fade + slide from bottom

9. CTA Section (Above Footer)
   Purpose: Final conversion opportunity before footer
   Best Practices:

Strong, action-oriented headline
Brief supporting text (1-2 sentences)
Prominent CTA button
Secondary option (e.g., "View Pricing" or "Browse Portfolio")
Contrasting background color or gradient

Content:

- Headline: "Ready to Transform Your Online Presence?"
- Subheadline: "Let's discuss your project and bring your vision to life."
- Primary CTA: "Get Your Free Consultation"
- Secondary: "See Our Work" or "View Pricing"
  Visual Treatment:

Full-width section with gradient background
Subtle animated background (particles, gradients, or geometric shapes)
CTA button: Large, high-contrast, animated hover state

10. Footer
    Best Practices:

Keep clean and organized
Include essential links and contact info
Social media links
Location/address (Melbourne)
Copyright and legal links

Structure:

- Company info (logo + brief description)
- Quick Links (Services, About, Blog, Contact)
- Contact info (Email, Phone, Address)
- Social media icons
- Copyright notice
- Legal links (Privacy Policy, Terms of Service)

Animation Strategy (Framer Motion + GSAP)
Framer Motion - Use For:

Simple to moderately complex animations
Component enter/exit animations
Hover and tap interactions
Page transitions
Layout animations
Gesture-based interactions

Key Framer Motion Features to Implement:
javascript// Viewport animations (scroll-triggered)
<motion.div
initial={{ opacity: 0, y: 50 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true, margin: "-100px" }}
transition={{ duration: 0.6 }}

>

// Staggered children animations
<motion.ul
variants={containerVariants}
initial="hidden"
whileInView="visible"

> {items.map((item, i) => (

    <motion.li key={i} variants={itemVariants}>
      {item}
    </motion.li>

))}
</motion.ul>

// Hover effects
<motion.button
whileHover={{ scale: 1.05 }}
whileTap={{ scale: 0.95 }}
transition={{ type: "spring", stiffness: 400 }}

>

// Page transitions with AnimatePresence
<AnimatePresence mode="wait">
<motion.div
key={router.asPath}
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
exit={{ opacity: 0 }}
transition={{ duration: 0.3 }}

>

    {children}

</motion.div>
</AnimatePresence>
GSAP (GreenSock) - Consider For:

Complex timeline-based animations
Sophisticated scroll-triggered sequences
SVG path animations
Parallax effects
High-performance, intricate animations

GSAP ScrollTrigger Example:
javascriptuseEffect(() => {
gsap.to(".hero-element", {
scrollTrigger: {
trigger: ".hero",
start: "top top",
end: "bottom top",
scrub: 1,
},
y: 200,
opacity: 0.5
});
}, []);
Animation Best Practices:

Performance: Keep animations under 60fps, use will-change sparingly
Subtlety: Not every element needs animation - use purposefully
Consistency: Maintain consistent easing and duration (0.3-0.6s for most transitions)
Accessibility: Respect prefers-reduced-motion media query
Loading states: Include skeleton screens or loading animations
Mobile: Reduce or simplify animations on mobile for performance

Recommended Easing:
javascriptconst easing = {
ease: [0.25, 0.1, 0.25, 1], // Default smooth
spring: { type: "spring", stiffness: 300, damping: 30 }, // Bouncy
soft: [0.4, 0, 0.2, 1] // Material Design
}

Trust Signals & Credibility Elements
Throughout the Site:

Security Indicators

SSL certificate (HTTPS in browser)
Security badges (if applicable to services)
Display on contact/quote forms

Social Proof Types:

Client logos (grayscale marquee)
Testimonials with photos and full attribution
Case studies with measurable results
Industry awards/certifications
"As Featured In" press logos (if applicable)
Portfolio examples with real client names
Social media follower counts (if substantial)
Live metrics: "X projects delivered", "X happy clients"

Transparency Indicators:

Clear pricing information (or "Get Quote" process)
Team photos and bios (About page - link from homepage)
Physical address in Melbourne
Responsive customer support options (chat, email, phone)
Blog/case studies showing expertise
Clear privacy policy and terms

Professional Design:

Consistent branding and typography
High-quality images (avoid stock photos where possible)
No spelling/grammar errors
Fast loading times (1-2 seconds)
Mobile responsiveness
Clean, uncluttered layout with white space

Technical Requirements
Performance Optimization:
javascript// Image optimization (Next.js Image component)
import Image from 'next/image'

<Image
src="/client-logo.png"
width={200}
height={100}
alt="Client name"
loading="lazy" // or "eager" for above-fold
quality={85}
/>

// Font optimization
import { Inter } from 'next/font/google'

const inter = Inter({
subsets: ['latin'],
display: 'swap',
})

// Code splitting
const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
loading: () => <Skeleton />,
ssr: false // if client-only
})
SEO Essentials:
javascript// Metadata (app/page.tsx)
export const metadata = {
title: 'Melbourne Web Design & Development | [Agency Name]',
description: 'Award-winning web design and development agency in Melbourne. We create stunning, high-performance websites for growing businesses.',
openGraph: {
title: 'Melbourne Web Design & Development',
description: '...',
images: ['/og-image.jpg'],
},
}

// Structured data (JSON-LD)

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "[Agency Name]",
  "url": "https://yourwebsite.com",
  "logo": "https://yourwebsite.com/logo.png",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Melbourne",
    "addressRegion": "VIC",
    "addressCountry": "AU"
  }
}
</script>

Accessibility:

Semantic HTML elements (<header>, <nav>, <main>, <section>, <footer>)
ARIA labels for interactive elements
Alt text for all images
Keyboard navigation support
Sufficient color contrast (WCAG AA minimum)
Focus indicators on interactive elements
Respect prefers-reduced-motion

javascript// Reduce motion for accessibility
const prefersReducedMotion = window.matchMedia(
'(prefers-reduced-motion: reduce)'
).matches

const animation = prefersReducedMotion
? { opacity: 1 }
: { opacity: 1, y: 0, transition: { duration: 0.6 } }

Component Library Recommendations
UI Components:

shadcn/ui: For forms, buttons, dialogs (copy-paste components)
Magic UI: Animated components (Marquee, Hero Video Dialog, Dock)
Aceternity UI: Aurora backgrounds, beams, interactive globes
Framer Motion: For all animation needs

Utility Libraries:

clsx / cn: For conditional Tailwind classes
react-intersection-observer: Scroll-triggered animations
next-themes: Dark mode support (optional)

File Structure
/app
/page.tsx (Homepage)
/layout.tsx (Root layout with header/footer)
/components
/ui (shadcn components)
/sections
/Hero.tsx
/TrustIndicators.tsx
/Services.tsx
/Portfolio.tsx
/Testimonials.tsx
/Process.tsx
/CTA.tsx
/layout
/Header.tsx
/Footer.tsx
/MobileMenu.tsx
/lib
/utils.ts
/animations.ts (Framer Motion variants)
/public
/images
/icons
/styles
/globals.css

Design Principles to Follow

Visual Hierarchy: Use size, color, and spacing to guide attention
Consistency: Maintain uniform spacing, typography, and component styles
White Space: Don't clutter - give elements room to breathe
Contrast: Ensure text is readable, CTAs stand out
Mobile-First: Design for mobile, scale up to desktop
Scannability: Use short paragraphs, bullet points, clear headlines
Speed: Optimize everything - images, fonts, animations
Authenticity: Use real client work, avoid generic stock photos
Clarity: Avoid jargon, speak directly to client needs
Action-Oriented: Every section should guide toward conversion

Key Differentiators for Melbourne Agency

Emphasize local Melbourne presence and understanding of local market
Showcase Melbourne-based client work prominently
Include Melbourne timezone/location in contact info
Consider local business directory integrations
Use Australian English spelling and terminology
Reference understanding of Australian business landscape

Copywriting Guidelines
Headlines:

❌ "Innovative Digital Solutions"
✅ "Transform Your Business with a Website That Converts"

Value Props:

❌ "We leverage cutting-edge technologies"
✅ "Get a high-performance website that brings in more customers"

CTAs:

❌ "Submit" or "Click Here"
✅ "Start Your Project", "Get Your Free Quote", "See Our Work"

Testimonials:

❌ "Great service, highly recommend"
✅ "After launching our new website, we saw a 150% increase in qualified leads within 3 months"

Launch Checklist
Pre-Launch:

All animations tested on mobile and desktop
Forms functional (contact, quote)
All links working
Images optimized (WebP format, proper dimensions)
SEO metadata complete
Accessibility audit passed
Performance test (Lighthouse score 90+)
Cross-browser testing (Chrome, Firefox, Safari, Edge)
Analytics installed (Google Analytics, etc.)

Post-Launch:

Monitor Core Web Vitals
A/B test CTA buttons and headlines
Collect user feedback
Regular content updates (blog, portfolio)
Monitor and respond to contact form submissions

Additional Resources & Inspiration
Top Agency Websites for Reference:

Lusion (interactive design)
Depo Studio (grid-based dynamic layouts)
Tiny Wins (minimalism with personality)
Critical Danger (cutting-edge CSS)
Beauvoir (scroll-triggered animations)
Motion (game-like functionality)

Animation Libraries:

Framer Motion: https://www.framer.com/motion/
GSAP: https://gsap.com/
Magic UI: https://magicui.design/
Aceternity UI: https://ui.aceternity.com/

Design Systems:

Tailwind UI: https://tailwindui.com/
shadcn/ui: https://ui.shadcn.com/

Final Notes
This homepage should feel:

Professional but not corporate/stuffy
Modern with cutting-edge design trends
Fast and responsive
Trustworthy through clear social proof
Action-oriented with clear conversion paths
Authentic showcasing real work and clients
Engaging through thoughtful animations and interactions

The goal is to create a homepage that not only looks beautiful but also:

Builds immediate trust and credibility
Clearly communicates value proposition
Showcases expertise and past work
Makes it easy to take the next step (contact/quote)
Loads fast and works flawlessly on all devices

Remember: Every design decision should serve the user's needs and the business goal of converting visitors into clients. Avoid design for design's sake - every animation, color choice, and section should have a strategic purpose.
