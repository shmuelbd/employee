import styled from 'styled-components';

const Th = styled.div`
width: 20%;
font-size: 1.3rem;
font-weight: 900;
text-align: center;
`;

type Props = { managers: boolean }

const Header = (props: Props) => {
    return (
        <>
            <Th>name</Th>
            <Th>id</Th>
            <Th>role</Th>
            {props.managers ? null : <Th>manager</Th>}
            <Th>actions</Th>
        </>
    )
}

export default Header