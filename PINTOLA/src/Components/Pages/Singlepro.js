import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { shopourbest, newlylaunched } from '../Compo/Datadetails'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../Slice/CartSlice'
import { add } from "../Slice/CartSlice"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react'

const Singlepro = () => {
  let names = useSelector((state) => state.cart)
  let dispatch = useDispatch()
  let { id } = useParams();
  let [selectedSize, setSelectedSize] = useState('');
  let [selectedFlavor, setSelectedFlavor] = useState('');

  // let { id } = useParams();

  let INCR = (demoId) => {
    dispatch(increment(demoId))
  }

  let DECR = (demoId) => {
    dispatch(decrement(demoId))
  }

  let ADD = (demo) => {
    // dispatch(add(demo))

    let numm = names.find((totalitem) => totalitem.id === demo.id)
    if (!numm) {
      dispatch(add(demo))
    }
    else {
      alert("product succesfully added in cart..🤩")
    }
  }

  let demo = shopourbest.find((filterID) => filterID.id == id)
  if (!demo) {
    demo = newlylaunched.find((filterID) => filterID.id == id);
  }



  // let demo = shopourbest.find((filterID) => filterID.id == id) || newlylaunched.find((filterID) => filterID.id == id);

  if (!demo) {
    return <div>Product not found</div>;
  }

  let variants = demo.variants || demo.variants;

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  const handleFlavorChange = (flavor) => {
    setSelectedFlavor(flavor);
  };

  let selectedVariant = variants.find(
    (variant) => variant.size === selectedSize && (!variant.flavor || variant.flavor === selectedFlavor)
  );

  // Get unique sizes and flavors
  const uniqueSizes = [...new Set(variants.map((variant) => variant.size))];
  const uniqueFlavors = [...new Set(variants.map((variant) => variant.flavor).filter(flavor => flavor))];





  return (
    <div>
     
        <div className="pbody">

          {/* <h3 className="card-title text-center">{demo.id}</h3> */}
          {/* <hr /> */}
          <img src={demo.image} />
          <div className='pdetails'>
            <div>
              <h6>5% OFF</h6>
            </div>
            <h1 >{demo.title}</h1>
            <h6 style={{ marginTop: 50 }}>Rs.{demo.price} <del style={{ color: 'gray' }}>Rs.{demo.oldp}</del></h6>


            {variants && (
              <>
                <div className='mt-4'>
                  <label className='form-label'>Size:</label>
                  <div className='button-group'>
                    {uniqueSizes.map((size) => (
                      <button
                        key={size}
                        className={`btn ${selectedSize === size ? 'btn' : 'btn-o'}`}
                        onClick={() => handleSizeChange(size)}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
                {uniqueFlavors.length > 0 && (
                  <div className='mt-4'>
                    <label className='form-label'>variant:</label>
                    <div className='button-group'>
                      {uniqueFlavors.map((flavor) => (
                        <button
                          key={flavor}
                          className={`btn ${selectedFlavor === flavor ? 'btn' : 'btn'}`}
                          onClick={() => handleFlavorChange(flavor)}>
                          {flavor}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </>
            )}
            <p >Price:
              {selectedVariant ? selectedVariant.price : demo.price}
            </p>





            <div className='sbtnn'>
              <a href="#" className="sbtnd" onClick={() => DECR(demo.id)}>-</a>
              <p>{demo.quantity}</p>
              <a href="#" className="sbtni" onClick={() => INCR(demo.id)}>+</a>
            </div>
            <br></br>
            <br></br>

            <div className='d-flex gap-3'>
              <div className='atc'>
                <button><a href="#" onClick={() => ADD(demo)}><FontAwesomeIcon icon={faCartShopping} />  ADD TO CART</a></button>
              </div>
              <div className='bin'>
                <Link to=""><button style={{ backgroundColor: '#E36E1E', color: 'white', border: 'none' }}>Buy it now</button></Link>
              </div>
            </div>
            <p className="card-text mt-4">{demo.description}</p>
          </div>
        </div>
      </div >
  )
}

export default Singlepro
