import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import {
  createMemoryHistory,
  createRouter,
  RouterProvider
} from '@tanstack/react-router'
import { useAuth } from '@/ui/hooks/useAuth.ts'
import { useSession } from '@/ui/hooks/useSession.ts'
import { routeTree } from '@/ui/routeTree.gen.ts'
import './App.css'
import { useTauriStorage } from '@/ui/hooks/useTauriStorage.ts'

const queryClient = new QueryClient()

const memoryHistory = createMemoryHistory({
  initialEntries: ['/']
})

const router = createRouter({
  routeTree,
  history: memoryHistory,
  context: {
    queryClient,
    authentication: undefined!,
    session: undefined!,
    tauriStorage: undefined!
  },
  defaultPreload: 'intent',
  defaultPreloadStaleTime: 0
})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

export const App = () => {
  const authentication = useAuth()
  const session = useSession()
  const tauriStorage = useTauriStorage()
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider
        router={router}
        context={{ authentication, session, tauriStorage }}
      />
    </QueryClientProvider>
  )
}
