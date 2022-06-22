import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export interface EmployeesType {
    _id?: string,
    name: string,
    idNumber: string,
    role: string,
    manager?: EmployeesType | any
}
export type EmployeesDeleteType = {
    _id: string
}
export type EmployeesUpdateType = {
    _id: string,
    data: EmployeesType
}
export interface EmployeesState {
    Employees: EmployeesType[]
    ErrorMessage: string | null
}

const initialState: EmployeesState = {
    Employees: [],
    ErrorMessage: null
}
export type initialrejected = {
    message: string
}


export const fetchEmployees = createAsyncThunk(
    'fetchEmployees',
    async () => {
        const response: any = await axios.get('http://localhost:3001')
        return response.data
    }
)
export const deleteEmployee = createAsyncThunk(
    'deleteEmployee',
    async (data: EmployeesDeleteType) => {
        const response: any = await axios.delete('http://localhost:3001', {
            data
        })
        return response.data
    }
)
export const updateEmployee = createAsyncThunk(
    'updateEmployee',
    async (data: EmployeesUpdateType) => {
        const response: any = await axios.put('http://localhost:3001', data)
        return response.data
    }
)
export const addEmployee = createAsyncThunk(
    'addEmployee',
    async (data: EmployeesType, { rejectWithValue }) => {
        try {
            const response: any = await axios.post('http://localhost:3001', data)
            return response.data
        } catch (err: any) {
            // console.log(err.response.data.message);

            return rejectWithValue(err.response.data)

        }


    }
)


export const EmployeeSlice = createSlice({
    name: 'Employees',
    initialState,
    reducers: {
        resetErrorMessage: (state) => {
            console.log("dd");

            state.ErrorMessage = null
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchEmployees.fulfilled, (state, action: PayloadAction<EmployeesType[]>) => {
            state.Employees = action.payload
        });
        builder.addCase(fetchEmployees.rejected, (state, action: any) => {
            state.ErrorMessage = action.error.message
        });
        builder.addCase(deleteEmployee.fulfilled, (state, action) => {
            state.Employees = action.payload
        });
        builder.addCase(deleteEmployee.rejected, (state, action: any) => {
            state.ErrorMessage = action.error.message
        });
        builder.addCase(updateEmployee.fulfilled, (state, action) => {
            state.Employees = action.payload
        })
        builder.addCase(updateEmployee.rejected, (state, action: any) => {
            state.ErrorMessage = action.error.message
        })
        builder.addCase(addEmployee.fulfilled, (state, action: any) => {
            state.ErrorMessage = "succes"
        })
        builder.addCase(addEmployee.rejected, (state, action: any) => {
            console.log(action);

            state.ErrorMessage = action.payload.message
        })

    },
})

export const { resetErrorMessage } = EmployeeSlice.actions

export default EmployeeSlice.reducer





