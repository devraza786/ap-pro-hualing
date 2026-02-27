import { HelmetProvider, Helmet } from "react-helmet-async";
import { TooltipProvider } from "@/components/ui/tooltip";

export const PageMeta = ({
  title,
  description,
  image = "https://miaoda-conversation-file.s3cdn.medo.dev/user-9xdz4hrfsqgw/20260228/file-9xdzbibl3bwg.png",
}: {
  title: string;
  description: string;
  image?: string;
}) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    
    {/* Open Graph */}
    <meta property="og:type" content="website" />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={image} />
    <meta property="og:site_name" content="AP Pro Hauling" />

    {/* Local Business Schema */}
    <script type="application/ld+json">
      {`
        {
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "AP Pro Hauling",
          "image": "${image}",
          "@id": "",
          "url": "https://approhauling.com",
          "telephone": "925-995-8255",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "4 Giannini Rd",
            "addressLocality": "Martinez",
            "addressRegion": "CA",
            "postalCode": "94553",
            "addressCountry": "US"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 37.9946,
            "longitude": -122.129
          },
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday"
            ],
            "opens": "00:00",
            "closes": "23:59"
          },
          "sameAs": [
            "https://www.facebook.com/approhauling",
            "https://www.instagram.com/approhauling"
          ]
        }
      `}
    </script>
  </Helmet>
);

export const AppWrapper = ({ children }: { children: React.ReactNode }) => (
  <HelmetProvider>
    <TooltipProvider>
      {children}
    </TooltipProvider>
  </HelmetProvider>
);

export default PageMeta;
