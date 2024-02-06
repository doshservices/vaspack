import React from "react";
import GreenLine from "../../components/GreenLine/GreenLine";

export default function CommercialBody() {
  return (
    <div className=" my-8 flex flex-col gap-8 mx-[5%] font-medium text-[0.85rem] sm:text-[0.9rem] ">
      <section>
        <GreenLine text="" />
        <h3 className=" text-center sm:text-left font-bold uppercase text-base">Cash-and-Carry</h3>
        <p className="mt-2">
          Our customers are required to make payments before delivery is made.
          The order will be processed upon conﬁrmation of payment and a receipt
          will be issued after delivery.
        </p>
      </section>

      <section>
        <GreenLine text="" />
        <h3 className="text-center sm:text-left font-bold uppercase text-base">Bank Guarantee</h3>
        <p className="mt-2">
          A credit facility not exceeding 30 days upon provision of a Bank
          Guarantee to us, and after a critical evaluation by our audit team.
        </p>
      </section>

      <section>
        <GreenLine text="" />
        <h3 className="text-center sm:text-left font-bold uppercase text-base">Credit Transaction</h3>
        <p className="mt-2">
        A credit facility not exceeding 30 days upon critical evaluation and approval by our audit team.
        </p>
      </section>
    </div>
  );
}
