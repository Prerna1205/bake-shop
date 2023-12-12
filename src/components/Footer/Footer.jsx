import { useEffect, useState } from 'react';
import WorkIcon from '@mui/icons-material/Work';
import StarsIcon from '@mui/icons-material/Stars';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import HelpIcon from '@mui/icons-material/Help';
//import paymentMethods from '../../../assets/images/payment-methods.svg';
import { useLocation } from 'react-router-dom';

const footerLinks = [
  {
    title: "about",
    links: [
      {
        name: "Contact Us",
        redirect: "",
      },
      {
        name: "About Us",
        redirect: "https://www.flipkart.com/about-us",
      },
      {
        name: "Careers",
        redirect: "https://www.flipkartcareers.com",
      },
      {
        name: "Flipkart Stories",
        redirect: "https://stories.flipkart.com",
      },
      {
        name: "Press",
        redirect: "https://stories.flipkart.com/category/top-stories/news",
      },
      {
        name: "Flipkart Wholesale",
        redirect: "https://www.flipkartwholesale.com",
      },
      {
        name: "Corporate Information",
        redirect: "https://www.flipkart.com/corporate-information",
      },
    ]
  },
  {
    title: "help",
    links: [
      {
        name: "Payments",
        redirect: "https://www.flipkart.com/pages/payments",
      },
      {
        name: "Shipping",
        redirect: "https://www.flipkart.com/pages/shipping",
      },
      {
        name: "Cancellation & Returns",
        redirect: "https://www.flipkart.com/helpcentre?catalog=55c9c6edb000002e002c1701&view=CATALOG",
      },
      {
        name: "FAQ",
        redirect: "https://www.flipkart.com/helpcentre?catalog=55c9c8e2b0000023002c1702&view=CATALOG",
      }
    ]
  },
  {
    title: "policy",
    links: [
      {
        name: "Return Policy",
        redirect: "https://www.flipkart.com/pages/returnpolicy",
      },
      {
        name: "Terms Of Use",
        redirect: "https://www.flipkart.com/pages/terms",
      },
      {
        name: "Security",
        redirect: "https://www.flipkart.com/pages/paymentsecurity",
      },
      {
        name: "Privacy",
        redirect: "https://www.flipkart.com/pages/privacypolicy",
      },
      {
        name: "Sitemap",
        redirect: "https://www.flipkart.com/sitemap",
      },
      {
        name: "EPR Compliance",
        redirect: "https://www.flipkart.com/pages/ewaste-compliance-tnc",
      },
    ]
  },
  {
    title: "social",
    links: [
      {
        name: "Facebook",
        redirect: "https://www.facebook.com/flipkart",
      },
      {
        name: "Twitter",
        redirect: "https://twitter.com/flipkart",
      },
      {
        name: "YouTube",
        redirect: "https://www.youtube.com/flipkart",
      }
    ]
  }
]

const Footer = () => {

  const location = useLocation();
  const [adminRoute, setAdminRoute] = useState(false);

  useEffect(() => {
    setAdminRoute(location.pathname.split("/", 2).includes("admin"))
  }, [location]);

  return (
    <>
      {!adminRoute && (
        <>
          <div className="px-16 py-6 w-full bg-primary-darkBlue hidden sm:flex justify-between items-center text-sm text-white">
            <a href="#" target="_blank" rel="noreferrer" className="flex items-center gap-2">
              <span className="text-yellow-400"><WorkIcon sx={{ fontSize: "20px" }} /></span> Sell On BakeShop
            </a>
            <a href="#" target="_blank" rel="noreferrer" className="flex items-center gap-2">
              <span className="text-yellow-400"><StarsIcon sx={{ fontSize: "20px" }} /></span> Advertise
            </a>
           
            <a href="#" target="_blank" rel="noreferrer" className="flex items-center gap-2">
              <span className="text-yellow-400"><HelpIcon sx={{ fontSize: "20px" }} /></span> Help Center
            </a>

            <span>&copy; 2023-{new Date().getFullYear()} BakeShop.com</span>
           
          </div>
        </>
      )}
    </>
  )
};

export default Footer;
