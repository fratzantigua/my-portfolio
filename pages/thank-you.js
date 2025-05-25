import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ThankYou = () => {
  const router = useRouter();

  // Redirect to home page after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/');
    }, 5000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div>
      <Head>
        <title>Thank You | Fratz Antigua</title>
        <meta name="description" content="Thank you for contacting me" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="min-h-screen flex items-center justify-center bg-background">
        <div className="max-w-2xl mx-auto px-4 py-16 text-center">
          <div className="bg-white p-8 rounded-lg shadow-xl">
            <h1 className="text-4xl font-bold mb-6 text-primary">Thank You!</h1>
            <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-green-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <p className="text-xl mb-6">
              Your message has been successfully sent. I'll get back to you as soon as possible!
            </p>
            <p className="text-gray-500 mb-6">
              You will be redirected to the homepage in 5 seconds...
            </p>
            <Link href="/">
              <a className="inline-block bg-primary hover:bg-primary/80 text-white py-2 px-6 rounded-md transition-colors duration-300">
                Return to Homepage
              </a>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ThankYou;
