import axios from 'axios'

const GETTHESKILLS = 'GETTHESKILLS'

const initialState = {
  loading: true,
  skills: []
}

const setSkills = skills => {
  return {
    type: GETTHESKILLS,
    skills
  }
}

export const getSkills = () => {
  return async dispatch => {
    try {
      const {data} = await axios.get('/api/skills')
      dispatch(setSkills(data))
    } catch (err) {
      console.err(err)
    }
  }
}

export default function(state = initialState, action) {
  switch (action.type) {
    case GETTHESKILLS:
      return {...state, loading: false, skills: action.skills}
    default:
      return state
  }
}
