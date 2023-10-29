import store from 'app/store/config/store'

export type RootState = ReturnType<typeof store.getState>
