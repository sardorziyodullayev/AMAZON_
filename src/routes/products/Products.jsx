import axios from 'axios';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { BsStarFill, BsStarHalf } from 'react-icons/bs'
import { AiOutlineStar } from 'react-icons/ai'
import c from "./Products.module.css";
import "./Products.module.css";

const Products = () => {
  
  const [allProductsData, setAllProductsData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8000/v2/allproducts")
      .then(response => setAllProductsData(response.data))
      .catch(err => console.log(err))
  }, [])

  const style = { color: "yellow", fontSize: "1.5em" }

  return (
    <div className={c.container}>
      <div>
        <div className={c.climateBox}>
         <h4>Climate Pledge Friendly</h4>
         <Link>
           <input type="checkbox" />
           <p>Climate Pledge Friendly</p>
         </Link>
       </div>
       <div className={c.departmentBox}>
        <h5>Department</h5>
        <Link><p>Any Department</p></Link>
        <Link><p>PlayStation 5</p></Link>
        <Link><p>PlayStation 4</p></Link>
        <Link><p>Xbox Series X & S</p></Link>
        <Link><p>Xbox One</p></Link>
        <Link><p>Nintendo Switch</p></Link>
        <Link><p>PC</p></Link>
        <Link><p>Mac</p></Link>
        <Link><p>Legacy Systems</p></Link>
        <Link><p>Microconsoles</p></Link>
        <Link><p>Virtual Reality</p></Link>
       </div>
       <div className={c.starBox}>
        <h5>Avg. Customer Review</h5>
        <Link>
          <AiOutlineStar style={style}/>
          <AiOutlineStar style={style}/>
          <AiOutlineStar style={style}/>
          <AiOutlineStar style={style}/>
          <AiOutlineStar style={style}/>
          <span>& Up</span>
        </Link>
        <Link>
          <AiOutlineStar style={style}/>
          <AiOutlineStar style={style}/>
          <AiOutlineStar style={style}/>
          <AiOutlineStar style={style}/>
          <AiOutlineStar style={style}/>
          <span>& Up</span>
        </Link>
        <Link>
          <AiOutlineStar style={style}/>
          <AiOutlineStar style={style}/>
          <AiOutlineStar style={style}/>
          <AiOutlineStar style={style}/>
          <AiOutlineStar style={style}/>
          <span>& Up</span>
        </Link>
        <Link>
          <AiOutlineStar style={style}/>
          <AiOutlineStar style={style}/>
          <AiOutlineStar style={style}/>
          <AiOutlineStar style={style}/>
          <AiOutlineStar style={style}/>
          <span>& Up</span>
        </Link>
       </div>
       <div className={c.featurebox}>
        <h5>Featured Brands</h5>
        <div className={c.selectionBox}>
        <Link>
         <input type="checkbox" />
         <span>Huperkin</span>
        </Link>
        <Link>
         <input type="checkbox" />
         <span>PowerA</span>
        </Link>
        <Link>
         <input type="checkbox" />
         <span>HORI</span>
        </Link>
        <Link>
         <input type="checkbox" />
         <span>PDP</span>
        </Link>
        <Link>
         <input type="checkbox" />
         <span>Maximum Games</span>
        </Link>
        <Link>
         <input type="checkbox" />
         <span>Merge Games</span>
        </Link>
        <Link>
         <input type="checkbox" />
         <span>Controller Gear</span>
        </Link>
        </div>
       </div>
       <div className={c.priceBox}>
        <h5>Price</h5>
        <Link>
          <p>Under $10</p>
        </Link>
        <Link>
          <p>$10 to $15</p>
        </Link>
        <Link>
          <p>$15 to $25</p>
        </Link>
        <Link>
          <p>$25 to $35</p>
        </Link>
        <Link>
          <p>$35 & Above</p>
        </Link>
        <input className={c.priceMin} type="text" placeholder='Min'/>
        <input className={c.priceMax} type="text" placeholder='Max'/>
        <button className={c.priceBtn} type='submit'>Go</button>
       </div>
       <div className={c.dateBox}>
        <h5>Release Date</h5>
        <Link>
          <p>Last 30 days</p>
        </Link>
        <Link>
          <p>Last 90 days</p>
        </Link>
        <Link>
          <p>Coming Soon</p>
        </Link>
       </div>
       <div className={c.packagingBox}>
        <h5>Packaging Option</h5>
        <Link>
          <input type="checkbox" />
          <span>Frustration-Free Packaging</span>
        </Link>
       </div>
       <div className={c.packagingBox}>
        <h5>Amazon Global Store</h5>
        <Link>
          <input type="checkbox" />
          <span>Amazon Global Store</span>
        </Link>
       </div>
       <div className={c.packagingBox}>
        <h5>Condition</h5>
        <Link>
          <input type="checkbox" />
          <span>New</span>
        </Link><br />
        <Link>
          <input type="checkbox" />
          <span>Used</span>
        </Link>
       </div>
       
      </div>


     <div className={c.productsBox}>
      {
        allProductsData.map(product => 
          <Link className={c.productsLink} to={`/seemore/products/${product._id}`} key={product._id}>
            <img className={c.productsImg} src={product?.image[0]?.url} alt=""/>
            <h2 className={c.productTitle}>{product.name}</h2>
            <p className={c.productsText}>{product.description.slice(0, 100)}</p>
           <div className={c.productsStars}>
           {
            product.ratings % 1 === 0 ?
              new Array(product.ratings).fill("#").map(() => 
                <BsStarFill key={uuidv4()}/>
              ) : 
              <>
              { 
                new Array(Math.floor(product.ratings)).fill("#").map(() => 
                    <BsStarFill key={uuidv4()}/>
                )
              }
              <BsStarHalf/>
              </>
            }
           </div>
          </Link>  
        )
      }
     </div>
    </div>
  )
}

export default Products