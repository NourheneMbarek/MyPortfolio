"use client";

import { QRCodeCanvas } from "qrcode.react";

export default function PortfolioQRCode() {
  return (
    <div className="inline-flex flex-col items-center gap-3 rounded-xl bg-white p-4">
      <QRCodeCanvas
        value="https://portfolio-nourhene-mbk.vercel.app"
        size={140}
        bgColor="#ffffff"
        fgColor="#111111"
        level="H"
        includeMargin
      />

      <p className="text-xs text-zinc-700">
        Scan my portfolio
      </p>
    </div>
  );
}