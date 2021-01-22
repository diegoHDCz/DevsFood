import React, { useState } from 'react';
import {
    CartArea,
    CartHeader,
    CartIcon,
    CartText,
    CartBody,
    ProductArea,
    ProductItem,
    ProductPhoto,
    ProductName,
    ProductPrice,
    ProductInfoArea,
    ProductQtArea,
    ProductQtIcon,
    ProductQtText


} from './styled';
import { useSelector, useDispatch } from 'react-redux'


export default function () {
    const products = useSelector(state => state.cart.products);
    const dispatch = useDispatch();

    const [show, setShow] = useState(false);

    function handleCartClick() {
        setShow(!show)
    }

    const handleProductChange = (key,type) =>{
        dispatch({
            type: 'CHANGE_PRODUCT',
            payload:{
                key,
                type
            }
        })
    }

    return (
        <CartArea>
            <CartHeader onClick={handleCartClick}>
                <CartIcon src="/assets/cart.png" />
                <CartText>Meu Carrinho ({products.length})</CartText>
                {show &&
                    <CartIcon src="/assets/down.png" />
                }
            </CartHeader>
            <CartBody show={show}>
                <ProductArea>
                    {products.map((item, index) => (
                        <ProductItem key={index}>
                            <ProductPhoto src={item.image} />
                            <ProductInfoArea>
                                <ProductName>{item.name}</ProductName>
                                <ProductPrice>R$ {item.price.toFixed(2)}</ProductPrice>
                            </ProductInfoArea>
                            <ProductQtArea>
                                <ProductQtIcon 
                                src="/assets/minus.png"
                                onClick={()=>handleProductChange(index,'-')}
                                />
                                    <ProductQtText>{item.qt}</ProductQtText>
                                <ProductQtIcon 
                                src="/assets/plus.png" 
                                onClick={()=>handleProductChange(index,'+')}
                                />

                            </ProductQtArea>
                        </ProductItem>

                    ))}
                </ProductArea>

            </CartBody>
        </CartArea>
    )
}