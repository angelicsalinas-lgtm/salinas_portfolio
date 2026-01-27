import Head from 'next/head'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Learning from '@/components/Learning'
import Contact from '@/components/Contact'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Digital Artist Portfolio | Creative Design & Visual Art</title>
        <meta name="description" content="I am a digital artist who creates visually compelling, accessible, and concept-driven designs that blend creativity with purpose." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Navigation />
      
      <main className="main">
        <Hero />
        <Projects />
        <Learning />
        <Contact />
      </main>
      
      <Footer />
    </>
  )
}
