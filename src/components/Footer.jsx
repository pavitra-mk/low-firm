import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="navbar-logo">
              <span className="logo-main">Harrington <span style={{color:'var(--gold)'}}>&</span> Associates</span>
              <span className="logo-sub">Attorneys at Law · Est. 1987</span>
            </Link>
            <p>
              For over three decades, we have provided elite legal representation to individuals,
              families, and corporations. Our commitment is to excellence — always.
            </p>
            <div className="footer-social">
              <a href="#" className="social-link" aria-label="LinkedIn">
                <svg fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="#" className="social-link" aria-label="Twitter">
                <svg fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="#" className="social-link" aria-label="Facebook">
                <svg fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="footer-col-title">Practice Areas</h4>
            <ul className="footer-links">
              {['Criminal Defense','Family Law','Corporate Law','Intellectual Property','Real Estate','Estate Planning'].map(a => (
                <li key={a}><Link to="/practice-areas" className="footer-link">{a}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="footer-col-title">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/" className="footer-link">Home</Link></li>
              <li><Link to="/attorneys" className="footer-link">Our Attorneys</Link></li>
              <li><Link to="/blog" className="footer-link">Legal Insights</Link></li>
              <li><Link to="/contact" className="footer-link">Contact Us</Link></li>
              <li><Link to="/contact" className="footer-link">Book Consultation</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-col-title">Contact</h4>
            <ul className="footer-links">
              <li style={{color:'var(--text-muted)',fontSize:'13px',lineHeight:'1.7'}}>
                1420 Fifth Avenue, Suite 3200<br/>New York, NY 10101
              </li>
              <li style={{marginTop:'12px'}}>
                <a href="tel:+12125550192" className="footer-link">+1 (212) 555-0192</a>
              </li>
              <li>
                <a href="mailto:counsel@harrington.law" className="footer-link">counsel@harrington.law</a>
              </li>
              <li style={{color:'var(--text-muted)',fontSize:'12px',marginTop:'12px'}}>
                Mon – Fri: 8:00 AM – 7:00 PM<br/>Sat: 9:00 AM – 3:00 PM
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Harrington & Associates. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#" className="footer-link" style={{fontSize:'12px'}}>Privacy Policy</a>
            <a href="#" className="footer-link" style={{fontSize:'12px'}}>Terms of Service</a>
            <a href="#" className="footer-link" style={{fontSize:'12px'}}>Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  )
}