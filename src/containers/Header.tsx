'use client'
import { headerNavitions } from '@/constants/header-tab'
import classNames from 'classnames'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Header: React.FC = () => {
  const pathName = usePathname()


  const renderedHeaderNavigation = (
    <div className='h-full flex items-center gap-10 text-xl text-white font-pretendard700'>
      {
        headerNavitions.map((navItem)=>(
          <div 
            key={navItem.id}
            className={classNames(
              pathName === navItem.href
              ? 'text-gray1  border-gray1 h-full flex items-center w-max border-solid border-0 border-b-[3px]'
              :'border-solid border-0 border-b-[3px] border-transparent h-full flex items-center w-max hover:border-gray1 hover:text-gray1 '
            )}
          >
            <Link href={navItem.href}>
              {navItem.text}
            </Link>
          </div>
        ))
      }
    </div>
  )


  return (
    <header className="bg-blue1 w-full h-40">
      {/* Header-Nav h-10*/}
      <div className="bg-blue2 flex items-center justify-between">
        <div className="w-[200px] h-10 bg-blue1 flex-all-center font-pretendard900 text-white text-2xl">
          VIDIO.GG
        </div>
      </div>
      {/* Header-Tab h-10*/}
      <div className="w-full h-10 flex-all-center">
        {renderedHeaderNavigation}
      </div>
      {/* Header-Searchbar h-20*/}
      <section className="w-full bg-rose-50 h-20 flex-all-center">
        <div className="flex items-center border border-gray3 bg-white rounded-2xl">
          <input
            placeholder="Searchbar"
            type="text"
            className="w-[1200px] px-2 py-4 focus:outline-none text-center bg-transparent"
            />
          <button className="px-2 py-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
          </button>
        </div>
      </section>
    </header>
  )
}

export default Header