import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const DetailProduct = () => {
    const { id } = useParams(); // Mengambil parameter 'id' dari URL
    const [product, setProduct] = useState(null); // Menggunakan state 'product' untuk menyimpan detail produk
  
    // Function untuk mengambil data produk dari FakeStoreAPI
    const ambilProduct = async () => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`); // API untuk mengambil detail produk berdasarkan ID
        setProduct(response.data); // Menyimpan data produk di state
      } catch (error) {
        console.error("Error fetching product details", error); // Menangani error jika gagal mengambil data
      }
    };
  
    // UseEffect untuk memanggil fungsi ambilProduct saat komponen dimount atau 'id' berubah
    useEffect(() => {
      ambilProduct();
    }, [id]);
  
    return (
      <div className="flex flex-col justify-center items-center min-h-screen px-4">
        {product ? ( // Jika data produk tersedia, tampilkan detail produk
          <div className="w-full max-w-4xl">
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-3xl font-bold mb-4">{product.title}</h1> {/* Menampilkan judul produk */}
              <img
                className="w-full max-w-md h-auto object-contain mb-8" // Gambar full lebar, tapi maksimal medium
                src={product.image} // Gambar produk
                alt={product.title} // Alt text gambar produk
              />
            </div>
            <div className="text-center">
              <p className="text-lg mb-4">{product.description}</p> {/* Deskripsi produk */}
              <p className="text-md mb-2">Category: {product.category}</p> {/* Kategori produk */}
              <p className="text-md mb-2">Price: ${product.price}</p> {/* Harga produk */}
              <p className="text-md mb-2">Rating: {product.rating?.rate} / 5</p> {/* Rating produk */}
              <p className="text-md mb-2">Rated by {product.rating?.count} users</p> {/* Jumlah pengguna yang memberikan rating */}
            </div>
          </div>
        ) : (
          <p>Sek entenono...</p> // Jika data belum tersedia, tampilkan teks loading
        )}
      </div>
    );
  };
export default DetailProduct;
