function ContactUs(){
    return(
        <>
            <div className="container-fluid" style={{backgroundColor:"#fbc43c"}}>
                <div className="row justify-content-center p-5">
                    <div className="col-md-8">
                        <div className="">
                            <h1 className="fw-bolder text-center display-5">
                            Contact Us
                            </h1>
                        </div>
                        <div>
                            <form action="">
                                <label htmlFor="" className="text-dark">Name</label>
                                <input type="text" className="form-control border-0 rounded-0 border-bottom border-dark mb-5" placeholder="Enter your Name" style={{backgroundColor:"#fbc43c"}} />
                                <label htmlFor="" className="text-dark">Email</label>
                                <input type="email" placeholder="Enter Your Email" className="form-control border-0 rounded-0 border-bottom border-dark mb-5" style={{backgroundColor:"#fbc43c"}} />
                                <label htmlFor="" className="text-dark">Message</label>
                                <textarea placeholder="Enter Your Message" rows={7} name="" className="form-control border-0 rounded-0 border-bottom border-dark mb-5" id="" style={{backgroundColor:"#fbc43c"}}></textarea>
                                <div className="row justify-content-center">
                                    <div className="col-md-2">
                                    <button style={{backgroundColor:"#833de7"}} type="submit" className="btn rounded-0 text-light p-3 ps-4 pe-4 ms-2">SUBMIT</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ContactUs;