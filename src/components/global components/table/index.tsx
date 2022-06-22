import { IconButton, MenuItem, Select, TextField } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';

import { useState } from 'react'
import styled from 'styled-components';
import Header from './components/header/header';
import { useAppDispatch } from '../../../redux/hooks';
import { deleteEmployee, updateEmployee } from '../../../redux/slices/EmployeeSlice';

const Container = styled.div`
display: flex;
flex-wrap:wrap;
align-items: flex-start;
justify-content: center;
width: 100%;
height: calc(100% - 280px);
`;
const TableBox = styled.div`
display: flex;
justify-content: center;
align-content: flex-start;
flex-wrap:wrap;
width: 100%;
height: 100%;
border-collapse: collapse;
padding-bottom: 100px;
overflow-y: scroll;
::-webkit-scrollbar {
  width: 5px;
}
::-webkit-scrollbar-thumb {
  background: #888; 
}
`;
const Tr = styled.div <{ header: boolean }>`
display: flex;
justify-content: space-around;
align-items: center;
width: 90%;
height: 60px;
background-color: ${(props) => props.header ? "#d3d3d3" : "#eeeeee"} ;
border-radius: 15px;
margin-top: 10px;
padding: 5px;
&:hover{
    background-color: #e7e7e7;
    border-radius: 30px;
}
`;

const Td = styled.div`
width: 20%;
font-size: 1.2rem;
text-align: center;
padding: 10px;
`;

const ButtonsBox = styled.div`
display: flex;
justify-content: space-evenly;
width: 100%;
`;



interface EmploeyeeDataType {
    [key: string]: string,
    name: string,
    idNumber: string,
    role: string,
    manager: any,
    _id: string,
}
interface EmploeyeeUpdateType {
    _id: string,
    data: EmploeyeeDataType
}
type Props = { data: EmploeyeeDataType[] | any, managers: boolean }

const Table = (props: Props) => {
    const [editRow, setEditRow] = useState<number | null>(null)
    const [updateState, setupdateState] = useState<EmploeyeeDataType>(props.data[0])
    const dispatch = useAppDispatch()

    const setTableDelete = async (_id: string) => {
        await dispatch(deleteEmployee({ _id: _id }))
        setEditRow(null)
    }
    const setTableUpdate = async () => {
        const data: EmploeyeeUpdateType = {
            _id: updateState._id,
            data: updateState
        }
        await dispatch(updateEmployee(data))
        setEditRow(null)
    }


    return (

        <Container>
            <Tr header={true}>
                <Header managers={props.managers} />
            </Tr>
            <TableBox>

                {
                    props.data.map((item: EmploeyeeDataType, index: number) => {
                        if (editRow !== index) {
                            return (

                                <Tr header={false} key={item?._id}>
                                    <Td>{item?.name}</Td>
                                    <Td>{item?.idNumber}</Td>
                                    <Td>{item?.role}</Td>
                                    {props.managers ? null : <Td>{item.manager?.name}</Td>}
                                    <Td >
                                        <ButtonsBox>
                                            <IconButton color="warning"
                                                size="large"
                                                onClick={() => {
                                                    setEditRow(index);
                                                    setupdateState(item)
                                                }}>
                                                <EditIcon />
                                            </IconButton>
                                            <IconButton color="error"
                                                size="large"
                                                onClick={() => setTableDelete(item._id)}>
                                                <DeleteForeverIcon />
                                            </IconButton>
                                        </ButtonsBox>
                                    </Td>
                                </Tr>)
                        }
                        else {
                            return (
                                <Tr header={false} key={item._id}>
                                    <Td>
                                        <TextField id="outlined-basic"
                                            variant="outlined"
                                            value={updateState.name}
                                            onChange={(e) => setupdateState({ ...updateState, name: e.target.value })}
                                            fullWidth
                                        />
                                    </Td>
                                    <Td>
                                        {updateState.idNumber}
                                    </Td>
                                    <Td>
                                        <TextField id="outlined-basic"
                                            variant="outlined"
                                            value={updateState.role}
                                            onChange={(e) => setupdateState({ ...updateState, role: e.target.value })}
                                            fullWidth
                                        />
                                    </Td>
                                    <Td>
                                        <Select
                                            labelId="demo-simple-select-required-label"
                                            id="demo-simple-select-required"
                                            value={updateState.manager?._id ? updateState.manager?._id : ""}
                                            onChange={(e) => setupdateState({ ...updateState, manager: { ...updateState.manager, _id: e.target.value } })
                                            }
                                            fullWidth
                                        >
                                            {
                                                props.data.map((item: EmploeyeeDataType, index: number) => (
                                                    <MenuItem key={item._id} value={item._id}>{item.name} </MenuItem>
                                                ))
                                            }
                                        </Select>
                                    </Td>
                                    <Td >
                                        <ButtonsBox>
                                            <IconButton color="success"
                                                size="large"
                                                onClick={() => setTableUpdate()}>
                                                <CheckIcon />
                                            </IconButton>
                                            <IconButton color="warning"
                                                size="large"
                                                onClick={() => setEditRow(null)}>
                                                <CloseIcon />
                                            </IconButton>

                                            <IconButton color="error"
                                                size="large"
                                                onClick={() => setTableDelete(item._id)}>
                                                <DeleteForeverIcon />
                                            </IconButton >
                                        </ButtonsBox>
                                    </Td>
                                </Tr>
                            )
                        }
                    })
                }
            </TableBox>

        </Container>
    )
}

export default Table