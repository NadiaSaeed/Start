import React from "react";
import "./buynow.css";
import Option from "./Option";
import Right from './Right';
import { Divider } from "@mui/material";
import Subtotal from './Subtotal';

function Buynow() {
  return (
    <div className="buynow_section">
      <div className="buynow_container">
        <div className="left_buy">
          <h1>Shopping Cart</h1>
          <p>Select all items</p>
          <span className="leftbuyprice">Price</span>
          <Divider />
          <div className="item_containert">
            <img
              src="https://scontent.fisb13-1.fna.fbcdn.net/v/t45.1600-4/384550207_23862386736740779_3785792483097527131_n.png?stp=cp0_dst-jpg_p526x296_q90_spS444&_nc_cat=1&ccb=1-7&_nc_sid=b81fdb&_nc_eui2=AeH-TieKSQsMg42QcfPo4KNodlDS1kCdBbZ2UNLWQJ0Ftio-h-7iLUScoBbKOE8zzdK1MJtX8yhU64kOi-wAuN-X&_nc_ohc=6QVJdtAMKzwQ7kNvgER61dv&_nc_ht=scontent.fisb13-1.fna&oh=00_AYA96L6mqdS-esVZZo2gHJIapL6TT-Tg4cHEt-8Nfj7wew&oe=66AE87A6"
              alt=""
            />
            <div className="item_details">
              <h3>Look me Betterly</h3>
              <h3>I am a smart Watch, Do You?</h3>
              <h3 className="diffrentprice">Rs.3000.00</h3>
              <p className="unusuall">Usually dispatched in 8 days.</p>
              <p>Elgible for FREE shipping</p>
              <img
                src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px-2x._CB485942108_.png"
                alt=""
              />

              <Option />
            </div>
            <h3 className="item_price">Rs.3000</h3>
          </div>
          <Divider/>
          <Subtotal/>
          
        </div>
        <div>
        
        </div>
        <Right/>
      </div>
    </div>
  );
}

export default Buynow;
