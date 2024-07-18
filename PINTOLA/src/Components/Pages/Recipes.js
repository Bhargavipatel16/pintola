import React from 'react'
import './Nav.css'


const Recipes = () => {
  return (
    <div>
      <br></br>
      <h1>Healthy & Delicious Recipes</h1>
      <br></br>
      <br></br>
      <div className='recipes'>
        <div className='recipe-item' >
          <img src='https://pintola.in/cdn/shop/articles/unnamed_3_800x.jpg?v=1711443260' />
          <br></br>
          <h4><a href="/blogs/recipes/peanut-butter-waffles-with-pintola-a-delicious-start-to-your-day">
            Peanut Butter Waffles with Pintola: A Delicious Start to Your Day</a></h4>
          <h6>2 min read </h6>
        </div>
        <div className='recipe-item' >
          <img src='https://pintola.in/cdn/shop/articles/Pintola_noodles_1_a60e6b39-4e08-43b3-a526-f89df28100b5_800x.jpg?v=1682574587' />
          <br></br>
          <h4><a href="/blogs/recipes/pintola-peanut-chilli-noodles">
            Pintola Peanut Butter Chilli Noodles</a></h4>
          <h6>1 min read </h6>
        </div>
        <div className='recipe-item' >
          <img src='https://pintola.in/cdn/shop/articles/with_product_2_800x.jpg?v=1682573527' />
          <br></br>
          <h4><a href="/blogs/recipes/pintola-peanut-butter-jelly-bread-pudding">
            Pintola Peanut Butter &amp; Jelly Bread Pudding</a></h4>
          <h6>1 min read </h6>
        </div>

        <div className='recipe-item' >
          <img src='https://pintola.in/cdn/shop/articles/Pintola_granola_ae91f103-ef8a-4ab5-8c59-62347d251389_800x.jpg?v=1682574657' />
          <br></br>
          <h4><a href="/blogs/recipes/pintola-peanut-butter-granola-recipe">
            Pintola Peanut Butter Granola Recipe</a></h4>
          <h6>1 min read </h6>


        </div>
      </div>
      <br></br>
      <br></br>
    </div>
  )
}

export default Recipes
