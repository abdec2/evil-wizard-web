import React from 'react'

const FooterComponent = () => {
    return (
        <footer className="footer-area p-4">
            <div className="container">
                <div className="row mb-5">
                    <div className="col-12 col-sm-6 p-4">
                        <div className="logo-footer">
                            <img src="assets/img/logo/logo.png" alt="" />
                        </div>
                        <p className='my-0'>A world that has been conquered by an evil and villainous wizard. His master plan was to make every newborn baby into spawns of himself with the same evil intentions!</p>

                        <ul className="social-icon-list d-flex pl-0" >
                            <li className='social-icons1'><a href="#"><em className="fab fa-facebook-f"></em></a></li>
                            <li className='social-icons1'><a href="#"><em className="fab fa-twitter"></em></a></li>
                            <li className='social-icons1'><a href="#"><em className="fab fa-youtube"></em></a></li>
                            <li className='social-icons1'><a href="#"><em className="fab fa-github"></em></a></li>
                            <li className='social-icons1'><a href="#"><em className="fab fa-bitcoin"></em></a></li>
                            <li className='social-icons1'><a href="#"><em className="fab fa-medium-m"></em></a></li>
                        </ul>
                    </div>

                    <div className="col-12 col-sm-6 p-4">
                        <div className="nftCalender">
                            <img src="" alt="" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-sm-6">
                        <div className=" mb-3">
                            <div className="">
                                <p>Copyright &copy; 2022, Evil Wizards</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-sm-6 poweredby'>
                        <p className="text-right">Powered by:&nbsp;
                            <a href="http://www.brdigitech.com" target="blank" className=""><i>Button R Digitech (bRd)</i></a>
                        </p>
                    </div>
                </div>

               
            </div>
        </footer>
    )
}

export default FooterComponent