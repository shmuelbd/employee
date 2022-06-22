import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../../redux/hooks"
import { fetchEmployees } from "../../../redux/slices/EmployeeSlice"
import Header from "../../global components/header"
import Table from "../../global components/table"
import styled from 'styled-components';

const Container = styled.div`
display: flex;
align-content: flex-start;
flex-wrap: wrap;
justify-content: center;
width: 100%;
height: calc(100% - 360px);
`;

type Props = {}

const ManagementEmployee = (props: Props) => {
    const Employees = useAppSelector((state) => state.Employees.Employees)
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(fetchEmployees())
    }, [])

    let arrManagers: any = []
    let objManagers: any = []
    Employees.map((item: any, index: number) => {
        if (item.manager?._id !== item._id && arrManagers.includes(item.manager?._id) === false && item.manager) {
            arrManagers.push(item.manager?._id)
            let single = Employees.filter(user => user._id === item.manager?._id)
            objManagers.push(single[0])
        }
    })

    return (
        <Container>
            <Header text='Managements List' />
            {
                objManagers.length < 1 ? "No managers on other employees" : <Table data={objManagers} managers={true} />
            }
        </Container>)
}

export default ManagementEmployee