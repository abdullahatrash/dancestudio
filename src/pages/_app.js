
import '../styles/globals.css'
// import Header from "../components/Header";

const MyApp = ({ Component, pageProps }) => {
  return (
    <div className="h-screen text-gray-700">
      <div style={{ height: "90vh" }}>
        <Component {...pageProps} />
      </div>
    </div>
  )
}

export default MyApp
