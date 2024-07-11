import Head from 'next/head';

export default function Hero() {
  return (
    <div className="container">
      <Head>
        <title>My Homepage</title>
        <meta name="description" content="A simple and beautiful homepage in Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Welcome to My Homepage
        </h1>
        <p className="description">
          A simple and beautiful homepage in Next.js
        </p>
      </main>

      <style jsx>{`
       .container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background-image: url('');
          background-size: cover;
          background-position: center;
        }
       .title {
          margin: 0;
          color: white;
          font-size: 4rem;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        }
       .description {
          color: white;
          font-size: 1.5rem;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        }
      `}</style>
    </div>
  )
}
