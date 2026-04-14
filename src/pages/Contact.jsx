import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ firstName:'',lastName:'',email:'',phone:'',area:'',message:'',urgency:'standard' })
  const [submitted, setSubmitted] = useState(false)
  const handle = e => setForm(f => ({...f, [e.target.name]: e.target.value}))
  const submit = e => { e.preventDefault(); setSubmitted(true) }

  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-content">
            <div className="breadcrumb">
              <a href="/">Home</a><span>›</span><span>Contact</span>
            </div>
            <div className="section-label">Get In Touch</div>
            <h1 className="section-title" style={{fontSize:'clamp(48px,6vw,80px)'}}>
              Begin Your <span>Defense</span>
            </h1>
            <p className="section-subtitle">
              Your first consultation is always free and strictly confidential.
              Contact us today to speak with a senior attorney.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-wrapper">
            {/* Info */}
            <div>
              <div className="contact-info">
                <div>
                  <div className="section-label">Office Location</div>
                  <h2 style={{fontFamily:'var(--font-display)',fontSize:'32px',fontWeight:'300',marginBottom:'32px'}}>
                    Visit Us in <span style={{fontStyle:'italic',color:'var(--gold)'}}>New York</span>
                  </h2>
                </div>
                {[
                  { label:'Address', content:'1420 Fifth Avenue, Suite 3200\nNew York, NY 10101\nUnited States',
                    icon: <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"/><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"/></svg> },
                  { label:'Phone', content:'+1 (212) 555-0192\n+1 (212) 555-0193 (Fax)',
                    icon: <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/></svg> },
                  { label:'Email', content:'counsel@harrington.law\nnewmatters@harrington.law',
                    icon: <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/></svg> },
                  { label:'Office Hours', content:'Monday – Friday: 8:00 AM – 7:00 PM\nSaturday: 9:00 AM – 3:00 PM\n24/7 Emergency Line Available',
                    icon: <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"/></svg> },
                ].map(item => (
                  <div className="contact-item" key={item.label}>
                    <div className="contact-icon">{item.icon}</div>
                    <div>
                      <strong>{item.label}</strong>
                      <p>{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div>
              {submitted ? (
                <div className="contact-form" style={{textAlign:'center',padding:'80px 48px'}}>
                  <div style={{fontSize:'64px',marginBottom:'24px'}}>✓</div>
                  <h3 style={{fontFamily:'var(--font-display)',fontSize:'32px',fontWeight:'300',marginBottom:'12px',color:'var(--gold)'}}>Message Received</h3>
                  <p style={{fontSize:'14px',color:'var(--text-muted)',lineHeight:'1.8'}}>
                    Thank you for reaching out. A member of our team will contact you
                    within 24 hours to schedule your consultation.
                  </p>
                  <button className="btn btn-primary" style={{marginTop:'32px'}} onClick={() => setSubmitted(false)}>
                    <span>Send Another Message</span>
                  </button>
                </div>
              ) : (
                <div className="contact-form">
                  <h2 className="form-title">Book a Consultation</h2>
                  <p className="form-subtitle">All inquiries are treated with strict confidentiality.</p>
                  <form onSubmit={submit}>
                    <div className="form-row">
                      <div className="form-group">
                        <label className="form-label">First Name *</label>
                        <input className="form-input" name="firstName" value={form.firstName} onChange={handle} required placeholder="John" />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Last Name *</label>
                        <input className="form-input" name="lastName" value={form.lastName} onChange={handle} required placeholder="Smith" />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group">
                        <label className="form-label">Email Address *</label>
                        <input className="form-input" type="email" name="email" value={form.email} onChange={handle} required placeholder="john@example.com" />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Phone Number</label>
                        <input className="form-input" type="tel" name="phone" value={form.phone} onChange={handle} placeholder="+1 (555) 000-0000" />
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Practice Area *</label>
                      <select className="form-input" name="area" value={form.area} onChange={handle} required>
                        <option value="">Select a practice area</option>
                        {['Criminal Defense','Family Law','Corporate Law','Intellectual Property','Real Estate','Estate Planning','Other'].map(a => (
                          <option key={a} value={a}>{a}</option>
                        ))}
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Matter Urgency</label>
                      <div style={{display:'flex',gap:'12px',flexWrap:'wrap'}}>
                        {[['standard','Standard'],['urgent','Urgent (within a week)'],['emergency','Emergency (24hrs)']].map(([val,lab]) => (
                          <label key={val} style={{display:'flex',alignItems:'center',gap:'8px',cursor:'pointer',fontSize:'13px',color:form.urgency===val?'var(--gold)':'var(--text-muted)'}}>
                            <input type="radio" name="urgency" value={val} checked={form.urgency===val} onChange={handle} style={{accentColor:'var(--gold)'}} />
                            {lab}
                          </label>
                        ))}
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Describe Your Matter *</label>
                      <textarea className="form-input" name="message" value={form.message} onChange={handle} required
                        placeholder="Please provide a brief description of your legal matter. All information is confidential." rows={5} />
                    </div>
                    <button type="submit" className="btn btn-primary" style={{width:'100%',justifyContent:'center'}}>
                      <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" style={{width:'14px',height:'14px'}}><path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"/></svg>
                      <span>Submit Consultation Request</span>
                    </button>
                    <p style={{fontSize:'11px',color:'var(--text-muted)',marginTop:'16px',textAlign:'center',lineHeight:'1.6'}}>
                      By submitting this form, you agree to our Privacy Policy.
                      All communications are protected by attorney-client privilege.
                    </p>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <div style={{height:'400px',background:'var(--dark)',display:'flex',alignItems:'center',justifyContent:'center',borderTop:'1px solid var(--border)',position:'relative',overflow:'hidden'}}>
        <div style={{position:'absolute',inset:0,backgroundImage:'repeating-linear-gradient(0deg,transparent,transparent 40px,var(--border) 40px,var(--border) 41px),repeating-linear-gradient(90deg,transparent,transparent 40px,var(--border) 40px,var(--border) 41px)',opacity:0.3}} />
        <div style={{textAlign:'center',position:'relative',zIndex:1}}>
          <div style={{fontSize:'48px',marginBottom:'16px'}}>📍</div>
          <p style={{fontFamily:'var(--font-display)',fontSize:'24px',color:'var(--gold)',marginBottom:'8px'}}>1420 Fifth Avenue, Suite 3200</p>
          <p style={{fontSize:'13px',color:'var(--text-muted)'}}>New York, NY 10101</p>
          <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="btn btn-gold-outline" style={{marginTop:'24px',display:'inline-flex'}}>
            <span>Open in Google Maps</span>
          </a>
        </div>
      </div>
    </main>
  )
}