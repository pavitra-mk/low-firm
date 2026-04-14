import { useParams, useNavigate, Link } from 'react-router-dom'
import { attorneys } from './Attorneys'

export default function AttorneyDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const atty = attorneys.find(a => a.id === parseInt(id))

  if (!atty) return (
    <div style={{paddingTop:'200px',textAlign:'center'}}>
      <h2>Attorney not found</h2>
      <button className="btn btn-primary" onClick={() => navigate('/attorneys')} style={{marginTop:'24px'}}>
        <span>Back to Attorneys</span>
      </button>
    </div>
  )

  return (
    <main>
      <section className="detail-hero">
        <div className="container">
          <div className="breadcrumb" style={{marginBottom:'32px'}}>
            <Link to="/">Home</Link><span>›</span>
            <Link to="/attorneys">Attorneys</Link><span>›</span>
            <span>{atty.name}</span>
          </div>
          <div className="detail-hero-inner">
            <div className="detail-photo">
              <div className="detail-photo-placeholder">{atty.initial}</div>
            </div>
            <div>
              <div className="section-label">{atty.role}</div>
              <h1 className="detail-name">{atty.name}</h1>
              <div className="detail-role">{atty.spec}</div>
              <p className="detail-bio">{atty.bio}</p>
              <div className="detail-quick-stats">
                <div className="dqs-item">
                  <strong>{atty.years}+</strong>
                  <span>Years Experience</span>
                </div>
                <div className="dqs-item">
                  <strong>{atty.cases}+</strong>
                  <span>Cases Handled</span>
                </div>
                <div className="dqs-item">
                  <strong>97%</strong>
                  <span>Success Rate</span>
                </div>
              </div>
              <div style={{display:'flex',gap:'16px',marginTop:'40px',flexWrap:'wrap'}}>
                <button className="btn btn-primary" onClick={() => navigate('/contact')}>
                  <span>Book Consultation</span>
                </button>
                <button className="btn btn-outline" onClick={() => navigate('/contact')}>
                  <span>Send Message</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="detail-content">
        <div className="container">
          <div className="detail-grid">
            <div>
              {/* Education */}
              <div style={{marginBottom:'60px'}}>
                <h2 className="detail-section-title">Education</h2>
                <div style={{display:'flex',flexDirection:'column',gap:'16px'}}>
                  {atty.education.split('·').map(edu => (
                    <div key={edu} style={{display:'flex',gap:'16px',alignItems:'flex-start'}}>
                      <div style={{width:'8px',height:'8px',border:'1px solid var(--gold)',flexShrink:0,marginTop:'6px'}} />
                      <p style={{fontSize:'15px',color:'var(--gray-light)',lineHeight:'1.6'}}>{edu.trim()}</p>
                    </div>
                  ))}
                </div>
              </div>
              {/* Experience */}
              <div>
                <h2 className="detail-section-title">Professional Experience</h2>
                <div className="timeline">
                  {atty.experience.map(exp => (
                    <div className="timeline-item" key={exp.year}>
                      <div className="timeline-dot" />
                      <div>
                        <div className="timeline-year">{exp.year}</div>
                        <div className="timeline-title">{exp.title}</div>
                        <div className="timeline-desc">{exp.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Cases Won */}
            <div>
              <h2 className="detail-section-title">Notable Cases</h2>
              <div className="cases-list">
                {atty.cases_won.map(c => (
                  <div className="case-item" key={c.title}>
                    <div className="case-title">{c.title}</div>
                    <div className="case-result">{c.result}</div>
                  </div>
                ))}
              </div>
              <div style={{marginTop:'40px',background:'var(--dark-2)',border:'1px solid var(--border-gold)',padding:'32px'}}>
                <h3 style={{fontFamily:'var(--font-display)',fontSize:'24px',fontWeight:'400',marginBottom:'8px'}}>
                  Work With {atty.name.split(' ')[0]}
                </h3>
                <p style={{fontSize:'13px',color:'var(--text-muted)',marginBottom:'24px',lineHeight:'1.7'}}>
                  Schedule a confidential consultation to discuss your legal matter.
                </p>
                <button className="btn btn-primary" style={{width:'100%',justifyContent:'center'}} onClick={() => navigate('/contact')}>
                  <span>Book Free Consultation</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Attorneys */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-label">Our Team</div>
          <h2 className="section-title">Other <span>Attorneys</span></h2>
          <div className="attorneys-grid" style={{marginTop:'40px'}}>
            {attorneys.filter(a => a.id !== atty.id).slice(0,3).map(a => (
              <div className="attorney-card" key={a.id} onClick={() => navigate(`/attorneys/${a.id}`)}>
                <div className="attorney-photo">
                  <div className="attorney-photo-placeholder">{a.initial}</div>
                  <div className="attorney-overlay">
                    <span style={{fontSize:'11px',letterSpacing:'0.15em',textTransform:'uppercase',color:'var(--gold)',fontWeight:'600'}}>View Profile →</span>
                  </div>
                </div>
                <div className="attorney-info">
                  <h3 className="attorney-name">{a.name}</h3>
                  <div className="attorney-role">{a.role}</div>
                  <p className="attorney-spec">{a.spec}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}