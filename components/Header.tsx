import Link from 'next/link';

const Header = () => {
  return (
    <header className='flex justify-between items-center text-gray-700'>
      <Link className='uppercase' href="/">imecapp</Link>
      <div className='flex gap-8'>
        <Link href="/messages">Messages</Link>
        <Link href="/postad">Post an ad</Link>
        <Link href="/profile">Profile</Link>
      </div>
    </header>
  )
}

export default Header