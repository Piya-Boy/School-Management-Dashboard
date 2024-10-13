"use client";
import { useEffect, useState } from 'react';

export default function SwitchMode() {
  const [theme, setTheme] = useState('light');

  // ตรวจสอบธีมเริ่มต้นเมื่อโหลดหน้า
  useEffect(() => {
    const savedTheme = localStorage.getItem('hs_theme');
    
    // กำหนดธีมเริ่มต้นจาก localStorage หรือระบบ
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.add(savedTheme);
    } else {
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const defaultTheme = systemPrefersDark ? 'dark' : 'light';
      setTheme(defaultTheme);
      document.documentElement.classList.add(defaultTheme);
    }
  }, []);

  // ฟังก์ชันสลับธีม
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.remove(theme); // เอาธีมปัจจุบันออก
    document.documentElement.classList.add(newTheme); // เพิ่มธีมใหม่
    localStorage.setItem('hs_theme', newTheme); // บันทึกธีมใน localStorage
  };

  return (
    <div>
      {/* ปุ่มสำหรับ Dark Mode และ Light Mode */}
      <button 
        type="button"
        className="font-medium rounded-full hover:bg-gray-200 text-gray-400 dark:text-gray-500 dark:hover:bg-gray-700 transition-colors duration-300"
        onClick={toggleTheme}
        aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      >
        <span className="group inline-flex shrink-0 justify-center items-center size-9">
          {theme === 'light' ? (
            <svg
              className="shrink-0 size-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
            </svg>
          ) : (
            <svg
              className="shrink-0 size-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="4"></circle>
              <path d="M12 2v2"></path>
              <path d="M12 20v2"></path>
              <path d="m4.93 4.93 1.41 1.41"></path>
              <path d="m17.66 17.66 1.41 1.41"></path>
              <path d="M2 12h2"></path>
              <path d="M20 12h2"></path>
              <path d="m6.34 17.66-1.41 1.41"></path>
              <path d="m19.07 4.93-1.41 1.41"></path>
            </svg>
          )}
        </span>
      </button>
    </div>
  );
}
