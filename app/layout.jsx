import { Chakra_Petch } from "next/font/google"
import NavBar from "@/components/NavBar"
import './globals.css'

export const chakra_petch = Chakra_Petch({ weight: '400', subsets: ['latin'] })

export const metadata = {
  title: 'Blog - Elkin Portillo',
  description: 'Blog Personal de Elkin Portillo',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={chakra_petch.className}>
        <NavBar />
        {children}
        </body>
    </html>
  )
}
