import Link from "next/link";
import React from "react";

export const Header = () => {
  return (
    <header className="py-5 px-10 border-b flex justify-between itemalign">
      <div className="text-xl">
        <h1>
          <Link href="/">Next.js15 Blog</Link>
        </h1>
      </div>
      <div>
        <nav className="text-sm font-medium">
          <Link
            href="articles/new"
            className="bg-pink-200 py-5 px-5 rounded-md text-slate-700"
          >
            記事を書く
          </Link>
        </nav>
      </div>
    </header>
  );
};
