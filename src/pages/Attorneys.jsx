import { useNavigate } from 'react-router-dom'

export const attorneys = [
  {
    id: 1,
    name: 'Richard Harrington',
    role: 'Managing Partner',
    spec: 'Criminal Defense · Corporate Litigation',
    initial: 'RH',
    years: 36,
    cases: 1840,
    education: 'Harvard Law School, J.D. · Yale University, B.A. Economics',
    bio: "Richard Harrington founded the firm in 1987 after distinguishing himself as a federal prosecutor. Over three decades, he has become one of New York's most formidable trial attorneys, known for his strategic brilliance and command of the courtroom. He has argued before the U.S. Supreme Court and secured landmark verdicts in high-profile criminal and civil cases.",
    experience: [
      { year: '2005–Present', title: 'Managing Partner', desc: 'Harrington & Associates, New York' },
      { year: '1995–2005', title: 'Partner', desc: 'Sullivan & Cromwell LLP, New York' },
      { year: '1990–1995', title: 'Assistant U.S. Attorney', desc: 'Southern District of New York' },
      { year: '1987–1990', title: 'Associate', desc: 'Davis Polk & Wardwell LLP' },
    ],
    cases_won: [
      { title: 'U.S. v. Caldwell — Federal Securities Fraud', result: 'Complete Acquittal' },
      { title: 'State v. Morrison — Capital Murder Defense', result: 'Not Guilty' },
      { title: 'Marchetti Corp. M&A Dispute — $420M', result: 'Full Recovery' },
      { title: 'Federal RICO Conspiracy — 14 Defendants', result: 'All Charges Dropped' },
    ],
  },
  {
    id: 2,
    name: 'Margaret Chen',
    role: 'Senior Partner',
    spec: 'Intellectual Property · Technology Law',
    initial: 'MC',
    years: 22,
    cases: 980,
    education: 'Stanford Law School, J.D. · MIT, B.S. Computer Science',
    bio: "Margaret Chen brings a rare combination of legal acumen and technical expertise to complex IP and technology disputes. A former engineer, she has represented Fortune 500 companies and innovative startups alike in patent litigation, licensing negotiations, and tech regulatory matters. She is widely regarded as one of the nation's leading authorities on AI and data privacy law.",
    experience: [
      { year: '2012–Present', title: 'Senior Partner', desc: 'Harrington & Associates, New York' },
      { year: '2005–2012', title: 'Partner', desc: 'Quinn Emanuel, Silicon Valley' },
      { year: '2002–2005', title: 'Associate', desc: 'Wilson Sonsini Goodrich & Rosati' },
    ],
    cases_won: [
      { title: 'NovaTech v. Google — Patent Infringement', result: '$280M Verdict' },
      { title: 'DataVault Trade Secret Theft', result: 'Injunction + $45M' },
      { title: 'BioSynth Patent Portfolio Defense', result: 'Portfolio Preserved' },
      { title: 'AI Licensing Dispute — 12 Patents', result: 'Full Licensing Rights' },
    ],
  },
  {
    id: 3,
    name: 'James Whitfield',
    role: 'Partner',
    spec: 'Family Law · Estate Planning',
    initial: 'JW',
    years: 18,
    cases: 760,
    education: 'Columbia Law School, J.D. · Georgetown University, B.A.',
    bio: 'James Whitfield is known for his compassionate approach to family law and his meticulous estate planning strategies. He has represented high-net-worth individuals in complex divorce proceedings involving significant assets, and has helped hundreds of families protect their legacies through comprehensive estate plans.',
    experience: [
      { year: '2015–Present', title: 'Partner', desc: 'Harrington & Associates, New York' },
      { year: '2010–2015', title: 'Associate', desc: 'Blank Rome LLP, New York' },
      { year: '2006–2010', title: 'Associate', desc: 'Family Law Group, Manhattan' },
    ],
    cases_won: [
      { title: 'Henderson Divorce — $120M Asset Division', result: 'Favorable Settlement' },
      { title: 'Contested Child Custody — Multi-jurisdictional', result: 'Full Custody Awarded' },
      { title: 'Estate of Brightwell — Contested Will', result: 'Estate Preserved' },
      { title: 'International Adoption — 3 Children', result: 'Successful Adoption' },
    ],
  },
  {
    id: 4,
    name: 'Sophia Reyes',
    role: 'Partner',
    spec: 'Corporate Law · Securities',
    initial: 'SR',
    years: 15,
    cases: 620,
    education: 'NYU School of Law, J.D. · Princeton University, B.A. Economics',
    bio: 'Sophia Reyes advises corporations, investment banks, and private equity firms on complex transactional matters and securities regulations. Her expertise in capital markets and M&A has made her an indispensable advisor to some of the most significant deals on Wall Street.',
    experience: [
      { year: '2016–Present', title: 'Partner', desc: 'Harrington & Associates, New York' },
      { year: '2011–2016', title: 'Associate', desc: 'Skadden Arps, New York' },
      { year: '2009–2011', title: 'Analyst', desc: 'Goldman Sachs (Legal Division)' },
    ],
    cases_won: [
      { title: 'Apex Capital $2.1B Merger', result: 'Successful Close' },
      { title: 'SEC Investigation — Investment Fund', result: 'No Charges Filed' },
      { title: 'CrossBorder Acquisition Defense', result: 'Regulatory Approval' },
      { title: 'IPO Legal Counsel — Tech Startup', result: '$400M Public Offering' },
    ],
  },
  {
    id: 5,
    name: 'David Okafor',
    role: 'Associate',
    spec: 'Criminal Defense · Civil Rights',
    initial: 'DO',
    years: 8,
    cases: 340,
    education: 'Yale Law School, J.D. · Howard University, B.A. Political Science',
    bio: 'David Okafor is a passionate advocate for justice, specializing in criminal defense and civil rights litigation. A former public defender, he brings unmatched dedication to every case and has secured significant civil rights settlements against major institutions.',
    experience: [
      { year: '2020–Present', title: 'Associate', desc: 'Harrington & Associates, New York' },
      { year: '2016–2020', title: 'Public Defender', desc: 'Legal Aid Society, New York' },
    ],
    cases_won: [
      { title: 'Civil Rights Suit — NYPD Misconduct', result: '$3.2M Settlement' },
      { title: 'State v. Adams — Wrongful Conviction', result: 'Conviction Overturned' },
      { title: 'Federal Conspiracy Charges', result: 'Full Acquittal' },
    ],
  },
  {
    id: 6,
    name: 'Caroline Dupont',
    role: 'Associate',
    spec: 'Real Estate · Construction Law',
    initial: 'CD',
    years: 6,
    cases: 280,
    education: 'Fordham Law School, J.D. · Cornell University, B.S. Architecture',
    bio: 'Caroline Dupont combines her background in architecture with legal expertise to provide uniquely comprehensive real estate and construction law services. She handles complex property transactions, zoning disputes, and construction defect litigation.',
    experience: [
      { year: '2021–Present', title: 'Associate', desc: 'Harrington & Associates, New York' },
      { year: '2018–2021', title: 'Associate', desc: 'Greenberg Traurig, New York' },
    ],
    cases_won: [
      { title: 'Hudson Yards Commercial Dispute — $85M', result: 'Full Recovery' },
      { title: 'Zoning Variance — Mixed Use Development', result: 'Approval Granted' },
      { title: 'Construction Defect Class Action', result: '$12M Settlement' },
    ],
  },
]

export default function Attorneys() {
  const navigate = useNavigate()

  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-content">
            <div className="breadcrumb">
              <a href="/">Home</a><span>›</span><span>Attorneys</span>
            </div>
            <div className="section-label">Our Team</div>
            <h1 className="section-title" style={{fontSize:'clamp(48px,6vw,80px)'}}>
              The Minds Behind <span>Your Defense</span>
            </h1>
            <p className="section-subtitle">
              A team of elite attorneys, each with a distinguished record of excellence
              and an unwavering commitment to their clients.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="attorneys-grid">
            {attorneys.map(atty => (
              <div className="attorney-card" key={atty.id} onClick={() => navigate(`/attorneys/${atty.id}`)}>
                <div className="attorney-photo">
                  <div className="attorney-photo-placeholder">{atty.initial}</div>
                  <div className="attorney-overlay">
                    <div>
                      <p style={{fontSize:'11px',letterSpacing:'0.15em',textTransform:'uppercase',color:'var(--gold)',fontWeight:'600',marginBottom:'4px'}}>View Profile →</p>
                      <p style={{fontSize:'12px',color:'rgba(255,255,255,0.7)'}}>{atty.cases} Cases · {atty.years} Years</p>
                    </div>
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

      <section className="section section-alt">
        <div className="container" style={{textAlign:'center'}}>
          <div className="section-label" style={{justifyContent:'center'}}>Careers</div>
          <h2 className="section-title" style={{textAlign:'center'}}>Join Our <span>Team</span></h2>
          <p className="section-subtitle" style={{margin:'0 auto 40px',textAlign:'center'}}>
            We are always looking for exceptional legal talent. If you are passionate
            about the law and driven by excellence, we want to hear from you.
          </p>
          <button className="btn btn-primary" onClick={() => navigate('/contact')}>
            <span>View Open Positions</span>
          </button>
        </div>
      </section>
    </main>
  )
}