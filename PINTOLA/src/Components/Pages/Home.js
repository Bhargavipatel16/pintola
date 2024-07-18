import React from 'react'
import Data from '../Compo/Data'
import './Nav.css'


const Home = () => {
    return (
        
        <div className='con2'>
            <Data/>
            {/* for first carousel  */}

            {/* <div id="carouselExampleIndicators" className="carousel slide">
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
            <br></br> */}


            {/* <h1>
                <a href="/collections/best-seller">
                    Shop Our Best Sellers</a>
            </h1>
            <br></br>
            <br></br>
            <div className="cc">
                <div className="c1">
                    <div className='aa'>
                        <img src="https://pintola.in/cdn/shop/files/CRUNCHY_82a27824-77c1-4d5c-a045-332d9d922e60_400x.jpg?v=1709807077" />

                        <div>
                            <h6>5% OFF</h6>
                        </div>
                    </div>
                    <div className="pp">
                        <p> <a href="/products/high-protein-dark-chocolate-peanut-butter">High Protein
                            Dark Chocolate Peanut...</a>
                        </p>
                        <h6>From Rs.379<del>Rs.399</del>
                        </h6>
                    </div>
                    <div className='ss'>
                        <select>
                            <option value="crunchy/510gm">Crunchy/510gm</option>
                            <option value="crunchy/1kg">Crunchy/1kg</option>
                            <option value="creamy/510gm">Creamy/510gm</option>
                            <option value="creamy/1kg">Creamy/1kg</option>
                        </select>
                        <button>Add to cart</button>
                    </div>
                </div>
                <div className="c2">
                    <div className="aa1">
                        <img src="https://pintola.in/cdn/shop/files/CREAMY_400x.jpg?v=1709806374" />

                        <div>
                            <h6>5% OFF</h6>
                        </div>
                    </div>
                    <div className='pp1'>
                        <p><a href="https://pintola.in/products/all-natural-peanut-butter">All Natural Peanut Butter</a>
                        </p>
                        <h6>From Rs.166<del>Rs.175</del>
                        </h6>
                    </div>
                    <div className='ss1'>
                        <select>
                            <option value="Creamy / 350gm">Creamy / 350gm</option>
                            <option value="Creamy / 1kg">Creamy / 1kg</option>
                            <option value="Creamy / 2.5kg">Creamy / 2.5kg</option>
                            <option value="Crunchy / 350gm">Crunchy / 350gm</option>
                            <option value="Crunchy / 1kg">Crunchy / 1kg</option>
                            <option value="Crunchy / 2.5kg">Crunchy / 2.5kg</option>
                            <option value="Extra crunchy / 350gm">Extra crunchy / 350gm</option>
                            <option value="Extra crunchy / 1kg">Extra crunchy / 1kg</option>
                        </select>
                        <button>Add to cart</button>
                    </div>
                </div>
                <div className="c3">
                    <div className="aa2">
                        <img src="https://pintola.in/cdn/shop/files/FirstImageHPOatsForwebsite-400g_400x.jpg?v=1709186086"/>

                        <div>
                            <h6>4% OFF</h6>
                        </div>
                    </div>
                    <div className='pp2'>
                        <p> <a href="/products/high-protein-dark-chocolate-oats">
                            High Protein Dark Chocolate Oats</a>
                        </p>
                        <h6 >From Rs.332<del >Rs.349</del>
                        </h6>
                    </div>
                    <div className='ss2'>
                        <select>
                            <option value="400g">400g</option>
                            <option value="1kg">1kg</option>

                        </select>
                        <button>Add to cart</button>
                    </div>
                </div>
                <div className="c4">
                    <div className="aa3">
                        <img src="https://pintola.in/cdn/shop/products/Unsalted_400x.jpg?v=1670653747"/>

                        <div>
                            <h6>5% OFF</h6>
                        </div>
                    </div>
                    <div className='pp3'>
                        <p> <a href="/products/organic-wholegrain-brown-rice-cakes">Organic Wholegrain Brown Rice
                            Cakes</a>
                        </p>
                        <h6>From Rs.152<del>Rs.160</del>
                        </h6>
                    </div>
                    <div className='ss3'>
                        <select>
                            <option value="Unsalted">Unsalted</option>
                            <option value="Salted">Salted</option>
                            <option value="Multigrain">Multigrain</option>
                            <option value="Multigrain Salted">Multigrain Salted</option>
                        </select>
                        <button>Add to cart</button>
                    </div>
                </div>
            </div> 
            <br></br>
            <br></br>*/}


             {/* <h1>
                <a href="/collections/breakfast-cereals">
                    Newly Launched</a>
            </h1>
            <br></br>
            <br></br> 
            <div className="ccc">
                <div className="c11">
                    <div className="bb">
                        <img src="https://pintola.in/cdn/shop/files/Chocolate_350gm_400x.jpg?v=1712055042"/>
                        <div>
                            <p>5% OFF</p>
                        </div>
                    </div>
                    <div className='ppp'>
                        <p>
                            <a href="/products/pintola-dark-chocolate-cranberry-muesli-with-25-millet-60-wholegrains">
                                Dark Chocolate &amp; Cranberry Muesli wit...</a>
                        </p>
                        <h6 >From Rs.270<del
                         >Rs.285</del>
                        </h6>
                    </div>
                    <div className='sss'>
                        <select>
                            <option value="350g">350g</option>
                            <option value="800g">800g</option>
                        </select>
                        <button>Add to cart</button>
                    </div>
                </div>

                <div className="c22">
                    <div className="bb1">
                        <img src="https://pintola.in/cdn/shop/files/Fruit-_-Nut_350gm_400x.jpg?v=1712054711"/>

                        <div>
                            <p>
                                5% OFF</p>
                        </div>
                    </div>
                    <div className='ppp1'>
                        <p>
                            <a href="/products/pintola-fruit-nut-muesli-with-28-millet-68-wholegrains-350g">
                                Fruit &amp; Nut Muesli with 68% Whole Gra...</a>
                        </p>
                        <h6 >From Rs.280<del
                           >Rs.295</del>
                        </h6>
                    </div>
                    <div className='sss1'>
                        <select>
                            <option value="350g">350g</option>
                            <option value="800g">800g</option>

                        </select>
                        <button>Add
                            to cart</button>
                    </div>
                </div>

                <div className="c33">
                    <div className="bb2">
                        <img src="https://pintola.in/cdn/shop/files/FirstImageHPOatsForwebsite-400g_400x.jpg?v=1709186086"
                             />

                        <div>
                            <p>
                                4% OFF</p>
                        </div>
                    </div>
                    <div className='ppp2'>
                        <p >
                            <a href="/products/high-protein-dark-chocolate-oats"
                                >High Protein Dark Chocolate
                                Oats</a>
                        </p>
                        <h6>From Rs.332<del
                           >Rs.349</del>
                        </h6>
                    </div>
                    <div className='sss2'>
                        <select>
                            <option value="400g">400g</option>
                            <option value="1kg">1kg</option>

                        </select>
                        <button
                            >Add
                            to cart</button>
                    </div>
                </div>

                <div className="c44">
                    <div className="bb3">
                        <img src="https://pintola.in/cdn/shop/files/1-09_ecacc5ea-7a7b-4938-8882-7d0e8e406ec1_400x.jpg?v=1692339564"
                />

                        <div>
                            <p>  5% OFF</p>
                        </div>
                    </div>
                    <div className='ppp3'>
                        <p >
                            <a href="/products/jumbo-rolled-oats"
                                >Jumbo Rolled Oats</a>
                        </p>
                        <h6 >From Rs.189<del
                           >Rs.199</del>
                        </h6>
                    </div>
                    <div className='sss3'>
                        <select>
                            <option value="400gm">400gm</option>
                            <option value="1kg">1kg</option>
                        </select>
                        <button>Add
                            to cart</button>
                    </div>
                </div>

                <div className="c55">
                    <div className="bb4">
                        <img src="https://pintola.in/cdn/shop/files/Wholegrain_350gm_400x.jpg?v=1712054433"/>

                        <div>
                            <p>
                                5% OFF</p>
                        </div>
                    </div>
                    <div className='ppp4'>
                        <p>
                            <a href="/products/pintola-wholegrain-seeds-muesli-with-33-millet-350g">
                                Wholegrain &amp;Seeds Muesli with 33% M...</a>
                        </p>
                        <h6>From Rs.270<del
                          >Rs.285</del>
                        </h6>
                    </div>
                    <div className='sss4'>
                        <select>
                            <option value="350g">350g</option>
                            <option value="800g">800g</option>

                        </select>
                        <button>Add
                            to cart</button>
                    </div>
                </div>
            </div>
            <br></br> 
            <br></br>*/}


             <h1 >
                <a href="/blogs/all">
                    Recent Blogs</a>
            </h1>
            <br></br>
            <br></br>
            <div className="cccc">
                <div className="c111">
                    <img src="//pintola.in/cdn/shop/articles/Blog_5_1600x.jpg?v=1694432060" />
                    <div className='pppp'>
                        <p>
                            <a className="featured-article--link"
                                href="/blogs/all/kickstart-your-day-with-pintolas-millet-based-muesli-a-nutrient-dense-breakfast">
                                Kickstart Your Day with Pintola's Millet-Based Muesli – A Nutrient-Dense Breakfast</a>
                        </p>
                        <h6>
                            September 11,2023 | 2 min read
                        </h6>
                    </div>
                </div>

                <div className="c222">
                    <img src="https://pintola.in/cdn/shop/articles/Blog_4_400x.png?v=1694431625" />
                    <div className='pppp1'>
                        <p>
                            <a className="featured-article--link"
                                href="/blogs/all/unlocking-the-goodness-of-pintola-all-natural-peanut-butter">
                                Unlocking the Goodness of Pintola All Natural Peanut Butter</a>
                        </p>
                        <h6>
                            September 11,2023 | 2 min read
                        </h6>
                    </div>
                </div>

                <div className="c333">
                    <img src="https://pintola.in/cdn/shop/articles/Blog_3_400x.jpg?v=1694431543" />
                    <div className='pppp2'>
                        <p>
                            <a className="featured-article--link"
                                href="/blogs/all/the-nutty-truth-is-it-safe-to-eat-peanut-butter-every-day">
                                The Nutty Truth: Is it Safe to Eat Peanut Butter Every Day?</a>
                        </p>
                        <h6>
                            September 11,2023 | 2 min read
                        </h6>
                    </div>
                </div>

                <div className="c444">
                    <img src="https://pintola.in/cdn/shop/articles/Blog_2_400x.png?v=1694431371" />
                    <div className='pppp4'>
                        <p>

                            <a className="featured-article--link"
                                href="/blogs/all/wood-pressed-oil-the-traditional-way-to-extract-the-natural-goodness-of-oils">
                                Wood Pressed Oil: The Traditional Way to Extract the Natural Goodness of Oils</a>
                        </p>
                        <h6>
                            September 11,2023 | 1 min read
                        </h6>
                    </div>
                </div>
            </div>
            <br></br> 
            <br></br>
            <h1 >Follow Us On Instagram @Pintola.in</h1>
            <br></br>
            <div class="i8">
            <img
                src="https://scontent.cdninstagram.com/v/t51.29350-15/449215937_1560398527941531_8717776377344951941_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=18de74&_nc_ohc=ESyy3jGK4ssQ7kNvgEUnuBD&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AYDjb1GwHKOgpsXGSFLfo6g0lRo-VLTdeuIxNtYwG1AmOg&oe=668405B3"/>
            {/* <div class="overlay">
                <i class="fa-solid fa-video"></i>
            </div> */}

            <img
                src="https://scontent.cdninstagram.com/v/t51.29350-15/449268499_487870457018366_5537081029339598413_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=18de74&_nc_ohc=Gf_suOU5IMsQ7kNvgHZQz7W&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AYABIJZ3g-07hl7TeGDMT-CveZMiVh2gSb6LU_0vBsI6xg&oe=6683F7A0"/>
            <img
                src="https://scontent.cdninstagram.com/v/t51.29350-15/449297675_455221710471038_2424265902222483559_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=18de74&_nc_ohc=LqAq_s9Q8wcQ7kNvgFmBdfJ&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AYCiYVDsg4zk3O0kE4CwSmxaTFeDBQ5SstplPML2a1zoJQ&oe=66840FC0"/>
            <img
                src="https://scontent.cdninstagram.com/v/t51.29350-15/448562130_775483264575282_7873985087433816440_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=18de74&_nc_ohc=TtpEsHmdhrQQ7kNvgHU1_8t&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AYAfkSoXbRc2850gSTQA9qDItQec-2lQAblw9KhT0Ikf3g&oe=668411AE"/>
            <img
                src="https://scontent.cdninstagram.com/v/t51.29350-15/448820364_377420778221003_2568085374644410951_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=18de74&_nc_ohc=OQWAVkvGKhgQ7kNvgEqG-SV&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AYBw9bo-81O2LmFh18-0Km04SOoavAEGE7A9EA-Z_4UFPQ&oe=6683FE17"/>
            <img
                src="https://scontent.cdninstagram.com/v/t51.29350-15/448917432_1668360137311704_8677598334857026909_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=18de74&_nc_ohc=Lzx9r1EuI9YQ7kNvgHfVe8q&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AYCapUK2Lwc2uhzW1WYFhJCzp1zYJ-NG37x2psxN9Vrwyg&oe=66840F1D"/>
            <img
                src="https://scontent.cdninstagram.com/v/t51.29350-15/448852098_1648833282583492_8127259657381683338_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=18de74&_nc_ohc=TYJHHxiKbrgQ7kNvgGYlcPd&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AYCNYDZQaqHlR_tFTJYsd3T4bH0-xPNVw7GJwYuukDi9cw&oe=6683ED7C"/>
            <img
                src="https://scontent.cdninstagram.com/v/t51.29350-15/448680084_8232939680071447_1422397959124526614_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=18de74&_nc_ohc=og6InQtO1P0Q7kNvgH2HX9t&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AYB_eiKCF8DwEtQtuFiWPkzmUhv8uxPQhrkxRspHrooNGw&oe=6683FC8A"/>
            <img
                src="https://scontent.cdninstagram.com/v/t51.29350-15/448350781_1229270641772520_3431079536145808266_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=18de74&_nc_ohc=hNckYQ8MMzQQ7kNvgGnZNJQ&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AYATd6oYrE2q61MB2B0HY2oPWjNcBKXkHzg4Zg_0xwFhnA&oe=6684051B"/>
            <img
                src="https://scontent.cdninstagram.com/v/t51.29350-15/448277411_1176604430430692_6232150893303992629_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=18de74&_nc_ohc=EOrWQOpyYsgQ7kNvgHaYKwj&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AYCJgugX5ykKKEquPZoBFMjxgwadlz5YEkVmltzIUKfiFA&oe=6683EE77"/>

        </div>
        <br></br>
        



        </div>
    )
}

export default Home
