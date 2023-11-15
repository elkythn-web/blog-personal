import { Chakra_Petch } from "next/font/google"
import NavBar from "@/components/NavBar"
import Footer from "@/components/Footer"
import './globals.css'

const chakra_petch = Chakra_Petch({ weight: '400', subsets: ['latin'] })

export const metadata = {
  title: 'Blog - Elkin Portillo',
  description: 'Blog Personal de Elkin Portillo',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className=" bg-[#000] ">
      <body className={chakra_petch.className} >
        <NavBar />
        {children}
        <Footer />
        </body>
    </html>
  )
}
