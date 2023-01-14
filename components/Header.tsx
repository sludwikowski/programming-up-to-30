import Image from "next/image"
import Link from "next/link"

function Header() {
  return (
    <header className='flex items-center justify-between space-x-2 font-bold px-10 py-5'>
      <div className='flex items-center space-x-2'>
        <Link href='/'>
          <Image
            src='https://avatars.githubusercontent.com/u/87614396?s=400&u=b605c71f440553ddae420f44ec43cec0c9a61464&v=4'
            width={50}
            className='rounded-full'
            height={50}
            alt='logo'
          />
        </Link>
        <h1>Programming up To 30</h1>
      </div>
      <div>
        <Link href={"https://github.com/sludwikowski"} className='px-5 py-3 text-sm md:text-base bg-gray-900 text-[#f7ab0a] flex items-center rounded-full'>
          Check My projects
        </Link>
      </div>
    </header>
  )
}

export default Header
