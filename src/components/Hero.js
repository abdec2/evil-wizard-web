
const Hero = () => {
    return (
        <section className="hero-section ">
            <div className="shape">
                <video autoPlay={true} muted={true} className="w-100">
                    <source src="https://evilwizardweb.s3.amazonaws.com/video/Intro.mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            

        </section>
    )
}

export default Hero