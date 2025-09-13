// Import the Head component from Next.js for managing document head elements like title and meta tags
import Head from 'next/head';
// Import the Link component from Next.js for client-side navigation between pages
import Link from 'next/link';
// Import the Layout component and siteTitle constant from the layout component for consistent page structure
import Layout, { siteTitle } from '../components/layout';
// Import CSS module styles for utility classes used in this component
import utilStyles from '../styles/utils.module.css';

import { getSortedPostsData } from '../lib/posts';
 
export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
 
// Main Home component that serves as the landing page for the Next.js blog application.
// This function renders the homepage with a welcome message, site title, and navigation link to the first blog post.
export default function Home({allPostsData}) {
  return (
    // Return the JSX structure for the homepage
    <Layout home>
      {/* Use Next.js Head component to manage the document head */}
      <Head>
        {/* Set the page title using the siteTitle constant from layout component */}
        <title>{siteTitle}</title>
      </Head>
      {/* Create a section with heading styles for the main content */}
      <section className={utilStyles.headingMd}>
        {/* Display a personal introduction message */}
        <p>Hello, I'm Helen the British Blue cat. I'm just starting to learn the uses of Next.js</p>
        {/* Display a sample website notice with a link to the Next.js tutorial */}
        <p>
          (This is a sample website - you'll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>

       {/* Add this <section> tag below the existing <section> tag */}
       <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>

      {/* Create a heading with a link to the first blog post */}
      <h1>
          {/* Display text with a Next.js Link component for client-side navigation to the first blog post */}
          Read <Link href="/posts/first-post">this page!</Link>
      </h1>

      {/* Closing Layout component */}
    </Layout>
  );
}