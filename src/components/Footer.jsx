import React from 'react'

export default function Footer() {
  return (
    <footer className="py-10">
      <div className="container-lg flex flex-col md:flex-row items-center justify-between gap-4 subtle">
        <p>© <span id="year">{new Date().getFullYear()}</span> Sebastian Macwan. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="https://github.com/sebastianmacwan13" target="_blank" rel="noreferrer" className="hover:text-primary">GitHub</a>
          <a href="https://www.linkedin.com/in/sebastian-macwan-b39bb6262" target="_blank" rel="noreferrer" className="hover:text-primary">LinkedIn</a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-primary">Instagram</a>
        </div>
      </div>
    </footer>
  )
}
