async function get_cookies() {
  //const response = await fetch("https://gtdedge-hello-world.booking.com/echo", { mode: 'no-cors'});
  //const movies = await response.json();
  //console.log(movies);

  return fetch('https://gtdedge-hello-world.booking.com/echo', {    
      method: 'GET',    
      crossorigin: true,    
      mode: 'no-cors',       
    })    
      .then((res) => res.json())    
      .then((data) => {    
        console.log(data);    
      })    
      .catch((error) => {    
        console.error(error);    
      });    
  };   

iframe.onload = function() {
   var content = iframe.contentDocument || iframe.contentWindow.document;
   if (content && content.lastChild) {
     console.log(content.lastChild.data); // This should give you the base64 string
   }
};