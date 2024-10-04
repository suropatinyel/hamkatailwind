import React from "react";
import { Link } from "react-router-dom";

export const ProductView = ({ cariproduct, ubahProduct, hasilProduct }) => {
  return (
    <div className='Produk  bg-blue-200 dark:bg-black'>
      {/* Search Input */}
      <label className="input input-bordered bg-blue-700 text-black dark:bg-slate-700 dark:text-white flex items-center gap-2">
        <input
          type="text"
          className="grow cari placeholder-black dark:placeholder-white"
          placeholder="Search"
          value={cariproduct} // Bind input value to search query
          onChange={(input) => ubahProduct(input.target.value)} // Update search query on change
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-4 w-4 opacity-70"
        >
          <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd"
          />
        </svg>
      </label>

      {/* Display search result */}
      <p className="card dark:text-white">
        Hasil dari: {cariproduct} ditemukan ({hasilProduct.length} hasil)
      </p>

      {/* Product cards */}
      <div className="grid grid-cols-3 gap-4">
        {hasilProduct.map((products) => (
          <div key={products.id}>
            <div className="card bg-blue-400 text-black dark:bg-slate-500 dark:text-white w-96 shadow-xl">
              <figure>
                <img
                  src={products.image}
                  alt={products.title}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{products.title}</h2>
                <p className="line-clamp-2">{products.description}</p>
                <div className="card-actions justify-end">
                  <Link to={`/DetailProduct/${products.id}`} className="btn btn-wide btn-primary text-black dark:btn btn-wide dark:btn-neutral dark:text-white">
                    Buy Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
