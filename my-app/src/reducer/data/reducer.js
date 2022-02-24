import { createSlice } from '@reduxjs/toolkit'

export const dataPicker = createSlice({
  name: 'dataPicker',
  initialState: {
    data: [],
    detail:{},
    comments: []
  },
  reducers: {
    setData: (state, action) => {
        return {
            ...state, data: [...action.payload]
        }
    },
    setDetail: (state, action) => {
      return {
          ...state, detail: {...action.payload}
      }
  },
  setComments: (state, action) => {
    return {
        ...state, comments: [...action.payload]
    }
},
addComments: (state, action) => {
  return {
      ...state, comments: [ action.payload, ...state.comments]
  }
},
  },
})

export const { setData, setDetail, setComments, addComments } = dataPicker.actions

export default dataPicker.reducer