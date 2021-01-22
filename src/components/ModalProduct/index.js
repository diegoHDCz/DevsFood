import React, { useState, useEffect } from 'react'
import {useDispatch} from 'react-redux'
import {
    Container,
    ProductPhoto,
    ProductInfoArea,
    ProductDetails,
    ProductQuantityArea,
    ProductButtons,
    ProductArea,
    ProductName,
    ProductIngredients,
    ProductButton,
    ProductQuantity,
    ProductPrice,
    ProductQtImage,
    ProductQtText

} from './styled'

export default function ({ data, setStatus }) {
    const dispatch = useDispatch()
    const [qt, setQt] = useState(1);

    useEffect(() => {
        setQt(1);
    }, [data])

    const handleCancelButton = function () {
        setStatus(false)
    }

    const handleMinusQt = function () {
        if (qt > 1) {
            setQt(qt - 1);
        }

    }
    const handlePlusQt = function () {
        setQt(qt + 1);
    }
    const handleAddToCart = () =>{
        dispatch({
            type: 'ADD_PRODUCT',
            payload:{data,qt}
        })
        setStatus(false);
    }

    return (
        <Container>
            <ProductArea>
                <ProductPhoto src={data.image} />
                <ProductInfoArea>
                    <ProductDetails>
                        <ProductName>{data.name}</ProductName>
                        <ProductIngredients>{data.ingredients}</ProductIngredients>
                    </ProductDetails>
                    <ProductQuantityArea>
                        <ProductQuantity>
                            <ProductQtImage onClick={handleMinusQt} src="/assets/minus.png" />
                            <ProductQtText>{qt}</ProductQtText>
                            <ProductQtImage onClick={handlePlusQt} src="/assets/plus.png" />
                        </ProductQuantity>
                        <ProductPrice>
                            R$ {(data.price * qt).toFixed(2)} 
                        </ProductPrice>
                    </ProductQuantityArea>
                </ProductInfoArea>
            </ProductArea>
            <ProductButtons>
                <ProductButton small={true} onClick={handleCancelButton} >Cancelar</ProductButton>
                <ProductButton onClick={handleAddToCart}>Adicionar ao carrinho</ProductButton>
            </ProductButtons>
        </Container>
    )
}