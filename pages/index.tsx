import { Home } from '@/home/pages';
import Head from 'next/head';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Minery App</title>
        <meta name="description" content="Minery description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home />
    </>
  );
}
