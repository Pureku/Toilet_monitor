import Image from 'next/image'
import Layout_monitor from '@/component/layout/layout'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="">
        <div className="fixed bottom-0 left-0 flex h-screen w-full items-center justify-center bg-white">
          <div className="text-center m-auto p-auto">
            <Layout_monitor />
          </div>
        </div>
      </div>
    </main>
  )
}
