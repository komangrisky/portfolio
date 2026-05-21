import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Instagram, Linkedin, Youtube } from "lucide-react";

import heroPortrait from "@/assets/images/hero-portrait.png";
import projPortrait from "@/assets/images/proj-portrait.png";
import projCommercial from "@/assets/images/proj-commercial.png";
import projUrban from "@/assets/images/proj-urban.png";
import projCinematic from "@/assets/images/proj-cinematic.png";
import projWedding from "@/assets/images/proj-wedding.png";
import projLandscape from "@/assets/images/proj-landscape.png";
import avatarImg from "@/assets/images/avatar.png";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string, delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay } }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  return (
    <div className="bg-background min-h-screen text-foreground selection:bg-foreground selection:text-background font-sans">
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border px-6 py-5 flex justify-between items-center text-sm font-medium">
        <div className="font-bold tracking-tight text-base">Mang Risky</div>
        <div className="hidden md:flex gap-8 text-muted-foreground">
          <a href="#about" className="hover:text-foreground transition-colors">About</a>
          <a href="#services" className="hover:text-foreground transition-colors">Services</a>
          <a href="#portfolio" className="hover:text-foreground transition-colors">Portfolio</a>
          <a href="#blog" className="hover:text-foreground transition-colors">Blog</a>
          <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
        </div>
        <div>
          <a href="#contact" className="border border-foreground px-4 py-2 hover:bg-foreground hover:text-background transition-colors">
            Hire Me
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-24 md:pt-48 md:pb-32 px-6 md:px-12 max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="lg:col-span-8 flex flex-col justify-center"
        >
          <motion.h1 variants={fadeUp} className="font-sans text-6xl md:text-8xl lg:text-[7rem] leading-[0.95] tracking-tight mb-6">
            Creative <br /> Freelancer
          </motion.h1>
          <motion.p variants={fadeUp} className="text-xl md:text-2xl text-muted-foreground font-light mb-12">
            Photography & Videography
          </motion.p>
          
          <motion.div variants={fadeUp} className="flex gap-4 items-center">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-foreground opacity-20"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-foreground"></span>
            </span>
            <span className="text-sm font-medium uppercase tracking-wider">Available for work</span>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } }}
          className="lg:col-span-4 relative flex flex-col gap-6"
        >
          <div className="bg-muted p-6 text-sm leading-relaxed text-foreground border border-border">
            Hi, I'm Mang Risky, a Creative Freelancer specializing in Photography & Videography. Available for projects worldwide.
          </div>
          <div className="aspect-square w-full overflow-hidden bg-muted">
            <img src={heroPortrait} alt="Mang Risky" className="w-full h-full object-cover object-top filter grayscale" />
          </div>
        </motion.div>
      </section>

      {/* Brand Logos Row */}
      <section className="border-y border-border py-12 px-6 md:px-12 overflow-hidden bg-white">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground whitespace-nowrap">Trusted By</p>
          <div className="flex-1 w-full flex flex-wrap justify-center md:justify-between items-center gap-8 md:gap-12 opacity-60">
            {["Tokopedia", "Grab", "Gojek", "Shopee", "Traveloka", "Telkom"].map((brand, i) => (
              <span key={i} className="text-xl md:text-2xl font-sans font-bold tracking-wide">{brand}</span>
            ))}
          </div>
        </div>
      </section>

      {/* About + Stats Section */}
      <section id="about" className="py-24 px-6 md:px-12 max-w-[1400px] mx-auto border-b border-border">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-sans mb-8">About Me</h2>
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed font-light">
              <p>
                I am a visual storyteller with a passion for finding beauty in the everyday. My journey in photography and videography is rooted in the belief that every frame should evoke an emotion.
              </p>
              <p>
                With over years of experience spanning across commercial, editorial, and documentary styles, I bring a refined, cinematic eye to every project. I focus on raw authenticity, stripping away the unnecessary to reveal the core narrative.
              </p>
            </div>
          </Reveal>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 lg:border-l lg:border-border lg:pl-16">
            <Reveal delay={0.1} className="flex flex-col gap-2">
              <span className="font-sans text-7xl md:text-8xl font-bold">+50</span>
              <span className="text-lg font-medium">Projects Completed</span>
              <span className="text-sm text-muted-foreground">Across various industries globally.</span>
            </Reveal>
            <Reveal delay={0.2} className="flex flex-col gap-2">
              <span className="font-sans text-7xl md:text-8xl font-bold">+30</span>
              <span className="text-lg font-medium">Happy Clients</span>
              <span className="text-sm text-muted-foreground">Building long-lasting creative partnerships.</span>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 md:px-12 max-w-[1400px] mx-auto border-b border-border">
        <Reveal className="mb-16 md:mb-24">
          <h2 className="text-3xl md:text-5xl font-sans max-w-2xl leading-tight">
            A Comprehensive look at what we offer and how we deliver
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Light Card 1 */}
          <Reveal delay={0.1}>
            <div className="bg-card border border-border p-8 md:p-12 h-full flex flex-col justify-between aspect-square md:aspect-auto">
              <div className="flex justify-between items-start mb-12">
                <h3 className="text-2xl md:text-3xl font-sans">Portrait<br />Photography</h3>
                <ArrowRight className="w-6 h-6" />
              </div>
              <p className="text-muted-foreground text-lg">Intimate and raw portraiture capturing true character with an editorial finish.</p>
            </div>
          </Reveal>

          {/* Dark Card 1 */}
          <Reveal delay={0.2}>
            <div className="bg-foreground text-background p-8 md:p-12 h-full flex flex-col justify-between aspect-square md:aspect-auto">
              <div className="flex justify-between items-start mb-12">
                <h3 className="text-2xl md:text-3xl font-sans">Commercial<br />Photography</h3>
                <ArrowRight className="w-6 h-6" />
              </div>
              <p className="text-background/70 text-lg">Meticulous staging and elegant lighting that elevates brands and products.</p>
            </div>
          </Reveal>

          {/* Dark Card 2 */}
          <Reveal delay={0.3}>
            <div className="bg-foreground text-background p-8 md:p-12 h-full flex flex-col justify-between aspect-square md:aspect-auto">
              <div className="flex justify-between items-start mb-12">
                <h3 className="text-2xl md:text-3xl font-sans">Cinematic<br />Videography</h3>
                <ArrowRight className="w-6 h-6" />
              </div>
              <p className="text-background/70 text-lg">Narrative-driven visual storytelling with a moody, cinematic atmosphere.</p>
            </div>
          </Reveal>

          {/* Light Card 2 */}
          <Reveal delay={0.4}>
            <div className="bg-card border border-border p-8 md:p-12 h-full flex flex-col justify-between aspect-square md:aspect-auto">
              <div className="flex justify-between items-start mb-12">
                <h3 className="text-2xl md:text-3xl font-sans">Brand Video<br />Production</h3>
                <ArrowRight className="w-6 h-6" />
              </div>
              <p className="text-muted-foreground text-lg">Full-scale video production to craft compelling visual brand identities.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Experience Timeline Section */}
      <section className="py-24 px-6 md:px-12 max-w-[1400px] mx-auto border-b border-border">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
          <div className="lg:col-span-5">
            <Reveal>
              <h2 className="text-3xl md:text-4xl font-sans max-w-sm leading-tight sticky top-32">
                A Yearly snapshot of my creative growth
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-7 flex flex-col">
            {[
              { role: "Freelance Photographer", year: "2018 - 2020" },
              { role: "Videographer at Creative Studio", year: "2020 - 2022" },
              { role: "Lead Visual Director", year: "2022 - 2024" },
              { role: "Creative Freelancer", year: "2024 - Now" }
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="py-8 border-b border-border flex justify-between items-center group cursor-default">
                  <h3 className="text-xl md:text-2xl font-sans group-hover:pl-4 transition-all duration-300">{item.role}</h3>
                  <span className="text-sm font-medium text-muted-foreground">{item.year}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid Section */}
      <section id="portfolio" className="py-24 px-6 md:px-12 max-w-[1400px] mx-auto border-b border-border">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <Reveal>
            <h2 className="text-4xl md:text-6xl font-sans max-w-2xl leading-tight">
              Explore my portfolio of creative solutions
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-muted-foreground text-lg max-w-xs">
              Explore my portfolio and creative solutions.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Project 1 */}
          <Reveal className="group relative overflow-hidden aspect-[3/4] bg-muted">
            <img src={projPortrait} alt="Moody Portrait" className="w-full h-full object-cover filter grayscale transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-foreground/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
              <span className="inline-block px-3 py-1 bg-background text-foreground text-xs font-medium uppercase tracking-wider mb-3">Portrait</span>
              <h3 className="text-2xl font-sans text-background">Moody Portraiture</h3>
            </div>
          </Reveal>

          {/* Project 2 */}
          <Reveal delay={0.1} className="group relative overflow-hidden aspect-[3/4] bg-muted md:mt-24">
            <img src={projCommercial} alt="Commercial Product" className="w-full h-full object-cover filter grayscale transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-foreground/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
              <span className="inline-block px-3 py-1 bg-background text-foreground text-xs font-medium uppercase tracking-wider mb-3">Commercial</span>
              <h3 className="text-2xl font-sans text-background">Object Desire</h3>
            </div>
          </Reveal>

          {/* Project 3 */}
          <Reveal className="group relative overflow-hidden aspect-square bg-muted md:-mt-24">
            <img src={projUrban} alt="Urban Street" className="w-full h-full object-cover filter grayscale transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-foreground/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
              <span className="inline-block px-3 py-1 bg-background text-foreground text-xs font-medium uppercase tracking-wider mb-3">Street</span>
              <h3 className="text-2xl font-sans text-background">City Shadows</h3>
            </div>
          </Reveal>

          {/* Project 4 */}
          <Reveal delay={0.1} className="group relative overflow-hidden aspect-video bg-muted md:mt-8">
            <img src={projCinematic} alt="Cinematic Brand Video" className="w-full h-full object-cover filter grayscale transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-foreground/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
              <span className="inline-block px-3 py-1 bg-background text-foreground text-xs font-medium uppercase tracking-wider mb-3">Video</span>
              <h3 className="text-2xl font-sans text-background">Cinematic Narrative</h3>
            </div>
          </Reveal>

          {/* Project 5 */}
          <Reveal className="group relative overflow-hidden aspect-video bg-muted md:col-span-2">
            <img src={projLandscape} alt="Landscape Travel" className="w-full h-full object-cover filter grayscale transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-foreground/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
              <span className="inline-block px-3 py-1 bg-background text-foreground text-xs font-medium uppercase tracking-wider mb-3">Travel</span>
              <h3 className="text-2xl font-sans text-background">Vast Horizons</h3>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-32 px-6 md:px-12 max-w-4xl mx-auto text-center border-b border-border">
        <Reveal>
          <div className="mb-12">
            <svg className="w-12 h-12 mx-auto text-muted-foreground opacity-30" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>
          <h2 className="text-3xl md:text-5xl font-sans leading-tight mb-12">
            "Mang Risky has an incredible eye for detail. The ability to transform ordinary scenes into deeply emotional, cinematic moments is unmatched. The final deliverables exceeded every expectation."
          </h2>
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="w-16 h-16 rounded-full overflow-hidden bg-muted">
              <img src={avatarImg} alt="Client" className="w-full h-full object-cover filter grayscale" />
            </div>
            <div>
              <p className="font-bold">Sarah Jenkins</p>
              <p className="text-sm text-muted-foreground">Creative Director, Studio X</p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Contact CTA Section */}
      <section id="contact" className="py-32 px-6 md:px-12 bg-foreground text-background text-center">
        <Reveal>
          <h2 className="font-sans text-6xl md:text-8xl lg:text-[9rem] leading-none tracking-tight mb-8">
            Let's Work <br className="hidden md:block" /> Together
          </h2>
          <p className="text-lg md:text-xl text-background/70 max-w-2xl mx-auto mb-12 font-light">
            Whether you have a specific project in mind or just want to explore creative possibilities, my inbox is always open.
          </p>
          <a href="mailto:hello@mangrisky.com" className="inline-flex items-center gap-3 bg-background text-foreground px-8 py-4 text-lg font-medium hover:bg-background/90 transition-colors">
            Get In Touch <ArrowRight className="w-5 h-5" />
          </a>
        </Reveal>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background pt-16 pb-8 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div>
            <div className="font-bold tracking-tight text-2xl mb-6">Mang Risky</div>
            <p className="text-background/60 text-sm max-w-xs">
              Photography & Videography. <br /> Based in Indonesia, available worldwide.
            </p>
          </div>
          
          <div className="flex flex-col gap-3">
            <span className="text-background/40 text-sm font-medium uppercase tracking-wider mb-2">Navigation</span>
            <a href="#about" className="hover:text-background/70 transition-colors w-fit">About</a>
            <a href="#services" className="hover:text-background/70 transition-colors w-fit">Services</a>
            <a href="#portfolio" className="hover:text-background/70 transition-colors w-fit">Portfolio</a>
          </div>

          <div className="flex flex-col gap-3">
            <span className="text-background/40 text-sm font-medium uppercase tracking-wider mb-2">Socials</span>
            <a href="#" className="flex items-center gap-2 hover:text-background/70 transition-colors w-fit"><Instagram className="w-4 h-4" /> Instagram</a>
            <a href="#" className="flex items-center gap-2 hover:text-background/70 transition-colors w-fit"><Youtube className="w-4 h-4" /> YouTube</a>
            <a href="#" className="flex items-center gap-2 hover:text-background/70 transition-colors w-fit"><Linkedin className="w-4 h-4" /> LinkedIn</a>
          </div>
        </div>

        <div className="max-w-[1400px] mx-auto pt-8 border-t border-background/20 flex flex-col sm:flex-row justify-between items-center text-sm text-background/50">
          <p>&copy; {new Date().getFullYear()} Mang Risky. All rights reserved.</p>
          <p className="mt-4 sm:mt-0 uppercase tracking-widest text-xs">Designed for Impact</p>
        </div>
      </footer>
    </div>
  );
}
