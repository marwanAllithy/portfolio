import React from 'react';

const Techitem = ({techname, techimg, svg, lightmode, fontColor}) => {
    return (
        <div className="tech__item--cont">
            <div className="tech__item"  style={{boxShadow: lightmode ?  "-2px 2px 15px #000000"  :"-5px 5px 15px #000000" }}>
                <div className="tech__item--img--cont">
                    <img src={techimg} alt="" className="tech__item--img" />
                </div>
                <div className="tech__item--name--cont" style={{color: fontColor}} >
                    <p className="tech__item--name">{techname}</p>
                </div>
            </div>
        </div>
    );
}

export default Techitem;
