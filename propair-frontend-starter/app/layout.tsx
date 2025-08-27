export const metadata = { title: "ProPair", description: "Pairing homeowners with trusted pros" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{maxWidth: 600, margin: "0 auto", padding: 24, fontFamily: "system-ui, sans-serif"}}>
        <header style={{display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom: 24}}>
          <strong>ProPair</strong>
          <nav><a href="/">Home</a></nav>
        </header>
        {children}
        <footer style={{marginTop: 48, opacity: 0.6}}>© {new Date().getFullYear()} ProPair</footer>
      </body>
    </html>
  );
}
