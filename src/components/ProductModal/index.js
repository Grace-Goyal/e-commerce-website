import Dialog from '@mui/material/Dialog';
import Button from "@mui/material/Button";
import { MdClose } from "react-icons/md";
import Rating from '@mui/material/Rating';
import Slider from 'react-slick';
import { useRef } from 'react';
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import ProductZoom from "..//ProductZoom";
import QuantityBox from '../QuantityBox';
import { LiaRupeeSignSolid } from "react-icons/lia";

const ProductModal = (props) => {

    


    return(
       <>
         <Dialog open={true} className='productModal' onClose={()=>props.closeProductModal()}>
         <Button classname='close_' onClick={()=>props.closeProductModal()}><MdClose/></Button>
         <h4 class="mb-1 font-weight-bold">All Natural Italian-Style Chicken Meatballs</h4>
         <div className='d-flex align-items-center'>
         <div className='d-flex align-items-center mr-4'>
         <span>Brands:</span>
         <span className='ml-2'><b>Welch's</b></span>
         </div>
         <Rating name="read-only" value={5} readOnly size="small" precision={0.5}/>

         </div>

         <hr/>
         <div className='row mt-2 productDetailModal'>
         <div className='col-md-5'>
            <ProductZoom/>


         </div>
         <div className='col-md-7'>
            <div className='d-flex info align-items-center mb-3'>
                <span className='oldPrice lg mr-2'><LiaRupeeSignSolid/>760</span>
                <span className='netPrice text-danger lg'><LiaRupeeSignSolid/>620</span>
            </div>
            <span className="badge bg-success">IN STOCK</span>
            <p className='mt-2'>Lorem ipsum dolor sit amet molestie pulvinar augue. Condimentum litora congue himenaeos feugiat consectetur platea pulvinar ad conubia ac fermentum.</p>
            <div className='d-flex align-items-center'>
                <QuantityBox/>
                <Button className='btn-blue btn-lg btn-big btn-round ml-3'>Add to Cart</Button>
            </div>
         </div>

         </div>
         </Dialog>
       </>
    )
}

export default ProductModal;