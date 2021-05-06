import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome, pull up a seat and grab a cup!" />
        <p className="description">
          Hey Hey Hey! Welcome to my first next.js app. This is pretty cool.
        </p>
      </main>

      <Footer />
    </div>
  )
}
