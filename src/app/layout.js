import '@/styles/app.css'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className=''>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
