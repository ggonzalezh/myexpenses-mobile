import { createRootRouteWithContext, Outlet } from '@tanstack/react-router'
import { QueryClient } from '@tanstack/react-query'
import { AuthContext } from '@/ui/hooks/useAuth.ts'
import { SessionContext } from '@/ui/hooks/useSession.ts'
import { TauriStorage } from '@/ui/hooks/useTauriStorage.ts'

const RootComponent = () => {
  return (
    <div className='h-screen w-screen'>
      <Outlet />
    </div>
  )
}

export const Route = createRootRouteWithContext<IRootRouterContext>()({
  beforeLoad: async ({ context }) => {
    const { tauriStorage } = context
    await tauriStorage.initialize()
  },
  component: RootComponent
})

export interface IRootRouterContext {
  queryClient: QueryClient
  authentication: AuthContext
  session: SessionContext
  tauriStorage: TauriStorage
}
