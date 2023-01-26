import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import axios from 'axios'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [data, setData] = useState();

  var apiKey = 'cfe5292e49164260adc4ab9a09db3186';
  var type = 'telsa';
  var date = '2022-12-25'
  var sortBy = 'publishedAt'

  const url = `https://newsapi.org/v2/everything?q=${type}&from=${date}&sortBy=${sortBy}&apiKey=${apiKey}`;

  const GrabNews = () => {
    axios.get(url)
      .then((response) => {
        console.clear();
        setData(response.data);
        console.log(response.data);
      }).catch(err => {
        console.log(err)
      })
  }

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <button onClick={() => GrabNews()}>Grab info</button>

        {
          data && data.articles.map((d, index) => {
            return(
              <div key={index}>
                <div>{d.author}</div>
                <div>{d.title}</div>
              </div>
            )
          })
        }
      </main>
    </>
  )
}
