// import 'tailwindcss/tailwind.css'
import Frame from "../components/Frame";
import "../tailwind.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      
    </>
  );
}

export default MyApp;
