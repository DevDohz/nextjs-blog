import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import Layout from '../../components/layout'

export default function FirstPost() {
    return (
        <Layout>
            <Head>
                <title>Premier Post</title>
            </Head>
            <h1>First Post</h1>
            <h2>
            <Link href="/">
                <a>Back to home</a>
            </Link>
            </h2>     
            <Image
                src="/images/Dohz-profil.png" // Route of the image file
                height={144} // Desired size with correct aspect ratio
                width={144} // Desired size with correct aspect ratio
                alt="Dohz Profile"
            />       
        </Layout>
    )
  }