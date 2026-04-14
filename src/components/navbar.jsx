import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { pathname } = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMobileOpen(false) }, [pathname])

  const links = [
    { to: '/', label: 'Home' },
    { to: '/practice-areas', label: 'Practice Areas' },
    { to: '/attorneys', label: 'Attorneys' },
    { to: '/blog', label: 'Insights' },
    { to: '/contact', label: 'Contact' },
  ]

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="navbar-inner">
            <Link to="/" className="navbar-logo">
              <span className="logo-main">Harrington <span>&</span> Associates</span>
              <span className="logo-sub">Attorneys at Law · Est. 1987</span>
            </Link>
            <ul className="navbar-links">
              {links.map(l => (
                <li key={l.to}>
                  <Link to={l.to} className={`nav-link ${pathname === l.to ? 'active' : ''}`}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="navbar-cta">
              <button className="btn btn-primary" onClick={() => navigate('/contact')}>
                <span>Book Consultation</span>
              </button>
            </div>
            <button className="mobile-menu-btn" onClick={() => setMobileOpen(true)} aria-label="Open menu">
              <span /><span /><span />
            </button>
          </div>
        </div>
      </nav>

      <div className={`mobile-menu ${mobileOpen ? 'open' : ''}`}>
        <button className="mobile-close" onClick={() => setMobileOpen(false)}>✕</button>
        {links.map(l => (
          <Link key={l.to} to={l.to} className="mobile-nav-link">{l.label}</Link>
        ))}
        <button className="btn btn-primary" onClick={() => { navigate('/contact'); setMobileOpen(false) }}>
          <span>Book Consultation</span>
        </button>
      </div>
    </>
  )
}