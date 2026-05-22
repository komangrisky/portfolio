import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ArrowRight, Instagram, Linkedin, Youtube, X, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

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

type Service = {
  title: string;
  description: string;
  items: ServiceItem[];
  dark: boolean;
  groups?: SocialMediaGroup[];
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
      className="fixed inset-0 z-[60] flex flex-col bg-black/95"
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
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 md:p-8"
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
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 md:p-8"
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

export default function Home() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

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
      dark: true,
    },
    {
      title: "Photography",
      description: "Professional photography capturing authentic moments and compelling visuals for brands and individuals.",
      items: [],
      dark: false,
    },
    {
      title: "Video Editing",
      description: "Cinematic video editing and post-production that tells compelling visual stories with lasting impact. Klik thumbnail untuk menonton video asli.",
      items: [],
      dark: false,
    },
  ];

  return (
    <div className="bg-background min-h-screen text-foreground selection:bg-foreground selection:text-background font-sans">

      {/* Service Modal */}
      <AnimatePresence>
        {selectedService && (
          selectedService.groups && selectedService.groups.length > 0
            ? <SocialMediaModal service={selectedService} onClose={() => setSelectedService(null)} />
            : <ServiceModal service={selectedService} onClose={() => setSelectedService(null)} />
        )}
      </AnimatePresence>
      
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
