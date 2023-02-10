import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
import './globals.css'
import Providers from './Providers'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body>
        <Providers>
        {/* <Head /> */}
        <Header />

        {/*Navbar */}
        <Navbar />

        {/*SearchBox */}
        {children}
        {children}
        </Providers>
        </body>
    </html>
  )
}
