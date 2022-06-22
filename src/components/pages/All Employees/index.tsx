import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import { fetchEmployees } from '../../../redux/slices/EmployeeSlice'
import Table from '../../global components/table'
import Header from '../../global components/header'
import styled from 'styled-components';
import { Link } from 'react-router-dom'

const Container = styled.div`
display: flex;
align-content: flex-start;
flex-wrap: wrap;
justify-content: center;
width: 100%;
height: calc(100% - 360px);
`;

type Props = {}

const AllEmployees = (props: Props) => {
    const Employees = useAppSelector((state) => state.Employees.Employees)
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(fetchEmployees())
    }, [])

    return (
        <Container>
            <Header text='Employee List' />
            {
                Employees.length < 1 ? <Link to="/AddEmployee">Add Employee</Link>
                    : <Table data={Employees} managers={false} />
            }
        </Container>
    )
}

export default AllEmployees