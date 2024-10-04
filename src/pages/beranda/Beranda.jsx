import React, { useCallback, useEffect, useReducer, useState } from "react";
import Navbar from "../../components/Navbar";
import { Link, useSearchParams } from "react-router-dom";
import axios from "axios";
import BerandaView from "./BerandaView";
import { data } from "autoprefixer";

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
        data: action.payload,
        filterData: action.payload,
        loading: false,
      };
    case "SET_FILTER":
      return {
        ...state,
        filterData: action.payload,
      };
    default:
      throw new Error("error di case");
  }
};

const Beranda = () => {
  const [state, dispatch] = useReducer(reducer, nilaiDefault);

  const [product, setProduct] = useState();
  const [hasilCari, setHasilCari] = useState();

  const [cari, setCari] = useSearchParams();
  const cariProduct = cari.get("cariproduct");

  const ambilProduct = async () => {
    const response = await axios.get(
      "https://restaurant-api.dicoding.dev/list"
    );
    const data = await response.data;
    setProduct(data);
    dispatch({ type: "FETCH_BERHASIL", payload: data });
  };

  useEffect(() => {
    if (!cariProduct) {
      ambilProduct();
    } else {
      ubahCari(cariProduct);
    }
  }, [cariProduct]);

  const ubahCari = useCallback(
    async (input) => {
      setCari({ cariproduct: input });

      const response = await axios.get(
        "https://restaurant-api.dicoding.dev/search?q=" + cariProduct
      );
      const data = await response.data;
      setHasilCari(data);
      dispatch({ type: "SET_FILTER", payload: data });
    },
    [cariProduct]
  );

  const hasilFilter = cariProduct ? hasilCari : product;

  console.log(state);

  return (
    <BerandaView
      cariProduct={cariProduct}
      hasilCari={hasilCari}
      hasilFilter={hasilFilter}
      ubahCari={ubahCari}
    />
  );
};

export default Beranda;
