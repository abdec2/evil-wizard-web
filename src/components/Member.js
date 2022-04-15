
const Member = ({name, designation, image }) => {
    return (
        <div className="col-12 col-sm-6 col-lg-4 item">
            <div className="card text-center team-card-box-shadow">
                <div className="image-over">
                    <a href="">
                        <img className="card-img-top" src={image} alt="" />
                    </a>
                    {/* <!-- Seller --> */}
                    <a className="seller" href="">
                        <div className="seller-thumb avatar-lg">
                            <img className="rounded-circle" src={image} alt="" />
                        </div>
                    </a>
                </div>
                {/* <!-- Card Caption --> */}
                <div className="card-caption col-12 p-0">
                    {/* <!-- Card Body --> */}
                    <div className="card-body mt-4">
                        <a href="">
                            <h5>{name}</h5>
                            <p>{designation}</p>
                        </a>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Member