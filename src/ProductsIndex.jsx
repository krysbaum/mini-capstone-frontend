/* eslint-disable react/prop-types */
import { useState } from "react";

export function ProductsIndex(props) {
  const [searchFilter, setSearchFilter] = useState("");

  return (
    <div className="block max-w-sm p-6 bg-white border border-orange-200 rounded-lg shadow hover:bg-orange-100 dark:bg-orange-100 dark:border-orange-100 dark:hover:bg-orange-200">
      Search filter:{" "}
      <input list="titles" type="text" value={searchFilter} onChange={(event) => setSearchFilter(event.target.value)} />
      <datalist id="titles">
        {props.products.map((product) => (
          <option key={product.id}>{product.name}</option>
        ))}
      </datalist>
      {props.products
        .filter((product) => product.name.toLowerCase().includes(searchFilter.toLowerCase()))
        .map((product) => (
          <div key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <img width="500" src={product.primary_image} alt="" />
            <br></br>
            <button
              className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full"
              onClick={() => props.onShowProduct(product)}
            >
              More Info
            </button>
          </div>
        ))}
    </div>
  );
}
