import React, { Component } from 'react';
import Picture from '/Users/dmac/Desktop/PerScholas/hw/aesop_mockup/aesop_mockup/aesop/src/assets/Aesop-Gift-Kits-2019-20-Hybris-Range-Page-Secondary-Mid-Desktop-1690x945px.png';
import Aromatic1 from '/Users/dmac/Desktop/PerScholas/hw/aesop_mockup/aesop_mockup/aesop/src/assets/aromatic_signature_products/Aesop-Home-Room-Spray-Istros-100mL-large.png';
import Aromatic2 from '/Users/dmac/Desktop/PerScholas/hw/aesop_mockup/aesop_mockup/aesop/src/assets/aromatic_signature_products/Aesop-Fragrance-Tacit-Eau-de-Parfum-50mL-Large-684x668px.png';
import Aromatic3 from '/Users/dmac/Desktop/PerScholas/hw/aesop_mockup/aesop_mockup/aesop/src/assets/aromatic_signature_products/Aesop-Home-Isabelle-Oil-Burner-Blend-25mL-large.png'

class Page2 extends Component {
    state = {}
    render() {
        return (<div>
            <div className="main-container">
                <div className="first-half">
                    <div>
                        <h1> Five mythical Gift Kits </h1>
                        <h3> Crafted for gods, mortals, and muses alike, our new Gift Kit </h3>
                        <h3> collection makes for inspired gift giving this festive season.</h3>
                        <button>Explores seasonal Gift Kits -></button>
                    </div>
                    <div>
                        <img src={Picture} className="main-picture" alt=''></img>
                    </div>
                </div>
                <div className="bottom-half">
                    <div>
                        <h3> Fragrance </h3>
                        <h1> An aromatic signature </h1>
                        <h3> Our bold, sophisticated fragrance-from Perfum</h3>
                        <h3> and Eau de Parfum to Room Sprays-are </h3>
                        <h3> meticously crafted using high-quality ingredients </h3>
                    </div>
                    <div>
                        <img src={Aromatic1} alt="Aromatic1" width="200px"></img>
                        <h3>Istros Aromatique Room Spray</h3>
                        <h3> Enlivening florals, smoky Tobacco </h3>
                    </div>
                    <div>
                        <img src={Aromatic2} alt="Aromatic2" width="200px"></img>
                        <h3>Tacit Eau de Parfum</h3>
                        <h3> Basil Grand Vert, fresh citrus notes </h3>
                    </div>
                    <div>
                        <img src={Aromatic3} alt="Aromatic3" width="200px"></img>
                        <h3>Isabelle Oil Burner Blend</h3>
                        <h3> Stimulating scents of Spearmint, Rose  </h3>
                    </div>
                </div>
            </div>
        </div>);
    }
}

export default Page2;
