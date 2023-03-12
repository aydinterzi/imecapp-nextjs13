import "@/styles/reset.css"
import "@/styles/globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { mainFont } from "@/libs/font";

export const metadata = {
  title: 'imecapp',
  description: 'imecapp',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={mainFont.className}>
      <body className='container'>
        <div aria-hidden="true" className="overlay" />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
