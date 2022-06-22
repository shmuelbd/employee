import styled from 'styled-components';
import Header from '../../global components/header';
import BoxForm from './components';

const Container = styled.div`
display: flex;
align-content: flex-start;
flex-wrap: wrap;
justify-content: center;
width: 100%;
height: calc(100% - 360px);
`;
type Props = {}

const AddEmployee = (props: Props) => {
    return (
        <Container>
            <Header text='Add Employee' />
            <BoxForm />
        </Container>)
}

export default AddEmployee