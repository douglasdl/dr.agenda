import { headers } from 'next/headers'
import { redirect } from 'next/navigation'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/_components/ui/tabs'
import { auth } from '@/lib/auth'

import Image from 'next/image'
import LoginForm from './components/login-form'
import SignUpForm from './components/sign-up-form'

export default async function AuthenticationPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  })
  if (session?.user) {
    redirect('/dashboard')
  }
  return (
    <div className="flex h-screen w-screen items-center justify-center p-2">
      <div className="flex flex-col items-center justify-center gap-8">
        <Image src="/logo.svg" alt="Doutor Agenda" width={272} height={56} />

        <Tabs defaultValue="login" className="w-[400px]">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="register">Criar conta</TabsTrigger>
          </TabsList>
          <TabsContent value="login">
            <LoginForm />
          </TabsContent>
          <TabsContent value="register">
            <SignUpForm />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
