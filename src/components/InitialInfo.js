import { LinkedinLogo, GithubLogo } from '@phosphor-icons/react'
import Image from 'next/image'
import React from 'react'

const InitialInfo = () => {
  return (
    <div className='h-screen container_layout bg-hero-pattern bg-no-repeat bg-left bg-contain bg-opacity-5 py-3'>
      <div className='flex justify-between py-5 text-white items-center'>
        <a href="#" class="logo">Vitor<span>Lima</span></a>
        <nav>
          <button aria-label="Abrir Menu" id="menu-icon" aria-haspopup="true" aria-controls="navbar" aria-expanded="false">
            <span id="hamburger-icon"></span>
          </button>

          <ul className='flex gap-14' role="menu">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">Sobre</a></li>
            <li><a href="#projects">Projetos</a></li>
          </ul>
        </nav>
      </div>

      <div className='w-full flex justify-evenly container mx-auto pt-20 text-white items-center'>
          <div className='w-4/5'>
            <h1 className='text-5xl font-extrabold leading-tight'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
          </h1>
          <p className='w-4/5 py-5 text-2xl'>
            Perferendis sunt voluptatibus recusandae tempore. Dolore adipisci accusamus totam porro.
          </p>
        </div>

        <span>
          <Image src="/geek.png" width={400} height={400} className='rounded-full' />
        </span>
      </div>

      <div className='flex gap-5'>
        <button className='button_default text-white flex gap-1 hover:border-secundary transition-all hover:translate-y-2'>
          <LinkedinLogo size={25} />
          LinkedIn
        </button>
        <button className='button_default text-white flex gap-1 items-center justify-center hover:border-secundary transition-all hover:translate-y-2'>
          <GithubLogo size={25} />
          Github
        </button>
      </div>
    </div>
  )
}

export default InitialInfo