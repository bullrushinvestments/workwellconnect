import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'WorkWellConnect',
  description: 'A micro-SaaS platform connecting small businesses with health and wellness services for remote workers. It helps companies offer benefits that improve employee well-being without increasing HR workload.',
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">WorkWellConnect</h1>
      <p className="mt-4 text-lg">A micro-SaaS platform connecting small businesses with health and wellness services for remote workers. It helps companies offer benefits that improve employee well-being without increasing HR workload.</p>
    </main>
  )
}
