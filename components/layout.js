// components/layout.js
import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

const name = " ";
export const siteTitle = "Unbound - Limitless careers";

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <div className="bg-black-100">
      <Head>
        <link rel="icon" href="/favicon7.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            {/* <Link href="/">
              <div className="fixed top-0 left-0 z-50 p-4">
                <Image
                  priority
                  src="/images/unbound logo.jpg"
                  height={100}
                  width={250}
                />
              </div>
            </Link> */}

            
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && <div className={styles.backToHome}></div>}

      {/* <img
          className="absolute -top-20 -right-20"
          src="/picture2.jpg"
          width={500}
          height={500}
        />

        <img
          className="absolute -bottom-20 -left-20"
          src="/picture.jpg"
          height={400}
          width={400}
        /> */}

<img
          className="absolute -top-20 -right-20"
          src="https://i.ibb.co/dgsnsMW/picture2.png"
          width={500}
          height={500}
        />

        <img
          className="absolute -bottom-20 -left-20"
          src="https://i.ibb.co/gdvvHH4/picture.png"
          height={400}
          width={400}
        />
        

    </div>
    </div>
  );
}
