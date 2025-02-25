import Icon1 from '../assets/img/icon-1.png';
import Icon2 from '../assets/img/icon-2.png';
import Icon3 from '../assets/img/icon-3.png';
import Icon4 from '../assets/img/icon-4.png';


function Pets(){
    return(
        <>
            <div className="container-fluid" style={{backgroundColor:"#fff9eb"}}>
                <div className="row p-5">
                    <div className="col-md-12">
                    <h1 className="fw-bolder display-4 text-center">Why Pets Owners Loves Us</h1>
                    
                    </div>
                </div>
                <div className="row justify-content-center pb-5 mb-5">
                        <div className="col-md-2">
                            <div className='justify-content-center ms-5'>
                                <img src={Icon1} alt="" className="img-fluid w-25 ms-5 mt-2" />
                                <h4 className='text-center mt-3 me-4'>Quality</h4>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className='justify-content-center ms-5'>
                                <img src={Icon2} alt="" className="img-fluid w-25 ms-5 mt-2" />
                                <h4 className='text-center mt-3 me-4'>Fair pricing</h4>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className='justify-content-center ms-5'>
                                <img src={Icon3} alt="" className="img-fluid w-25 ms-5 mt-2" />
                                <h4 className='text-center mt-3 me-4'>Transparency</h4>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className='justify-content-center ms-5'>
                                <img src={Icon4} alt="" className="img-fluid w-25 ms-5 mt-2" />
                                <h4 className='text-center mt-3 me-4'>Family</h4>
                            </div>
                        </div>
                    </div>
            </div>
        </>
    );
}

export default Pets ;