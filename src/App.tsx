import { useState } from 'react'
import './App.css'

function App() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="container">
      {/* Background Hero Image */}
      <div className="background-glow"></div>
      <img src="/hero-bg.png" alt="Background" className="hero-bg-img" />

      <main className="content animate-fade-in">
        <div className="glass card animate-float">
          <div className="badge">New Release v1.0</div>
          <h1>Future of <br /><span className="gradient-text">Web Design</span></h1>
          <p className="subtitle">
            Experience the next generation of digital interfaces. 
            Beautiful, fast, and connected directly to your GitHub workflow.
          </p>
          
          <div className="button-group">
            <button 
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Get Started
            </button>
            <a href="https://github.com/realtoralisafl-spec/premium-website" target="_blank" className="gh-link">
              View on GitHub →
            </a>
          </div>

          <div className="stats grid">
            <div className="stat-item">
              <span className="stat-value">100%</span>
              <span className="stat-label">Performance</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">∞</span>
              <span className="stat-label">Possibilities</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">0</span>
              <span className="stat-label">Placeholders</span>
            </div>
          </div>
        </div>
      </main>

      <footer className="footer animate-fade-in">
        <p>&copy; 2026 Premium Web Experience. Deployed on Vercel.</p>
      </footer>
    </div>
  )
}

export default App
