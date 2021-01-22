import styled from 'styled-components'

export const Container = styled.div`
width: 650px;
padding:20px;

`

export const ProductArea = styled.div`
    height: 200px;
    display:flex;
`

export const ProductInfoArea = styled.div`
flex:1;
display:flex;
flex-direction:column;
justify-content:space-between;
margin-left: 10px;
`

export const ProductDetails = styled.div``

export const ProductPhoto = styled.img`
    width:310px;
    border-radius: 10px;

`

export const ProductButtons = styled.div`
    margin-top:10px;
    display:flex;
    justify-content:flex-end;
    align-items: center;
`

export const ProductQuantityArea = styled.div`
    height:50px;
    display:flex;
    justify-content:space-between;

`

export const ProductName = styled.div`
    font-size:30px;
    font-weight:bold;
`

export const ProductIngredients = styled.div`
    font-size:14;
    
`

export const ProductButton = styled.button`
    border:0;
    background:#073C07;
    box-shadow: 4px 5px 0px rgba(0,0,0,0.16);
    color:#fff;
    font-size:${props => props.small ? '13px' : '22px'};
    font-weight:bold;
    padding:${props => props.small ? '5px 10px' : '10px 20px'};
    margin-left: 10px;
    border-radius: 5px;
    cursor:pointer;


`

export const ProductQuantity = styled.div`
    display:flex;
    align-items:center;
    background:#073C07;
    border-radius:5px;
`

export const ProductQtImage = styled.img`
    width:24px;
    height:auto;
    cursor:pointer;

`

export const ProductQtText = styled.div`
    font-size:25px;
    font-weight:bold;
    color:#FFF;
    margin: 0 10px;
`;

export const ProductPrice = styled.div`
    font-size: 30px;
    font-weight:bold;
`