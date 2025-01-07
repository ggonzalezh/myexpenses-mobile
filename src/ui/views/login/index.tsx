import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Card, CardFooter } from '@/ui/components/card.tsx'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/ui/components/form.tsx'
import { Input } from '@/ui/components/input.tsx'
import { Button } from '@/ui/components/button.tsx'

const formSchema = z.object({
  username: z.string().min(4, {
    message: 'Username must be at least 4 characters.'
  }),
  password: z.string().min(4, {
    message: 'Password must be at least 4 characters.'
  })
})

export const LoginView = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      password: ''
    }
  })

  return (
    <div className='w-full min-h-screen flex content-center items-center'>
      <div className='w-full m-6 sm:flex sm:justify-center'>
        <Card className='p-8 sm:w-2/5 sm:p-11'>
          <Form {...form}>
            <form onSubmit={() => console.log('Work in progress')}>
              <FormField
                control={form.control}
                name='username'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Usuario</FormLabel>
                    <FormControl>
                      <Input {...field} autoComplete='off' />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className='mt-4'>
                <FormField
                  control={form.control}
                  name='password'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Contraseña</FormLabel>
                      <FormControl>
                        <Input {...field} type='password' autoComplete='off' />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <CardFooter className='p-0 mt-8 sm:justify-center'>
                <Button className='w-full lg:w-1/4' type='submit'>
                  Ingresar
                </Button>
              </CardFooter>
            </form>
          </Form>
        </Card>
      </div>
    </div>
  )
}
