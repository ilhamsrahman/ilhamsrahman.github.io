'use client'

import { useState } from 'react'

export default function Banner() {
  const [bannerOpen, setBannerOpen] = useState<boolean>(true)

  return (
    <>
      {bannerOpen && (
        <div className="fixed right-4 bottom-[calc(1rem+env(safe-area-inset-bottom))] md:bottom-8 md:right-12 z-50">
          <div className="bg-amber-100 text-sm pl-4 pr-3 py-2 md:p-3 rounded-full md:rounded shadow-lg ring-1 ring-black/5 flex items-center">
            <div className="text-slate-500 inline-flex">
              <a
                className="font-medium hover:underline text-sky-800"
                href="https://www.linkedin.com/in/israhman/"
                target="_blank"
                rel="noreferrer"
              >
                See me on LinkedIn
              </a>{' '}
              {/* <img src="/images/pngegg.png" className="w-5 h-5" alt="Logo"/> */}
            </div>
            <button className="text-slate-500 hover:text-slate-400 pl-2 ml-3 border-l border-gray-700" onClick={() => setBannerOpen(false)}>
              <span className="sr-only">Close</span>
              <svg className="w-4 h-4 shrink-0 fill-current" viewBox="0 0 16 16">
                <path d="M12.72 3.293a1 1 0 00-1.415 0L8.012 6.586 4.72 3.293a1 1 0 00-1.414 1.414L6.598 8l-3.293 3.293a1 1 0 101.414 1.414l3.293-3.293 3.293 3.293a1 1 0 001.414-1.414L9.426 8l3.293-3.293a1 1 0 000-1.414z" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  )
}
