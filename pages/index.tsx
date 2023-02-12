import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import Script from 'next/script'

import Style from '../styles/home.module.scss'
import cabin from '../public/img/cabin2.gif'
import { Partytown } from '@builder.io/partytown/react'
function Home() {
  return (
    <>
      <Head>
        <title>Jeff Fasulkey</title>
      </Head>
      <Partytown debug={true} forward={['dataLayer.push']} />

      <Script
        src="https://www.googletagmanager.com/gtag/js?id=UA-138257902-1"
        strategy="afterInteractive"
        type="text/partytown"
      />
      {/* <Script
        id="google-analytics"
        strategy="afterInteractive"
        type="text/partytown"
      >
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'UA-138257902-1');
        `}
      </Script> */}
      <div>
        <div className={Style.container}>
          <Image alt="Cabin" src={cabin} layout="responsive" />
        </div>
        <div className={Style.nav}>
          <Link href="https://github.com/fazulk">
            <span className={Style.link}>Github</span>
          </Link>
          <Link href="/resume">
            <span className={Style.link}>Resume</span>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Home
