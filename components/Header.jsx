import React, {useContext, useState, useEffect} from 'react'
import Link from 'next/link'
import {getCategories} from '../services' 
import Image from 'next/image'



function Header() {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    getCategories()
      .then(newCategories => setCategories(newCategories))
  }, [])

  
  return (
    <div className='container mx-auto px-10 mb-8'>
      <div className='border-b w-full inline-block border-gray-300 outline-offset-2 py-5'>
        <div className='md:float-left block'>
          <Link href="/">
            <span className='cursor-pointer font-bold text-4xl text-white'>
              <Image 
                className='logo'
                height={120} 
                width={120}
                src='/logof.png'
                alt="code_mind"
                priority
              />
            </span>
          </Link>
        </div>
        <div className='hidden md:float-left md:contents'>
          {categories.slice().reverse().map((category) => (
            <Link key={category.slug} href={`/category/${category.slug}`}>
              <span className='md:float-right mt-1 align-middle text-sky-800 ml-4 font-semibold hover:text-pink-600 cursor-pointer'>
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Header