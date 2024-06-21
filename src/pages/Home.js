import { React, useRef } from 'react'
import Navv from './Nav'
import ListCard from './ListCard'
import { Empty, Slide1, BestInEach, Monsoon, Slide2, Loved, Slide3, TrendFit, ExploreTop, Slide4, TopWater, ExternalBrands, Slide5, TrendingNear ,blogs} from './Images'
import Sliders from './Sliders'
import Small from './Small'
import Recommendation from './Recommendation'
import Fixed from './Fixed'
import Slot from './Slot'
import OurCollection from './OurCollection'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import AddToCart from './AddToCart'
import FixedSliders from './FixedSliders'
import Footer from './Footer'
import Blog from './Blog'
import { Container,Row,Col } from 'react-bootstrap'

export default function Home() {

  const scrollRef = useRef(null);

  const scroll = (shift) => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += shift;
    }
  };
  return (
    <div>
      <Navv />
      <div className="card-container">
        {Empty.map((emp, index) => (
          <ListCard key={index} {...emp} />
        ))}
      </div>
      <div className='sliders'>
        <Sliders images={Slide1} />
      </div>
      <Small />


      <h3>Bestsellers In Each Categories</h3>
      <div className="card-container">
        {BestInEach.map((BIE, index) => (
          <ListCard key={index} {...BIE} />
        ))}
      </div>

      <div className='recomm'>
        <p>Monsoon <br /> <span>Picks For You</span></p>
        <div className='scroll-container'>
          <button className='scroll-button left' onClick={() => scroll(-200)}>
            <FaArrowLeft />
          </button>
          <div className='horizontal-scroll' ref={scrollRef}>
            {Monsoon.map((BIE, index) => (
              <Recommendation key={index} {...BIE} />
            ))}
          </div>
          <button className='scroll-button right' onClick={() => scroll(200)}>
            <FaArrowRight />
          </button>
        </div>
      </div>


      <Fixed sr='https://contents.mediadecathlon.com/s1097059/k$e053bbb7415da9db6f117aecf53aae6e/defaut.jpg?format=auto&quality=70&f=1680x0' />





      <div className='sliders'>
        <Sliders images={Slide2} />
      </div>
      <h3>Most Loved Accessories in Summer</h3>

      <div className="card-container">

        {Loved.map((emp, index) => (
          <ListCard key={index} {...emp} />
        ))}
      </div>


      <Fixed sr='https://contents.mediadecathlon.com/s1100489/k$f65f525b8ae7005e32d044cd2e542978/defaut.jpg?format=auto&quality=70&f=1680x0' />
      <div className='sliders'>
        <Sliders images={Slide3} />
      </div>
      <h4>Trending In Fitness Collection</h4>

      <div className="card-container">

        {TrendFit.map((emp, index) => (
          <ListCard key={index} {...emp} />
        ))}
      </div>

      <div className='recomm'>
        <p>Trending<br /> <span>Near You</span></p>
        <div className='scroll-container'>
          <button className='scroll-button left' onClick={() => scroll(-200)}>
            <FaArrowLeft />
          </button>
          <div className='horizontal-scroll' ref={scrollRef}>
            {TrendingNear.map((BIE, index) => (
              <AddToCart key={index} {...BIE} />
            ))}
          </div>
          <button className='scroll-button right' onClick={() => scroll(200)}>
            <FaArrowRight />
          </button>
        </div>
      </div>

      <Fixed sr='https://contents.mediadecathlon.com/s1097164/k$c15380c159e440e96139d4929cd26746/defaut.jpg?format=auto&quality=70&f=1680x0' />

      <h4>Explore Top Categories</h4>
      <div className="card-container">

        {ExploreTop.map((emp, index) => (
          <ListCard key={index} {...emp} />
        ))}
      </div>
      <Fixed sr='https://contents.mediadecathlon.com/s1097068/k$beba4e8e93d1f02e5094aba0f3d94b9a/defaut.jpg?format=auto&quality=70&f=1680x0' />

      <div className='sliders'>
        <Sliders images={Slide4} />
      </div>

      <h3>Top searched in Water Sport Collection</h3>
      <div className="card-container">

        {TopWater.map((emp, index) => (
          <ListCard key={index} {...emp} />
        ))}
      </div>
      <div className='recomm'>
        <p><h4>Trending</h4> Near You</p>
        <div className='scroll-container'>
          <button className='scroll-button left' onClick={() => scroll(-200)}>
            <FaArrowLeft />
          </button>
          <div className='horizontal-scroll' ref={scrollRef}>
            {TrendingNear.map((BIE, index) => (
              <FixedSliders key={index} {...BIE} />
            ))}
          </div>
          <button className='scroll-button right' onClick={() => scroll(200)}>
            <FaArrowRight />
          </button>
        </div>
      </div>
      <h3>Explore External Brands</h3>
      <div className="card-container">

        {ExternalBrands.map((emp, index) => (
          <ListCard key={index} {...emp} />
        ))}
      </div>
      <Fixed sr='https://contents.mediadecathlon.com/s1097002/k$b5c475fb596e164a77e3ef651ef20c55/defaut.jpg?format=auto&quality=70&f=1920x0' />
      <div className="slotImages">
        <Slot
          src='https://contents.mediadecathlon.com/s1084216/k$ffd19e237d9d415d526d8369705d2534/defaut.jpg?format=auto&quality=70&f=1024x0'
          alt='Cycle Servicing'
          link='/camp'
        />
        <Slot
          src='https://contents.mediadecathlon.com/s1084219/k$e52e894676dfc846a30cec1bae5b0659/defaut.jpg?format=auto&quality=70&f=1024x0'
          alt='Racket Stringing'
          link='/camp'
        />
        <Slot
          src='https://contents.mediadecathlon.com/s1084217/k$d3e01a461f4d387f47b0588d68e093d0/defaut.jpg?format=auto&quality=70&f=1024x0'
          alt='Get Your Quotation'
          link='/camp'
        />
        <Slot
          src='https://contents.mediadecathlon.com/s1087040/k$599a9cb7f482f5404e5531b44a47682c/defaut.jpg?format=auto&quality=70&f=1024x0'
          alt='Free Expert Advice'
          link='/camp'
        />
      </div>

      <br/>

      <p><img className="blog" src='https://contents.mediadecathlon.com/s1071034/k$1cd72b462393e23fa1d84d03feb2c3c1/defaut.jpg?format=auto&f=969x0' height='30px' /> <span className="font">READ OUR SPORTY STORIES</span></p>
      <Container >
        <Row className="g-4">
            {blogs.map((emp,index) => (
                  <Col key={index} md={3} sm={6} xs={12} className="blogimg">
                      <Blog {...emp}/>
                  </Col>
              ))} 
        </Row>
      </Container>
      <br/>
      <div className='sliders'>
        <Sliders images={Slide5} />
      </div>


<br/>
      <OurCollection />
      <Footer />

    </div>


  )
}
