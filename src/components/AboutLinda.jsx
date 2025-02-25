import Linda from '../assets/img/linda.jpg';


function AboutLinda(){
    return(
        <>
            <div className="container">
                <div className="row mt-5 mb-5 justify-content-center g-5">
                    <div className="col-md-5">
                        <img src={Linda} alt="" className="img-fluid rounded-circle" />
                    </div>
                    <div className="col-md-5 d-flex align-items-center">
                        <div>
                        <p className='lead'>“Dogs are my best friends, my confidants, my inspiration. I can't imagine starting my day with a snuggle from my dog Charlie.”</p>
                        <h5 className='fw-bold'>Co-owner</h5>
                        <h1 className='fw-normal'>Linda Larson</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AboutLinda ;