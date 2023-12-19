import { JetBrains_Mono } from 'next/font/google'
import { ThemeProvider } from '@/components'
import './globals.css'

const font = JetBrains_Mono({ subsets: ['latin'] })

export const metadata = {
    title: 'Abystar',
    description: 'A Genshin Impact Damage Calculator',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className="select-none">
            <body className={font.className}>
                <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
                    {children}
                </ThemeProvider>
            </body>
        </html>
    )
}
