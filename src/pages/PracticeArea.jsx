import { useNavigate } from 'react-router-dom'

const areas = [
  {
    id: 1,
    title: 'Criminal Defense',
    desc: 'When your freedom is at stake, you need a fierce advocate in your corner. Our criminal defense attorneys have successfully defended clients against federal charges, white-collar crimes, DUI, and violent offenses.',
    items: ['Federal Criminal Defense','White Collar Crime','DUI & Traffic Offenses','Drug Offenses','Violent Crimes','Appellate Defense'],
  },
  {
    id: 2,
    title: 'Family Law',
    desc: 'Family legal matters require both legal expertise and emotional intelligence. We handle divorce, custody disputes, adoption, and other sensitive family issues with the care and discretion they deserve.',
    items: ['Divorce & Separation','Child Custody & Support','Spousal Support','Adoption','Domestic Violence','Prenuptial Agreements'],
  },
  {
    id: 3,
    title: 'Corporate Law',
    desc: 'Businesses face complex legal landscapes. Our corporate attorneys provide strategic counsel for entity formation, M&A transactions, contract negotiations, and ongoing compliance matters.',
    items: ['Business Formation','Mergers & Acquisitions','Contract Drafting','Securities Law','Regulatory Compliance','Corporate Governance'],
  },
  {
    id: 4,
    title: 'Intellectual Property',
    desc: 'Your ideas are your most valuable assets. We protect patents, trademarks, copyrights, and trade secrets — both in the US and internationally — so your innovations stay yours.',
    items: ['Patent Registration','Trademark Protection','Copyright Law','Trade Secret Defense','IP Litigation','Licensing Agreements'],
  },
  {
    id: 5,
    title: 'Real Estate Law',
    desc: "Whether you're buying commercial property, developing land, or dealing with disputes, our real estate attorneys provide expert guidance through every transaction and complication.",
    items: ['Commercial Transactions','Residential Closings','Title Disputes','Landlord-Tenant Law','Zoning & Land Use','Construction Law'],
  },
  {
    id: 6,
    title: 'Estate Planning',
    desc: 'Protect your legacy and provide for your loved ones. Our estate planning attorneys craft comprehensive plans that minimize taxes, avoid probate, and ensure your wishes are honored.',
    items: ['Wills & Trusts','Probate Administration','Asset Protection','Powers of Attorney','Healthcare Directives','Business Succession'],
  },
]

const svgPaths = [
  "M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.97zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.97z",
  "M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z",
  "M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21",
  "M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18",
  "M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25",
  "M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z",
]

export default function PracticeAreas() {
  const navigate = useNavigate()

  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-content">
            <div className="breadcrumb">
              <a href="/">Home</a><span>›</span><span>Practice Areas</span>
            </div>
            <div className="section-label">Legal Services</div>
            <h1 className="section-title" style={{fontSize:'clamp(48px,6vw,80px)'}}>
              Areas of <span>Practice</span>
            </h1>
            <p className="section-subtitle">
              Comprehensive legal services across multiple disciplines — delivered
              with the depth of expertise your case demands.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="areas-grid">
            {areas.map((area, i) => (
              <div className="area-card" key={area.id}>
                <span className="area-number">0{i+1}</span>
                <div className="area-icon">
                  <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" style={{width:'24px',height:'24px'}}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={svgPaths[i]} />
                  </svg>
                </div>
                <h3 className="area-title">{area.title}</h3>
                <p className="area-desc">{area.desc}</p>
                <ul style={{display:'flex',flexWrap:'wrap',gap:'8px',marginBottom:'24px'}}>
                  {area.items.map(item => (
                    <li key={item} style={{fontSize:'11px',letterSpacing:'0.1em',padding:'5px 12px',border:'1px solid var(--border)',color:'var(--text-muted)',textTransform:'uppercase',fontWeight:'500'}}>
                      {item}
                    </li>
                  ))}
                </ul>
                <button className="btn btn-gold-outline" style={{fontSize:'10px',padding:'12px 24px'}} onClick={() => navigate('/contact')}>
                  <span>Book Consultation</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container" style={{textAlign:'center'}}>
          <div className="section-label" style={{justifyContent:'center'}}>Get Started</div>
          <h2 className="section-title" style={{textAlign:'center'}}>Not Sure Where <span>to Begin?</span></h2>
          <p className="section-subtitle" style={{margin:'0 auto 40px',textAlign:'center'}}>
            Schedule a free consultation and let our attorneys assess your situation
            and recommend the best course of action.
          </p>
          <button className="btn btn-primary" onClick={() => navigate('/contact')}>
            <span>Schedule Free Consultation</span>
          </button>
        </div>
      </section>
    </main>
  )
}