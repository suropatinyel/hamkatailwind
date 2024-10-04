import axios from 'axios'; 
import React, { useEffect, useReducer, useState } from 'react'; 
import { useSearchParams } from 'react-router-dom'; 
import { ProductView } from './ProductView'; 

const nilaiDefault = {
    data: [], 
    filterData: [], 
    loading: true,
}; 

const reducer = (state, action) => {
    switch (action.type) {
        case "FETCH_BERHASIL":
            return {
                ...state, 
                data: action.playload, 
                filterData: action.playload, 
                loading: false,
            };
        case "SET_FILTER": 
            return {
                ...state, 
                filterData: action.playload,
            };
        default:
            throw new Error("error di case");
    }
}

export const Product = () => {
    const [state, dispatch] = useReducer(reducer, nilaiDefault); 
    const [cari, setCari] = useSearchParams(); 
    const cariproduct = cari.get("cariproduct") || ""; // Nilai default jika tidak ada query

    // Function to handle search input changes
    const ubahProduct = (input) => {
        if (input !== cariproduct) {
            setCari({ cariproduct: input });
        }
    };

    // Fetch product data from API
    const ambilProduct = async () => {
        try {
            const { data } = await axios.get("https://fakestoreapi.com/products/");
            dispatch({ type: "FETCH_BERHASIL", playload: data });
        } catch (error) {
            console.error("Error fetching products", error);
        }
    };

    // Filter products based on search query
    useEffect(() => {
        const timer = setTimeout(() => {
            const filteredProducts = state.data.filter((product) =>
                product.title.toLowerCase().includes(cariproduct.toLowerCase())
            );

            dispatch({ type: "SET_FILTER", playload: filteredProducts });

            // Logging the number of found products
            console.log(`Searching for "${cariproduct}", found ${filteredProducts.length} products.`);
        }, 500); // Debounce delay 500ms

        return () => clearTimeout(timer); // Cleanup debounce timer
    }, [cariproduct, state.data]);

    // Fetch data when component mounts
    useEffect(() => {
        console.log("Fetching products...");
        ambilProduct();
    }, []);

    return (
        <ProductView
            cariproduct={cariproduct}
            ubahProduct={ubahProduct}
            hasilProduct={state.filterData} // Pastikan ini hasil yang difilter
        />
    );
};

export default Product;
