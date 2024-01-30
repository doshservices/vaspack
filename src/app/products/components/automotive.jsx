import React from "react";
import ProductsHero from "./ProductsHero";
import ProductsBody from "./ProductsBody";
import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Header/Header";


export default function Automotive() {
  return (
    <div>
      <Header />
      <ProductsHero
        title="Automotive Gas Oil - Diesel"
        background="automotive-hero"
        text="Vaspack Energy Limited is an indigenous downstream company in the Oil & Gas sector with interests in procurement, marketing and distribution of Petroleum Products (Automotive Gas Oil (AGO), Premium Motor Spirit (PMS) and Liquefied Petroleum Gas (LPG); using innovative technology."
      />
      <ProductsBody />
      <Footer />
    </div>
  );
}
