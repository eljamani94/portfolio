import './globals.css';

export const metadata = {
  title: 'Aymen Portfolio',
  description: 'Data Scientist | Machine Learning Engineer | AI Enthusiast | Transforming data into actionable insights and building intelligent solutions to real-world problems',
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
