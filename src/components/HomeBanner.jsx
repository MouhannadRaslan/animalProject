import BannerImg from '../assets/img/banner.jpg';

function HomeBanner(){
    return(
        <>
            <div className="container">
                <div className="row mt-5 justify-content-center mb-5">
                    <div className="col-md-5">
                        <h1 className="display-2 fw-normal mt-5">For All of Your <br /> Best Friend's <br /> Needs</h1>
                        <p className="lead mt-5">Image from <span style={{color:"#833de7"}}>Freepik</span></p>
                        <div className="row g-0 mt-5">
                            <div className="col-md-4">
                                <a href="" style={{backgroundColor:"#833de7"}} className="btn rounded-0 text-light p-3 ps-4 pe-4">About Us</a>
                            </div>
                            <div className="col-md-4">
                                <a href="" style={{backgroundColor:"#fbc43c"}} className="btn rounded-0 text-dark p-3 ps-4 pe-4">Contact Us</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <img src={BannerImg} className='img-fluid rounded-circle' alt="" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomeBanner;