"use client";

import { QRCodeSVG } from "qrcode.react";

export default function ServerQr({ value }: { value: string }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <QRCodeSVG
        value={value}
        size={180}
        level="M"
        includeMargin
      />
      <span className="text-xs text-gray-500 break-all">
        {value}
      </span>
    </div>
  );
}
