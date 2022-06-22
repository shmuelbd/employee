import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components';

const Container = styled.div`
display: flex;
flex-wrap: wrap;
width: 100%;
height: 250px;
align-items: center;
justify-content: space-evenly;
`;
const LinkBox = styled.div`
display: flex;
width: 100%;
height: 100px;
align-items: center;
justify-content: space-evenly;
`;
const HeaderText = styled.div`
display: flex;

width: 100%;
height: 130px;
align-items: center;
justify-content: space-evenly;
background-color: #dadada;
`;
const P = styled.p`
font-size: 2.2rem;
font-weight: 700;
color: #3b3b3b;
`;
const styleLink = {
    textDecoration: 'none',
    color: "#3b3b3b",
    fontWeight: "700"

}
type Props = {}

const Header = (props: Props) => {
    return (
        <Container>
            <LinkBox>
                <Link to="/" style={styleLink}>Home</Link>
                <Link to="AllEmployees" style={styleLink}>All Employees</Link>
                <Link to="ManagementEmployee" style={styleLink}>Management Employee</Link>
                <Link to="AddEmployee" style={styleLink}>Add Employee</Link>
            </LinkBox>
            <HeaderText>
                <P>Employee Management System</P>
            </HeaderText>

        </Container>
    )
}

export default Header