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