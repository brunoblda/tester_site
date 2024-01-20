async function get_cookies() {
  const response = await fetch("https://gtdedge-hello-world.booking.com/echo", { mode: 'no-cors'});
  const movies = await response.json();
  console.log(movies);
}