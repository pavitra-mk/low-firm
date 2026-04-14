import { useNavigate } from 'react-router-dom'

const trustItems = [
  { icon: <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.955 11.955 0 003 10c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"/></svg>, label: 'AV Rated by Martindale', sub: 'Highest Ethical Standards' },
  { icon: <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"/></svg>, label: 'Super Lawyers 2024', sub: 'Top 100 Attorneys' },
  { icon: <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"/></svg>, label: 'Harvard Law Graduates', sub: 'Elite Legal Education' },
  { icon: <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>, label: '36+ Years of Excellence', sub: 'Est. 1987 · New York' },
]

const practiceHighlights = [
  { title: 'Criminal Defense', desc: 'Aggressive defense strategies with proven results in federal and state courts.' },
  { title: 'Family Law', desc: 'Compassionate counsel for divorce, custody, and complex family matters.' },
  { title: 'Corporate Law', desc: 'Strategic legal guidance for mergers, acquisitions, and business formation.' },
  { title: 'Intellectual Property', desc: 'Protecting your innovations, trademarks, and creative works.' },
]

export default function Home() {
  const navigate = useNavigate()

  return (
    <main>
      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-pattern" />
        <div className="container" style={{width:'100%'}}>
          <div className="hero-content">
            <div className="hero-eyebrow">
              <div className="hero-eyebrow-line" />
              <span className="hero-eyebrow-text">New York's Premier Legal Counsel</span>
            </div>
            <h1 className="hero-title">
              When Justice<br />
              <span className="hero-title-italic">Demands</span> Excellence
            </h1>
            <p className="hero-description">
              Harrington & Associates has defended the rights and interests of clients for over
              three decades. Our attorneys are relentless advocates — in the courtroom and beyond.
            </p>
            <div className="hero-cta">
              <button className="btn btn-primary" onClick={() => navigate('/contact')}>
                <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" style={{width:'14px',height:'14px'}}><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"/></svg>
                <span>Book Free Consultation</span>
              </button>
              <button className="btn btn-outline" onClick={() => navigate('/practice-areas')}>
                <span>Our Practice Areas</span>
                <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" style={{width:'14px',height:'14px'}}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/></svg>
              </button>
            </div>
            <div className="hero-badges">
              {[['5,200+','Cases Won'],['98%','Client Satisfaction'],['36','Years Experience'],['12','States Licensed']].map(([val,lab]) => (
                <div className="hero-badge" key={lab}>
                  <span className="badge-value">{val}</span>
                  <span className="badge-label">{lab}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="hero-scroll">
          <span className="scroll-text">Scroll</span>
          <div className="scroll-line" />
        </div>
      </section>

      {/* ── TRUST BADGES ── */}
      <section className="trust-section">
        <div className="container">
          <div className="trust-grid">
            {trustItems.map((item, i) => (
              <>
                <div className="trust-item" key={item.label}>
                  <div className="trust-icon">{item.icon}</div>
                  <div className="trust-text">
                    <strong>{item.label}</strong>
                    <span>{item.sub}</span>
                  </div>
                </div>
                {i < trustItems.length - 1 && <div className="trust-divider" key={`div-${i}`} />}
              </>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRACTICE AREAS OVERVIEW ── */}
      <section className="section">
        <div className="container">
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-end',flexWrap:'wrap',gap:'24px'}}>
            <div>
              <div className="section-label">What We Do</div>
              <h2 className="section-title">Areas of <span>Practice</span></h2>
              <p className="section-subtitle">
                From boardrooms to courtrooms, we provide comprehensive legal services
                tailored to your unique circumstances and goals.
              </p>
            </div>
            <button className="btn btn-gold-outline" onClick={() => navigate('/practice-areas')}>
              <span>All Practice Areas</span>
            </button>
          </div>

          <div className="areas-grid">
            {practiceHighlights.map((area, i) => (
              <div className="area-card" key={area.title} onClick={() => navigate('/practice-areas')}>
                <span className="area-number">0{i+1}</span>
                <div className="area-icon">
                  <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" style={{width:'24px',height:'24px'}}>
                    {i===0 && <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.97zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.97z"/>}
                    {i===1 && <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"/>}
                    {i===2 && <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"/>}
                    {i===3 && <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"/>}
                  </svg>
                </div>
                <h3 className="area-title">{area.title}</h3>
                <p className="area-desc">{area.desc}</p>
                <div className="area-link">
                  Learn More
                  <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/></svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="section section-alt">
        <div className="container">
          <div className="why-wrapper">
            <div>
              <div className="section-label">Why Choose Us</div>
              <h2 className="section-title">A Legacy of <span>Winning</span></h2>
              <p className="section-subtitle" style={{marginBottom:'0'}}>
                Our track record speaks for itself. Decades of courtroom victories and
                satisfied clients define who we are.
              </p>
              <div className="why-features">
                {[
                  { title: 'Personalized Strategy', desc: 'Every case is unique. We craft tailored legal strategies designed around your specific goals and circumstances.' },
                  { title: 'Transparent Communication', desc: 'You will always know where your case stands. We believe in complete transparency at every step.' },
                  { title: 'Fierce Representation', desc: 'We fight relentlessly for our clients — whether negotiating settlements or arguing before a jury.' },
                ].map(f => (
                  <div className="why-feature" key={f.title}>
                    <div className="feature-icon">
                      <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" style={{width:'18px',height:'18px'}}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                    </div>
                    <div>
                      <h4 className="feature-title">{f.title}</h4>
                      <p className="feature-desc">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{marginTop:'40px'}}>
                <button className="btn btn-primary" onClick={() => navigate('/contact')}>
                  <span>Schedule a Consultation</span>
                </button>
              </div>
            </div>
            <div className="why-stats">
              {[['5,200+','Cases Successfully Resolved'],['$2.8B','Total Verdicts & Settlements'],['98%','Client Satisfaction Rate'],['36','Years of Excellence']].map(([num,lab]) => (
                <div className="stat-card" key={lab}>
                  <div className="stat-number">{num}</div>
                  <div className="stat-label">{lab}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── ATTORNEYS PREVIEW ── */}
      <section className="section">
        <div className="container">
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-end',flexWrap:'wrap',gap:'24px'}}>
            <div>
              <div className="section-label">Our Team</div>
              <h2 className="section-title">Meet Our <span>Attorneys</span></h2>
            </div>
            <button className="btn btn-gold-outline" onClick={() => navigate('/attorneys')}>
              <span>View All Attorneys</span>
            </button>
          </div>
          <div className="attorneys-grid">
            {[
              { id:1, name:'Richard Harrington', role:'Managing Partner', spec:'Criminal Defense · Corporate Litigation', initial:'RH' },
              { id:2, name:'Margaret Chen', role:'Senior Partner', spec:'Intellectual Property · Tech Law', initial:'MC' },
              { id:3, name:'James Whitfield', role:'Partner', spec:'Family Law · Estate Planning', initial:'JW' },
            ].map(atty => (
              <div className="attorney-card" key={atty.id} onClick={() => navigate(`/attorneys/${atty.id}`)}>
                <div className="attorney-photo">
                  <div className="attorney-photo-placeholder">{atty.initial}</div>
                  <div className="attorney-overlay">
                    <span style={{fontSize:'11px',letterSpacing:'0.15em',textTransform:'uppercase',color:'var(--gold)',fontWeight:'600'}}>View Profile →</span>
                  </div>
                </div>
                <div className="attorney-info">
                  <h3 className="attorney-name">{atty.name}</h3>
                  <div className="attorney-role">{atty.role}</div>
                  <p className="attorney-spec">{atty.spec}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section style={{background:'var(--gold)',padding:'80px 0'}}>
        <div className="container" style={{textAlign:'center'}}>
          <p style={{fontSize:'11px',letterSpacing:'0.3em',textTransform:'uppercase',color:'rgba(0,0,0,0.6)',fontWeight:'600',marginBottom:'16px'}}>Ready to Get Started?</p>
          <h2 style={{fontFamily:'var(--font-display)',fontSize:'clamp(36px,5vw,56px)',fontWeight:'300',color:'var(--black)',marginBottom:'24px',lineHeight:'1.1'}}>
            Your First Consultation<br /><em>Is Always Free</em>
          </h2>
          <p style={{fontSize:'14px',color:'rgba(0,0,0,0.6)',marginBottom:'40px',maxWidth:'480px',margin:'0 auto 40px',lineHeight:'1.8'}}>
            Don't face your legal challenges alone. Our attorneys are ready to review
            your case and advise you on the best path forward.
          </p>
          <div style={{display:'flex',gap:'16px',justifyContent:'center',flexWrap:'wrap'}}>
            <button className="btn" style={{background:'var(--black)',color:'var(--white)'}} onClick={() => navigate('/contact')}>
              <span>Book Free Consultation</span>
            </button>
            <a href="tel:+12125550192" className="btn" style={{background:'transparent',border:'1px solid rgba(0,0,0,0.3)',color:'var(--black)'}}>
              <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" style={{width:'14px',height:'14px'}}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/></svg>
              <span>+1 (212) 555-0192</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}