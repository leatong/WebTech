import React, {Component} from 'react';
import OverHeadBar from './OverHeadBar';
import merch from './MerchPage.module.css';
import Tag from "../Component/Tag";
import Tshirt1 from "../assets/Tshirt1-square.jpg";
import Album1 from "../assets/album1.png";
import Album2 from "../assets/honey.png";

function MerchPage(){
    return (
        <div>
            <OverHeadBar currentPage='SHOP'/>
                <div className={merch.overview}>
                    <div className={merch.tile}>
                        <img className={merch.pic} src={Tshirt1} alt='White Tee'/>
                        <Tag name='tshirt1' description='White Tee' price='£ 5.99'/>
                    </div>
                    <div className={merch.tile}>
                        <img className={merch.pic} src={Album1} alt='Album1 Cover'/>
                        <Tag name='album1' description='Album1' price='£ 4.99'/>
                    </div>
                    <div className={merch.tile}>
                        <img className={merch.pic} src={Album2} alt='Album2 Cover'/>
                        <Tag name='album2' description='Album2' price='£ 5.99'/>
                    </div>
                </div>
        </div>
    );
}


export default MerchPage;