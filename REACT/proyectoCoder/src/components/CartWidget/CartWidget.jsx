import React from 'react';

export function CartWidget(props) {
    return <div className="CartWidget">
                <img src='https://img1.freepng.es/20171220/jpe/shopping-cart-png-5a3a8fca5f1485.3449050215137873383895.jpg' alt='carroCompras'></img>
                <h6>{props.compra}</h6>
            </div>
}