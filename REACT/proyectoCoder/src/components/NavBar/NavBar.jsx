import React from 'react';
import { CartWidget } from '../CartWidget/CartWidget';

export function NavBar() {
    return  <nav className='MiNav'>
                <h4>MM <hr></hr> E-COMMERCE</h4>
                <a href="">CAMISETAS</a>
                <a href="">CAMPERAS</a>
                <a href="">CONJUNTOS</a>
                <CartWidget compra="2"/>
            </nav>
}