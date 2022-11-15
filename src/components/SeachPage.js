import { useState, setState } from "react";

const SearchPage = () => {
  let [searchTerm, setSearchTerm] = useState('');
  let [searchList, updateSearchList] = useState(['']);

  const fetchDataFromService = () => {
    const queryString = 'q=' + encodeURIComponent(searchTerm `Octocat in:readme user:defunkt`);
    return fetch(`https://api.github.com/search/code`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      updateSearchList(data);
    });
  }

  const searchHandler = (event) => {
    setSearchTerm(event.target.value);
    fetchDataFromService();
  }

  const listItems = searchList.map((d) => <ul key={d}>{d}</ul>);

  return(<>
    <input type="text" onChange={searchHandler} value={searchTerm}></input>
    {listItems}
  </>)

}

export default SearchPage;