import "./App.css"
import {Routes , Route , BrowserRouter} from "react-router-dom"
import Header from "./components/Header"
import HomePage from "./components/HomePage"
import AboutPage from "./components/AboutPage"
import Menu from "./components/Menu"
import BookingPage from "./components/BookingPage"
import Order from "./components/OrderOnline"
import Login from "./components/Login"
import Footer from "./components/Footer"

function App() {
  return (
    <BrowserRouter>
      <Header />
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/#about" element={<AboutPage />}></Route>
      <Route path="/menu" element={<Menu />}></Route>
      <Route path="/booking" element={<BookingPage />}></Route>
      <Route path="/order-online" element={<Order />}></Route>
      <Route path="/login" element={<Login />}></Route>
    </Routes>
    <Footer />
    </BrowserRouter>
  );
}

export default App;
