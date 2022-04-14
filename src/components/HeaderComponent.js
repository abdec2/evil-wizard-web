const HeaderComponent = () => {
    return (
        <header id="header">
            {/* <!-- Navbar --> */}
            <nav data-aos="zoom-out" data-aos-delay="800" className="navbar navbar-expand">
                <div className="container header">
                    {/* <!-- Navbar Brand--> */}
                    <a className="navbar-brand" href="#">
                        <img className="navbar-brand-sticky" src="assets/img/logo/logo.png" alt="sticky brand-logo" />
                    </a>
                    <div className="ml-auto"></div>
                    {/* <!-- Navbar --> */}
                    <ul className="navbar-nav items mx-auto">
                        <li className="nav-item dropdown">
                            <a className="nav-link" href="">About</a>
                        </li>
                        
                        <li className="nav-item">
                            <a href="" className="nav-link">Roadmap</a>
                        </li>

                        <li className="nav-item">
                            <a href="" className="nav-link">Team</a>
                        </li>

                        <li className="nav-item">
                            <a href="" className="nav-link">Mint</a>
                        </li>
                        
                    </ul>
                    
                    <ul className="navbar-nav toggle">
                        <li className="nav-item">
                            <a href="#" className="nav-link" data-toggle="modal" data-target="#menu">
                                <i className="fas fa-bars toggle-icon m-0"></i>
                            </a>
                        </li>
                    </ul>

                    {/* <!-- Navbar Action Button --> */}
                    <ul className="navbar-nav action">
                        <li className="nav-item ml-3">
                            <a href="" className="btn ml-lg-auto btn-bordered-white"><i className="icon-wallet mr-md-2"></i>Wallet Connect</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default HeaderComponent