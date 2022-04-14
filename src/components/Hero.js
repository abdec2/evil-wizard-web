
const Hero = () => {
    return (
        <section className="hero-section">
           
            <div className="container">
                <div className="row">
                    <div className="col-12 mt-5">
                        <div className="button-group">
                            <a className="btn btn-bordered-white" href=""><i className="icon-user mr-2"></i>About us</a>
                            <a className="btn btn-bordered-white" href=""><i className="icon-folder mr-2"></i>Our Collection</a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="shape h-100">
                <video autoPlay className="w-100">
                    <source src="https://evilwizardweb.s3.amazonaws.com/video/Intro.mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

        </section>
    )
}

export default Hero