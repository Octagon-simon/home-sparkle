import '@/styles/root.css'
import '@/styles/app.css'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import MobileNav from '@/components/MobileNav'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='has-navbar-fixed-top'>
        {/* <MobileNav /> */}
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
