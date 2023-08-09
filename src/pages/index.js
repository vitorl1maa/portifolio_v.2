import Image from 'next/image'
import { Poppins } from 'next/font/google'
import InitialInfo from '@/components/InitialInfo'

const poppins = Poppins({ 
  weight: ['300', '400', '700'],
  style: ['normal'],
  subsets: ['latin']
 })

export default function Home() {
  return (
   <InitialInfo/>
  )
}
