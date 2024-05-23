import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import ClientSide from '@/components/clientSide';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Next App',
  description: 'Next.js starter app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <ClientSide> */}
          <div className='container'>
            <Navbar/>
            {children}
            <Footer/>
          </div>
        {/* </ClientSide> */}
      </body>
    </html>
  );
}