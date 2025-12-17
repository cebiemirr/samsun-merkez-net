export const metadata = {
  title: "Samsun Merkez Net",
  description: "Samsun hava durumu ve uyarı sistemi",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
