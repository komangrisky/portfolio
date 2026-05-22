import { useEffect, useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, Instagram, Linkedin, Youtube, X, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

import heroPortrait from "@/assets/images/hero-portrait.jpg";
import projPortrait from "@/assets/images/proj-portrait.png";
import projCommercial from "@/assets/images/proj-commercial.png";
import projUrban from "@/assets/images/proj-urban.png";
import projCinematic from "@/assets/images/proj-cinematic.png";
import projWedding from "@/assets/images/proj-wedding.png";
import projLandscape from "@/assets/images/proj-landscape.png";
import avatarImg from "@/assets/images/avatar.png";

import gd1 from "@assets/1_1779425702235.png";
import gd2 from "@assets/2_1779425702254.png";
import gd3 from "@assets/3_1779425702256.png";
import gd4 from "@assets/4_1779425702257.png";
import gd5 from "@assets/5_1779425702259.png";
import gd6 from "@assets/SnapInsta.to_489915909_17881030962270913_4948286246999901179_n_1779426702032.jpg";
import gd7 from "@assets/SnapInsta.to_489861301_17881030953270913_8689388485266757312_n_1779426702035.jpg";
import gd8 from "@assets/SnapInsta.to_490182516_17880922065270913_8501581291407739613_n_1779426859980.jpg";
import gd9 from "@assets/SnapInsta.to_489526307_17880922074270913_6974189309025494708_n_1779426859983.jpg";

import bprIg from "@assets/IMG_2992_1779428672369.png";
import bpr1 from "@assets/SnapInsta.to_493907731_1259158569546020_4608108281931927551_n_1779428691961.jpg";
import bpr2 from "@assets/SnapInsta.to_493151387_1259158636212680_4628735394798468503_n_1779428699638.jpg";
import bpr3 from "@assets/SnapInsta.to_494205077_1259158682879342_4138179937652652106_n_1779428707625.jpg";
import bpr4 from "@assets/SnapInsta.to_493408673_1259158522879358_6529029882707470470_n_1779428716074.jpg";
import bpr5 from "@assets/SnapInsta.to_493090815_1259158856212658_7059976828168709985_n_1779428735971.jpg";
import bpr6 from "@assets/SnapInsta.to_494052892_1259158479546029_7000198123372642265_n_1779428742601.jpg";

import myDoviIg from "@assets/IMG_2993_1779428768358.png";
import mydovi1 from "@assets/SnapInsta.to_481906222_654858217096988_3809438425069674665_n_1779429340525.jpg";
import mydovi2 from "@assets/SnapInsta.to_481506315_654857993763677_1546084556318246458_n_1779429340547.jpg";
import mydovi3 from "@assets/SnapInsta.to_482129230_654858060430337_5408071129425258116_n_1779429340548.jpg";
import mydovi4 from "@assets/SnapInsta.to_481190312_654858153763661_351958878832986569_n_1779429340548.jpg";
import mydovi5 from "@assets/SnapInsta.to_481952247_654858053763671_7380503559067098542_n_1779429340549.jpg";

import doviposIg from "@assets/IMG_2994_1779429364730.png";
import dovipos1 from "@assets/SnapInsta.to_483918974_122188507220257407_7787840928610392772__1779429546086.jpg";
import dovipos2 from "@assets/SnapInsta.to_482226488_122186558996257407_6444128116143349002__1779429551455.jpg";
import dovipos3 from "@assets/SnapInsta.to_493265739_122197277186257407_6559846175186615105__1779429557251.jpg";
import dovipos4 from "@assets/SnapInsta.to_485308010_122189531516257407_428033218536129910_n_1779429796390.jpg";
import dovipos5 from "@assets/SnapInsta.to_473617584_122176426838257407_6815221220223436201__1779429802643.jpg";
import dovipos6 from "@assets/SnapInsta.to_473581698_122175841580257407_6268395871360592266__1779430519845.jpg";

import mydovi6 from "@assets/SnapInsta.to_481506411_654858143763662_1442563488002702498_n_1779430650514.jpg";

import kedaiIg from "@assets/IMG_2995_1779430674563.png";
import kedai1 from "@assets/Kedai_20260501_213921_0000_1779431136039.png";
import kedai2 from "@assets/Kedai_20260501_214506_0000_1779431136049.png";
import kedai3 from "@assets/Kedai_20260503_002819_0000_1779431136051.png";
import kedai4 from "@assets/Kedai_20260501_213402_0000_1779431202449.png";
import kedai5 from "@assets/Kedai_20260501_213600_0000_1779431202450.png";
import kedai6 from "@assets/Kedai_20260501_213724_0000_(1)_1779431202451.png";

import koraLogo from "@assets/kora_market_farm_logo_1779437775004.jpg";
import koraMockup1 from "@assets/IMG_1968.JPG_1779438302216.jpeg";
import koraMockup2 from "@assets/IMG_1967.JPG_1779438302225.jpeg";
import kitaBicaraLogo from "@assets/new_green_1779438375304.png";
import akarasaLogo from "@assets/akarasa_logo_1779438434113.png";
import kotoWordmark from "@assets/IMG_9885_1779438535547.png";
import kotoMark from "@assets/IMG_9887_1779438535549.png";

import ev1 from "@assets/2024_12_17_18_56_IMG_4359_1779443478063.jpg";
import ev2 from "@assets/2024_12_17_19_03_IMG_4365_1779443478068.jpg";
import ev3 from "@assets/2024_12_17_17_32_IMG_4302_1779443478069.jpg";
import ev4 from "@assets/2024_12_17_17_22_IMG_4293_1779443478069.jpg";
import ev5 from "@assets/2024_12_17_17_20_IMG_4287_1779443478070.jpg";
import ev6 from "@assets/2024_12_17_17_16_IMG_4278_1779443478070.jpg";
import ev7 from "@assets/2024_12_17_17_13_IMG_4275_1779443478070.jpg";
import ev8 from "@assets/2024_12_17_16_51_IMG_4273_1779443478071.jpg";
import ev9 from "@assets/2024_12_17_16_51_IMG_4270_1779443478072.jpg";

import fd1 from "@assets/DSC04097_1779443711537.jpg";
import fd2 from "@assets/DSC04080_1779443711545.jpg";
import fd3 from "@assets/DSC04071_1779443711545.jpg";
import fd4 from "@assets/DSC04041_1779443711546.jpg";
import fd5 from "@assets/DSC03984_1779443711547.jpg";
import fd6 from "@assets/DSC03936_1779443711547.jpg";
import fd7 from "@assets/DSC03905_1779443711548.jpg";
import fd8 from "@assets/DSC03893_1779443711548.jpg";
import fd9 from "@assets/DSC03858_1779443711548.jpg";
import fd10 from "@assets/DSC03845_1779443711549.jpg";

import up1 from "@assets/DSA00194_1779443910832.jpg";
import up2 from "@assets/2022_1227_13513200_1779443910839.jpg";
import up3 from "@assets/2022_1227_13503600_1779443910840.jpg";
import up4 from "@assets/2022_1227_13451100_1779443910840.jpg";
import up5 from "@assets/2022_1227_13432300_1779443910840.jpg";
import up6 from "@assets/2022_1227_13424000_1779443910841.jpg";
import up7 from "@assets/2022_1227_13405200_1779443910841.jpg";
import up8 from "@assets/2022_1227_13390200_1779443910842.jpg";
import up9 from "@assets/2022_1227_13382300_1779443910842.jpg";
import up10 from "@assets/2022_1227_13364700_1779443910843.jpg";

import g1 from "@assets/DSCF8265-1_1779444077959.jpg";
import g2 from "@assets/DSCF8756_1779444077968.jpg";
import g3 from "@assets/DSCF8652_1779444077968.jpg";
import g4 from "@assets/DSCF8450_1779444077969.jpg";
import g5 from "@assets/DSCF7659_1779444077969.jpg";

import pfGraphicDesign from "@assets/SnapInsta.to_489861301_17881030953270913_8689388485266757312_n_1779459259140.jpg";
import pfSocialMedia from "@assets/SnapInsta.to_482226488_122186558996257407_6444128116143349002__1779459284281.jpg";
import pfPhotography from "@assets/DSC03905_1779459301446.jpg";
import pfVideo from "@assets/1_unit_rumah_revisi_1779459315228.mp4";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } }
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
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay } }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

type ServiceItem = {
  src: string;
  caption?: string;
  link?: string;
};

type SocialMediaGroup = {
  client: string;
  igHandle: string;
  igScreenshot: string;
  images: string[];
};

type BrandingSlide = {
  src: string;
  label?: string;
};

type BrandingProject = {
  client: string;
  tagline?: string;
  hero: string;
  slides: BrandingSlide[];
};

type PhotoCategory = {
  name: string;
  images: string[];
};

type VideoProject = {
  title: string;
  client: string;
  platform: "instagram" | "youtube" | "vimeo" | "tiktok";
  link: string;
  thumbnail?: string;
};

type Service = {
  title: string;
  description: string;
  items: ServiceItem[];
  dark: boolean;
  groups?: SocialMediaGroup[];
  brandingProjects?: BrandingProject[];
  photoCategories?: PhotoCategory[];
  videoProjects?: VideoProject[];
};

function PhoneMockup({ src }: { src: string }) {
  return (
    <div className="relative shrink-0" style={{ width: 160, height: 320 }}>
      <div className="absolute inset-0 rounded-[28px] bg-[#111] border-[3px] border-[#2a2a2a] shadow-2xl" />
      <div className="absolute -right-[5px] top-16 w-[3px] h-8 bg-[#2a2a2a] rounded-r-sm" />
      <div className="absolute -left-[5px] top-12 w-[3px] h-5 bg-[#2a2a2a] rounded-l-sm" />
      <div className="absolute -left-[5px] top-20 w-[3px] h-5 bg-[#2a2a2a] rounded-l-sm" />
      <div className="absolute inset-[5px] rounded-[23px] overflow-hidden bg-black">
        <div className="absolute top-0 left-0 right-0 h-5 bg-black z-10 flex justify-between items-center px-3">
          <span className="text-white text-[7px] font-medium">13.40</span>
          <div className="w-8 h-2.5 bg-[#1c1c1e] rounded-full" />
          <div className="text-white text-[7px]">◾◾◾</div>
        </div>
        <img src={src} alt="Instagram profile" className="w-full h-full object-cover object-top" />
      </div>
    </div>
  );
}

function ImageLightbox({ images, startIndex, clientName, onClose }: {
  images: string[];
  startIndex: number;
  clientName: string;
  onClose: () => void;
}) {
  const [idx, setIdx] = useState(startIndex);
  const total = images.length;

  const prev = (e: React.MouseEvent) => { e.stopPropagation(); setIdx(i => (i - 1 + total) % total); };
  const next = (e: React.MouseEvent) => { e.stopPropagation(); setIdx(i => (i + 1) % total); };

  const handleDragEnd = (_: unknown, info: { offset: { x: number } }) => {
    if (info.offset.x < -60) setIdx(i => (i + 1) % total);
    else if (info.offset.x > 60) setIdx(i => (i - 1 + total) % total);
  };

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") setIdx(i => (i - 1 + total) % total);
    if (e.key === "ArrowRight") setIdx(i => (i + 1) % total);
    if (e.key === "Escape") onClose();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[80] flex flex-col bg-black/95"
      onClick={onClose}
      onKeyDown={handleKey}
      tabIndex={0}
    >
      {/* Lightbox header */}
      <div className="flex justify-between items-center px-6 py-4 shrink-0" onClick={e => e.stopPropagation()}>
        <div>
          <p className="text-white font-semibold text-sm">{clientName}</p>
          <p className="text-white/50 text-xs">{idx + 1} / {total}</p>
        </div>
        <button onClick={onClose} className="p-2 text-white/70 hover:text-white transition-colors">
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Image area */}
      <div className="flex-1 flex items-center justify-center relative" onClick={e => e.stopPropagation()}>
        <button
          onClick={prev}
          className="absolute left-4 z-10 p-3 bg-white/10 hover:bg-white/20 text-white transition-colors rounded-full"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <AnimatePresence mode="wait">
          <motion.div
            key={idx}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.15}
            onDragEnd={handleDragEnd}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="w-full h-full flex items-center justify-center px-16 cursor-grab active:cursor-grabbing"
          >
            <img
              src={images[idx]}
              alt={`${clientName} konten ${idx + 1}`}
              className="max-w-full max-h-[70vh] object-contain select-none"
              draggable={false}
            />
          </motion.div>
        </AnimatePresence>

        <button
          onClick={next}
          className="absolute right-4 z-10 p-3 bg-white/10 hover:bg-white/20 text-white transition-colors rounded-full"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Thumbnail strip */}
      <div className="flex items-center justify-center gap-2 px-6 py-4 overflow-x-auto shrink-0" onClick={e => e.stopPropagation()}>
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            className={`shrink-0 w-12 h-12 overflow-hidden transition-all ${i === idx ? "ring-2 ring-white opacity-100" : "opacity-40 hover:opacity-70"}`}
          >
            <img src={img} alt="" className="w-full h-full object-cover" draggable={false} />
          </button>
        ))}
      </div>
    </motion.div>
  );
}

function SocialMediaModal({ service, onClose }: { service: Service; onClose: () => void }) {
  const groups = service.groups ?? [];
  const [current, setCurrent] = useState(0);
  const [lightbox, setLightbox] = useState<{ idx: number } | null>(null);
  const group = groups[current];
  const total = groups.length;

  const prev = () => setCurrent(i => (i - 1 + total) % total);
  const next = () => setCurrent(i => (i + 1) % total);

  const handleDragEnd = (_: unknown, info: { offset: { x: number } }) => {
    if (lightbox) return;
    if (info.offset.x < -60) next();
    else if (info.offset.x > 60) prev();
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[80] flex items-center justify-center bg-black/80 p-4 md:p-8"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="bg-background w-full max-w-5xl max-h-[90vh] overflow-hidden flex flex-col"
          onClick={e => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex justify-between items-center px-6 py-4 border-b border-border shrink-0">
            <div>
              <h2 className="text-xl md:text-2xl font-sans font-semibold">{service.title}</h2>
              <p className="text-xs text-muted-foreground mt-0.5">Slide {current + 1} / {total}</p>
            </div>
            <button onClick={onClose} className="p-2 hover:bg-muted transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Client nav bar */}
          <div className="flex items-center justify-between px-6 py-3 bg-muted/40 border-b border-border shrink-0">
            <button onClick={prev} className="p-1.5 hover:bg-muted rounded transition-colors">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div className="text-center">
              <p className="font-semibold text-sm md:text-base tracking-wide">{group?.client}</p>
              {group?.igHandle && (
                <a
                  href={`https://instagram.com/${group.igHandle}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={e => e.stopPropagation()}
                  className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors group/ig"
                >
                  <Instagram className="w-3 h-3 group-hover/ig:text-pink-500 transition-colors" />
                  <span>@{group.igHandle}</span>
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover/ig:opacity-100 transition-opacity" />
                </a>
              )}
            </div>
            <button onClick={next} className="p-1.5 hover:bg-muted rounded transition-colors">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 py-2 shrink-0">
            {groups.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-colors ${i === current ? "bg-foreground" : "bg-foreground/20"}`}
              />
            ))}
          </div>

          {/* Main content — swipeable between clients */}
          <motion.div
            key={current}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.15}
            onDragEnd={handleDragEnd}
            className="flex-1 overflow-y-auto cursor-grab active:cursor-grabbing"
          >
            {group ? (
              <div className="flex gap-6 p-6 min-h-full">
                {/* Phone mockup */}
                <div className="flex flex-col items-center gap-3 shrink-0">
                  <PhoneMockup src={group.igScreenshot} />
                  <span className="text-xs text-muted-foreground text-center font-medium">Instagram Profile</span>
                </div>

                {/* Content images grid */}
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      Konten Yang Dibuat
                    </p>
                    {group.images.length > 0 && (
                      <span className="text-xs text-muted-foreground">{group.images.length} konten · klik untuk memperbesar</span>
                    )}
                  </div>
                  {group.images.length > 0 ? (
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {group.images.map((img, i) => (
                        <button
                          key={i}
                          onClick={() => setLightbox({ idx: i })}
                          className="group bg-muted overflow-hidden aspect-square relative focus:outline-none focus:ring-2 focus:ring-foreground"
                        >
                          <img
                            src={img}
                            alt={`${group.client} konten ${i + 1}`}
                            className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                            draggable={false}
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                            <span className="text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 px-2 py-1">
                              Lihat
                            </span>
                          </div>
                        </button>
                      ))}
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center h-48 text-muted-foreground text-center gap-3">
                      <div className="text-4xl">📸</div>
                      <p className="text-sm">Konten untuk klien ini segera ditambahkan</p>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center h-64 text-muted-foreground">
                <p>Tidak ada data</p>
              </div>
            )}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Lightbox overlay */}
      <AnimatePresence>
        {lightbox && group && (
          <ImageLightbox
            images={group.images}
            startIndex={lightbox.idx}
            clientName={group.client}
            onClose={() => setLightbox(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}

const getYoutubeId = (url: string): string | null => {
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/|youtube\.com\/shorts\/)([a-zA-Z0-9_-]{11})/,
  ];
  for (const p of patterns) {
    const m = url.match(p);
    if (m) return m[1];
  }
  return null;
};

const getAutoThumbnail = (platform: VideoProject["platform"], link: string): string | null => {
  if (platform === "youtube") {
    const id = getYoutubeId(link);
    if (id) return `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;
  }
  return null;
};

const getInstagramEmbedUrl = (link: string): string | null => {
  const m = link.match(/instagram\.com\/(p|reel|tv)\/([A-Za-z0-9_-]+)/);
  if (m) return `https://www.instagram.com/${m[1]}/${m[2]}/embed/`;
  return null;
};

const platformGradient: Record<VideoProject["platform"], string> = {
  instagram: "from-purple-600 via-pink-500 to-orange-400",
  tiktok: "from-black via-[#010101] to-[#EE1D52]",
  youtube: "from-red-700 to-red-500",
  vimeo: "from-[#1ab7ea] to-[#0d7fa5]",
};

const platformIcon = (platform: VideoProject["platform"]) => {
  switch (platform) {
    case "instagram": return (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    );
    case "youtube": return (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    );
    case "tiktok": return (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
      </svg>
    );
    default: return (
      <ExternalLink className="w-4 h-4" />
    );
  }
};

function VideoEditingModal({ service, onClose }: { service: Service; onClose: () => void }) {
  const videos = service.videoProjects ?? [];

  const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }
    }),
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[80] flex items-center justify-center bg-black/80 p-4 md:p-8"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="bg-background w-full max-w-5xl max-h-[90vh] overflow-hidden flex flex-col"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-border shrink-0">
          <div>
            <h2 className="text-xl md:text-2xl font-sans font-semibold">{service.title}</h2>
            <p className="text-xs text-muted-foreground mt-0.5">{videos.length} proyek · Klik untuk menonton</p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-muted transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Grid */}
        <div className="flex-1 overflow-y-auto p-6">
          {videos.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-60 text-muted-foreground gap-3">
              <div className="text-4xl">🎬</div>
              <p className="text-sm">Proyek segera ditambahkan</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {videos.map((vid, i) => (
                <motion.a
                  key={i}
                  href={vid.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  custom={i}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  className="group relative overflow-hidden block focus:outline-none focus:ring-2 focus:ring-foreground"
                >
                  {/* Thumbnail */}
                  {(() => {
                    if (vid.platform === "instagram") {
                      const embedUrl = getInstagramEmbedUrl(vid.link);
                      if (embedUrl) {
                        return (
                          <div className="relative overflow-hidden bg-[#fafafa]" style={{ aspectRatio: "4/5" }}>
                            <iframe
                              src={embedUrl}
                              className="absolute top-0 left-0 w-full border-0 pointer-events-none"
                              style={{ height: "140%", marginTop: "-5%" }}
                              scrolling="no"
                              frameBorder={0}
                              title={vid.title}
                            />
                          </div>
                        );
                      }
                    }
                    const thumb = vid.thumbnail ?? getAutoThumbnail(vid.platform, vid.link);
                    return (
                      <div className="aspect-video bg-muted overflow-hidden">
                        {thumb ? (
                          <img
                            src={thumb}
                            alt={vid.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            draggable={false}
                          />
                        ) : (
                          <div className={`w-full h-full bg-gradient-to-br ${platformGradient[vid.platform]} flex flex-col items-center justify-center gap-2 transition-transform duration-500 group-hover:scale-105`}>
                            <div className="text-white/80">{platformIcon(vid.platform)}</div>
                            <span className="text-white/60 text-[10px] uppercase tracking-widest font-medium">{vid.platform}</span>
                          </div>
                        )}
                      </div>
                    );
                  })()}

                  {/* Overlay — slides up on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-3">
                    <div className="flex items-center gap-1.5 text-white/60 mb-1">
                      {platformIcon(vid.platform)}
                      <span className="text-[10px] uppercase tracking-wider font-medium">{vid.platform}</span>
                    </div>
                    <p className="text-white font-semibold text-sm leading-tight line-clamp-2">{vid.title}</p>
                    <p className="text-white/60 text-xs mt-0.5">{vid.client}</p>
                  </div>

                  {/* Always-visible bottom label */}
                  <div className="bg-background border-t border-border px-3 py-2">
                    <p className="text-xs font-medium truncate">{vid.title}</p>
                    <p className="text-[10px] text-muted-foreground truncate">{vid.client}</p>
                  </div>

                  {/* Play button */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-6 opacity-0 group-hover:opacity-100 group-hover:-translate-y-1/2 transition-all duration-300">
                    <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-full p-3">
                      <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5 ml-0.5">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

function PhotographyModal({ service, onClose }: { service: Service; onClose: () => void }) {
  const categories = service.photoCategories ?? [];
  const [selectedCat, setSelectedCat] = useState<number | null>(null);
  const [imgIdx, setImgIdx] = useState(0);

  const cat = selectedCat !== null ? categories[selectedCat] : null;
  const total = cat ? cat.images.length : 0;

  const openCat = (i: number) => { setSelectedCat(i); setImgIdx(0); };
  const closeCat = () => setSelectedCat(null);
  const prevImg = () => setImgIdx(i => (i - 1 + total) % total);
  const nextImg = () => setImgIdx(i => (i + 1) % total);

  const handleDragEnd = (_: unknown, info: { offset: { x: number } }) => {
    if (info.offset.x < -60) nextImg();
    else if (info.offset.x > 60) prevImg();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[80] flex items-center justify-center bg-black/80 p-4 md:p-8"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="bg-background w-full max-w-5xl max-h-[90vh] overflow-hidden flex flex-col"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-border shrink-0">
          <div className="flex items-center gap-3">
            {cat && (
              <button onClick={closeCat} className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <ArrowLeft className="w-4 h-4" />
                <span>Kembali</span>
              </button>
            )}
            <div>
              <h2 className="text-xl md:text-2xl font-sans font-semibold">
                {cat ? cat.name : service.title}
              </h2>
              {cat && (
                <p className="text-xs text-muted-foreground mt-0.5">{imgIdx + 1} / {total} foto</p>
              )}
            </div>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-muted transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body — animated between category list and gallery */}
        <AnimatePresence mode="wait">
          {!cat ? (
            /* ── LEVEL 1: Category grid ── */
            <motion.div
              key="categories"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
              className="flex-1 overflow-y-auto p-6"
            >
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-5">
                {categories.length} Kategori · Pilih kategori untuk melihat koleksi
              </p>
              <div className="grid grid-cols-2 gap-4">
                {categories.map((c, i) => (
                  <button
                    key={i}
                    onClick={() => c.images.length > 0 ? openCat(i) : undefined}
                    className={`group relative overflow-hidden text-left focus:outline-none focus:ring-2 focus:ring-foreground ${c.images.length === 0 ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
                  >
                    {/* Cover image or placeholder */}
                    <div className="aspect-[4/3] bg-muted overflow-hidden">
                      {c.images.length > 0 ? (
                        <img
                          src={c.images[0]}
                          alt={c.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          draggable={false}
                        />
                      ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center text-muted-foreground gap-2">
                          <div className="text-3xl">📷</div>
                          <p className="text-xs">Segera hadir</p>
                        </div>
                      )}
                    </div>
                    {/* Label */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent px-4 py-3">
                      <p className="text-white font-semibold text-sm">{c.name}</p>
                      <p className="text-white/60 text-xs">{c.images.length > 0 ? `${c.images.length} foto` : "Belum tersedia"}</p>
                    </div>
                    {/* Hover arrow */}
                    {c.images.length > 0 && (
                      <div className="absolute top-3 right-3 bg-white/20 group-hover:bg-white/40 text-white p-1.5 rounded-full transition-colors opacity-0 group-hover:opacity-100">
                        <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </motion.div>
          ) : (
            /* ── LEVEL 2: Gallery viewer ── */
            <motion.div
              key={`gallery-${selectedCat}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.25 }}
              className="flex-1 flex flex-col overflow-hidden"
            >
              {/* Main image */}
              <div className="flex-1 relative flex items-center justify-center bg-black min-h-0 overflow-hidden">
                <button
                  onClick={prevImg}
                  className="absolute left-3 z-10 p-2.5 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={imgIdx}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.15}
                    onDragEnd={handleDragEnd}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.2 }}
                    className="w-full h-full flex items-center justify-center px-14 py-4 cursor-grab active:cursor-grabbing"
                  >
                    <img
                      src={cat.images[imgIdx]}
                      alt={`${cat.name} ${imgIdx + 1}`}
                      className="max-w-full max-h-[55vh] object-contain select-none"
                      draggable={false}
                    />
                  </motion.div>
                </AnimatePresence>

                <button
                  onClick={nextImg}
                  className="absolute right-3 z-10 p-2.5 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* Dots */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                  {cat.images.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setImgIdx(i)}
                      className={`w-1.5 h-1.5 rounded-full transition-colors ${i === imgIdx ? "bg-white" : "bg-white/30"}`}
                    />
                  ))}
                </div>
              </div>

              {/* Thumbnail strip */}
              <div className="flex items-center gap-2 px-4 py-3 overflow-x-auto bg-background border-t border-border shrink-0">
                {cat.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setImgIdx(i)}
                    className={`shrink-0 w-14 h-14 overflow-hidden transition-all ${i === imgIdx ? "ring-2 ring-foreground" : "opacity-50 hover:opacity-80"}`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" draggable={false} />
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}

function BrandingModal({ service, onClose }: { service: Service; onClose: () => void }) {
  const projects = service.brandingProjects ?? [];
  const [current, setCurrent] = useState(0);
  const [lightbox, setLightbox] = useState<{ idx: number } | null>(null);
  const project = projects[current];
  const total = projects.length;

  const prev = () => setCurrent(i => (i - 1 + total) % total);
  const next = () => setCurrent(i => (i + 1) % total);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[80] flex items-center justify-center bg-black/80 p-4 md:p-8"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="bg-background w-full max-w-5xl max-h-[90vh] overflow-hidden flex flex-col"
          onClick={e => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex justify-between items-center px-6 py-4 border-b border-border shrink-0">
            <div>
              <h2 className="text-xl md:text-2xl font-sans font-semibold">{service.title}</h2>
              <p className="text-xs text-muted-foreground mt-0.5">{current + 1} / {total} klien</p>
            </div>
            <button onClick={onClose} className="p-2 hover:bg-muted transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Client nav */}
          <div className="flex items-center justify-between px-6 py-2.5 bg-muted/40 border-b border-border shrink-0">
            <button onClick={prev} className="p-1.5 hover:bg-muted rounded transition-colors">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div className="text-center">
              <p className="font-semibold text-sm md:text-base tracking-wide">{project?.client}</p>
              {project?.tagline && <p className="text-xs text-muted-foreground">{project.tagline}</p>}
            </div>
            <button onClick={next} className="p-1.5 hover:bg-muted rounded transition-colors">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 py-2 shrink-0">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-colors ${i === current ? "bg-foreground" : "bg-foreground/20"}`}
              />
            ))}
          </div>

          {/* Body */}
          <AnimatePresence mode="wait">
            {project && (
              <motion.div
                key={current}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="flex-1 overflow-y-auto"
              >
                <div className="flex flex-col md:flex-row h-full min-h-[400px]">

                  {/* LEFT: Hero logo panel */}
                  <div className="md:w-2/5 shrink-0 relative overflow-hidden min-h-[220px] md:min-h-0">
                    <img
                      src={project.hero}
                      alt={`${project.client} logo`}
                      className="w-full h-full object-cover"
                      draggable={false}
                    />
                    {/* Subtle gradient + label at bottom */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-4 py-3">
                      <p className="text-white font-semibold text-sm">{project.client}</p>
                      <p className="text-white/60 text-xs">Brand Identity</p>
                    </div>
                  </div>

                  {/* RIGHT: Slides grid */}
                  <div className="flex-1 p-5 overflow-y-auto">
                    <div className="flex items-center justify-between mb-4">
                      <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                        Brand Assets
                      </p>
                      <span className="text-xs text-muted-foreground">
                        {project.slides.length} slide{project.slides.length !== 1 ? "s" : ""} · klik untuk memperbesar
                      </span>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {project.slides.map((slide, i) => (
                        <button
                          key={i}
                          onClick={() => setLightbox({ idx: i })}
                          className="group relative bg-muted overflow-hidden focus:outline-none focus:ring-2 focus:ring-foreground"
                        >
                          <div className="aspect-square overflow-hidden">
                            <img
                              src={slide.src}
                              alt={slide.label ?? `${project.client} slide ${i + 1}`}
                              className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                              draggable={false}
                            />
                          </div>
                          {/* Label */}
                          <div className="px-2 py-1.5 bg-background/80 border-t border-border">
                            <p className="text-[11px] font-medium text-foreground/70 truncate">
                              {slide.label ?? `Slide ${i + 1}`}
                            </p>
                          </div>
                          {/* Hover overlay */}
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors flex items-center justify-center">
                            <span className="text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 px-2 py-1">
                              Lihat
                            </span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && project && (
          <ImageLightbox
            images={project.slides.map(s => s.src)}
            startIndex={lightbox.idx}
            clientName={project.client}
            onClose={() => setLightbox(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}

function ServiceModal({ service, onClose }: { service: Service; onClose: () => void }) {
  const [current, setCurrent] = useState(0);
  const total = service.items.length;
  const activeItem = service.items[current] ?? null;

  const prev = () => setCurrent(i => (i - 1 + total) % total);
  const next = () => setCurrent(i => (i + 1) % total);

  const handleDragEnd = (_: unknown, info: { offset: { x: number } }) => {
    if (info.offset.x < -60) next();
    else if (info.offset.x > 60) prev();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[80] flex items-center justify-center bg-black/80 p-4 md:p-8"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="bg-background w-full max-w-4xl max-h-[90vh] overflow-y-auto"
        onClick={e => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex justify-between items-center p-6 md:p-8 border-b border-border">
          <div>
            <h2 className="text-2xl md:text-3xl font-sans font-semibold">{service.title}</h2>
            {total > 0 && (
              <p className="text-xs text-muted-foreground mt-1">{current + 1} / {total}</p>
            )}
          </div>
          <button onClick={onClose} className="p-2 hover:bg-muted transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Main Viewer with swipe */}
        <div className="relative bg-muted overflow-hidden" style={{ aspectRatio: "16/9" }}>
          {total > 0 && activeItem ? (
            <>
              <motion.div
                key={current}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={handleDragEnd}
                className="w-full h-full cursor-grab active:cursor-grabbing select-none"
              >
                <img
                  src={activeItem.src}
                  alt={activeItem.caption ?? `${service.title} ${current + 1}`}
                  className="w-full h-full object-contain pointer-events-none"
                  draggable={false}
                />
              </motion.div>

              {/* Link overlay button */}
              {activeItem.link && (
                <a
                  href={activeItem.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-4 right-4 flex items-center gap-2 bg-foreground text-background px-3 py-2 text-xs font-medium hover:bg-foreground/80 transition-colors"
                  onClick={e => e.stopPropagation()}
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Lihat Konten
                </a>
              )}

              {/* Prev / Next arrows */}
              {total > 1 && (
                <>
                  <button onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background p-2 transition-colors">
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background p-2 transition-colors">
                    <ChevronRight className="w-5 h-5" />
                  </button>
                  {/* Dots */}
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                    {service.items.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrent(i)}
                        className={`w-2 h-2 rounded-full transition-colors ${i === current ? "bg-white" : "bg-white/40"}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </>
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center gap-4 text-muted-foreground p-8 text-center">
              <div className="text-5xl">🖼️</div>
              <p className="font-medium">Karya segera hadir</p>
              <p className="text-sm">Lampirkan gambar karya kamu di chat dan saya akan pasangkan di sini.</p>
            </div>
          )}
        </div>

        {/* Caption for current item */}
        {activeItem?.caption && (
          <div className="px-6 pt-4 pb-0">
            <p className="text-sm font-medium text-foreground">{activeItem.caption}</p>
          </div>
        )}

        {/* Thumbnail strip */}
        {total > 1 && (
          <div className="flex gap-3 p-6 overflow-x-auto">
            {service.items.map((item, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`relative shrink-0 w-20 h-20 overflow-hidden border-2 transition-colors ${i === current ? "border-foreground" : "border-transparent opacity-60 hover:opacity-100"}`}
              >
                <img src={item.src} alt={item.caption ?? `Thumbnail ${i + 1}`} className="w-full h-full object-cover" />
                {item.link && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                    <ExternalLink className="w-3.5 h-3.5 text-white" />
                  </div>
                )}
              </button>
            ))}
          </div>
        )}

        {/* Description */}
        <div className="p-6 md:p-8 pt-2">
          <p className="text-muted-foreground leading-relaxed">{service.description}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

type PortfolioProject = {
  category: string;
  title: string;
  src: string;
  type: "image" | "video";
};

const portfolioProjects: PortfolioProject[] = [
  { category: "Graphic Design", title: "Sushi Tusuk Campaign", src: pfGraphicDesign, type: "image" },
  { category: "Social Media Design", title: "Dovi POS — Satu Aplikasi, Banyak Solusi", src: pfSocialMedia, type: "image" },
  { category: "Photography", title: "Food Photography", src: pfPhotography, type: "image" },
  { category: "Video Editing", title: "Property Film — 1 Unit Rumah", src: pfVideo, type: "video" },
];

function PortfolioLightbox({ project, onClose }: { project: PortfolioProject; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[80] flex items-center justify-center bg-black/90 p-4 md:p-8"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 p-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors"
      >
        <X className="w-5 h-5" />
      </button>
      <motion.div
        initial={{ scale: 0.92, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.92, opacity: 0 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-5xl w-full max-h-[90vh] flex flex-col items-center gap-4"
        onClick={e => e.stopPropagation()}
      >
        {project.type === "video" ? (
          <video
            src={project.src}
            controls
            muted
            playsInline
            preload="auto"
            className="max-w-full max-h-[80vh] object-contain"
          />
        ) : (
          <img
            src={project.src}
            alt={project.title}
            className="max-w-full max-h-[80vh] object-contain"
            draggable={false}
          />
        )}
        <div className="text-center">
          <p className="text-white/50 text-xs uppercase tracking-widest mb-1">{project.category}</p>
          <h3 className="text-white font-semibold">{project.title}</h3>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Home() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [activePortfolio, setActivePortfolio] = useState<PortfolioProject | null>(null);
  const [navVisible, setNavVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY < 80) {
        setNavVisible(true);
      } else if (currentY > lastScrollY.current + 5) {
        setNavVisible(false);
      } else if (currentY < lastScrollY.current - 5) {
        setNavVisible(true);
      }
      lastScrollY.current = currentY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services: Service[] = [
    {
      title: "Graphic Design",
      description: "Creating impactful visuals and meaningful digital experiences that combine creativity and strategy.",
      items: [
        { src: gd1, caption: "Personal Project — Burger Ad Series #1" },
        { src: gd2, caption: "Personal Project — Burger Ad Series #2" },
        { src: gd3, caption: "Personal Project — Spesial Paket Pagi" },
        { src: gd4, caption: "Personal Project — Cheese Melt Campaign" },
        { src: gd5, caption: "Personal Project — Double Soft Burger Promo" },
        { src: gd6, caption: "Si Shu — Sushi Menu Poster" },
        { src: gd7, caption: "Si Shu — Sushi Tusuk Campaign" },
        { src: gd8, caption: "Bread Pillow — Sourdough Poster" },
        { src: gd9, caption: "Bread Pillow — Sourdough Mockup Print" },
      ],
      dark: false,
    },
    {
      title: "Social Media Design",
      description: "Eye-catching social media content and templates designed to grow engagement and strengthen brand presence.",
      items: [],
      dark: true,
      groups: [
        {
          client: "BPR KAS INDONESIA",
          igHandle: "bprkasindonesia",
          igScreenshot: bprIg,
          images: [bpr1, bpr2, bpr3, bpr4, bpr5, bpr6],
        },
        {
          client: "MY DOVI",
          igHandle: "mydovi.id",
          igScreenshot: myDoviIg,
          images: [mydovi1, mydovi2, mydovi3, mydovi4, mydovi5, mydovi6],
        },
        {
          client: "DOVI POS",
          igHandle: "dovipos",
          igScreenshot: doviposIg,
          images: [dovipos1, dovipos2, dovipos3, dovipos4, dovipos5, dovipos6],
        },
        {
          client: "KEDAI NIRMALADJAYA",
          igHandle: "kedainirmaladjaya",
          igScreenshot: kedaiIg,
          images: [kedai1, kedai2, kedai3, kedai4, kedai5, kedai6],
        },
      ],
    },
    {
      title: "Branding & Logo",
      description: "Strategic brand identity design — from logo creation to full visual systems that make brands memorable.",
      items: [],
      brandingProjects: [
        {
          client: "Kora Market Farm",
          tagline: "Farm-to-table brand identity",
          hero: koraLogo,
          slides: [
            { src: koraLogo, label: "Logo Mark" },
            { src: koraMockup1, label: "Brand Mockup" },
            { src: koraMockup2, label: "Brand Application" },
          ],
        },
        {
          client: "Kita Bicara",
          tagline: "Brand identity design",
          hero: kitaBicaraLogo,
          slides: [
            { src: kitaBicaraLogo, label: "Logo Mark" },
          ],
        },
        {
          client: "Akarasa",
          tagline: "Brand identity design",
          hero: akarasaLogo,
          slides: [
            { src: akarasaLogo, label: "Brand Identity" },
          ],
        },
        {
          client: "Koto Kopi Bali",
          tagline: "Coffee brand identity",
          hero: kotoWordmark,
          slides: [
            { src: kotoWordmark, label: "Wordmark" },
            { src: kotoMark, label: "Logo Mark" },
          ],
        },
      ],
      dark: true,
    },
    {
      title: "Photography",
      description: "Professional photography capturing authentic moments and compelling visuals for brands and individuals.",
      items: [],
      dark: false,
      photoCategories: [
        {
          name: "Photography Event",
          images: [ev1, ev2, ev3, ev4, ev5, ev6, ev7, ev8, ev9],
        },
        {
          name: "Food Photography",
          images: [fd1, fd2, fd3, fd4, fd5, fd6, fd7, fd8, fd9, fd10],
        },
        {
          name: "Dokumentasi Upacara",
          images: [up1, up2, up3, up4, up5, up6, up7, up8, up9, up10],
        },
        {
          name: "G-20 Event",
          images: [g1, g2, g3, g4, g5],
        },
      ],
    },
    {
      title: "Video Editing",
      description: "Cinematic video editing and post-production that tells compelling visual stories with lasting impact.",
      items: [],
      dark: false,
      videoProjects: [
        {
          title: "Acara Lifesharing THE HERO TALKS",
          client: "BPR KAS Indonesia",
          platform: "instagram",
          link: "https://www.instagram.com/reel/C7yJxbLysa_/",
        },
        {
          title: "Literasi & Inklusi Keuangan bersama SMAN 7 Denpasar",
          client: "BPR KAS Indonesia",
          platform: "instagram",
          link: "https://www.instagram.com/reel/C8DlvIcSsMO/",
        },
        {
          title: "Dokumentasi Lomba 17 Agustus",
          client: "BPR KAS Indonesia",
          platform: "instagram",
          link: "https://www.instagram.com/reel/C-wdYAQyW4y/",
        },
        {
          title: "Collaboration with Remax Dewata",
          client: "Remax Dewata",
          platform: "instagram",
          link: "https://www.instagram.com/reel/DE6B9lOSniS/",
        },
        {
          title: "Afternoon Tea Collaboration",
          client: "Dovi POS",
          platform: "instagram",
          link: "https://www.instagram.com/reel/DA-ZUcayI_e/",
        },
        {
          title: "Motion Graphic Design",
          client: "Dovi POS",
          platform: "instagram",
          link: "https://www.instagram.com/reel/DIK8TePBcsX/",
        },
        {
          title: "Content Marketing",
          client: "Dovi POS",
          platform: "instagram",
          link: "https://www.instagram.com/reel/DAHon1vShQa/",
        },
        {
          title: "Content Marketing",
          client: "My Dovi",
          platform: "instagram",
          link: "https://www.instagram.com/reel/CeM8JoDhZ7h/",
        },
        {
          title: "Content Marketing",
          client: "My Dovi",
          platform: "instagram",
          link: "https://www.instagram.com/reel/C2dqv8pBVyS/",
        },
        {
          title: "Content Marketing",
          client: "My Dovi",
          platform: "instagram",
          link: "https://www.instagram.com/reel/CzA4HahhU8k/",
        },
      ],
    },
  ];

  return (
    <div className="bg-background min-h-screen text-foreground selection:bg-foreground selection:text-background font-sans">

      {/* Portfolio Lightbox */}
      <AnimatePresence>
        {activePortfolio && (
          <PortfolioLightbox project={activePortfolio} onClose={() => setActivePortfolio(null)} />
        )}
      </AnimatePresence>

      {/* Service Modal */}
      <AnimatePresence>
        {selectedService && (
          selectedService.videoProjects
            ? <VideoEditingModal service={selectedService} onClose={() => setSelectedService(null)} />
            : selectedService.photoCategories && selectedService.photoCategories.length > 0
              ? <PhotographyModal service={selectedService} onClose={() => setSelectedService(null)} />
              : selectedService.brandingProjects && selectedService.brandingProjects.length > 0
                ? <BrandingModal service={selectedService} onClose={() => setSelectedService(null)} />
                : selectedService.groups && selectedService.groups.length > 0
                  ? <SocialMediaModal service={selectedService} onClose={() => setSelectedService(null)} />
                  : <ServiceModal service={selectedService} onClose={() => setSelectedService(null)} />
        )}
      </AnimatePresence>
      
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border px-6 py-5 flex justify-between items-center text-sm font-medium transition-transform duration-300 ${navVisible && !selectedService && !activePortfolio ? "translate-y-0" : "-translate-y-full"}`}>
        <div className="font-bold tracking-tight text-base">Mang Risky</div>
        <div className="hidden md:flex gap-8 text-muted-foreground">
          <a href="#about" className="hover:text-foreground transition-colors">About</a>
          <a href="#services" className="hover:text-foreground transition-colors">Services</a>
          <a href="#portfolio" className="hover:text-foreground transition-colors">Portfolio</a>
          <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
        </div>
        <div>
          <a href="#contact" className="border border-foreground px-4 py-2 hover:bg-foreground hover:text-background transition-colors">
            Hire Me
          </a>
        </div>
      </nav>

      {/* Hero Section — Duwy-style layout */}
      <section className="relative min-h-[90vh] px-6 md:px-12 max-w-[1400px] mx-auto flex flex-col justify-between pt-24 pb-12 md:pt-28 md:pb-16">

        {/* Photo — top right, floating */}
        <div className="flex justify-end">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.9, ease: "easeOut" } }}
            className="w-[200px] md:w-[260px] lg:w-[300px]"
          >
            <div className="aspect-[3/4] overflow-hidden bg-muted">
              <img src={heroPortrait} alt="Mang Risky" className="w-full h-full object-cover object-top" />
            </div>
          </motion.div>
        </div>

        {/* Bottom row — headline left, bio right */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mt-8"
        >
          <motion.h1
            variants={fadeUp}
            className="font-sans font-light text-[14vw] md:text-[12vw] lg:text-[11vw] leading-[0.88] tracking-tight"
          >
            Creative<br />Freelancer
          </motion.h1>

          <motion.div variants={fadeUp} className="md:text-right md:max-w-[240px] shrink-0 pb-2">
            <p className="text-sm leading-relaxed text-muted-foreground mb-4">
              Hi, I'm Mang Risky — a creative freelancer with 5 years experience passionate about visual storytelling and digital innovation.
            </p>
            <div className="flex md:justify-end gap-3 items-center">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-foreground opacity-20"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-foreground"></span>
              </span>
              <span className="text-xs font-medium uppercase tracking-wider">Available for work</span>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Brand Logos Row */}
      <section className="border-y border-border py-12 px-6 md:px-12 overflow-hidden bg-white">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground whitespace-nowrap">Trusted By</p>
          <div className="flex-1 w-full flex flex-wrap justify-center md:justify-between items-center gap-8 md:gap-12 opacity-60">
            {["BPR Kas Indonesia", "My Dovi", "Dovi POS", "Warkop Agem Bali", "Luminova Creative", "Kora Project"].map((brand, i) => (
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
                Hi, I'm Mang Risky — a creative freelancer with 5 years experience passionate about visual storytelling and digital innovation.
              </p>
              <p>
                I specialize in Graphic Design, Photo & Video Editing, and I'm currently expanding my expertise in Artificial Intelligence as an aspiring AI Specialist. I enjoy creating impactful visuals and meaningful digital experiences that combine creativity, strategy, and modern technology.
              </p>
            </div>
          </Reveal>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 lg:border-l lg:border-border lg:pl-16">
            <Reveal delay={0.1} className="flex flex-col gap-2">
              <span className="font-sans text-7xl md:text-8xl font-bold">+50</span>
              <span className="text-lg font-medium">Projects Completed</span>
              <span className="text-sm text-muted-foreground">Across various industries local Bali.</span>
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 0.1}>
              <button
                onClick={() => setSelectedService(service)}
                data-testid={`button-service-${i}`}
                className={`w-full text-left p-8 md:p-10 flex flex-col justify-between min-h-[260px] group transition-all duration-300 hover:scale-[1.02] ${
                  service.dark
                    ? "bg-foreground text-background"
                    : "bg-card border border-border text-foreground"
                }`}
              >
                <div className="flex justify-between items-start mb-10">
                  <h3 className={`text-2xl md:text-3xl font-sans leading-tight ${service.dark ? "text-background" : "text-foreground"}`}>
                    {service.title.split(" ").map((word, wi) => (
                      <span key={wi}>{word}<br /></span>
                    ))}
                  </h3>
                  <ArrowRight className={`w-5 h-5 group-hover:translate-x-1 transition-transform duration-200 ${service.dark ? "text-background" : "text-foreground"}`} />
                </div>
                <div>
                  <p className={`text-sm leading-relaxed mb-4 ${service.dark ? "text-background/70" : "text-muted-foreground"}`}>
                    {service.description}
                  </p>
                  <span className={`text-xs font-medium uppercase tracking-wider ${service.dark ? "text-background/50" : "text-muted-foreground/70"}`}>
                    View Work →
                  </span>
                </div>
              </button>
            </Reveal>
          ))}
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
              { role: "Graphic Design", year: "2021 - Now" },
              { role: "Social Media Design", year: "2021 - Now" },
              { role: "Branding & Logo Design", year: "2024 - Now" },
              { role: "Freelance Photographer", year: "2023 - 2025" },
              { role: "Video Editor", year: "2024 - Now" }
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
          {/* Card 1 — Graphic Design (portrait) */}
          <Reveal>
            <button
              onClick={() => setActivePortfolio(portfolioProjects[0])}
              className="group relative overflow-hidden aspect-[3/4] bg-muted w-full block focus:outline-none focus:ring-2 focus:ring-foreground"
            >
              <img src={pfGraphicDesign} alt="Graphic Design" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-foreground/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <span className="inline-block px-3 py-1 bg-background text-foreground text-xs font-medium uppercase tracking-wider mb-3">Graphic Design</span>
                <h3 className="text-2xl font-sans text-background text-left">Sushi Tusuk Campaign</h3>
              </div>
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-full p-2">
                  <ExternalLink className="w-4 h-4 text-white" />
                </div>
              </div>
            </button>
          </Reveal>

          {/* Card 2 — Social Media Design (portrait, offset) */}
          <Reveal delay={0.1}>
            <button
              onClick={() => setActivePortfolio(portfolioProjects[1])}
              className="group relative overflow-hidden aspect-[3/4] bg-muted w-full block md:mt-24 focus:outline-none focus:ring-2 focus:ring-foreground"
            >
              <img src={pfSocialMedia} alt="Social Media Design" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-foreground/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <span className="inline-block px-3 py-1 bg-background text-foreground text-xs font-medium uppercase tracking-wider mb-3">Social Media Design</span>
                <h3 className="text-2xl font-sans text-background text-left">Dovi POS Campaign</h3>
              </div>
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-full p-2">
                  <ExternalLink className="w-4 h-4 text-white" />
                </div>
              </div>
            </button>
          </Reveal>

          {/* Card 3 — Photography (landscape, offset up) */}
          <Reveal>
            <button
              onClick={() => setActivePortfolio(portfolioProjects[2])}
              className="group relative overflow-hidden aspect-video bg-muted w-full block md:-mt-16 focus:outline-none focus:ring-2 focus:ring-foreground"
            >
              <img src={pfPhotography} alt="Food Photography" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-foreground/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <span className="inline-block px-3 py-1 bg-background text-foreground text-xs font-medium uppercase tracking-wider mb-3">Photography</span>
                <h3 className="text-2xl font-sans text-background text-left">Food Photography</h3>
              </div>
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-full p-2">
                  <ExternalLink className="w-4 h-4 text-white" />
                </div>
              </div>
            </button>
          </Reveal>

          {/* Card 4 — Video Editing (autoplay on hover) */}
          <Reveal delay={0.1}>
            <button
              onClick={() => setActivePortfolio(portfolioProjects[3])}
              className="group relative overflow-hidden aspect-video bg-muted w-full block md:mt-8 focus:outline-none focus:ring-2 focus:ring-foreground"
              onMouseEnter={e => e.currentTarget.querySelector("video")?.play()}
              onMouseLeave={e => { const v = e.currentTarget.querySelector("video"); if (v) { v.pause(); v.currentTime = 0; } }}
            >
              <video
                src={pfVideo}
                muted
                loop
                playsInline
                preload="auto"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay — always visible on mobile, hover-only on desktop */}
              <div className="absolute inset-0 bg-foreground/40 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300" />
              {/* Play icon — hidden on mobile overlay hover, always shown on mobile */}
              <div className="absolute inset-0 flex items-center justify-center md:group-hover:opacity-0 transition-opacity duration-300">
                <div className="bg-black/40 backdrop-blur-sm border border-white/20 rounded-full p-4">
                  <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6 ml-0.5"><path d="M8 5v14l11-7z"/></svg>
                </div>
              </div>
              {/* Label — always shown on mobile, slide-in on desktop hover */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:translate-y-8 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 transition-all duration-300">
                <span className="inline-block px-3 py-1 bg-background text-foreground text-xs font-medium uppercase tracking-wider mb-2">Video Editing</span>
                <h3 className="text-xl font-sans text-background text-left">Property Film</h3>
              </div>
            </button>
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
            "Working with him was an amazing experience. The quality of his graphic design, video editing, and photography exceeded expectations, and his AI creative skills brought fresh and innovative ideas to our project. Professional, creative, and easy to work with — highly recommended for anyone looking for modern and high-quality creative work."
          </h2>
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="w-16 h-16 rounded-full overflow-hidden bg-muted">
              <img src={avatarImg} alt="Client" className="w-full h-full object-cover filter grayscale blur-md scale-110" />
            </div>
            <div>
              <p className="font-bold">Testimony Client</p>
              <p className="text-sm text-muted-foreground">Business Owner</p>
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

          {/* Contact buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href="mailto:komanggederisky@gmail.com"
              className="inline-flex items-center gap-3 bg-background text-foreground px-8 py-4 text-lg font-medium hover:bg-background/90 transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              Email
            </a>
            <a
              href="https://wa.me/628990393784"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 border border-background text-background px-8 py-4 text-lg font-medium hover:bg-background hover:text-foreground transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              WhatsApp
            </a>
          </div>

          {/* Social links */}
          <div className="flex items-center justify-center gap-8">
            <a href="https://instagram.com/mangriskyy" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-background/60 hover:text-background transition-colors text-sm">
              <Instagram className="w-5 h-5" /> @mangriskyy
            </a>
            <a href="mailto:komanggederisky@gmail.com" className="text-background/60 hover:text-background transition-colors text-sm">
              komanggederisky@gmail.com
            </a>
          </div>
        </Reveal>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background pt-16 pb-8 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div>
            <div className="font-bold tracking-tight text-2xl mb-6">Mang Risky</div>
            <p className="text-background/60 text-sm max-w-xs">
              Creative Freelancer — Photography, Videography, <br /> Graphic Design & Video Editing. <br /> Based in Bali, ready to collaborate with anyone, anywhere.
            </p>
          </div>
          
          <div className="flex flex-col gap-3">
            <span className="text-background/40 text-sm font-medium uppercase tracking-wider mb-2">Navigation</span>
            <a href="#about" className="hover:text-background/70 transition-colors w-fit">About</a>
            <a href="#services" className="hover:text-background/70 transition-colors w-fit">Services</a>
            <a href="#portfolio" className="hover:text-background/70 transition-colors w-fit">Portfolio</a>
          </div>

          <div className="flex flex-col gap-3">
            <span className="text-background/40 text-sm font-medium uppercase tracking-wider mb-2">Contact</span>
            <a href="https://instagram.com/mangriskyy" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-background/70 transition-colors w-fit"><Instagram className="w-4 h-4" /> @mangriskyy</a>
            <a href="mailto:komanggederisky@gmail.com" className="flex items-center gap-2 hover:text-background/70 transition-colors w-fit">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              komanggederisky@gmail.com
            </a>
            <a href="https://wa.me/628990393784" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-background/70 transition-colors w-fit">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              WhatsApp
            </a>
            <a href="https://www.linkedin.com/in/komang-risky-174a09354" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-background/70 transition-colors w-fit"><Linkedin className="w-4 h-4" /> LinkedIn</a>
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
