import ProductZoom from "../../components/ProductZoom";
import Rating from "@mui/material/Rating";
import QuantityBox from "../../components/QuantityBox";
import Button from "@mui/material/Button";
import { useState } from "react";
import { LiaRupeeSignSolid } from "react-icons/lia";

const ProductDetails = () => {
  const [activeTabs, setActiveTabs] = useState(0);
  const [activeSize, setActiveSize] = useState(null);
 
  
  return (
    <>
      <section className="productDetails section">
        <div className="container">
          <div className="row">
            <div className="col-md-4 pl-5">
              <ProductZoom />
            </div>
            <div className="col-md-7 pl-5 pr-5">
              <h2 className="hd text-capitalize">
                Italian-Style Chicken Meatball
              </h2>
              <ul className="list list-inline">
                <li className="list-inline-item">
                  <div className="d-flex align-items-center">
                    <span className="text-light mr-2">Brands : </span>
                    <span>Welch's</span>
                  </div>
                </li>
                <li className="list-inline-item">
                  <div className="d-flex align-items-center">
                    <Rating
                      name="read-only"
                      value={4.5}
                      readOnly
                      size="small"
                      precision={0.5}
                    />
                    <span className="text-light cursor ml-2">1 Review</span>
                  </div>
                </li>
              </ul>
              <div className="d-flex info mb-3">
                <span className="oldPrice lg mr-2">
                  <LiaRupeeSignSolid />
                  760
                </span>
                <span className="netPrice text-danger lg">
                  <LiaRupeeSignSolid />
                  620
                </span>
              </div>
              <span className="badge badge-success">IN STOCK</span>
              <p className="mt-3">
                Lorem ipsum dolor sit amet molestie pulvinar augue. Condimentum
                litora congue himenaeos feugiat consectetur platea pulvinar ad
                conubia ac fermentum.
              </p>
              <div className="d-flex align-items-center mt-3">
                <QuantityBox />
                <Button className="btn-blue btn-lg btn-big btn-round">
                  Add to Cart
                </Button>
              </div>
            </div>
          </div>
          <br />

          <div className="card mt-5 pt-5 detailsPageTabs">
            <div className="customTabs">
              <ul className="list list-inline">
                <li className="list-inline-item">
                  <Button
                    className={`${activeTabs === 0 && "active"}`}
                    onClick={() => {
                      setActiveTabs(0);
                    }}
                  >
                    Description
                  </Button>
                </li>
                <li className="list-inline-item">
                  <Button
                    className={`${activeTabs === 1 && "active"}`}
                    onClick={() => {
                      setActiveTabs(1);
                    }}
                  >
                    Additional Information
                  </Button>
                </li>
                <li className="list-inline-item">
                  <Button
                    className={`${activeTabs === 2 && "active"}`}
                    onClick={() => {
                      setActiveTabs(2);
                      
                    }}
                  >
                    Reviews
                  </Button>
                </li>
              </ul>
              <br />
              {activeTabs === 0 && 
                <div className="tabContent">
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
              }

              {activeTabs === 1 && 
                <div className="tabContent">
                  <div className="table-responsive">
                    <table className="table table-bordered">
                      <tbody>
                        <tr class="stand-up">
                          <th>Stand Up</th>
                          <td>
                            <p>35"L x 24"W x 37-45"H(front to back wheel)</p>
                          </td>
                        </tr>

                        <tr class="folded-wo-wheels">
                          <th>Folded (w/o wheels) </th>
                          <td>
                            <p>32.5"L x 18.5"W x 16.5"H</p>
                          </td>
                        </tr>

                        <tr class="folded-w-wheels">
                          <th>Folded (w/ wheels)</th>

                          <td>
                            <p>32.5"L x 24"W x 18.5"H</p>
                          </td>
                        </tr>

                        <tr class="door-pass-through">
                          <th>Door Pass Through</th>

                          <td>
                            <p>24</p>
                          </td>
                        </tr>

                        <tr class="frame">
                          <th>Frame</th>

                          <td>
                            <p>Aluminum</p>
                          </td>
                        </tr>

                        <tr class="weight-wo-wheels">
                          <th>weight (w/o wheels) </th>
                          <td>
                            <p>20 LBS</p>
                          </td>
                        </tr>

                        <tr class="weight-capacity">
                          <th>Weight Capacity</th>
                          <td>
                            <p>60 LBS</p>
                          </td>
                        </tr>
                        <tr class="width">
                          <th>Width</th>
                          <td>
                            <p>24"</p>
                          </td>
                        </tr>
                        <tr class="handle-height-ground-to-handle">
                          <th>Handle Height (ground to handle)</th>
                          <td>
                            <p>37-45"</p>
                          </td>
                        </tr>
                        <tr class="wheels">
                          <th>Wheels</th>
                          <td>
                            <p>12" air / wide track slick tread</p>
                          </td>
                        </tr>
                        <tr class="seat-back-height">
                          <th>Seat back height</th>
                          <td>
                            <p>21.5"</p>
                          </td>
                        </tr>
                        <tr class="head-room-inside-canopy">
                          <th>Head room (inside canopy)</th>
                          <td>
                            <p>25"</p>
                          </td>
                        </tr>
                        <tr class="pa_color">
                          <th>Color</th>
                          <td>
                            <p>Black, Blue, Red, White</p>
                          </td>
                        </tr>
                        <tr class="pa_size">
                          <th>Size</th>
                          <td>
                            <p>M, S</p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              }

{
    activeTabs===2 && 
    <div className="tabContent">
        <div className="row">
            <div className="col-md-8">
                <h3>Customer questions & answers</h3>
                <br/>

                <div className="card p-4 reviewsCard flex-row" >
    <div className="image">
        <div className="rounded-circle">
            <img src=""/></div>
            <span className="text-g d-block text-center font-weight-bold"></span>
    </div>
    </div>

<div className="info pl-5">
    <div className="d-flex align-items-center w-100">
        <h5 className="text-light">27/09/2024</h5>
<div className="ml-auto">
    <Rating name="half-rating-read" value={4.5} precision={0.5} readOnly size="small"/>
</div>
    </div>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
    </div>

<br className="res-hide"/>
<br className="res-hide"/>

<form className="reviewForm">
    <h4>Add a review</h4><br/>
    <div className="form-group">
        <textarea className="form-control" placeholder="Write a Review" name="review"></textarea>
    </div>

<div className="row">
    <div className="col-md-6">
        <div className="form-group"><input type='text' className="form-control" placeholder="Name" name="userName"/></div>
    </div>
</div>

<div className="col-md-6"><div className="form-group">
    <Rating name="rating" value={4.5} precision={0.5}/></div></div>

<br/>
<div className="form-group">
    <Button type="submit" className="btn-blue btn-round btn-lg btn-big">Submit Review</Button>
</div>

</form>


            </div>
        </div>
    </div>
}



            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
