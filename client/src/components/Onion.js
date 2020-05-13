import React from "react";

var path = window.location.pathname

console.log(path)


function Onion(props) {
    if (path === '/'){
  return (<div>this is strange<a href='/about'>Do You Like BEans!</a><br></br>
  <a href='/user'>Dolphin Pizza</a></div>);
} else if (path === '/about') {
    return (<div>this is weird<a href='/'>Saucey</a><br></br>
    <a href='/user'>Dolphin Pizza</a></div>);
} else if (path === '/user') {
    return (<div>this is unusual<a href='/about'>Do You Like BEans!</a><br></br>
    <a href='/'>Take Me Aaway</a></div>)
}
}
export default Onion;