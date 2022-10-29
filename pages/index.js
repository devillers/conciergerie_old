import Head from 'next/head';

import Hero from '../components/Hero';
import Hebergements from '../components/Renting_module.';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>conciergerie saint gervais</title>
        <meta
          name="description"
          content="conciergerie saint gervais - location de linge - gestion de votre logement "
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero
        heading="Conciergerie"
        headingSecond="saint gervais"
        message="we almost look after everything "
      />

      <Hebergements id="#hebergements" />
    </Layout>
  );
}
