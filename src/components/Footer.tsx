
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const Footer: React.FC = () => {
  const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({});
  
  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };
  
  const footerSections = [
    {
      title: 'Shop and Learn',
      links: ['Store', 'Mac', 'iPad', 'iPhone', 'Watch', 'Vision', 'AirPods', 'TV & Home', 'AirTag', 'Accessories', 'Gift Cards']
    },
    {
      title: 'Apple Wallet',
      links: ['Wallet', 'Apple Card', 'Apple Pay', 'Apple Cash']
    },
    {
      title: 'Account',
      links: ['Manage Your Apple ID', 'Apple Store Account', 'iCloud.com']
    },
    {
      title: 'Entertainment',
      links: ['Apple One', 'Apple TV+', 'Apple Music', 'Apple Arcade', 'Apple Fitness+', 'Apple News+', 'Apple Podcasts', 'Apple Books', 'App Store']
    },
    {
      title: 'Apple Store',
      links: ['Find a Store', 'Genius Bar', 'Today at Apple', 'Apple Camp', 'Apple Store App', 'Certified Refurbished', 'Apple Trade In', 'Financing', 'Carrier Deals at Apple', 'Order Status', 'Shopping Help']
    }
  ];
  
  return (
    <footer className="bg-[#f5f5f7] text-[#6e6e73] text-xs">
      <div className="max-w-[980px] mx-auto px-4 py-12">
        {/* Footnotes */}
        <div className="border-b border-[#d2d2d7] pb-8">
          <p className="mb-3">
            *Apple Card Monthly Installments (ACMI) is a 0% APR payment option that is only available if you select it at checkout in the U.S. for eligible Apple products purchased at Apple Store locations, apple.com, the Apple Store app, or by calling 1-800-MY-APPLE, and is subject to credit approval and credit limit. See https://support.apple.com/kb/HT211204 for more information about eligible products. APR ranges may vary based on when you accepted an Apple Card. Taxes and shipping are not included in ACMI and are subject to your standard purchase APR. ACMI is not available for purchases made online at these special stores: Apple Employee Purchase Plan; participating corporate Employee Purchase Programs; Apple at Work for small businesses; Government, and Veterans and Military Purchase Programs, or on refurbished devices or on iPhone activation through carrier offers. The last month's payment for each product will be the product's purchase price, less all other payments at the monthly payment amount. ACMI financing is subject to change at any time for any reason, including but not limited to, installment term lengths and eligible products. See https://support.apple.com/kb/HT211204 for information about upcoming changes to ACMI financing.
          </p>
          <p>
            Apple Vision Pro will be available in the U.S. on February 2. Pre-order starts on January 19 at 5:00 a.m. PT.
          </p>
        </div>

        {/* Main Footer Links - Mobile Accordion */}
        <div className="md:hidden">
          {footerSections.map((section) => (
            <div key={section.title} className="border-b border-[#d2d2d7]">
              <button 
                onClick={() => toggleSection(section.title)}
                className="w-full flex justify-between items-center py-3"
              >
                <span className="font-semibold">{section.title}</span>
                {expandedSections[section.title] ? (
                  <ChevronUp size={14} />
                ) : (
                  <ChevronDown size={14} />
                )}
              </button>
              {expandedSections[section.title] && (
                <ul className="pb-3">
                  {section.links.map((link) => (
                    <li key={link} className="mb-2">
                      <a href="#" className="hover:underline">{link}</a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* Main Footer Links - Desktop */}
        <div className="hidden md:grid md:grid-cols-5 my-8">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold mb-3">{section.title}</h3>
              <ul>
                {section.links.map((link) => (
                  <li key={link} className="mb-2">
                    <a href="#" className="hover:underline">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright and Legal */}
        <div className="pt-5 border-t border-[#d2d2d7]">
          <p className="mb-2">More ways to shop: <a href="#" className="text-apple-blue hover:underline">Find an Apple Store</a> or <a href="#" className="text-apple-blue hover:underline">other retailer</a> near you. Or call 1-800-MY-APPLE.</p>
          
          <div className="flex flex-col md:flex-row md:justify-between mt-5">
            <div className="md:flex md:items-center">
              <p className="mb-2 md:mb-0">Copyright © 2023 Apple Inc. All rights reserved.</p>
              <div className="md:ml-6 md:flex">
                <a href="#" className="mr-4 hover:underline">Privacy Policy</a>
                <a href="#" className="mr-4 hover:underline">Terms of Use</a>
                <a href="#" className="mr-4 hover:underline">Sales and Refunds</a>
                <a href="#" className="mr-4 hover:underline">Legal</a>
                <a href="#" className="hover:underline">Site Map</a>
              </div>
            </div>
            <p className="mt-2 md:mt-0">United States</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
