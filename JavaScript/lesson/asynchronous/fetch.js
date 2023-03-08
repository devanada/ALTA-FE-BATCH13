function fetchData() {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => response.json())
    .then((result) => console.log(result))
    .catch((error) => console.log(error));
}

fetchData();

const fetchData2 = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const result = response.json();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};
