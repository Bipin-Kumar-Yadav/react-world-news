import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './Pages/Home'
import FetchData from './components/FetchData/FetchData'
import Footer from './components/Footer/Footer'
import SearchData from './components/SearchData/SearchData'


const App = () => {

  const [inputData, setInputData] = useState("");
  const handleChange = (e) => {
    setInputData(e.target.value);
  }

  return (
    <>
      <Router>
        <nav className="navbar navbar-expand-lg bg-dark text-white">
          <div className="container-fluid">
            <Link className="navbar-brand text-white" to="/" >News Website</Link>
            <button className="navbar-toggler " type="button"
              data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false"
              aria-label="Toggle navigation">
              <span className="navbar-toggler-icon "></span>
            </button>

            <div className="collapse navbar-collapse " id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active text-white" aria-current="page"
                    to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active text-white" aria-current="page"
                    to="/general">General</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active text-white" aria-current="page"
                    to="/business">Business</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active text-white" aria-current="page"
                    to="/entertainment">Entertainment</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active text-white" aria-current="page"
                    to="/health">Health</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active text-white" aria-current="page"
                    to="/science">Science</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active text-white" aria-current="page"
                    to="/sports">Sports</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active text-white" aria-current="page"
                    to="/technology">Technology</Link>
                </li>
              </ul>
              <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search"
                  aria-label="Search" value={inputData} onChange={handleChange}></input>
                <Link className="btn btn-outline-success" to="/search" role="button" >Search</Link>
              </form>
            </div>
          </div>
        </nav>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/general" element={<FetchData cat="general" />} />
          <Route path="/business" element={<FetchData cat="business" />} />
          <Route path="/entertainment" element={<FetchData cat="entertainment" />} />
          <Route path="/health" element={<FetchData cat="health" />} />
          <Route path="/science" element={<FetchData cat="science" />} />
          <Route path="/sports" element={<FetchData cat="sports" />} />
          <Route path="/technology" element={<FetchData cat="technology" />} />
          <Route path='/search' element={<SearchData src={inputData} />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}
export default App
