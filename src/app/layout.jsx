import Header from '@/components/Header'
import './globals.css'
import Providers from './Providers'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body>
        <Providers></Providers>
        {/* <Head /> */}
        <Header />

        {/*Navbar */}


        {/*SearchBox */}


        {children}</body>
    </html>
  )
}
