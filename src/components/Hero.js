const Hero = () => {
    return (
        <section className="hero-section" id="home">
            <div className="shape">
                <video loop autoPlay={true} muted={true} className="w-100">
                    <source src="https://evilwizardweb.s3.amazonaws.com/video/NewIntroBanner.mp4" />
                    Your browser does not support the video tag.
                </video>
                {/* <img src={intro} alt='intro' className='w-100' />  */}
            </div>
            

        </section>
    )
}

export default Hero