export const metaData = {
  title: "NextWatch - Movie Trailers & Info",
  description: "Watch the latest movie trailers, explore upcoming releases, and discover trending films on NextWatch.",
  keywords: ["movies", "trailers", "NextWatch", "cinema", "films"],
  authors: [{ name: "Ameer Shaik" }],
  openGraph: {
    title: "NextWatch - Movie Trailers & Info",
    description: "Watch the latest movie trailers, explore upcoming releases, and discover trending films.",
    url: "https://nextwatch.vercel.app",
    siteName: "NextWatch",
    images: [
      {
        url: "/logo.png", // place logo in /public
        width: 800,
        height: 600,
        alt: "NextWatch Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NextWatch - Movie Trailers & Info",
    description: "Explore trending movies and watch trailers instantly.",
    images: ["/logo.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};
