"use client";
import * as React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <main className={"main__wrapper"}>
      <Link href={"/requests"} className={"link"}>
        La cereri
      </Link>
    </main>
  );
}
