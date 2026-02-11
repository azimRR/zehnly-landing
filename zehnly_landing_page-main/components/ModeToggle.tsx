"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"

export function ModeToggle() {
  const { setTheme, theme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
       <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-dark-surface border-2 border-slate-200 dark:border-dark-border" />
    )
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <button
      onClick={toggleTheme}
      className="relative w-14 h-10 rounded-xl bg-white dark:bg-dark-surface border-slate-200 dark:border-dark-border shadow-[0_4px_0_0_#cbd5e1] dark:shadow-[0_4px_0_0_#334155] active:shadow-none active:translate-y-[2px] transition-all flex items-center justify-center overflow-hidden hover:brightness-95 dark:hover:brightness-110"
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{
          scale: theme === "dark" ? 0 : 1,
          rotate: theme === "dark" ? 90 : 0,
          opacity: theme === "dark" ? 0 : 1
        }}
        className="absolute"
      >
        <Sun className="h-5 w-5 text-zehnly-yellow" />
      </motion.div>
      <motion.div
        initial={false}
        animate={{
          scale: theme === "dark" ? 1 : 0,
          rotate: theme === "dark" ? 0 : -90,
          opacity: theme === "dark" ? 1 : 0
        }}
        className="absolute"
      >
        <Moon className="h-5 w-5 text-zehnly-violet-light" />
      </motion.div>
    </button>
  )
}
