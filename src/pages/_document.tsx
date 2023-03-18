import { Html, Head, Main, NextScript } from 'next/document'
import Container from '@mui/material/Container'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Container>
          <Main />
        </Container>
        <NextScript />
      </body>
    </Html>
  )
}
