import { AccountCircle } from "@mui/icons-material";
import { Button, FormControl, InputAdornment, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import styled from "styled-components";
import FeaturedVideoIcon from '@mui/icons-material/FeaturedVideo';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import EngineeringIcon from '@mui/icons-material/Engineering';
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { addEmployee, EmployeesType } from "../../../../redux/slices/EmployeeSlice";

const Container = styled.div`
display: flex;
align-content: flex-start;
flex-wrap: wrap;
justify-content: center;
width: 70%;
height: calc(100% - 360px);
`;
const Inp = styled.div`
width: 40%;
margin: 10px;
`;
const Submit = styled.div`
display: flex;
justify-content: center;
padding-top: 20px;
width: 100%;
margin: 10px;
`;
type Props = {}

const initialState: EmployeesType = {
    idNumber: "",
    name: "",
    role: "",
}


const BoxForm = (props: Props) => {
    const [vaildInp, setvaildInp] = useState<EmployeesType>(initialState)
    const Employees = useAppSelector((state) => state.Employees.Employees)
    const dispatch = useAppDispatch()
    const Error = useAppSelector((state) => state.Employees.ErrorMessage)
    console.log(Error);

    const disableSubmit = () => {
        if (
            vaildInp.idNumber.length < 9 ||
            vaildInp.name.length < 1 ||
            vaildInp.role.length < 1
        )
            return true
        return false
    }

    useEffect(() => {
        if (Error === "succes")
            setvaildInp(initialState)

    }, [Error])

    return (
        <Container>
            <Inp>
                <TextField id="outlined-basic"
                    label="Name"
                    variant="outlined"
                    fullWidth
                    required
                    value={vaildInp.name}
                    error={vaildInp.name.length > 1 ? false : true}
                    onChange={(e) => setvaildInp({ ...vaildInp, name: e.target.value })}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <AccountCircle />
                            </InputAdornment>
                        ),
                    }} />
            </Inp>
            <Inp>
                <TextField
                    type="number"
                    id="outlined-basic"
                    label="ID"
                    variant="outlined"
                    fullWidth
                    required
                    value={vaildInp.idNumber}
                    error={vaildInp.idNumber.length > 8 ? false : true}
                    onChange={(e) => setvaildInp({ ...vaildInp, idNumber: e.target.value })}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <FeaturedVideoIcon />
                            </InputAdornment>
                        ),
                    }} />
            </Inp>
            <Inp>
                <TextField
                    id="outlined-basic"
                    label="Role"
                    variant="outlined"
                    fullWidth
                    required
                    value={vaildInp.role}
                    error={vaildInp.role.length > 1 ? false : true}
                    onChange={(e) => setvaildInp({ ...vaildInp, role: e.target.value })}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SportsEsportsIcon />
                            </InputAdornment>
                        ),
                    }} />
            </Inp>
            <Inp>
                <FormControl fullWidth>

                    <InputLabel id="demo-simple-select-label">Role</InputLabel>
                    <Select
                        labelId="demo-simple-select-required-label"
                        id="demo-simple-select-required"
                        value={vaildInp.manager?._id}
                        onChange={(e) => setvaildInp({ ...vaildInp, manager: e.target.value })}
                        fullWidth
                        label="Role"

                    >
                        {
                            Employees.map((item: EmployeesType, index: number) => (
                                <MenuItem key={item._id} value={item._id}>{item.name} </MenuItem>
                            ))
                        }
                    </Select>
                </FormControl>
            </Inp>
            <Submit>
                <Button
                    variant="outlined"
                    disabled={disableSubmit()}
                    onClick={async () =>
                        dispatch(addEmployee(vaildInp))}
                >
                    Add Employee
                </Button>
            </Submit>
        </Container>
    )
}

export default BoxForm