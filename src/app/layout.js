
import './globals.css';

export const metadata = {
  title: 'Dev Visuals',
  description: 'Visual cheat sheets for developers',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
