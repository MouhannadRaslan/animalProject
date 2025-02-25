function Subscribe() {
  return (
    <>
      <div
        className="container-fluid"
        style={{
          backgroundColor: "#833de7",
        }}
      >
        <div className="row p-5">
          <div className="col-md-12">
            <h1 className="fw-bolder display-5 text-center text-light">
              Subscribe to Our Newsletter
            </h1>
          </div>
        </div>
        <div className="row justify-content-center mb-1 p-5">
          <div className="col-md-4">
            <label htmlFor="" className="text-light">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter Your Email"
              className="form-control border-0 border-bottom rounded-0"
              style={{
                backgroundColor: "#833de7",
              }}
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="" className="text-light">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter Your Name"
              className="form-control border-0 border-bottom rounded-0"
              style={{
                backgroundColor: "#833de7",
              }}
            />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-2">
            <a
              href=""
              style={{ backgroundColor: "#fbc43c" }}
              className="btn mb-5 ms-5 rounded-0 text-dark p-3 ps-4 pe-4"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Subscribe;
