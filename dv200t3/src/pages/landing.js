import React from "react";
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
// import '../css/landing.css';

function Landing (){

  return(
    <>
      <MDBCarousel showControls >
        <MDBCarouselItem
          className='w-100 d-block'
          itemId={1}
          src='https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg'
          alt='...'
          style={{height: '400px'}}
        >
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </MDBCarouselItem>

        <MDBCarouselItem
          className='w-100 d-block'
          itemId={2}
          src='https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg'
          alt='...'
          style={{height: '400px'}}
        >
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </MDBCarouselItem> 

        <MDBCarouselItem
          className='w-100 d-block'
          itemId={3}
          src='https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg'
          alt='...'
          style={{height: '400px'}}
        >
          <h5>Third slide label</h5>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </MDBCarouselItem>
      </MDBCarousel>
      <br />
      <div  style={{backgroundColor: "#F5F5F5", width: "90%", marginLeft: "auto", marginRight: "auto", borderRadius: "7px"}}>
        <div class="row" style={{width: "80%", marginLeft: "auto", marginRight: "auto", paddingTop: "50px",  paddingBottom: "50px"}}>
          <h1>Nvidia</h1>
          <div class="col-sm-3">
            <div class="card">
              <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                <img src="https://thimg-afcc.kxcdn.com/@wth-img/225x225/products/2020/12/08/th00498291-1.jpg" alt="" class="img-fluid"/>
                <a href="#!">
                <div class="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.15)"}}></div>
                </a>
              </div>
              <div class="card-body">
                <h5 class="card-title">$ 129.99</h5>
                <p class="card-text">View more...</p>
                <a href="#!" class="btn btn-primary">Buy Now</a>
              </div>
            </div>
          </div>
          <div class="col-sm-3">
            <div class="card">
              <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7FHLQDQh5GUPK0XZA9lYoGjo8YUkjuq_iS-cbOkbvCtZdLi-KST7UjMUguh1Qa2IyjUs&usqp=CAU" alt="" class="img-fluid"/>
                <a href="#!">
                <div class="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.15)"}}></div>
                </a>
              </div>
              <div class="card-body">
                <h5 class="card-title">$ 250.00</h5>
                <p class="card-text">View more...</p>
                <a href="#!" class="btn btn-primary">Buy Now</a>
              </div>
            </div>
          </div>
          <div class="col-sm-3">
            <div class="card">
              <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqzmlIIPMxIaaXt0PCpfgzl1Dy81tfGckrK7ykm2Q2a3lJU0L_CcpidwbcifSToa3-rb8&usqp=CAU" alt="" class="img-fluid"/>
                <a href="#!">
                <div class="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.15)"}}></div>
                </a>
              </div>
              <div class="card-body">
                <h5 class="card-title">$ 189.99</h5>
                <p class="card-text">View more...</p>
                <a href="#!" class="btn btn-primary">Buy Now</a>
              </div>
            </div>
          </div>
          <div class="col-sm-3">
            <div class="card">
              <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqzmlIIPMxIaaXt0PCpfgzl1Dy81tfGckrK7ykm2Q2a3lJU0L_CcpidwbcifSToa3-rb8&usqp=CAU" alt="" class="img-fluid"/>
                <a href="#!">
                <div class="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.15)"}}></div>
                </a>
              </div>
              <div class="card-body">
                <h5 class="card-title">$ 189.99</h5>
                <p class="card-text">View more...</p>
                <a href="#!" class="btn btn-primary">Buy Now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br/>
      <div  style={{backgroundColor: "#F5F5F5", width: "90%", marginLeft: "auto", marginRight: "auto", borderRadius: "7px"}}>
        <div class="row" style={{width: "80%", marginLeft: "auto", marginRight: "auto", paddingTop: "50px",  paddingBottom: "50px"}}>
          <h1>AMD</h1>
          <div class="col-sm-3">
            <div class="card">
              <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                <img src="https://thimg-afcc.kxcdn.com/@wth-img/225x225/products/2020/12/08/th00498291-1.jpg" alt="" class="img-fluid"/>
                <a href="#!">
                <div class="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.15)"}}></div>
                </a>
              </div>
              <div class="card-body">
                <h5 class="card-title">$ 129.99</h5>
                <p class="card-text">View more...</p>
                <a href="#!" class="btn btn-primary">Buy Now</a>
              </div>
            </div>
          </div>
          <div class="col-sm-3">
            <div class="card">
              <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7FHLQDQh5GUPK0XZA9lYoGjo8YUkjuq_iS-cbOkbvCtZdLi-KST7UjMUguh1Qa2IyjUs&usqp=CAU" alt="" class="img-fluid"/>
                <a href="#!">
                <div class="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.15)"}}></div>
                </a>
              </div>
              <div class="card-body">
                <h5 class="card-title">$ 250.00</h5>
                <p class="card-text">View more...</p>
                <a href="#!" class="btn btn-primary">Buy Now</a>
              </div>
            </div>
          </div>
          <div class="col-sm-3">
            <div class="card">
              <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqzmlIIPMxIaaXt0PCpfgzl1Dy81tfGckrK7ykm2Q2a3lJU0L_CcpidwbcifSToa3-rb8&usqp=CAU" alt="" class="img-fluid"/>
                <a href="#!">
                <div class="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.15)"}}></div>
                </a>
              </div>
              <div class="card-body">
                <h5 class="card-title">$ 189.99</h5>
                <p class="card-text">View more...</p>
                <a href="#!" class="btn btn-primary">Buy Now</a>
              </div>
            </div>
          </div>
          <div class="col-sm-3">
            <div class="card">
              <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqzmlIIPMxIaaXt0PCpfgzl1Dy81tfGckrK7ykm2Q2a3lJU0L_CcpidwbcifSToa3-rb8&usqp=CAU" alt="" class="img-fluid"/>
                <a href="#!">
                <div class="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.15)"}}></div>
                </a>
              </div>
              <div class="card-body">
                <h5 class="card-title">$ 189.99</h5>
                <p class="card-text">View more...</p>
                <a href="#!" class="btn btn-primary">Buy Now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
      
  )
}
export default Landing;