import React from "react";

var path = window.location.pathname

function Parsley(props) {
    if (path === '/'){
  return (<div><a href='/contact'>Contact</a><br></br>
  <a href='/portfolio'>Portfolio</a><p>Est 2019.</p></div>);
} else if (path === '/contact') {
    return (<div><a href='/'>Home</a><br></br>
    <a href='/portfolio'>Portfolio</a><p>Est 2019.</p></div>);
} else if (path === '/portfolio') {
    return (<div><a href='/contact'>Contact</a><br></br>
    <a href='/'>Home</a><p>Est 2019.</p></div>)
}
       ;
}

export default Parsley;