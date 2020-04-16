import React, { Component } from 'react'
import ParsleyCleanser from '/Users/student_m19/Desktop/Homework/Aesop_Ecom/aesop_mockup/aesop/src/assets/for_all_products/ParsleyCleanser.png'
import MandarinFacial from '/Users/student_m19/Desktop/Homework/Aesop_Ecom/aesop_mockup/aesop/src/assets/for_all_products/MandarinFacial.png'
import FaceOil from '/Users/student_m19/Desktop/Homework/Aesop_Ecom/aesop_mockup/aesop/src/assets/for_all_products/FaceOil.png'
import TeaToner from '/Users/student_m19/Desktop/Homework/Aesop_Ecom/aesop_mockup/aesop/src/assets/for_all_products/TeaToner.png'

export default class Page4 extends Component {
    
    
    render() {
        return (
            <div className="pageFourContainer">
                <div className="pageFourLeftText">
                    <h2>Nurturing formulations</h2>
                    <h3>For all ages, genders, and skin types</h3>
                </div>
                <div className="pageFourLeftParagraph">
                    <p>Healthy skin is the product of careful cleansing, nourishing hydration and protection against environmental factors.</p>
                </div>
                <div className="pageFourCarousel">
                    {<img className="pageFourImg" src={MandarinFacial} alt="Mandarian Facial Cream"/> }
                    {<img className="pageFourImg" src={FaceOil} alt="Mandarian Facial Cream"/> }
                    {<img className="pageFourImg" src={ParsleyCleanser} alt="parsely serum"/> }
                    {<img className="pageFourImg" src={TeaToner} alt="parsely serum"/> }
                </div>
               <divider orientation ="horizontal"></divider>
                    
            
                
            </div>
        )
    }
}