import React from 'react'

function Course({ course }) {
   const {id, title, description, price, image,link } = course;
  return (
    <div className ='course'>
      <div>
        <div>
          <img src= {image} width={210} height ={310}/>
          <h4 className='course-title'>{title}</h4>
          <p className='course-desc'>{description}</p>
          <h3 className='course-price'>{price}₺</h3>
          <div className='course-link'>
            <a style={{textDecoration:'none'}} href={link} >BUY</a>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Course
