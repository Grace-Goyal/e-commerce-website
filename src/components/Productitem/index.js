import Rating from '@mui/material/Rating';
import { AiOutlineFullscreen } from "react-icons/ai";
import Button from "@mui/material/Button";
import { FaRegHeart } from "react-icons/fa";
import ProductModal from '../ProductModal';
import { useState } from "react";
import { LiaRupeeSignSolid } from "react-icons/lia";

const ProductItem = () =>{
const [isOpenProductModal,setisOpenProductModal]=useState(false);
    const viewProductDetails=(id) => {
        setisOpenProductModal(true);
    }
    const closeProductModal=()=>{
        setisOpenProductModal(false);
    }

    return(
        <>
        <div className="item productItem">
        <div className="imgWrapper">
            <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-346x310.jpg" className="w-100"/>
        <span className="badge badge-primary">27%</span>
        <div className="actions">
            <Button onClick={()=>viewProductDetails(1)}><AiOutlineFullscreen/></Button>
            <Button><FaRegHeart style={{fontSize:'20px'}}/></Button>
        </div>
        </div>

        <div className="info">
        <h4>Itallian Style Chicken Meatballs</h4>
        <span className="text-success d-block">In Stock</span>
        <Rating name="read-only" value={5} readOnly size="small" precision={0.5}/>
        <div className="d-flex">
        <span className='oldPrice lg mr-2'><LiaRupeeSignSolid/>760</span>
        <span className='netPrice text-danger lg'><LiaRupeeSignSolid/>620</span>
        </div>
        </div>
        
    </div>
    
    {
        isOpenProductModal===true && <ProductModal closeProductModal={closeProductModal}/>
    }
    </>
    )
}

export default ProductItem;