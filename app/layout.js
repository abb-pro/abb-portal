export const metadata = {
  title: 'Teacher File Portal',
  description: 'Secure file sharing for teachers',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
