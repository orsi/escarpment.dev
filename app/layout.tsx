export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{
          backgroundColor: '#010101',
          color: '#fafafa',
        }}
      >
        {children}
      </body>
    </html>
  );
}
