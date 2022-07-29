import React from 'react'
import './Products.css'
import {FaStar} from 'react-icons/fa'
import {Container} from 'react-bootstrap';
import prodImg1 from '../../assets/images/image1.png'
import prodImg2 from '../../assets/images/image2.png'
import prodImg3 from '../../assets/images/image3.png'
import prodImg4 from '../../assets/images/image4.png'

const Products = () => {
  return (
    <Container className='products'>
        <h6 className="prodAdvice">Practice Advice</h6>
        <h2 className="coffeeProductsTxt">Coffee Products</h2>
        <div className="productsWrapper">
            <div className="productsItem">
                <img src={prodImg4} className='prodImg' alt='Product Image' />
                <p className="productName">Coffee</p>
                <FaStar className='starIcon' fill='#fdcd70' /> <span className="review"> 4.4 </span> <span className="noOfReview">429 reviews</span>
                <p className="location">New Cairo, Egypt</p>
            </div>
            
            <div className="productsItem">
                <img src={prodImg1} className='prodImg' alt='Product Image' />
                <p className="productName">Coffee</p>
                <FaStar className='starIcon' fill='#fdcd70'/> <span className="review"> 4.4 </span><span className="noOfReview">429 reviews</span>
                <p className="location">New Cairo, Egypt</p>
            </div>

            <div className="productsItem">
                <img src={prodImg2} className='prodImg' alt='Product Image' />
                <p className="productName">Coffee</p>
                <FaStar className='starIcon' fill='#fdcd70'/> <span className="review"> 4.4</span> <span className="noOfReview">429 reviews</span>
                <p className="location">New Cairo, Egypt</p>
            </div>

            <div className="productsItem">
                <img src={prodImg3} className='prodImg' alt='Product Image' />
                <p className="productName">Coffee</p>
                <FaStar className='starIcon' fill='#fdcd70'/> <span className="review"> 4.4 </span><span className="noOfReview">429 reviews</span>
                <p className="location">New Cairo, Egypt</p>
            </div>

        </div>
    </Container>
  )
}

export default Products