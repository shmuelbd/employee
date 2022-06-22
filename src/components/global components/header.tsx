import styled from 'styled-components';

const Container = styled.div`
display: flex;
flex-wrap: wrap;
width: 100%;
height: 110px;
align-items: center;
justify-content: space-evenly;
`;
const P = styled.p`
font-size: 2rem;
font-weight: 600;
color: #3b3b3b;
`;

type Props = { text: string }

const Header = (props: Props) => {
    return (
        <Container><P>{props.text}</P></Container>
    )
}

export default Header