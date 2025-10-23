export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    
        <h2 className="text-center">Inner  layout of chai (This is the layout) </h2>
        {children}
        </>
  );
}
