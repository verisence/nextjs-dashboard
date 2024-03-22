import '@/app/ui/global.css'
import { maven } from './ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${maven.className} antialiased`}>{children}</body>
    </html>
  );
}
