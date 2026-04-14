import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const articles = [
  {
    id: 1, category: 'Criminal Defense',
    title: "What to Do When You're Arrested: A Step-by-Step Guide",
    excerpt: 'Understanding your rights at the moment of arrest can make the difference between a conviction and an acquittal. Learn the critical steps to protect yourself.',
    author: 'Richard Harrington', authorInitial: 'RH',
    date: 'April 8, 2026', readTime: '7 min read', emoji: '⚖️',
  },
  {
    id: 2, category: 'Intellectual Property',
    title: 'AI-Generated Work and Copyright: Who Owns the Output?',
    excerpt: 'As artificial intelligence reshapes creative industries, courts and lawmakers are wrestling with fundamental questions about authorship and ownership rights.',
    author: 'Margaret Chen', authorInitial: 'MC',
    date: 'March 28, 2026', readTime: '10 min read', emoji: '💡',
  },
  {
    id: 3, category: 'Family Law',
    title: 'High-Net-Worth Divorce: Protecting Your Assets',
    excerpt: 'When significant wealth is involved in a divorce proceeding, the financial stakes demand an entirely different level of legal strategy and financial forensics.',
    author: 'James Whitfield', authorInitial: 'JW',
    date: 'March 15, 2026', readTime: '9 min read', emoji: '🏛️',
  },
  {
    id: 4, category: 'Corporate Law',
    title: 'M&A Due Diligence: The Hidden Legal Risks in 2026',
    excerpt: 'Mergers and acquisitions carry substantial legal exposure that even sophisticated buyers overlook. Our analysis reveals the top red flags before any deal closes.',
    author: 'Sophia Reyes', authorInitial: 'SR',
    date: 'March 3, 2026', readTime: '12 min read', emoji: '🏢',
  },
  {
    id: 5, category: 'Criminal Defense',
    title: 'Wrongful Convictions: How New Evidence Can Reopen Your Case',
    excerpt: 'Advances in DNA testing and digital forensics have opened new avenues for challenging wrongful convictions. Here is what you need to know about post-conviction relief.',
    author: 'David Okafor', authorInitial: 'DO',
    date: 'February 20, 2026', readTime: '8 min read', emoji: '🔍',
  },
  {
    id: 6, category: 'Real Estate',
    title: 'Commercial Lease Negotiations: Key Clauses Every Tenant Must Know',
    excerpt: 'A commercial lease is one of the most significant financial commitments a business can make. These are the clauses that can save you millions — or cost you everything.',
    author: 'Caroline Dupont', authorInitial: 'CD',
    date: 'February 10, 2026', readTime: '6 min read', emoji: '🏗️',
  },
]

const categories = ['All', 'Criminal Defense', 'Intellectual Property', 'Family Law', 'Corporate Law', 'Real Estate']

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('All')
  const navigate = useNavigate()
  const filtered = activeCategory === 'All' ? articles : articles.filter(a => a.category === activeCategory)

  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-content">
            <div className="breadcrumb">
              <a href="/">Home</a><span>›</span><span>Legal Insights</span>
            </div>
            <div className="section-label">Knowledge Center</div>
            <h1 className="section-title" style={{fontSize:'clamp(48px,6vw,80px)'}}>
              Legal <span>Insights</span>
            </h1>
            <p className="section-subtitle">
              Expert analysis and practical guidance on the legal issues that matter most,
              authored by our senior attorneys.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="blog-filters">
            {categories.map(cat => (
              <button key={cat} className={`filter-btn ${activeCategory === cat ? 'active' : ''}`} onClick={() => setActiveCategory(cat)}>
                {cat}
              </button>
            ))}
          </div>

          <div className="blog-grid">
            {filtered.map(article => (
              <article className="blog-card" key={article.id}>
                <div className="blog-image">
                  <span style={{fontSize:'52px'}}>{article.emoji}</span>
                  <span className="blog-category-tag">{article.category}</span>
                </div>
                <div className="blog-body">
                  <div className="blog-meta">
                    <span className="blog-date">{article.date}</span>
                    <span style={{color:'var(--border)'}}>·</span>
                    <span className="blog-read">{article.readTime}</span>
                  </div>
                  <h2 className="blog-title">{article.title}</h2>
                  <p className="blog-excerpt">{article.excerpt}</p>
                  <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',paddingTop:'20px',borderTop:'1px solid var(--border)'}}>
                    <div className="blog-author">
                      <div className="author-avatar">{article.authorInitial}</div>
                      <span className="author-name">{article.author}</span>
                    </div>
                    <button
                      style={{fontSize:'11px',letterSpacing:'0.15em',textTransform:'uppercase',color:'var(--gold)',fontWeight:'600',background:'none',border:'none',cursor:'pointer',display:'flex',alignItems:'center',gap:'6px'}}
                      onClick={() => navigate('/contact')}
                    >
                      Read More
                      <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" style={{width:'12px',height:'12px'}}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/></svg>
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filtered.length === 0 && (
            <div style={{textAlign:'center',padding:'80px 0',color:'var(--text-muted)'}}>
              <p style={{fontSize:'48px',marginBottom:'16px'}}>📭</p>
              <p>No articles found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="section section-alt">
        <div className="container" style={{textAlign:'center'}}>
          <div className="section-label" style={{justifyContent:'center'}}>Stay Informed</div>
          <h2 className="section-title" style={{textAlign:'center'}}>Legal Updates <span>Delivered</span></h2>
          <p className="section-subtitle" style={{margin:'0 auto 40px',textAlign:'center'}}>
            Subscribe to receive our latest legal insights, case summaries, and regulatory updates.
          </p>
          <div style={{display:'flex',gap:'12px',justifyContent:'center',maxWidth:'480px',margin:'0 auto',flexWrap:'wrap'}}>
            <input type="email" className="form-input" placeholder="Your email address" style={{flex:'1',minWidth:'240px'}} />
            <button className="btn btn-primary"><span>Subscribe</span></button>
          </div>
        </div>
      </section>
    </main>
  )
}