'use client';

import { useState } from 'react';
import OrderModal from '@/components/ui/order-modal';

type Props = {
  productName: string;
  productSubtitle: string;
  lang: 'tr' | 'en';
  soldOut: boolean;
  soldOutLabel: string;
  addToCartLabel: string;
};

export default function OrderButton({
  productName,
  productSubtitle,
  lang,
  soldOut,
  soldOutLabel,
  addToCartLabel,
}: Props) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <button
        disabled={soldOut}
        onClick={() => !soldOut && setModalOpen(true)}
        className="w-full text-xs tracking-[0.25em] uppercase font-light py-4 border border-[#1a1a1a] text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-[#F1F0E8] transition-all duration-500 disabled:opacity-30 disabled:cursor-not-allowed"
      >
        {soldOut ? soldOutLabel : addToCartLabel}
      </button>

      <OrderModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        productName={productName}
        productSubtitle={productSubtitle}
        lang={lang}
      />
    </>
  );
}
