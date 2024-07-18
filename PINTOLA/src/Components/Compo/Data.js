import React, { useState } from 'react'
import { shopourbest, newlylaunched } from "./Datadetails"
import { useSelector, useDispatch } from 'react-redux'
import { add } from "../Slice/CartSlice"
import { Link } from 'react-router-dom'

const Data = () => {

  let [sold, setSold] = useState(shopourbest, newlylaunched)
  let [searchh, setSearchh] = useState("")
  let [pricerate, setPricerate] = useState("")

  let names = useSelector((state) => state.cart)
  let dispatch = useDispatch()

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


  return (
    <>
      <div>
        <div>
          <div className='con2'>
            <div id="carouselExampleIndicators" className="carousel slide">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                  className="active"
                  aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" className="nnnn"
                  aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" className="nnnn"
                  aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" className="nnnn"
                  aria-label="Slide 4"></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="https://pintola.in/cdn/shop/files/Website_Banner-4_1800x650_1783ac72-3589-4885-a437-536ab0b805fc_2000x.jpg?v=1717571458"
                    className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src="https://pintola.in/cdn/shop/files/Website_Banner_1_2000x.jpg?v=1709183995"
                    className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src="https://pintola.in/cdn/shop/files/Website-Banner-copy3_2000x.jpg?v=1708516056"
                    className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src="https://pintola.in/cdn/shop/files/Desktop_2000x.jpg?v=1704966813" alt="..." />
                </div>

              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev">
                <span className="carowe3ight5d5r4usel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
            <br></br>
            <br></br>

            <h1>
              <a href="/collections/best-seller">
                Shop Our Best Sellers</a>
            </h1>
            <br></br>
            <br></br>
            <div className='row text-center ms-5'>

              {shopourbest.map((demo) => {
                return (
                  <>
                    <div className='d-flex align-item-center  col-md-3 mb-3'>
                      <div className="cc">
                        <div className="c1">
                          <div className='aa'>
                            <Link to={`demo/${demo.id}`}>
                            <img src={demo.image} />

                            <div>
                              <h6>5% OFF</h6>
                            </div>
                            </Link>
                          </div>
                          <div className="pp">
                            <p> <a href="/products/high-protein-dark-chocolate-peanut-butter">{demo.title}</a>
                            </p>
                            <h6>from Rs.{demo.price}<del>Rs.{demo.oldp}</del>
                            </h6>
                          </div>
                          <div className='ss'>
                            <select>
                              <option value="crunchy/510gm">Crunchy/510gm</option>
                              <option value="crunchy/1kg">Crunchy/1kg</option>
                              <option value="creamy/510gm">Creamy/510gm</option>
                              <option value="creamy/1kg">Creamy/1kg</option>
                            </select>
                           
                            <button onClick={() => ADD(demo)}>Add to cart</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )
              })}
            </div>







            <h1>
              <a href="/collections/breakfast-cereals">
                Newly Launched</a>
            </h1>
            <br></br>
            <br></br>
            <div className='rows'>

              {newlylaunched.map((demo) => {
                return (
                  <>
                    <div className='data1'>
                      <div className="ccc">
                        <div className="c11">
                          <div className="bb">
                            <Link to={`demo/${demo.id}`}>
                            <img src={demo.image} />
                            <div>
                              <p>5% OFF</p>
                            </div>
                            </Link>
                          </div>
                          <div className='ppp'>
                            <p>
                              <a href="/products/pintola-dark-chocolate-cranberry-muesli-with-25-millet-60-wholegrains">
                                {demo.title}</a>
                            </p>
                            <h6 >From Rs.270<del>Rs.285</del>
                            </h6>
                          </div>
                          <div className='sss'>
                            <select>
                              <option value="350g">350g</option>
                              <option value="800g">800g</option>
                            </select>
                            <button onClick={() => ADD(demo)}>Add to cart</button>

                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )
              })}

            </div>
          </div>
        </div>
      </div >
    </>
  )
}

export default Data
