"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/lib/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="shell nav-shell">
        <Link className="wordmark" href="/" aria-label="Glanzberg Web, home" onClick={() => setOpen(false)}>
          <span className="wordmark-symbol" aria-hidden="true"><span>G</span><span>W</span></span>
          <span className="wordmark-text">GLANZBERG<span>WEB</span></span>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className={pathname === item.href ? "active" : ""} aria-current={pathname === item.href ? "page" : undefined}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="nav-actions">
          <Link className="nav-contact" href="/contact">Start a project <span aria-hidden="true">↗</span></Link>
          <button
            className="menu-toggle"
            type="button"
            onClick={() => setOpen(!open)}
            aria-controls="mobile-navigation"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <span className={open ? "menu-bars open" : "menu-bars"}><i /><i /></span>
          </button>
        </div>
      </div>
      <nav id="mobile-navigation" className={open ? "mobile-nav open" : "mobile-nav"} aria-label="Mobile navigation" inert={!open}>
        {[...navItems, { label: "Contact", href: "/contact" }].map((item) => (
          <Link key={item.href} href={item.href} onClick={() => setOpen(false)} aria-current={pathname === item.href ? "page" : undefined}>
            {item.label} <span aria-hidden="true">↗</span>
          </Link>
        ))}
      </nav>
    </header>
  );
}
