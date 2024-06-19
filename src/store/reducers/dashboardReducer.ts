import { TID } from '@/constants/dashboard'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface DashboardState {
   dashboardItems: Record<Exclude<TID, 'logout' | 'return'>, boolean>
}

const initialState: DashboardState = {
   dashboardItems: {
      greating: false,
      ctoProperty: false,
      CTO: false,
      account: false,
      time: true,
      qr: false,
      radio: false,
      employees: false,
      timing: false
   }
}

export const DashboardSlice = createSlice({
   name: 'dashboard',
   initialState,
   reducers: {
      setDahsboardItems(state, action: PayloadAction<DashboardState['dashboardItems']>) {
         state.dashboardItems = { ...state.dashboardItems, ...action.payload }
      }
   }
})

export const DashboardActions = DashboardSlice.actions
export default DashboardSlice.reducer
