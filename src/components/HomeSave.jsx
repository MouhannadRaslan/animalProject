import Save from "../assets/img/save.jpeg";

function HomeSave() {
  return (
    <>
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-md-5">
            <img src={Save} alt="" className="img-fluid rounded-pill w-75" />
          </div>
          <div className="col-md-5 d-flex align-items-center">
            <div className="text-start">
              <h2 className="fw-normal mt-5">Save 20%</h2>
              <h1 className="fw-bolder display-5">End of Season Sale!</h1>
              <p className="lead">Save on all items. Ends soon, so shop now.</p>
              <div className="row g-0 mt-5">
                            <div className="col-md-4">
                                <a href="" style={{backgroundColor:"#833de7"}} className="btn rounded-0 text-light p-3 ps-4 pe-4">About Us</a>
                            </div>
                            <div className="col-md-4">
                                <a href="" style={{backgroundColor:"#fbc43c"}} className="btn rounded-0 text-dark p-3 ps-4 pe-4">Contact Us</a>
                            </div>
                        </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeSave;
