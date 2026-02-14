import React from 'react';
import { 
  Instagram, 
  Phone, 
  Globe, 
  Mail, 
  MapPin, 
  Clock, 
  Sparkles,
  ExternalLink,
  Heart
} from 'lucide-react';
import { FaSnapchat, FaTiktok } from "react-icons/fa6";
import './App.css';

/* ===== Custom Brand SVG Icons ===== */
const WhatsAppIcon = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

// eslint-disable-next-line no-unused-vars
const LinkButton = ({ icon: Icon, title, url, subtitle, delay }) => (
  <a 
    href={url} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="luxury-link"
    style={{ animationDelay: `${delay}ms` }}
  >
    <div className="link-inner">
      <div className="icon-wrapper">
        <Icon size={22} />
      </div>
      <div className="text-stack">
        <span className="link-title">{title}</span>
        {subtitle && <span className="link-subtitle">{subtitle}</span>}
      </div>
      <ExternalLink size={16} className="arrow-hint" />
    </div>
  </a>
);

export default function JewelryLinkTree() {
  const socialLinks = [
    { title: "Visit Our Website", subtitle: "jewelryboutique.co.tz", url: "https://jewelryboutique.co.tz/", icon: Globe },
    { title: "Chat on WhatsApp", subtitle: "Fastest response", url: "https://wa.me/255623125023", icon: WhatsAppIcon },
    { title: "Instagram", subtitle: "@__jewerly.boutique", url: "https://www.instagram.com/__jewerly.boutique?igsh=MWEwcHRjNXZva3Bxbg==", icon: Instagram },
    { title: "TikTok", subtitle: "Latest jewelry trends", url: "https://www.tiktok.com/@_.asyah3?_r=1&_t=ZS-93vB91131Yy", icon: FaTiktok },
    { title: "Snapchat", subtitle: "Username: as.yaah", url: "https://snapchat.com/t/FP8WZ1tR", icon: FaSnapchat },
  ];

  return (
    <div className="linktree-container">
      {/* Floating Particles */}
      <div className="particles">
        {[...Array(6)].map((_, i) => (
          <div key={i} className={`particle p${i + 1}`} />
        ))}
      </div>

      {/* Sparkle Decorations */}
      <Sparkles className="sparkle s1" />
      <Sparkles className="sparkle s2" />
      <Sparkles className="sparkle s3" />

      <header className="header">
        <div className="logo-glow">
          <img 
            src="/logo.png"
            alt="Jewelry Boutique" 
            className="brand-logo"
          />
        </div>
        <h1 className="brand-heading">Jewelry Boutique</h1>
        <p className="tagline">
          <Heart size={14} className="heart-icon" />
          Handcrafted Elegance & Timeless Beauty
          <Heart size={14} className="heart-icon" />
        </p>
      </header>

      <main className="link-grid">
        {socialLinks.map((link, idx) => (
          <LinkButton key={idx} {...link} delay={idx * 80} />
        ))}
      </main>

      <section className="info-cards">
        <a href="mailto:jewelryboutique19@gmail.com" className="info-item info-item-link">
          <Mail size={20} className="icon-pink" />
          <span>jewelryboutique19@gmail.com</span>
        </a>
        <a href="tel:+255623125023" className="info-item info-item-link">
          <Phone size={20} className="icon-pink" />
          <span>+255 623 125 023</span>
        </a>
        <a href="https://maps.app.goo.gl/zyyo9ZWiGkYApwwY8?g_st=ipc" target="_blank" rel="noopener noreferrer" className="info-item info-item-link">
          <MapPin size={20} className="icon-pink" />
          <span>Tandika Primary School</span>
        </a>
        <div className="info-item">
          <Clock size={20} className="icon-pink" />
          <span>09:00 - 18:00</span>
        </div>
      </section>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Jewelry Boutique Tanzania</p>
      </footer>
    </div>
  );
}