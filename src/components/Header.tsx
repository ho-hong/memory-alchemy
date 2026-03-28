import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <>
      <header className="bg-[#121212] flex items-center w-full px-8 py-6 fixed top-0 z-50">
        <Link to="/" className="text-xl font-bold tracking-tighter text-white uppercase font-headline hover:opacity-70 transition-opacity">
          MEMORY ALCHEMY
        </Link>
      </header>
      <div className="bg-[#1E1E1E] h-[1px] w-full fixed top-[76px] z-50" />
    </>
  )
}
