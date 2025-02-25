import Img1 from "../assets/img/img-1.jpg";

function HomeChoose() {
  return (
    <>
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-md-10">
            <h1 className="fw-bolder display-5 mb-5">Choose a Category</h1>
          </div>
          <div className="col-md-10">
            <div className="row justify-content-center">
              <div className="col-md-4">
                <div className="p-3 bg-light pt-5 pb-5">
                  <h2 className="fw-normal text-center mt-5">Play</h2>
                  <p className="lead text-center mt-4 mb-4">
                    Sample text. Click to select the Text Element.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="choose1 h-100"></div>
              </div>
              <div className="col-md-4">
                <div className="p-3 bg-light pt-5 pb-5">
                  <h2 className="fw-normal text-center mt-5">Walk</h2>
                  <p className="lead text-center mt-4 mb-4">
                    Sample text. Click to select the Text Element.
                  </p>
                </div>
              </div>
            </div>
            <div className="row mt-3 justify-content-center">
              <div className="col-md-4">
                <div className="choose2 h-100"></div>
              </div>
              <div className="col-md-4">
              <div className="p-3 bg-light pt-5 pb-5">
                  <h2 className="fw-normal text-center mt-5">Sleep</h2>
                  <p className="lead text-center mt-4 mb-4">
                    Sample text. Click to select the Text Element.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="choose3 h-100"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeChoose;
