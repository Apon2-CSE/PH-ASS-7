import { Suspense } from "react";
import "./App.css";
import Container from "./Components/Container";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import DataManagement from "./Components/DataManagement";
import { ToastContainer } from "react-toastify";

const fetchData = async () => {
  const result = await fetch("/public/data.json");
  return result.json();
};

function App() {
  const fetchPromise = fetchData();
  console.log(fetchPromise);

  return (
    <>
      <div>
        <Container></Container>
        <Navbar></Navbar>
        <Suspense
          fallback={
            <span className="loading loading-spinner text-success w-20 h-20"></span>
          }
        >
          <DataManagement fetchPromise={fetchPromise}></DataManagement>
        </Suspense>
        <Footer></Footer>
        <ToastContainer />
      </div>
    </>
  );
}

export default App;
