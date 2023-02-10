"use client";

import { ThemeProvider } from 'next-themes'
import React from 'react'

export default function Providers({children}) {
  return (
    <div>
        <ThemeProvider enableSystem = {true} attribute = "class">
            {children}
        </ThemeProvider>
    </div>
  )
}
