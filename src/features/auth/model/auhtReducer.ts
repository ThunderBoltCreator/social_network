interface AuthorizationState {
   isAuthorization: boolean
   id: number | null
   email: string | null
   login: string | null
}

const initialState: AuthorizationState = {
   isAuthorization: false,
   email: null,
   login: null,
   id: null,
}

type AuthActions = SetAuth
export const authReducer = (state = initialState, action: AuthActions) => {
   switch (action.type) {
      case "SET-AUTH":
         return {
            isAuthorization: action.payload.resultCode === 0,
            id: action.payload.id,
            login: action.payload.login,
            email: action.payload.email
         }
      default:
         return state
   }
}

export const setAuth = ({id,email,login}: Omit<AuthorizationState, 'isAuthorization'>, resultCode: number) => ({
   type: 'SET-AUTH' as const,
   payload: {id, email, login, resultCode}
})
type SetAuth = ReturnType<typeof setAuth>