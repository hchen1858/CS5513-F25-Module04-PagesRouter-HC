// Import the Head component from Next.js for managing document head elements
import Head from 'next/head';
// Import the Link component from Next.js for client-side navigation
import Link from 'next/link';
// Import the custom Layout component from the components directory
import Layout from '../../components/layout';
// Commented out import for Script component (currently not used)
{/*import Script from 'next/script';*/}
 
// Define the default export function component for the first post page
export default function FirstPost() {
  // Return the JSX structure for the first post page
  return (
    // Wrap the page content in the Layout component for consistent page structure
    <Layout>
      // Use Head component to set page-specific metadata
      <Head>
        // Set the page title that appears in the browser tab
        <title>First Post</title>
      </Head>
      
      // Commented out Facebook SDK script loading (currently disabled)
      {/* <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      /> */}

      // Main heading for the first post page
      <h1>First Post</h1>
      // Secondary heading containing navigation link
      <h2>
        // Link component that navigates back to the home page when clicked
        <Link href="/">← Back to home</Link>
      </h2>
    // Close the Layout component wrapper
    </Layout>
  // Close the return statement
  );
// Close the FirstPost function component
}