import React, { Component } from 'react'
import ParsleyCleanser from '/Users/student_m19/Desktop/Homework/Aesop_Ecom/aesop_mockup/aesop/src/assets/for_all_products/ParsleyCleanser.png'
import MandarinFacial from '/Users/student_m19/Desktop/Homework/Aesop_Ecom/aesop_mockup/aesop/src/assets/for_all_products/MandarinFacial.png'
import FaceOil from '/Users/student_m19/Desktop/Homework/Aesop_Ecom/aesop_mockup/aesop/src/assets/for_all_products/FaceOil.png'
import TeaToner from '/Users/student_m19/Desktop/Homework/Aesop_Ecom/aesop_mockup/aesop/src/assets/for_all_products/TeaToner.png'
import HandWash from '/Users/student_m19/Desktop/Homework/Aesop_Ecom/aesop_mockup/aesop/src/assets/staple_products/HandWash.png'

export default class Page4 extends Component {
    
    
    render() {
        return (
            <div className="pageFourContainer" >
                    <div className="pageFourLeftText">
                    {/* Needed a way to create dividers for sections. tag </hr> was the answer */}
                    <hr />
                        <h2>Nurturing formulations</h2>
                        <h3>For all ages, genders, and skin types</h3>
                    </div>
                    <div className="pageFourLeftParagraph" >
                        <p>Healthy skin is the product of careful cleansing, nourishing hydration and protection against environmental factors.</p>
                    </div>
                    <div className="pageFourCarousel">
                        {<img className="pageFourImg" src={MandarinFacial} alt="Mandarian Facial Cream"/> }
                        {<img className="pageFourImg" src={FaceOil} alt="Mandarian Facial Cream"/> }
                        {<img className="pageFourImg" src={ParsleyCleanser}  alt="parsely serum"/> }
                        {<img className="pageFourImg" src={TeaToner} alt="parsely serum"/> }
                    </div>
                    <button className="skinCare">See all Skin Care</button>
                    <hr />
                    <div className="beforeFooter">
                        <div>
                            {<img className="pageFourImg2" src={HandWash} alt='handwash pump' />}
                        <div/>
                        <div className="discoverList">
                            <h3 className="Discover">Discover More</h3>
                            <h4 className="Discover">Kits & duets</h4>
                            <ul className="footerList">
                                <li>Travel</li>
                                <li>Gift Kits</li>
                                <li>Skin</li>
                                <li>Hand & body</li>
                            </ul>
                        </div>
                        <div className="hairList"> 
                            <h3 className="Discover">Hair Care</h3>
                            <ul className="footerList2">
                                <li>Cleanse</li>
                                <li>Condition</li>
                                <li>Treat</li>
                                <li>Groom</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <h2 className="poem">'And your very flesh shall be a great poem'</h2>
                        <p className="poemArthur">Walt Whitman</p>
                    </div>
                    <hr />
                    <div>
                        <p className="footerP">I would like to receive communications about Aesop products, services, stores, events and matters of cultural interest</p>
                        <input type='text' placeholder="Email Address"/>
                    </div>
                </div>
            </div>
    
        )
    }
}