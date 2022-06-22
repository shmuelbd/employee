import { configureStore } from '@reduxjs/toolkit'
import EmployeesReducer from './slices/EmployeeSlice'


export const store = configureStore({
    reducer: {
        Employees: EmployeesReducer,
    },
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch