import React from "react";

var path = window.location.pathname

console.log(path)


function Onion(props) {
    if (path === '/'){
  return (<div>this is strange</div>);
} else if (path === '/about') {
    return (<div>this is weird</div>);
} else if (path === '/user') {
    return (<div>this is unusual</div>)
}
}
export default Onion;