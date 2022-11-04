import React, { ReactNode } from "react";
import "../styles/globals.css";

export default function layout({ children }: { children: ReactNode }) {
  return (
    <html>
      <head>
        <title>html</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
