import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header>
      <nav className='container'>
        <ul className='flex items-center justify-between'>
            <li>
                <Link href="/">Summrizer-AI</Link>
            </li>
            <li>
                <Link href="/#prizing">Prizing</Link>
            </li>
            <li>
                <Link href="/sign-in">Sign In</Link>
            </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
