"use client"

import { useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"

export default function LinkPreview({ children, title, subtitle, href, avatar, position = "top" }) {
  const [hovering, setHovering] = useState(false)
  const triggerRef = useRef(null)
  const popupRef = useRef(null)
  const [posStyle, setPosStyle] = useState({ top: 0, left: 0 })

  // Compute fixed coordinates so the preview is portaled outside any <p>
  useEffect(() => {
    if (!hovering) return
    const compute = () => {
      const el = triggerRef.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const popup = popupRef.current
      const gap = 12 // space between trigger and tooltip
      const vw = window.innerWidth
      const vh = window.innerHeight
      const margin = 8
      const w = Math.min(popup?.offsetWidth || 320, Math.floor(vw * 0.9))
      const h = Math.min(popup?.offsetHeight || 200, Math.floor(vh * 0.5))
      const cx = rect.left + rect.width / 2
      const left = Math.min(Math.max(cx - w / 2, margin), vw - margin - w)
      let top = rect.bottom + gap; // Prefer below
      if (top > vh - margin - h) {
        top = rect.top - gap - h; // Flip to above if no space
      }
      top = Math.min(Math.max(top, margin), vh - margin - h)
      setPosStyle({ top, left })
    }
    compute()
    window.addEventListener('scroll', compute, { passive: true })
    window.addEventListener('resize', compute)
    return () => {
      window.removeEventListener('scroll', compute)
      window.removeEventListener('resize', compute)
    }
  }, [hovering, position])

  return (
    <span
      ref={triggerRef}
      className="inline-flex"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      data-no-letter
    >
      {children}
      {hovering && createPortal(
        <div
          ref={popupRef}
          className={`fixed z-50`}
          style={{ top: posStyle.top, left: posStyle.left }}
          aria-hidden
        >
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
        </div>,
        document.body
      )}
    </span>
  )
}