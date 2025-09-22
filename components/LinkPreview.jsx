"use client"

import { useState } from "react"

export default function LinkPreview({ children, title, subtitle, href, avatar, position = "top" }) {
  const [hovering, setHovering] = useState(false)

  const posClasses = position === "top"
    ? "bottom-full left-1/2 -translate-x-1/2 mb-3"
    : "top-full left-1/2 -translate-x-1/2 mt-3"

  return (
    <span
      className="relative inline-flex"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      data-no-letter
    >
      {children}
      {hovering && (
        <div className={`absolute ${posClasses} z-50`} aria-hidden="true">
          <div className="w-[320px] max-w-[90vw] rounded-lg border border-zinc-700 bg-zinc-900/95 shadow-xl backdrop-blur px-4 py-3 animate-fade-in-up text-left">
            <div className="flex items-center gap-3">
              {avatar && (
                <img
                  src={typeof avatar === 'string' ? avatar : (avatar?.src || undefined)}
                  alt="avatar"
                  className="w-7 h-7 rounded-full object-cover"
                />
              )}
              <div className="min-w-0">
                <div className="text-sm font-medium text-white truncate">{title}</div>
                {subtitle && <div className="text-xs text-zinc-400 truncate">{subtitle}</div>}
              </div>
            </div>
            <div className="mt-2 text-[11px] text-zinc-400 truncate">{href}</div>
          </div>
        </div>
      )}
    </span>
  )
}