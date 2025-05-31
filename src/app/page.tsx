'use client'

import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  return (
    <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
      <Button onClick={() => router.push('/authentication')}>Bootcamp!</Button>
    </div>
  )
}
