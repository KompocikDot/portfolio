"use client";

import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [scrollVisible, setScrollVisible] = useState(false)
  const handleScroll = () => {
    setScrollVisible(document.documentElement.scrollTop > 44);
  };

  const scroll = () => {
    window.scrollTo(0, 0)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [])

  return <button onClick={scroll} className={`rounded-full bg-aquamarine-500 p-3 hover:bg-aquamarine-800 fixed w-10 h-10 bottom-5 right-5 transition-opacity duration-500 ${scrollVisible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
    }`
  }>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="3"
      stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
    </svg>
  </button>;
}
