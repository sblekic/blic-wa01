import axios from "axios";

let Service = {
  async getGlobal(numb) {
    let response = await axios.get(
      //   `http://localhost:9999/books.json?_limit=${numb}`
      `https://www.anapioficeandfire.com/api/books?_limit=${numb}`
    );
    // ? -> ternarni operator. ako je status 200 (OK) vrati mi data ako ne vrati error
    return response.status === 200 ? response.data : "No available data";
  },
};

export default Service;

// , {params:{ _limit:10}
