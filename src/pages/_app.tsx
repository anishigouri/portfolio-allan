import { lightTheme } from '@/styles'
import { globalStyles } from '@/styles/global'
import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      value={{ light: lightTheme.className }}
    >
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
