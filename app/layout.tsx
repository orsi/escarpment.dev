import "./global.css";
import FaviconIcon from "./favicon.png";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Escarpment Developments</title>
        <link rel="icon" type="image/png" href={FaviconIcon.src}></link>
      </head>
      <body>{children}</body>
    </html>
  );
}
