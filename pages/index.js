import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { Button } from 'antd';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Numerous skilled and experienced workers, possessing in-demand expertise, find themselves excluded from well-paying positions 
          due to the absence of a bachelor's degree.Companies, eager to establish a consistent stream of proficient workers, 
          face challenges in overcoming this barrier. </p>
        <Button type="primary">Find Your Career</Button>
      </section>
    </Layout>
  );
}

