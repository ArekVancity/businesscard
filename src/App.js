import React from 'react';
import './App.css';

const companyLogos = {
  Workday: 'https://logo.clearbit.com/workday.com',
  Amazon: 'https://logo.clearbit.com/amazon.com',
  Nokia: 'https://logo.clearbit.com/nokia.com',
};

function App() {
  return (
    <div className="App" style={{ fontFamily: 'sans-serif', background: '#f7f9fa', minHeight: '100vh', color: '#222' }}>
      <main style={{ maxWidth: 800, margin: '0 auto', padding: '2rem' }}>
        <header style={{ borderBottom: '2px solid #e0e0e0', marginBottom: '2rem', paddingBottom: '1rem' }}>
          <h1 style={{ margin: 0 }}>Arek Kravitz</h1>
          <h2 style={{ margin: '0.5rem 0 0 0', fontWeight: 400, fontSize: '1.2rem', color: '#555' }}>
            Senior Software Engineer @ Workday | ex-Amazon
          </h2>
          <div style={{ color: '#888', fontSize: '1rem', marginTop: '0.5rem' }}>
            Burnaby, British Columbia, Canada
          </div>
        </header>

        <section style={{ marginBottom: '2rem' }}>
          <h3>Contact</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li>📧 <a href="mailto:arek.kravitz.93@gmail.com">arek.kravitz.93@gmail.com</a></li>
            <li>🔗 <a href="https://www.linkedin.com/in/arek-kravitz-1935192a3" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          </ul>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h3>Top Skills</h3>
          <ul style={{ display: 'flex', gap: '1.5rem', listStyle: 'none', padding: 0 }}>
            <li>Java</li>
            <li>Amazon Web Services (AWS)</li>
            <li>Programming</li>
          </ul>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h3>Summary</h3>
          <p>
            I excel in delivering top-tier software for millions of users. Skilled in the full development cycle, from requirements to maintenance, I also lead teams and conduct interviews, boasting expertise in multiple programming languages and technologies.
          </p>
          <p>In my free time, I enjoy creating little apps that solve real-world problems:</p>
          <ul>
            <li><strong>Wedding Speech Website</strong> - <a href="https://wedding-speech.onrender.com/" target="_blank" rel="noopener noreferrer">wedding-speech.onrender.com</a> - Built for my wedding ceremony to help international guests from Poland and Hong Kong who didn't speak English fluently. The multilingual platform allows users to record the currently spoken speech fragment and automatically redirects them to the corresponding section on the website, making the ceremony accessible to everyone regardless of language barriers.</li>
          </ul>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h3>Experience</h3>
          <div className="experience-list">
            {/* Workday */}
            <div className="experience-card">
              <a href="https://www.workday.com" target="_blank" rel="noopener noreferrer">
                <img 
                  src={companyLogos.Workday} 
                  alt="Workday logo" 
                  className="company-logo"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'block';
                  }}
                />
              </a>
              <div className="experience-details">
                <h4>Workday</h4>
                <div className="exp-title"><strong>Senior Software Engineer</strong> &mdash; May 2024 – Present | Vancouver, BC, Canada</div>
                <ul>
                  <li>Build and enhance enterprise software that powers Grant Management across universities in the U.S and Canada</li>
                  <li>Collaborate with product, design, and QA to deliver user-focused solutions in the higher education space</li>
                  <li>Focus on performance, reliability, and usability to ensure a seamless customer experience</li>
                  <li>Continuously improve code quality and contribute to team-wide engineering best practices</li>
                </ul>
              </div>
            </div>
            {/* Amazon */}
            <div className="experience-card">
              <a href="https://www.amazon.com" target="_blank" rel="noopener noreferrer">
                <img 
                  src={companyLogos.Amazon} 
                  alt="Amazon logo" 
                  className="company-logo"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'block';
                  }}
                />
              </a>
              <div className="experience-details">
                <h4>Amazon</h4>
                <div className="exp-title"><strong>Software Engineer II</strong> &mdash; April 2021 – March 2024 | Vancouver, BC, Canada</div>
                <ul>
                  <li>Designed and developed features for digital items and subscription sales and lifecycle management systems</li>
                  <li>Worked on both backend business logic and frontend customer-facing interfaces</li>
                  <li>Rearchitected systems to align with the Digital Markets Act for EU compliance</li>
                  <li>Led global expansion project for Microsoft 365 digital subscription sales</li>
                  <li>Created a business reporting tool to enable data-driven decision-making</li>
                  <li>Migrated monolithic services into the cloud</li>
                  <li>Implemented mobile subscription activation on the Amazon app (50% increase in activations)</li>
                  <li>Interviewed 500+ candidates for software engineering roles</li>
                  <li>Served as Scrum Master for an 8-person team and mentored junior engineers</li>
                </ul>
                <div className="exp-title"><strong>Software Engineer II</strong> &mdash; August 2017 – April 2021 | London, England, UK</div>
                <ul>
                  <li>Developed in-house tool for Prime Video Content Acquisition team</li>
                  <li>Optimized movie studio negotiations, reducing manual interaction time by 60%</li>
                </ul>
              </div>
            </div>
            {/* Nokia */}
            <div className="experience-card">
              <a href="https://www.nokia.com" target="_blank" rel="noopener noreferrer">
                <img 
                  src={companyLogos.Nokia} 
                  alt="Nokia logo" 
                  className="company-logo"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'block';
                  }}
                />
              </a>
              <div className="experience-details">
                <h4>Nokia</h4>
                <div className="exp-title"><strong>Software Engineer</strong> &mdash; September 2014 – August 2017 | Wrocław, Poland</div>
                <ul>
                  <li>Wrote software for base transceiver stations (C++, Python, Java, Embedded Systems)</li>
                  <li>Ensured performance per latest 3GPP specs</li>
                  <li>Created IntelliJ plugin for TTCN3 test language, speeding up automated test development by 33% MoM</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h3>Education</h3>
          <ul>
            <li><strong>Wyższa Szkoła Informatyki i Umiejętności</strong><br />Master's Degree, Data Modeling/Warehousing and Database Administration (Sep 2019 – Jun 2021)</li>
            <li><strong>University of Wroclaw</strong><br />Bachelor of Engineering - BE, Computer Science (Sep 2012 – Jun 2016)</li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
