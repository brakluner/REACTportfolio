import React from "react";

var path = window.location.pathname

console.log(path)


function Onion(props) {
    if (path === '/'){
  return (<div className="onion"><h2>Home</h2><a href='/contact'>Contact</a><br></br>
  <a href='/portfolio'>Portfolio</a></div>);
} else if (path === '/contact') {
    return (<div className="onion"><h2>Contact</h2><a href='/'>Home</a><br></br>
    <a href='/portfolio'>Portfolio</a></div>);
} else if (path === '/portfolio') {
    return (<div className="onion"><h2>Portfolio</h2><a href='/contact'>Contact</a><br></br>
    <a href='/'>Home</a></div>)
}
}
export default Onion;