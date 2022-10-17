import React, { Component } from 'react'
import Nav from './components/Nav';
import News from './components/News';

class App extends Component {

  apiKey = process.env.REACT_APP_NEWS_API;
  a = "Raja Dey";
  render() {
    return (
      <div>
        <Nav></Nav>
        <News pageSize={5} apiKey={this.apiKey} />
      </div>
    )
  }
}
































// import './App.css';
// import Navbar from "./components/Navbar";
// import TextForm from "./components/TextForm";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";
// import About from './components/About';

// function App() {
//   return (
//     <>
//       <Router>
//         <Navbar title="Raja" aboutText="About Raja" />
//         <div className="container ">
//           <Routes>
//             <Route path="/about" element={<About />} />
//             <Route path="/" element={<TextForm heading="Enter your Text here" />} />
//           </Routes>
//         </div>
//       </Router>
//     </>
//   );
// }

export default App;
