import type { NextPage } from "next"
import Head from "next/head"
import { GlobalStyle } from "src/app/GlobalStyle"

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>itshosein</title>
      </Head>
      <GlobalStyle />
    </div>
  )
}

export default Home
