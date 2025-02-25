import img4 from '../assets/img/img-4.jpg';
import img5 from '../assets/img/img-5.jpg';
import img6 from '../assets/img/img-6.jpg';
import img1 from '../assets/img/img-1.jpg';
import img2 from '../assets/img/img-2.jpg';
import img3 from '../assets/img/img-3.jpg';

function AboutHappy(){
    return(
        <>      
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className='fw-bolder text-center display-5 mb-5'>Our Happy Clients</h1>
                    </div>
                </div>
                <div className="row justify-content-center">
                        <div className="col-md-4">
                            <img src={img4} alt="" className="img-fluid" />
                        </div>
                        <div className="col-md-4">
                            <img src={img5} alt="" className="img-fluid" />
                        </div>
                        <div className="col-md-4">
                            <img src={img6} alt="" className="img-fluid" />
                        </div>
                        <div className="col-md-4">
                            <img src={img1} alt="" className="img-fluid mt-4" />
                        </div>
                        <div className="col-md-4">
                            <img src={img2} alt="" className="img-fluid mt-4" />
                        </div>
                        <div className="col-md-4">
                            <img src={img3} alt="" className="img-fluid mt-4" />
                        </div>
                </div>
            </div>
        </>
    );
}

export default AboutHappy;