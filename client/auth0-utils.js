import { setUser } from './actions/user'
import { useDispatch } from 'react-redux'

export const cacheUser = async (useAuth0, state) => {
  const { isAuthenticated, getAccessTokenSilently, user } = useAuth0()
  const dispatch = useDispatch()

  try {
    const accessToken = await getAccessTokenSilently()

    if (isAuthenticated && !state?.token) {
       const userToSave = {
        auth0Id: user.sub,
        email: user.email,
        token: accessToken
    }
    dispatch(setUser(userToSave))
  }
  } catch (err) {
      console.error(err)
    }
  }