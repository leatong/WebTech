import React, {Component} from 'react';
import OverHeadBar from './OverHeadBar';
import merch from './MerchPage.module.css';
import Tag from "../Component/Tag";
import Tshirt1 from "../assets/Tshirt1-square.jpg";
import Album1 from "../assets/album1.png";
import single1 from "../assets/honey.png";
import single2 from "../assets/lalalemon.png";
import Tshirt2 from "../assets/cat_whitetshirtfront.png";
import IconBar from './IconBar';
import hat from "../assets/cat_capfront.png";

function MerchPage(){
    return (
        <div>
            <OverHeadBar currentPage='SHOP'/>
            <div className={merch.overview}>
                <div className={merch.tile}>
                    <img className={merch.pic} src={Album1} alt='Album1 Cover'/>
                    <Tag name='album1' description='Tangerine Rye - Album' price='£ 2.99'/>
                </div>
                <div className={merch.tile}>
                    <img className={merch.pic} src={single1} alt='Single1 Cover'/>
                    <Tag name='single1' description='La La Lemon - Single' price='£ 0.99'/>
                </div>
                <div className={merch.tile}>
                    <img className={merch.pic} src={single2} alt='Single2 Cover'/>
                    <Tag name='single2' description='Honey - Single' price='£ 0.99'/>
                </div>
            </div>
            <div className={merch.overview}>
                <div className={merch.tile}>
                    <img className={merch.pic} src={Tshirt1} alt='White Tee'/>
                    <Tag name='tshirt1' description='White Tee' price='£ 3.99'/>
                </div>
                <div className={merch.tile}>
                    <img className={merch.pic} src={Tshirt2} alt='Cat white Tee'/>
                    <Tag name='tshirt2' description='Cat white Tee' price='£ 3.99'/>
                </div>
                <div className={merch.tile}>
                    <img className={merch.pic} src={hat} alt='Cat hat'/>
                    <Tag name='hat' description='cat hat' price='£ 2.99'/>
                </div>
            </div>
            <IconBar />
        </div>
    );
}


export default MerchPage;