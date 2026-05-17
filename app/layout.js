import "./globals.css";

export const metadata = {
  title: "VIRIYA PHYSIOCARE & REHABILITATION CENTRE",
  description:
    "Premium physiotherapy and rehabilitation care — Sports Rehab, Spine Therapy, Neuro Rehab, and more. Book via WhatsApp or call today.",
  icons: {
    icon: "/assets/Logo2.jpg",
    shortcut: "/assets/Logo2.jpg",
    apple: "/assets/Logo2.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
