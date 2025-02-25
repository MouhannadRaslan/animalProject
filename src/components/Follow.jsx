import follow1 from '../assets/img/follow-1.jpg';
import follow2 from '../assets/img/follow-2.jpeg';
import follow3 from '../assets/img/follow-3.jpg';
import follow4 from '../assets/img/follow-4.jpg';

function Follow(){
    return(
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-1">
                    <i class="fa-brands fa-instagram fa-xl text-light p-3 pt-4 pb-4 rounded-circle mb-5" style={{backgroundColor:"#833de7"}}></i>
                    
                    </div>
                    <div className="col-md-12">
                    <h1 className="fw-bolder display-4 text-center mb-5">Follow us on Instagram</h1>
                    </div>
                </div>
                <div className="row justify-content-center mb-5">
                    <div className="col-md-3">
                        <img src={follow1} alt="" className="img-fluid" />
                    </div>
                    <div className="col-md-3">
                        <img src={follow2} alt="" className="img-fluid" />
                    </div>
                    <div className="col-md-3">
                        <img src={follow3} alt="" className="img-fluid" style={{height:"306px", width:"306px"}} />
                    </div>
                    <div className="col-md-3">
                        <img src={follow4} alt="" className="img-fluid" style={{height:"306px" ,width:"306px"}} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Follow;