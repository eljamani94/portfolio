import './globals.css';

export const metadata = {
  title: 'Aymen Portfolio',
  description: 'A modern software engineer portfolio inspired by Sawad template',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
