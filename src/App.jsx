import { useState, useEffect } from "react";

const lawyers = [
  {
    name: "Eleanor Voss",
    title: "Senior Partner",
    specialty: "Corporate Law",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Marcus Reid",
    title: "Partner",
    specialty: "Criminal Defense",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Sophia Tan",
    title: "Associate",
    specialty: "Family Law",
    img: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=400&h=400&fit=crop&crop=face",
  },
];

const practices = [
  {
    icon: "⚖️",
    title: "Corporate Law",
    desc: "Mergers, acquisitions, compliance, and business formation for enterprises of every scale.",
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
  },
  {
    icon: "🏛️",
    title: "Litigation",
    desc: "Aggressive courtroom representation with a record of landmark verdicts.",
    img: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=400&fit=crop",
  },
  {
    icon: "🏠",
    title: "Real Estate",
    desc: "From residential closings to complex commercial developments.",
    img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
  },
  {
    icon: "👨‍👩‍👧",
    title: "Family Law",
    desc: "Compassionate counsel for divorce, custody, and estate planning.",
    img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop",
  },
];

const HERO_BG =
  "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=1800&h=1000&fit=crop";

const ABOUT_IMG =
  "https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&h=600&fit=crop";

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    area: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
    setActiveSection(id);
  };

  const handleFormChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: "", email: "", area: "", message: "" });
  };

  return (
    <div style={styles.root}>
      {/* ── NAV ── */}
      <nav style={{ ...styles.nav, ...(scrolled ? styles.navScrolled : {}) }}>
        <div style={styles.navInner}>
          <div style={styles.logo}>
            <span style={styles.logoAccent}>V</span>OSS
            <span style={styles.logoDivider}> & </span>
            REID
          </div>
          <div style={styles.navLinks}>
            {["home", "about", "practice", "team", "contact"].map((s) => (
              <button
                key={s}
                onClick={() => scrollTo(s)}
                style={{
                  ...styles.navLink,
                  ...(activeSection === s ? styles.navLinkActive : {}),
                }}
              >
                {s.toUpperCase()}
              </button>
            ))}
          </div>
          <button
            style={styles.menuBtn}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
        {menuOpen && (
          <div style={styles.mobileMenu}>
            {["home", "about", "practice", "team", "contact"].map((s) => (
              <button
                key={s}
                onClick={() => scrollTo(s)}
                style={styles.mobileLink}
              >
                {s.toUpperCase()}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* ── HERO ── */}
      <section id="home" style={styles.hero}>
        {/* Background Image */}
        <div
          style={{
            ...styles.heroBgImg,
            backgroundImage: `url('${HERO_BG}')`,
          }}
        />
        {/* Dark overlay */}
        <div style={styles.heroOverlay} />
        {/* Gold gradient accent */}
        <div style={styles.heroBgGold} />

        <div style={styles.heroContent}>
          <p style={styles.heroEyebrow}>EST. 1987 · NEW YORK</p>
          <h1 style={styles.heroTitle}>
            Justice
            <br />
            <span style={styles.heroTitleAccent}>Demands</span>
            <br />
            Excellence.
          </h1>
          <p style={styles.heroSub}>
            Four decades of precedent-setting counsel for individuals,
            corporations, and institutions worldwide.
          </p>
          <div style={styles.heroCta}>
            <button
              onClick={() => scrollTo("contact")}
              style={styles.btnPrimary}
              onMouseEnter={(e) => (e.target.style.opacity = "0.85")}
              onMouseLeave={(e) => (e.target.style.opacity = "1")}
            >
              Schedule Consultation
            </button>
            <button
              onClick={() => scrollTo("practice")}
              style={styles.btnGhost}
              onMouseEnter={(e) => {
                e.target.style.borderColor = GOLD;
                e.target.style.color = GOLD;
              }}
              onMouseLeave={(e) => {
                e.target.style.borderColor = "#444";
                e.target.style.color = "#ccc";
              }}
            >
              Our Practice →
            </button>
          </div>
        </div>

        <div style={styles.heroStat}>
          <div style={styles.statItem}>
            <span style={styles.statNum}>97%</span>
            <span style={styles.statLabel}>Success Rate</span>
          </div>
          <div style={styles.statDivider} />
          <div style={styles.statItem}>
            <span style={styles.statNum}>40+</span>
            <span style={styles.statLabel}>Years Active</span>
          </div>
          <div style={styles.statDivider} />
          <div style={styles.statItem}>
            <span style={styles.statNum}>2,400</span>
            <span style={styles.statLabel}>Cases Resolved</span>
          </div>
        </div>
      </section>

      {/* ── ABOUT / IMAGE BAND ── */}
      <section id="about" style={styles.about}>
        <div style={styles.aboutInner}>
          <div style={styles.aboutText}>
            <p style={styles.sectionEyebrow}>WHO WE ARE</p>
            <h2 style={styles.sectionTitle}>A Legacy Built on Trust</h2>
            <p style={styles.aboutPara}>
              Founded in 1987, Voss & Reid LLP has grown from a boutique New
              York practice into one of the most respected full-service law
              firms in the nation. We combine deep legal expertise with an
              unwavering commitment to our clients' interests.
            </p>
            <p style={styles.aboutPara}>
              Our team of 60+ attorneys brings unmatched experience across
              corporate, litigation, real estate, and family law — always guided
              by integrity, precision, and results.
            </p>
            <button
              onClick={() => scrollTo("team")}
              style={{ ...styles.btnPrimary, marginTop: 24 }}
              onMouseEnter={(e) => (e.target.style.opacity = "0.85")}
              onMouseLeave={(e) => (e.target.style.opacity = "1")}
            >
              Meet the Team
            </button>
          </div>
          <div style={styles.aboutImgWrap}>
            <img src={ABOUT_IMG} alt="Law firm office" style={styles.aboutImg} />
            <div style={styles.aboutImgBadge}>
              <span style={styles.badgeNum}>60+</span>
              <span style={styles.badgeLabel}>Expert Attorneys</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRACTICE AREAS ── */}
      <section id="practice" style={styles.section}>
        <div style={styles.sectionInner}>
          <p style={styles.sectionEyebrow}>WHAT WE DO</p>
          <h2 style={styles.sectionTitle}>Practice Areas</h2>
          <div style={styles.grid4}>
            {practices.map((p) => (
              <div
                key={p.title}
                style={styles.card}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 8px 32px rgba(201,168,76,0.18)";
                  e.currentTarget.style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.transform = "none";
                }}
              >
                <div style={styles.cardImgWrap}>
                  <img src={p.img} alt={p.title} style={styles.cardImg} />
                  <div style={styles.cardImgOverlay} />
                  <span style={styles.cardImgIcon}>{p.icon}</span>
                </div>
                <div style={styles.cardBody}>
                  <h3 style={styles.cardTitle}>{p.title}</h3>
                  <p style={styles.cardDesc}>{p.desc}</p>
                  <button
                    onClick={() => scrollTo("contact")}
                    style={styles.cardLink}
                    onMouseEnter={(e) => (e.target.style.color = GOLD)}
                    onMouseLeave={(e) => (e.target.style.color = "#888")}
                  >
                    Enquire →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section id="team" style={styles.sectionDark}>
        <div style={styles.sectionInner}>
          <p style={styles.sectionEyebrowLight}>THE PEOPLE</p>
          <h2 style={styles.sectionTitleLight}>Our Attorneys</h2>
          <div style={styles.grid3}>
            {lawyers.map((l) => (
              <div
                key={l.name}
                style={styles.lawyerCard}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = GOLD;
                  e.currentTarget.style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#2a2a2a";
                  e.currentTarget.style.transform = "none";
                }}
              >
                <div style={styles.avatarWrap}>
                  <img src={l.img} alt={l.name} style={styles.avatarImg} />
                  <div style={styles.avatarRing} />
                </div>
                <h3 style={styles.lawyerName}>{l.name}</h3>
                <p style={styles.lawyerTitle}>{l.title}</p>
                <span style={styles.lawyerTag}>{l.specialty}</span>
                <button
                  onClick={() => scrollTo("contact")}
                  style={styles.lawyerBtn}
                  onMouseEnter={(e) => (e.target.style.background = GOLD)}
                  onMouseLeave={(e) =>
                    (e.target.style.background = "transparent")
                  }
                >
                  Book Consultation
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" style={styles.section}>
        <div style={styles.sectionInner}>
          <p style={styles.sectionEyebrow}>GET IN TOUCH</p>
          <h2 style={styles.sectionTitle}>Request a Consultation</h2>
          <div style={styles.contactWrap}>
            <div style={styles.contactInfo}>
              <div style={styles.contactImgWrap}>
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop"
                  alt="New York office building"
                  style={styles.contactImg}
                />
              </div>
              <p style={styles.contactLine}>
                <strong>Address</strong>
                <br />
                350 Park Avenue, 28th Floor
                <br />
                New York, NY 10022
              </p>
              <p style={styles.contactLine}>
                <strong>Phone</strong>
                <br />
                +1 (212) 555-0190
              </p>
              <p style={styles.contactLine}>
                <strong>Email</strong>
                <br />
                contact@vossreid.law
              </p>
            </div>
            <div style={styles.formWrap}>
              {submitted && (
                <div style={styles.successMsg}>
                  ✓ Your message has been sent. We'll be in touch shortly.
                </div>
              )}
              <form style={styles.form} onSubmit={handleSubmit}>
                <input
                  style={styles.input}
                  placeholder="Full Name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                  required
                />
                <input
                  style={styles.input}
                  placeholder="Email Address"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleFormChange}
                  required
                />
                <select
                  style={styles.input}
                  name="area"
                  value={formData.area}
                  onChange={handleFormChange}
                  required
                >
                  <option value="" disabled>
                    Practice Area
                  </option>
                  {practices.map((p) => (
                    <option key={p.title} value={p.title}>
                      {p.title}
                    </option>
                  ))}
                </select>
                <textarea
                  style={{ ...styles.input, ...styles.textarea }}
                  placeholder="Brief description of your matter…"
                  name="message"
                  value={formData.message}
                  onChange={handleFormChange}
                />
                <button
                  type="submit"
                  style={styles.btnPrimary}
                  onMouseEnter={(e) => (e.target.style.opacity = "0.85")}
                  onMouseLeave={(e) => (e.target.style.opacity = "1")}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={styles.footer}>
        <div style={styles.footerTop}>
          <div style={styles.footerBrand}>
            <span style={styles.footerLogo}>VOSS & REID</span>
            <span style={styles.footerTagline}>
              Justice · Integrity · Excellence
            </span>
          </div>
          <div style={styles.footerLinks}>
            {["home", "about", "practice", "team", "contact"].map((s) => (
              <button
                key={s}
                onClick={() => scrollTo(s)}
                style={styles.footerLink}
                onMouseEnter={(e) => (e.target.style.color = GOLD)}
                onMouseLeave={(e) => (e.target.style.color = "#555")}
              >
                {s.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
        <div style={styles.footerBottom}>
          <span style={styles.footerCopy}>
            © 2026 Voss & Reid LLP. All rights reserved.
          </span>
          <span style={styles.footerCopy}>New York · Washington D.C. · London</span>
        </div>
      </footer>
    </div>
  );
}

/* ─────────────────────────── STYLES ─────────────────────────── */
const GOLD = "#C9A84C";
const DARK = "#0D0D0D";
const CHARCOAL = "#1A1A1A";
const OFF_WHITE = "#F5F2EC";

const styles = {
  root: {
    fontFamily: "'Georgia', 'Times New Roman', serif",
    background: OFF_WHITE,
    color: DARK,
    margin: 0,
    padding: 0,
    overflowX: "hidden",
  },

  /* NAV */
  nav: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    transition: "background 0.3s, box-shadow 0.3s",
    background: "transparent",
  },
  navScrolled: {
    background: "rgba(13,13,13,0.96)",
    boxShadow: "0 2px 20px rgba(0,0,0,0.4)",
  },
  navInner: {
    maxWidth: 1200,
    margin: "0 auto",
    padding: "18px 32px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logo: {
    fontSize: 22,
    fontWeight: 700,
    letterSpacing: 4,
    color: "#fff",
    cursor: "pointer",
  },
  logoAccent: { color: GOLD },
  logoDivider: { color: GOLD, fontWeight: 300 },
  navLinks: { display: "flex", gap: 32 },
  navLink: {
    background: "none",
    border: "none",
    color: "#ccc",
    fontSize: 11,
    letterSpacing: 2,
    cursor: "pointer",
    fontFamily: "inherit",
    padding: "4px 0",
    borderBottom: "2px solid transparent",
    transition: "color 0.2s, border-color 0.2s",
  },
  navLinkActive: { color: GOLD, borderBottomColor: GOLD },
  menuBtn: {
    display: "none",
    background: "none",
    border: "none",
    color: "#fff",
    fontSize: 22,
    cursor: "pointer",
  },
  mobileMenu: {
    background: CHARCOAL,
    display: "flex",
    flexDirection: "column",
    padding: "12px 32px 20px",
    gap: 12,
  },
  mobileLink: {
    background: "none",
    border: "none",
    color: "#ccc",
    fontSize: 12,
    letterSpacing: 2,
    cursor: "pointer",
    fontFamily: "inherit",
    textAlign: "left",
    padding: "6px 0",
  },

  /* HERO */
  hero: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    position: "relative",
    overflow: "hidden",
    padding: "0 0 80px",
  },
  heroBgImg: {
    position: "absolute",
    inset: 0,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  },
  heroOverlay: {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(to right, rgba(13,13,13,0.92) 0%, rgba(13,13,13,0.7) 60%, rgba(13,13,13,0.3) 100%)",
  },
  heroBgGold: {
    position: "absolute",
    inset: 0,
    background:
      "radial-gradient(ellipse at 70% 50%, rgba(201,168,76,0.06) 0%, transparent 60%)",
    pointerEvents: "none",
  },
  heroContent: {
    maxWidth: 1200,
    margin: "0 auto",
    padding: "120px 32px 0",
    position: "relative",
    zIndex: 2,
  },
  heroEyebrow: {
    fontSize: 11,
    letterSpacing: 4,
    color: GOLD,
    marginBottom: 24,
  },
  heroTitle: {
    fontSize: "clamp(52px, 8vw, 110px)",
    fontWeight: 700,
    lineHeight: 1.0,
    color: "#fff",
    margin: "0 0 28px",
    letterSpacing: -1,
  },
  heroTitleAccent: { color: GOLD, fontStyle: "italic" },
  heroSub: {
    fontSize: 17,
    color: "#aaa",
    maxWidth: 500,
    lineHeight: 1.7,
    marginBottom: 40,
    fontStyle: "italic",
  },
  heroCta: { display: "flex", gap: 16, flexWrap: "wrap" },
  heroStat: {
    maxWidth: 1200,
    margin: "60px auto 0",
    padding: "0 32px",
    display: "flex",
    gap: 0,
    alignItems: "center",
    position: "relative",
    zIndex: 2,
  },
  statItem: { display: "flex", flexDirection: "column", padding: "0 40px" },
  statNum: { fontSize: 36, fontWeight: 700, color: GOLD },
  statLabel: { fontSize: 11, letterSpacing: 2, color: "#888", marginTop: 4 },
  statDivider: { width: 1, height: 50, background: "#444" },

  /* BUTTONS */
  btnPrimary: {
    background: GOLD,
    color: DARK,
    border: "none",
    padding: "14px 32px",
    fontSize: 13,
    letterSpacing: 2,
    fontFamily: "inherit",
    cursor: "pointer",
    fontWeight: 700,
    transition: "opacity 0.2s",
  },
  btnGhost: {
    background: "none",
    color: "#ccc",
    border: "1px solid #444",
    padding: "14px 32px",
    fontSize: 13,
    letterSpacing: 1,
    fontFamily: "inherit",
    cursor: "pointer",
    transition: "border-color 0.2s, color 0.2s",
  },

  /* ABOUT */
  about: {
    background: "#fff",
    padding: "100px 0",
  },
  aboutInner: {
    maxWidth: 1200,
    margin: "0 auto",
    padding: "0 32px",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 64,
    alignItems: "center",
  },
  aboutText: {},
  aboutPara: {
    fontSize: 15,
    color: "#555",
    lineHeight: 1.8,
    marginBottom: 16,
  },
  aboutImgWrap: {
    position: "relative",
  },
  aboutImg: {
    width: "100%",
    height: 420,
    objectFit: "cover",
    display: "block",
  },
  aboutImgBadge: {
    position: "absolute",
    bottom: -20,
    left: -20,
    background: GOLD,
    color: DARK,
    padding: "20px 28px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  badgeNum: { fontSize: 36, fontWeight: 700, lineHeight: 1 },
  badgeLabel: { fontSize: 11, letterSpacing: 2, marginTop: 4 },

  /* SECTIONS */
  section: { padding: "100px 0", background: OFF_WHITE },
  sectionDark: { padding: "100px 0", background: CHARCOAL },
  sectionInner: { maxWidth: 1200, margin: "0 auto", padding: "0 32px" },
  sectionEyebrow: {
    fontSize: 11,
    letterSpacing: 4,
    color: GOLD,
    marginBottom: 12,
  },
  sectionEyebrowLight: {
    fontSize: 11,
    letterSpacing: 4,
    color: GOLD,
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: "clamp(32px, 4vw, 52px)",
    fontWeight: 700,
    marginBottom: 56,
    color: DARK,
  },
  sectionTitleLight: {
    fontSize: "clamp(32px, 4vw, 52px)",
    fontWeight: 700,
    marginBottom: 56,
    color: "#fff",
  },

  /* PRACTICE CARDS */
  grid4: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: 24,
  },
  card: {
    background: "#fff",
    border: "1px solid #e5e0d8",
    transition: "box-shadow 0.25s, transform 0.25s",
    cursor: "pointer",
    overflow: "hidden",
  },
  cardImgWrap: {
    position: "relative",
    height: 180,
    overflow: "hidden",
  },
  cardImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
    transition: "transform 0.4s",
  },
  cardImgOverlay: {
    position: "absolute",
    inset: 0,
    background: "rgba(13,13,13,0.35)",
  },
  cardImgIcon: {
    position: "absolute",
    top: 12,
    left: 12,
    fontSize: 28,
  },
  cardBody: { padding: "24px 24px 28px" },
  cardTitle: { fontSize: 18, fontWeight: 700, marginBottom: 10, color: DARK },
  cardDesc: { fontSize: 14, color: "#666", lineHeight: 1.7, marginBottom: 14 },
  cardLink: {
    background: "none",
    border: "none",
    color: "#888",
    fontSize: 13,
    letterSpacing: 1,
    cursor: "pointer",
    fontFamily: "inherit",
    padding: 0,
    transition: "color 0.2s",
  },

  /* TEAM */
  grid3: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: 32,
  },
  lawyerCard: {
    textAlign: "center",
    padding: "40px 24px 32px",
    border: "1px solid #2a2a2a",
    background: "#111",
    transition: "border-color 0.25s, transform 0.25s",
    cursor: "pointer",
  },
  avatarWrap: {
    position: "relative",
    width: 100,
    height: 100,
    margin: "0 auto 20px",
  },
  avatarImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "50%",
    display: "block",
  },
  avatarRing: {
    position: "absolute",
    inset: -3,
    borderRadius: "50%",
    border: `2px solid ${GOLD}`,
    pointerEvents: "none",
  },
  lawyerName: { fontSize: 20, fontWeight: 700, color: "#fff", marginBottom: 4 },
  lawyerTitle: { fontSize: 13, color: "#888", marginBottom: 14 },
  lawyerTag: {
    fontSize: 11,
    letterSpacing: 2,
    color: GOLD,
    border: `1px solid ${GOLD}`,
    padding: "4px 12px",
  },
  lawyerBtn: {
    display: "block",
    margin: "20px auto 0",
    background: "transparent",
    border: `1px solid ${GOLD}`,
    color: GOLD,
    padding: "10px 24px",
    fontSize: 11,
    letterSpacing: 2,
    cursor: "pointer",
    fontFamily: "inherit",
    transition: "background 0.2s",
  },

  /* CONTACT */
  contactWrap: {
    display: "grid",
    gridTemplateColumns: "1fr 2fr",
    gap: 64,
    alignItems: "start",
  },
  contactInfo: { lineHeight: 2 },
  contactImgWrap: { marginBottom: 32 },
  contactImg: {
    width: "100%",
    height: 200,
    objectFit: "cover",
    display: "block",
  },
  contactLine: { marginBottom: 24, fontSize: 15, color: "#555" },
  formWrap: { display: "flex", flexDirection: "column", gap: 0 },
  form: { display: "flex", flexDirection: "column", gap: 16 },
  input: {
    padding: "14px 16px",
    fontSize: 14,
    border: "1px solid #d8d3cb",
    background: "#fff",
    fontFamily: "inherit",
    outline: "none",
    color: DARK,
    width: "100%",
    boxSizing: "border-box",
  },
  textarea: { minHeight: 120, resize: "vertical" },
  successMsg: {
    background: "#e8f5e9",
    border: "1px solid #a5d6a7",
    color: "#2e7d32",
    padding: "14px 18px",
    fontSize: 14,
    marginBottom: 16,
  },

  /* FOOTER */
  footer: {
    background: DARK,
    padding: "40px 32px 28px",
  },
  footerTop: {
    maxWidth: 1200,
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 28,
    borderBottom: "1px solid #222",
    flexWrap: "wrap",
    gap: 20,
  },
  footerBrand: { display: "flex", flexDirection: "column", gap: 6 },
  footerLogo: {
    fontSize: 18,
    fontWeight: 700,
    letterSpacing: 4,
    color: GOLD,
  },
  footerTagline: { fontSize: 11, letterSpacing: 3, color: "#555" },
  footerLinks: { display: "flex", gap: 24, flexWrap: "wrap" },
  footerLink: {
    background: "none",
    border: "none",
    color: "#555",
    fontSize: 10,
    letterSpacing: 2,
    cursor: "pointer",
    fontFamily: "inherit",
    transition: "color 0.2s",
    padding: "2px 0",
  },
  footerBottom: {
    maxWidth: 1200,
    margin: "0 auto",
    paddingTop: 20,
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: 8,
  },
  footerCopy: { fontSize: 12, color: "#444" },
};