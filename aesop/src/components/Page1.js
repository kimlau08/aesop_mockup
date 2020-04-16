import React, { Component } from 'react';
import Background from '../assets/Aesop-Homepage-Banner.jpg';
import Aromatic1 from '../assets/staple_products/Aesop-Hand-Resurrection-Aromatique-Hand-Wash-500mL-large.png';
import Aromatic2 from '../assets/staple_products/Aesop-Body-Resurrection-Aromatique-Hand-Balm-75mL-large.png';
import Aromatic3 from '../assets/staple_products/Large-PNG-Aesop-Personal-Deodorant-50mL-large.png'


class Page1 extends Component {
    state = {}
    render() {
        return (<div>
            <div><h1 className="blackbar"> Complimentary standard shipping on all orders   + </h1></div>
            <div className="background-picture">
                <img src={Background} alt='' width="2000" height="800"></img>
            </div>
            <div className="main-nav">
                <div >
                    <ul className="nav-list">
                        <li className="individual-list">Shop</li>
                        <li className="individual-list">Read</li>
                        <li className="individual-list">Stores</li>
                        <li className="individual-list">Search</li>
                    </ul>
                </div>
                <div>
                    <ul className="nav-list">
                        <li className="individual-list">Login</li>
                    </ul>
                </div>
            </div>
            <div className="main-text">
                <div>
                    <h1>Aesop</h1>
                </div>
                <div>
                    <h1>Formulations for skin, hair, home and body</h1>
                    <h2>Created with sensory pleasure in mind.</h2>
                </div>
            </div>
            <div className="aromatics-container">
                <div>
                    <h3 className="aesop-essentials"> Aesop essentials </h3>
                    <h1> A selection of staples </h1>
                    <h4> From beloved formulations first created decades</h4>
                    <h4> ago to personal care necessities.</h4>
                </div>
                <div className="resurrection">
                    <img src={Aromatic1} alt=" " width="300px"></img>
                    <h4> Resurrection Aromatique Hand Wash </h4>
                    <h4> Gentle cleansing for hard-working hands </h4>
                </div>
                <div className="resurrection">
                    <img src={Aromatic2} alt=" " width="313px"></img>
                    <h4> Resurrection Aromatique Hand Balm </h4>
                    <h4> Richly hydrating, greaseless finish </h4>
                </div>
                <div className="resurrection">
                    <img src={Aromatic3} alt=" " width="362px"></img>
                    <h4> Deoderant </h4>
                    <h4> Woody, herbaceous, earthy aromatic </h4>
                </div>
            </div>
        </div>);
    }
}

>>>>>>> second-page-jiaxi
export default Page1;