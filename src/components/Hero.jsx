// src/components/Hero.jsx
import "../styles/add.css";
import ResumeDownloadButton from "./Button";




const Hero = () => {
    return (
        <section className="hero-section glass  ">
            <div className="hero-content">
                <h1 className="hero-title mt-10 ">
                    Hey, I'm <br />
                    <span className="highlight text-6xl text-blue-600 font-bold">
                        Rajat Jangra
                    </span>
                </h1>
                <p className="hero-desc mt-5 font-extralight  text-2xl">
                    A passionate
                    <strong className="mx-2">
                        Web Developer
                    </strong>
                    skilled in
                    <strong
                        className="text-orange-600 mx-2">
                        HTML
                    </strong> |
                    <strong className="text-blue-400 mx-2">
                        CSS
                    </strong>  |
                    <strong className="text-yellow-500 mx-2">
                        JavaScript
                    </strong> <br /> &
                    <strong className=" mx-1 text-green-300">
                        MERN  Stack
                    </strong>
                    ,

                    builds visually stunning, responsive, and functional websites.
                </p>



            </div>

            {/* Optional Hero Image */}
            <img
                style={{ width: 600, borderRadius: 500, margin: 'auto' }}
                src="https://i.postimg.cc/J0bgVSYH/128.jpg"
                alt="Web Developer"
                className="hero-image"
            />


        </section>
    );
};

export default Hero;
