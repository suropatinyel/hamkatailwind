import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const DetailNegara = () => {
  const { id } = useParams(); // Mengambil parameter 'id' dari URL
  const [negara, setNegara] = useState(null); // Menggunakan state 'negara' untuk menyimpan detail negara
  
  // Function untuk mengambil data negara dari API
  const ambilProduct = async () => {
    try {
      const response = await axios.get(`https://freetestapi.com/api/v1/countries/${id}`); // Tambahkan slash sebelum id
      console.log(response.data); // Debugging untuk memeriksa data yang diterima
      setNegara(response.data); // Menyimpan data negara di state
    } catch (error) {
      console.error("Error fetching country details", error); // Menangani error jika gagal mengambil data
    }
  };

  // UseEffect untuk memanggil fungsi ambilProduct saat komponen dimount atau 'id' berubah
  useEffect(() => {
    ambilProduct();
  }, [id]);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen px-4">
      {negara ? ( // Jika data negara tersedia, tampilkan detail negara
        <div className="w-full max-w-4xl">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-3xl font-bold mb-4">{negara.name}</h1> {/* Menampilkan nama negara */}
            <img
              className="w-full max-w-md h-auto object-contain mb-8" // Gambar full lebar, tapi maksimal medium
              src={negara.flag} // Gambar bendera negara
              alt={negara.name} // Alt text gambar negara
            />
          </div>
          <div className="text-center">
            <p className="text-lg mb-4">Population: {negara.population}</p> {/* Populasi negara */}
            <p className="text-md mb-2">Land Area: {negara.land_area} km²</p> {/* Luas negara */}
            <p className="text-md mb-2">Density: {negara.density}</p> {/* Kepadatan penduduk */}
            <p className="text-md mb-2">Capital: {negara.capital}</p> {/* Ibukota */}
            <p className="text-md mb-2">Currency: {negara.currency}</p> {/* Mata uang */}
          </div>
        </div>
      ) : (
        <p>Loading...</p> // Jika data belum tersedia, tampilkan teks loading
      )}
    </div>
  );
};

export default DetailNegara;
