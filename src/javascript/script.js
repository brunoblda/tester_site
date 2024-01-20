async function get_cookies() {
  const response = await fetch("https://gtdedge-hello-world.booking.com/echo");
  const movies = await response.json();
  console.log(movies);
}