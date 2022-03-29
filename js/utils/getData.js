let data;

async function getData() {
  let response  = await fetch('./data/portfolio.json');
  data = await response.json();
  return data
}