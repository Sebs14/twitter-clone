import { AuthButtonServer } from '@/app/components/auth-button-server'

export default function login () {
  return (
    <section className='grid place-content-center min-h-screen'>
      <h1 className='text-xl font-bold text-center mb-4'>LogIn in KillerTer</h1>
      <AuthButtonServer />
    </section>
  )
}
