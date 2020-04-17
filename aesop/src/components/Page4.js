import React, { Component } from 'react'
import ParsleyCleanser from '../assets/for_all_products/ParsleyCleanser.png';
import MandarinFacial from '../assets/for_all_products/MandarinFacial.png';
import FaceOil from '../assets/for_all_products/FaceOil.png';
import TeaToner from '../assets/for_all_products/TeaToner.png';
import HandWash from '../assets/for_all_products/HandWash.png';

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
                <div>
                    {<img className="pageFourImg2" src={HandWash} align='left' alt='handwash pump' />}
                <div/>
                <div className="lists">
                    <h3 className="Discover">Discover More</h3>
                    <h4 className="Discover">Kits & duets</h4>
                    <ul className="footerList">
                        <li>Travel</li>
                        <li>Gift Kits</li>
                        <li>Skin</li>
                        <li>Hand & body</li>
                    </ul>
                   </div>
                </div>
                <br />
                  <br />
                    <br />
                     <br />
                      <br />
                        <br />
                        <h2 className="poem">'And your very flesh shall be a great poem'</h2>
                        <p className="poemArthur">Walt Whitman</p>
                <hr />
                <div>
                        <p className="footerP">I would like to receive communications about Aesop products, services, stores, events and matters of cultural interest</p>
                        <input type='text' placeholder="Email Address"/>
                </div>
                <br />
                  <br />
                    <br />
                     <br />
                      <br />
                        <br />
            
            
                
            </div>
        )
    }
}