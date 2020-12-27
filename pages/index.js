import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="homepage">
        <div class="homepage_title-section">
          <h1 className="homepage__title">87<span style={{color: 'red'}}>LUX</span></h1>
          <p className="homepage__sub-title">A Modern Digital Agency</p>
        </div>
        <nav className="homepage__navigation">
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/about">
            <a>About</a>
          </Link>
          <Link href="/career">
            <a>Careers</a>
          </Link>
          <Link href="/contact">
            <a>Contact</a>
          </Link> 
        </nav>
        
      </main>
    </div>
  )
}
