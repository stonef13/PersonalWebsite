import axios from 'axios'

const GETTHEPROJECTS = 'GETTHEPROJECTS'

const initialState = {
  loading: true,
  projects: []
}

const setProjects = projects => {
  return {
    type: GETTHEPROJECTS,
    projects
  }
}

export const getProjects = () => {
  return async dispatch => {
    try {
      const {data} = await axios.get('/api/projects')
      dispatch(setProjects(data))
    } catch (err) {
      console.err(err)
    }
  }
}

export default function(state = initialState, action) {
  switch (action.type) {
    case GETTHEPROJECTS:
      return {...state, loading: false, projects: action.projects}
    default:
      return state
  }
}
