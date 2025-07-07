"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useGesture } from '@use-gesture/react'
import { cn } from "@/lib/utils";

const TabsContext = React.createContext({})

function Tabs({ defaultValue, ...props }) {
    const [activeTab, setActiveTab] = React.useState(defaultValue)
    const [direction, setDirection] = React.useState(0)

    const bind = useGesture({
        onDrag: ({ direction: [dx], distance }) => {
            if (distance > 50) {
                setDirection(dx > 0 ? -1 : 1)
            }
        },
        onDragEnd: () => {
            if (direction !== 0) {
                const currentIndex = props.children.findIndex(child => child.props.value === activeTab)
                const nextIndex = currentIndex + direction
                if (nextIndex >= 0 && nextIndex < props.children.length) {
                    setActiveTab(props.children[nextIndex].props.value)
                }
                setDirection(0)
            }
        }
    })

    return (
        <TabsContext.Provider value={{ activeTab, setActiveTab }}>
            <div {...bind()} className="w-full" {...props} />
        </TabsContext.Provider>
    )
}

function TabsList({ className, ...props }) {
    return (
        <div
            className={cn(
                "inline-flex h-12 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground w-full",
                className
            )}
            {...props}
        />
    )
}

function TabsTrigger({ value, className, children, ...props }) {
    const { activeTab, setActiveTab } = React.useContext(TabsContext)

    return (
        <button
            className={cn(
                "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm flex-1",
                className
            )}
            onClick={() => setActiveTab(value)}
            data-state={activeTab === value ? "active" : "inactive"}
            {...props}
        >
            {children}
        </button>
    )
}

function TabsContent({ value, className, children, ...props }) {
    const { activeTab } = React.useContext(TabsContext)

    return (
        <AnimatePresence mode="wait">
            {activeTab === value && (
                <motion.div
                    key={value}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className={cn("mt-2 ring-offset-background", className)}
                    {...props}
                >
                    {children}
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export { Tabs, TabsList, TabsTrigger, TabsContent }
