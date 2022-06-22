import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
display: flex;
width: 100%;
height: 100px;
align-items: center;
justify-content: center;
position: fixed;
bottom: 0;
`;

type Props = {}

const Footer = (props: Props) => {
    return (
        <Container>S.A.D.C LTD | Phone: 076-6654376 | www.sadac-ltd.com</Container>
    )
}

export default Footer