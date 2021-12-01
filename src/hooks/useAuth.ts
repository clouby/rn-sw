import { useStoreActions, useStoreState } from 'easy-peasy'

export default function useAuth() {
  const auth = useStoreState((state: any) => state.auth)
  const actions = useStoreActions((state: any) => state.auth)

  return [auth, actions]
}
