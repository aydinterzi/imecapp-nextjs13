import "@/styles/reset.css"
import  "@/styles/globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='container'>
        <Header />
        {children}
        <Footer/>
        </body>
    </html>
  )
}
