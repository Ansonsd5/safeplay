import './Hero.css';

function Hero() {
    return (
        <section id="hero" className="hero">
            {/* style={{ backgroundImage: `url(${heroBackground})` }} */}
            <h1>Welcome to Safe Play</h1>
            <p>Good Health and Wellbeing for Children of Immigration Family</p>
            <button onClick={() => window.open('https://www.youtube.com/watch?v=AD-kOozicZc', '_blank')} className="crazy-button">
                Learn to protect your family
            </button>
        </section>
    );
  }

export default Hero;