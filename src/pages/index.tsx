import Head from 'next/head'

import Header from '../components/Header'

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Homepage</title>
      </Head>

      <Header />
    </>
  )
}

export default Home
