import React, { Component } from 'react'
import ParsleySerum from '/Users/student_m19/Desktop/Homework/Aesop_Ecom/aesop_mockup/aesop/src/assets/for_all_products/ParsleySerum.png'

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
                    {<img className="pageFourImg" src={ParsleySerum} alt="parsely serum"/> }
                    <p className="parsleyHeadingOne">Parsely Seed Anti-Oxidant Serum</p>
                    <p className="parsleyHeadingOne">Perfect for use in humid climates</p>
                  
                </div>

                
                
            </div>
        )
    }
}