import { JetBrains_Mono } from 'next/font/google'
import './globals.css'

const font = JetBrains_Mono({ subsets: ['latin'] })

export const metadata = {
    title: 'Screenshot Impact',
    description: 'A Genshin Impact Damage Calculator',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className="select-none">
            <body className={font.className}>{children}</body>
        </html>
    )
}
