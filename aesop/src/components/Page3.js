import React, { Component } from 'react';
import odysseyImg from '../assets/odyssey.PNG'

import product1Img from '../assets/daily_products/Aesop-Body-Geranium-Leaf-Body-Cleanser-500mL-large.png';
import product2Img from '../assets/daily_products/Aesop-Body-Redemption-Body-Scrub-180mL-large.png';
import product3Img from '../assets/daily_products/Aesop-Body-Body-Cleansing-Slab-310g-Carton-Large-1584x962px.png';
import product4Img from '../assets/daily_products/Aesop-Body-Geranium-Leaf-Body-Cleanser-500mL-large.png';
import product5Img from '../assets/daily_products/Aesop-Body-A-Rose-By-Any-Other-Name-Body-Cleanser-500mL-large.png';

//import Carousel from './Carousel';

export default class Page3 extends Component {
    constructor(props) {
        super(props);

        this.state={
            productImgs: [
                {   image: product1Img, 
                    name: 'Reverence Aromatique Hand Wash',
                    desc: 'Woody, earthy, smoky, aroma'
                },
                {   image: product2Img, 
                    name: 'Redemption Body Scrub',
                    desc: 'Bamboo Stem and  Pumice, to polish skin'
                },
                {   image: product3Img,
                    name: 'Body Cleansing Scrub',
                    desc: 'Enriched with Bergamot Rind, Tahitian'
                },
                {   image: product4Img,
                    name: 'Geranium Leaf Body Scrub',
                    desc: 'Geranium leaf gentle to the body'
                },
                {   image: product5Img,
                    name:  'Rose Body Cleanser',
                    desc: 'Rose never goes out of style'
                }],

            currentProductIdx: 0
        }
    }

    render () {
        return (
            <div className="page3Container">


                <div className="row1">
                    <div className="leftIntro">
                        <p className='giftListIntro'>An odyssey of gifts, for generous and inspired giving</p>
                        <ul className="giftList">
                            <li className="giftLine">Seasonal Gift Kits</li>
                            <li className="giftLine">Aesop favourites</li>
                            <li className="giftLine">Small gestures</li>
                            <li className="giftLine">Generous offerings</li>
                            <li className="giftLine">Fragrant formulations</li>
                            <li className="giftLine">Treats for self</li>
                            <li className="giftLine">All gifts</li>
                        </ul>
                    </div>
                    <img className="rightImg" src={odysseyImg}></img>
                </div>


                <div className="row2">
                    <div className="leftDesc">
                        <p className="bodyLine">For hands and body</p>
                        <p className="usageLine">Daily cleansing</p>
                        <p className="benefitLine">Ensure impeccable hygiene with our range of mild yet efficacious formulations</p>
                    </div>

                    <div className="odysseyCarouselBox">
                        
                    </div>
                </div>
            </div>
        )

    }
}
