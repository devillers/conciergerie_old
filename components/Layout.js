import Head from 'next/head';
import Footer from './Footer';
import Navbar from './Navbar';

export default function Layout({ children, title }) {
  return (
    <>
      <Head>
        <title>
          {title
            ? title + '- conciergerie saint gervais'
            : 'Conciergerie Saint Gervais'}
        </title>
        <meta name="description" content="gestion de votre bien" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col justify-between min-h-screen">
        <header>
          <Navbar />
        </header>
        <main className="">{children}</main>
        <Footer />
      </div>
    </>
  );
}
