import React, { useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion";
import { ArrowRight, Instagram, Mail, ChevronDown } from "lucide-react";

import heroBg from "@/assets/images/hero-bg.png";
import portraitImg from "@/assets/images/portrait.png";
import productImg from "@/assets/images/product.png";
import filmStillImg from "@/assets/images/film-still.png";
import urbanImg from "@/assets/images/urban.png";
import landscapeImg from "@/assets/images/landscape.png";
import aboutImg from "@/assets/images/about.png";

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

function ParallaxImage({ src, alt, className }: { src: string; alt: string; className?: string }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div ref={ref} className={`overflow-hidden relative ${className}`}>
      <motion.img 
        src={src} 
        alt={alt}
        style={{ y, scale: 1.15 }}
        className="w-full h-full object-cover origin-center"
      />
    </div>
  );
}

function RevealText({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeIn}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  return (
    <div className="bg-background min-h-screen text-foreground selection:bg-foreground selection:text-background">
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 mix-blend-difference px-6 py-8 md:px-12 flex justify-between items-center text-sm tracking-widest uppercase font-medium">
        <div>Mang Risky</div>
        <div className="flex gap-8">
          <a href="#work" className="hover:opacity-70 transition-opacity">Work</a>
          <a href="#about" className="hover:opacity-70 transition-opacity">About</a>
          <a href="#contact" className="hover:opacity-70 transition-opacity">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen w-full flex flex-col justify-end p-6 md:p-12 pb-24 md:pb-24 z-10">
        <div className="absolute inset-0 z-[-1]">
          <img src={heroBg} alt="Background Texture" className="w-full h-full object-cover opacity-50 mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
        </div>
        
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-5xl"
        >
          <motion.h1 variants={fadeIn} className="font-serif text-6xl md:text-8xl lg:text-[10rem] leading-[0.9] tracking-tighter mb-6">
            Visual<br />Storyteller
          </motion.h1>
          <motion.div variants={fadeIn} className="flex flex-col md:flex-row gap-6 md:gap-24 md:items-end">
            <p className="text-muted-foreground max-w-sm text-lg md:text-xl font-light">
              Creative Freelancer specializing in Photography & Cinematic Videography. Based wherever the light is good.
            </p>
            <div className="animate-bounce">
              <ChevronDown className="w-6 h-6 text-muted-foreground" />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Statement Section */}
      <section className="py-32 px-6 md:px-12 max-w-4xl mx-auto text-center">
        <RevealText>
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl leading-tight">
            I don't just capture moments. I capture the atmosphere, the tension, and the quiet spaces in between.
          </h2>
        </RevealText>
      </section>

      {/* Selected Work */}
      <section id="work" className="py-24 px-6 md:px-12">
        <RevealText className="mb-16">
          <h2 className="text-sm tracking-widest uppercase font-medium text-muted-foreground mb-4">Selected Work</h2>
          <hr className="border-border" />
        </RevealText>

        <div className="flex flex-col gap-24 md:gap-48">
          
          {/* Project 1 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center">
            <div className="md:col-span-7">
              <ParallaxImage src={portraitImg} alt="Portrait Photography" className="aspect-[3/4] md:aspect-[4/5] w-full bg-muted/20" />
            </div>
            <div className="md:col-span-5 flex flex-col justify-center">
              <RevealText>
                <div className="text-sm tracking-widest uppercase mb-4 text-muted-foreground">01 &mdash; Portraiture</div>
                <h3 className="font-serif text-4xl md:text-6xl mb-6">Raw Emotion</h3>
                <p className="text-muted-foreground text-lg mb-8 max-w-md">
                  Chiaroscuro lighting and intimate framing to reveal the true character of the subject. Every face has a story.
                </p>
                <a href="#contact" className="inline-flex items-center gap-2 text-sm uppercase tracking-widest hover:gap-4 transition-all duration-300">
                  View Series <ArrowRight className="w-4 h-4" />
                </a>
              </RevealText>
            </div>
          </div>

          {/* Project 2 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center">
            <div className="md:col-span-5 order-2 md:order-1 flex flex-col justify-center">
              <RevealText>
                <div className="text-sm tracking-widest uppercase mb-4 text-muted-foreground">02 &mdash; Commercial</div>
                <h3 className="font-serif text-4xl md:text-6xl mb-6">Object Desire</h3>
                <p className="text-muted-foreground text-lg mb-8 max-w-md">
                  Meticulous staging and lighting design that elevates everyday objects into works of art. 
                </p>
                <a href="#contact" className="inline-flex items-center gap-2 text-sm uppercase tracking-widest hover:gap-4 transition-all duration-300">
                  View Series <ArrowRight className="w-4 h-4" />
                </a>
              </RevealText>
            </div>
            <div className="md:col-span-7 order-1 md:order-2">
              <ParallaxImage src={productImg} alt="Commercial Photography" className="aspect-[4/3] md:aspect-[16/9] w-full bg-muted/20" />
            </div>
          </div>

          {/* Project 3 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center">
            <div className="md:col-span-8">
              <ParallaxImage src={filmStillImg} alt="Cinematic Videography" className="aspect-[16/9] md:aspect-[21/9] w-full bg-muted/20" />
            </div>
            <div className="md:col-span-4 flex flex-col justify-center">
              <RevealText>
                <div className="text-sm tracking-widest uppercase mb-4 text-muted-foreground">03 &mdash; Videography</div>
                <h3 className="font-serif text-4xl md:text-6xl mb-6">Night Moves</h3>
                <p className="text-muted-foreground text-lg mb-8 max-w-md">
                  Anamorphic lenses and neon-drenched streets. Short film cinematography focused on atmospheric tension.
                </p>
                <a href="#contact" className="inline-flex items-center gap-2 text-sm uppercase tracking-widest hover:gap-4 transition-all duration-300">
                  Watch Film <ArrowRight className="w-4 h-4" />
                </a>
              </RevealText>
            </div>
          </div>

        </div>
      </section>

      {/* Grid Gallery */}
      <section className="py-24 px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
          <ParallaxImage src={urbanImg} alt="Urban Photography" className="aspect-square w-full bg-muted/20" />
          <div className="mt-12 md:mt-48">
            <ParallaxImage src={landscapeImg} alt="Landscape Photography" className="aspect-square w-full bg-muted/20" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 md:px-12 bg-card relative overflow-hidden">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <RevealText>
            <h2 className="text-sm tracking-widest uppercase font-medium text-muted-foreground mb-8">About Mang Risky</h2>
            <h3 className="font-serif text-4xl md:text-6xl mb-8 leading-tight">
              A relentless pursuit of the perfect frame.
            </h3>
            <div className="space-y-6 text-muted-foreground text-lg font-light max-w-md">
              <p>
                I picked up a camera ten years ago and never put it down. My work is defined by a deep appreciation for cinematic lighting, raw emotion, and unconventional perspectives.
              </p>
              <p>
                Whether I'm directing a brand commercial or shooting a portrait, my goal is always the same: to make the viewer feel something.
              </p>
            </div>
            <div className="mt-12">
              <h4 className="text-sm tracking-widest uppercase font-medium mb-4">Expertise</h4>
              <ul className="space-y-2 text-muted-foreground font-light">
                <li>&mdash; Cinematic Videography</li>
                <li>&mdash; Commercial Photography</li>
                <li>&mdash; Portraiture</li>
                <li>&mdash; Color Grading</li>
              </ul>
            </div>
          </RevealText>
          <div className="relative">
            <ParallaxImage src={aboutImg} alt="Mang Risky Portrait" className="aspect-[4/5] w-full bg-muted/20" />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-48 px-6 md:px-12 text-center flex flex-col items-center justify-center">
        <RevealText>
          <h2 className="font-serif text-6xl md:text-8xl lg:text-[8rem] mb-12 hover:italic transition-all duration-500 cursor-default">
            Let's Create.
          </h2>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 text-lg uppercase tracking-widest">
            <a href="mailto:hello@mangrisky.com" className="flex items-center gap-3 hover:text-muted-foreground transition-colors">
              <Mail className="w-5 h-5" /> hello@mangrisky.com
            </a>
            <span className="hidden sm:block text-muted-foreground">/</span>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-muted-foreground transition-colors">
              <Instagram className="w-5 h-5" /> @mangrisky
            </a>
          </div>
        </RevealText>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 md:px-12 flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground border-t border-border/50">
        <p>&copy; {new Date().getFullYear()} Mang Risky. All rights reserved.</p>
        <p className="mt-4 sm:mt-0 uppercase tracking-widest">Designed for Impact</p>
      </footer>
    </div>
  );
}
