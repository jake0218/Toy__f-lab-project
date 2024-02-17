// import Containers
import Header from '@/containers/Header'
import Sidebar from '@/containers/Sidebar'
import Contents from '@/containers/Contents'

export default function Home() {
  return (
   <main className='flex flex-col min-h-screen'>
    <Header />
    <div className='flex min-h-screen'>
      <Sidebar />
      <Contents />
    </div>
   </main>
  )
}
