'use client'

import React from 'react'
import dynamic from 'next/dynamic'

// Dynamically import the Map component with no SSR
const MapWithNoSSR = dynamic(() => import('./Map'), {
  ssr: false
})

const Page = () => {
  return (
    <div>
      <MapWithNoSSR />
    </div>
  )
}

export default Page
