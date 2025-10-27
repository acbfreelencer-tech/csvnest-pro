"use client";
import React, { useEffect, useRef, useState } from "react";
import JSZip from "jszip";
import Papa from "papaparse";

export default function Page() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    const pref = localStorage.getItem("csvnest_theme");
    const val = pref === "dark";
    setDark(val);
    document.documentElement.classList.toggle("dark", val);
  }, []);
  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("csvnest_theme", next ? "dark" : "light");
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-900 dark:text-slate-100 flex flex-col items-center justify-center p-10">
      <h1 className="text-3xl font-bold mb-6">CSVNest Pro</h1>
      <button
        onClick={toggleTheme}
        className="mb-6 px-4 py-2 border border-slate-400 rounded"
      >
        {dark ? "Light Mode" : "Dark Mode"}
      </button>
      <p className="text-center opacity-80 max-w-md">
        This is a ready Next.js page file. Upload this as <b>page.jsx</b> inside
        your <b>app</b> folder in GitHub to make your site run on Vercel without
        404 errors.
      </p>
    </div>
  );
}
