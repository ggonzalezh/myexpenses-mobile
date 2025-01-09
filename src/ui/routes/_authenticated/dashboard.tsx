import { createFileRoute } from '@tanstack/react-router'
import { SidebarComponent } from '@/ui/components/sidebar'
import {
  SidebarProvider,
  SidebarTrigger
} from '@/ui/components/shadcn/sidebar.tsx'

export const Route = createFileRoute('/_authenticated/dashboard')({
  component: () => {
    return (
      <aside>
        <SidebarProvider>
          <SidebarComponent />
          <main className='grid grid-cols-12 bg-green-400 w-screen'>
            <SidebarTrigger />
            <div className='col-span-4'>
              <h1>Dashboard</h1>
            </div>
            <div className='col-span-4'>
              <h1>Dashboard</h1>
            </div>
          </main>
        </SidebarProvider>
      </aside>
    )
  }
})
