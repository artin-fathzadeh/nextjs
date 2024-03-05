import { Error } from '@/components/component/error';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Genclude</title>
        <meta name="description" content="Genclude Dashboard" />
      </Head>
      <Error />
    </>
  );
}
