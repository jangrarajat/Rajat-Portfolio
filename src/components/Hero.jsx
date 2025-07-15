// src/components/Hero.jsx
import "../styles/add.css";
 


const Hero = () => {
    return (
        <section className="hero-section glass">
            <div className="hero-content">
                <h1 className="hero-title">
                    Hey, I'm <span className="highlight">Rajat Jangra</span>
                </h1>
                <p className="hero-desc">
                    A passionate <strong>Web Developer</strong> skilled in HTML, CSS, JavaScript & React,
                    who builds visually stunning, responsive, and functional websites.
                </p>

                <a href="/resume.pdf" download className="resume-btn animated-btn">
                    📄 Download Resume
                </a>

            </div>

            {/* Optional Hero Image */}
            <img
                style={{ width: 600, borderRadius: 500 ,margin:'auto'}}
                src="https://i.postimg.cc/J0bgVSYH/128.jpg"
                alt="Web Developer"
                className="hero-image"
            />

            {/* Professional Resume Section */}
            <div className="resume-details" 
              style={{  margin:'auto'}}
              >
                <h2>📄 Resume Snapshot</h2>
                <div className="resume-grid">

                    <div>
                        <h3>🎯 Objective</h3>
                        <p>To obtain a responsible position where I can fully utilize my skills and make a significant contribution to the success of the company.</p>
                    </div>

                    <div>
                        <h3>🎓 Education</h3>
                        <ul>
                            <li>B.A., Raj Rishi Bharathari Matsya University, Alwar – 2024</li>
                            <li>12th (RBSE) – 2021, 83.20%</li>
                            <li>10th (RBSE) – 2019, 60%</li>
                        </ul>
                    </div>

                    <div>
                        <h3>💻 Technical Skills</h3>
                        <ul>
                            <li>Frontend: HTML, CSS, JavaScript, React</li>
                            <li>Tools: Git, GitHub</li>
                            <li>MS Office: Word, Excel, PowerPoint</li>
                            <li>OS: Windows, Basic Computer Knowledge</li>
                        </ul>
                    </div>

                    <div>
                        <h3>🚀 Strengths</h3>
                        <ul>
                            <li>Quick Learner & Adaptive</li>
                            <li>Honest and Hardworking</li>
                            <li>Positive Attitude</li>
                            <li>Target-Oriented</li>
                        </ul>
                    </div>

                    <div>
                        <h3>🌐 Languages Known</h3>
                        <p>English, Hindi</p>
                    </div>

                    <div>
                        <h3>👤 Personal Details</h3>
                        <ul>
                            <li>DOB: 24 April 2004</li>
                            <li>Father’s Name: Sh. Manoj Kumar</li>
                            <li>Marital Status: Unmarried</li>
                            <li>Gender: Male</li>
                        </ul>
                    </div>

                    <div>
                        <h3>✅ Declaration</h3>
                        <p>
                            I hereby declare that all the information provided above is true and correct to the best of my knowledge.
                        </p>
                        <p>📍 Place: Behror | 📅 Date: 20 January 2025</p>
                        <p>✍️ <strong>Rajat Jangra</strong></p>
                    </div>

                    <div>
                        <h3>📍 Contact Info</h3>
                        <ul>
                            <li>📍 Hamindpur, Alwar (Rajasthan), PIN: 301701</li>
                         
                            <li>📧 rajatjangra940@gmail.com</li>
                            <li>🌐 GitHub: <a href="https://github.com/jangrarajat" target="_blank">github.com/jangrarajat</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
