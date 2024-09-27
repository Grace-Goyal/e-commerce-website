import Rating from '@mui/material/Rating';
import { Link } from 'react-router-dom';
import { LiaRupeeSignSolid } from "react-icons/lia";
import QuantityBox from '../../components/QuantityBox';
import { MdClose } from "react-icons/md";
import Button from "@mui/material/Button";

const Cart = () => {
  return (
    <>
      <section className="section cartPage">
        <div className="container">
          <div className="row">
            <div className="col-md-9 pr-5">
              <h2 className="hd mb-2">Your Cart</h2>
              <p>
                There are <b className="text-red">3</b> products in your cart
              </p>
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th width="35%">Product</th>
                      <th width="15%">Unit Price</th>
                      <th width="25%">Quantity</th>
                      <th width="15%">Subtotal</th>
                      <th width="10%">Remove</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td width="35%">
                        <Link to="/product/1">
                        <div className="d-flex align-items-center cartItemimgWrapper">
                          <div className="imgWrapper">
                            <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-346x310.jpg" className="w-100" />
                          </div>
                          <div className="info px-3">
                            <h6>All Natural Italian-Style Chicken Meatballs</h6>
                            <Rating name="read-only" value={4.5} precision={0.5} readOnly size="small"/>
                          </div>
                        </div>
                        </Link>
                      </td>
                      <td width="15%"><LiaRupeeSignSolid/>760</td>
                      <td width="25%"><QuantityBox/></td>
                      <td width="15%"><LiaRupeeSignSolid/>760</td>
                      <td width="10%"><span className='remove'><MdClose/></span></td>
                    </tr>
                    <tr>
                      <td width="35%">
                        <Link to="/product/1">
                        <div className="d-flex align-items-center cartItemimgWrapper">
                          <div className="imgWrapper">
                            <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-346x310.jpg" className="w-100" />
                          </div>
                          <div className="info px-3">
                            <h6>All Natural Italian-Style Chicken Meatballs</h6>
                            <Rating name="read-only" value={4.5} precision={0.5} readOnly size="small"/>
                          </div>
                        </div>
                        </Link>
                      </td>
                      <td width="15%"><LiaRupeeSignSolid/>760</td>
                      <td width="25%"><QuantityBox/></td>
                      <td width="15%"><LiaRupeeSignSolid/>760</td>
                      <td width="10%"><span className='remove'><MdClose/></span></td>
                    </tr>
                    <tr>
                      <td width="35%">
                        <Link to="/product/1">
                        <div className="d-flex align-items-center cartItemimgWrapper">
                          <div className="imgWrapper">
                            <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-346x310.jpg" className="w-100" />
                          </div>
                          <div className="info px-3">
                            <h6>All Natural Italian-Style Chicken Meatballs</h6>
                            <Rating name="read-only" value={4.5} precision={0.5} readOnly size="small"/>
                          </div>
                        </div>
                        </Link>
                      </td>
                      <td width="15%"><LiaRupeeSignSolid/>760</td>
                      <td width="25%"><QuantityBox/></td>
                      <td width="15%"><LiaRupeeSignSolid/>760</td>
                      <td width="10%"><span className='remove'><MdClose/></span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-md-3">
                <div className='card border p-3 cartDetails'>
                    <h4>CART TOTALS</h4>
                    <div className='d-flex align-items-center'>
                    <span>Subtotal</span>
                    <span className='ml-auto text-red font-weight-bold'><LiaRupeeSignSolid/>760</span>
                </div>
                <div className='d-flex align-items-center mb-3'>
                    <span>Shipping</span>
                    <span className='ml-auto'><b>FREE</b></span>
                </div>
                <div className='d-flex align-items-center mb-3'>
                    <span>Total</span>
                    <span className='ml-auto text-red font-weight-bold'><LiaRupeeSignSolid/>760</span>
                </div>
<br/>
                <Button className='btn-blue btn-lg btn-big'>Add to Cart</Button>

                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Cart;
