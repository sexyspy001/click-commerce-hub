import { PlatformData } from '../types';

const IP_DISCLAIMER = "This service provides advisory and coordination support only. Click Commerce Hub is not a law firm, trademark authority, or IP office.";
const FINANCIAL_DISCLAIMER = "Click Commerce Hub does not provide loans or financial products. This service is limited to informational and application assistance.";
const LOGISTICS_DISCLAIMER = "Click Commerce Hub provides coordination and documentation assistance only and does not operate as a carrier, warehouse, or logistics service provider.";
const REGULATORY_DISCLAIMER = "Click Commerce Hub provides documentation and filing assistance only. We are not a law firm or chartered accountancy firm. Government approvals are subject to departmental discretion.";
const MARKETING_DISCLAIMER = "Marketing services focus on strategy, execution, and optimization. We do not guarantee specific sales figures, rankings, or lead volumes as these depend on market conditions.";

export const platforms: PlatformData[] = [
  {
    id: "amazon",
    title: "Amazon Services",
    description: "Comprehensive solutions for the world's largest marketplace. From account creation to advanced advertising.",
    color: "bg-orange-50",
    category: "marketplace",
    aboutPlatform: "Amazon.in is India's most visited online shopping marketplace and the most trusted e-commerce brand. Selling on Amazon allows you to reach crores of customers across 100% of India's serviceable pin-codes.",
    whySellHere: [
      "Access to over 100 million registered users.",
      "World-class logistics and delivery network (FBA).",
      "Secure payments and regular disbursement cycles.",
      "Global selling opportunities to US, UK, and more."
    ],
    registrationLink: "https://sell.amazon.in/",
    services: [
      {
        id: "account-management",
        title: "Account Management",
        whatIsIt: "We provide structured support for managing Amazon Seller Central operations, account health monitoring, performance metrics, and policy compliance. Our service focuses on day-to-day operational stability.",
        whatWeDo: [
            "Daily account health monitoring.",
            "Performance metric analysis.",
            "Policy compliance checks.",
            "Case log management and support."
        ],
        howItHelps: "Consistent account monitoring helps sellers avoid policy violations, performance issues, and unexpected disruptions to selling activity.",
        expectedChanges: "You can expect improved visibility into account performance, timely issue identification, and guided support for maintaining a healthy seller account."
      },
      {
        id: "advertising-optimization",
        title: "Advertising Optimization (PPC)",
        whatIsIt: "Management of paid ads running inside Amazon (Sponsored Products, Sponsored Brands) to increase product visibility for high-intent shoppers.",
        whatWeDo: [
          "Campaign structure creation and audit.",
          "Keyword selection and ASIN targeting.",
          "Budget and bid control.",
          "ROAS (Return on Ad Spend) analysis and optimization."
        ],
        howItHelps: "Proper ad optimization helps sellers control advertising spend while improving product visibility and conversion efficiency.",
        expectedChanges: "Sellers gain clearer performance insights, structured ad management, and better alignment between advertising spend and business goals."
      },
      {
        id: "cataloging",
        title: "Cataloging",
        whatIsIt: "We support sellers with product listing creation, catalog corrections, attribute updates, category mapping, and resolving catalog-related errors.",
        whatWeDo: [
            "New product listing creation.",
            "Flat file uploads and troubleshooting.",
            "Category mapping and attribute filling.",
            "Variation relationship management."
        ],
        howItHelps: "Accurate catalog data ensures better discoverability, reduces listing errors, and improves compliance with Amazon catalog standards.",
        expectedChanges: "You can expect cleaner listings, fewer catalog issues, and improved product visibility across Amazon search and browse pages."
      },
      {
        id: "a-plus-content",
        title: "A+ Content (Brand Content)",
        whatIsIt: "Enhanced product content for brand-registered sellers, replacing basic descriptions with rich images and text modules.",
        whatWeDo: [
          "A+ layout planning and module selection.",
          "Brand storytelling to build trust.",
          "Comparison charts and feature explanations.",
          "Compliance-friendly copywriting."
        ],
        howItHelps: "Well-structured A+ Content helps customers better understand products, reducing bounce rates and supporting purchase decisions.",
        expectedChanges: "Professionally structured content layouts that distinguish your brand from generic competitors."
      },
      {
        id: "accounting",
        title: "Accounting",
        whatIsIt: "We provide Amazon sales reconciliation, settlement report analysis, fee breakdowns, and financial summaries based on Seller Central data.",
        whatWeDo: [
            "Payment reconciliation report analysis.",
            "Fee breakdown and verification.",
            "Profitability analysis per SKU.",
            "Return and refund tracking."
        ],
        howItHelps: "Accurate accounting helps sellers track revenue, identify discrepancies, and maintain clear financial records.",
        expectedChanges: "Sellers gain improved financial clarity, reduced reconciliation errors, and structured reporting for business review."
      },
      {
        id: "taxes",
        title: "Taxes",
        whatIsIt: "We assist Amazon sellers with GST registration, GST return filing, TCS/TDS reconciliation, e-invoicing setup, and tax report analysis.",
        whatWeDo: [
            "GST Return filing assistance.",
            "TCS/TDS credit reconciliation.",
            "Input tax credit matching.",
            "E-way bill generation support."
        ],
        howItHelps: "Tax compliance is mandatory for sellers and directly impacts account continuity and regulatory adherence.",
        expectedChanges: "Sellers receive structured tax support, reduced mismatch risks, and clearer compliance visibility for Amazon-related transactions.",
        disclaimer: REGULATORY_DISCLAIMER
      },
      {
        id: "training",
        title: "Seller Training",
        whatIsIt: "We provide training on Amazon Seller Central tools, policy updates, and operational best practices.",
        whatWeDo: [
            "Seller Central dashboard navigation.",
            "Inventory management training.",
            "Advertising console walkthrough.",
            "Policy compliance education."
        ],
        howItHelps: "Empowers sellers and their teams to handle daily operations efficiently and minimizes errors.",
        expectedChanges: "Increased team confidence and reduced operational errors due to better platform understanding."
      },
      {
        id: "imaging",
        title: "Imaging",
        whatIsIt: "We provide guidance and coordination support related to product images based on Amazon listing requirements.",
        whatWeDo: [
            "Image guideline consultation.",
            "Coordination with photographers.",
            "Image quality check against standards.",
            "Upload and gallery management."
        ],
        howItHelps: "Proper product images improve listing clarity and compliance with Amazon standards.",
        expectedChanges: "Sellers can expect better alignment with image guidelines and improved listing presentation."
      },
      {
        id: "compliance",
        title: "Compliance",
        whatIsIt: "We support sellers with compliance-related guidance, documentation support, and policy alignment for Amazon selling requirements.",
        whatWeDo: [
            "Product compliance document review.",
            "Policy warning appeal support.",
            "Account health risk assessment.",
            "Category approval assistance."
        ],
        howItHelps: "Compliance gaps can lead to account restrictions, listing removals, or selling interruptions.",
        expectedChanges: "You can expect better compliance awareness, improved documentation readiness, and reduced risk of policy-related issues."
      },
      {
        id: "excess-inventory",
        title: "Excess Inventory",
        whatIsIt: "We assist sellers in reviewing excess inventory reports and provide guidance on inventory movement and planning decisions.",
        whatWeDo: [
            "Aged inventory report analysis.",
            "Removal order coordination.",
            "Liquidation strategy guidance.",
            "Storage fee analysis."
        ],
        howItHelps: "Excess inventory increases storage costs and affects cash flow efficiency.",
        expectedChanges: "Sellers gain better inventory insights and structured support for managing slow-moving stock."
      },
      {
        id: "seller-lending",
        title: "Seller Lending",
        whatIsIt: "We assist sellers with information and application support related to Amazon seller lending programs.",
        whatWeDo: [
            "Lending eligibility check.",
            "Application documentation support.",
            "Program information guidance.",
            "Repayment schedule understanding."
        ],
        howItHelps: "Understanding financing options helps sellers plan growth and manage working capital.",
        expectedChanges: "You receive clearer guidance on available options and application processes.",
        disclaimer: FINANCIAL_DISCLAIMER
      },
      {
        id: "international-returns",
        title: "International Returns",
        whatIsIt: "We assist sellers with process guidance and coordination related to international return workflows.",
        whatWeDo: [
            "Return setting configuration.",
            "Cross-border return policy guidance.",
            "Coordination with logistics partners.",
            "Return address management."
        ],
        howItHelps: "International returns require structured handling to avoid losses and compliance issues.",
        expectedChanges: "You gain clearer process visibility and smoother handling of cross-border return scenarios.",
        disclaimer: LOGISTICS_DISCLAIMER
      },
      {
        id: "international-shipping",
        title: "International Shipping",
        whatIsIt: "We provide coordination and documentation support for international shipping requirements.",
        whatWeDo: [
            "Shipping template configuration.",
            "Export documentation guidance (CSB-V/V).",
            "Carrier coordination support.",
            "Shipping setting optimization."
        ],
        howItHelps: "Correct shipping documentation is critical for cross-border fulfillment and compliance.",
        expectedChanges: "Sellers receive structured guidance for smoother international shipment coordination.",
        disclaimer: LOGISTICS_DISCLAIMER
      },
      {
        id: "domestic-shipping",
        title: "Domestic Shipping",
        whatIsIt: "We assist sellers with domestic shipping coordination and process guidance within Amazon workflows.",
        whatWeDo: [
            "Easy Ship/Self Ship configuration.",
            "Shipping template setup.",
            "Pickup scheduling assistance.",
            "Transit time setting guidance."
        ],
        howItHelps: "Efficient domestic shipping supports timely order fulfillment and customer satisfaction.",
        expectedChanges: "You can expect clearer shipping processes and reduced operational confusion.",
        disclaimer: LOGISTICS_DISCLAIMER
      },
      {
        id: "storage",
        title: "Storage",
        whatIsIt: "We provide guidance related to storage planning and inventory placement based on Amazon reports.",
        whatWeDo: [
            "Storage limit analysis.",
            "Restock limit planning.",
            "Inventory placement guidance.",
            "Storage fee optimization."
        ],
        howItHelps: "Proper storage planning helps control costs and maintain inventory efficiency.",
        expectedChanges: "Sellers gain better visibility into storage usage and planning decisions.",
        disclaimer: LOGISTICS_DISCLAIMER
      },
      {
        id: "fba-prep-packaging",
        title: "FBA Prep & Packaging",
        whatIsIt: "We provide guidance and coordination support related to FBA prep and packaging requirements.",
        whatWeDo: [
            "Labeling requirement guidance.",
            "Packaging material standard checks.",
            "Shipment plan creation.",
            "Box content information management."
        ],
        howItHelps: "Correct preparation prevents inbound shipment issues and listing delays.",
        expectedChanges: "You can expect better adherence to FBA prep standards and smoother inbound processes.",
        disclaimer: LOGISTICS_DISCLAIMER
      },
      {
        id: "ip-accelerator",
        title: "IP Accelerator Support",
        whatIsIt: "We provide advisory and coordination support related to Amazon IP Accelerator processes.",
        whatWeDo: [
            "Program eligibility check.",
            "Enrollment process guidance.",
            "Coordination with IP service providers.",
            "Brand protection tool setup."
        ],
        howItHelps: "Brand protection is important for long-term seller stability.",
        expectedChanges: "Sellers receive clearer guidance on IP-related workflows.",
        disclaimer: IP_DISCLAIMER
      },
      {
        id: "manufacturing",
        title: "Manufacturing",
        whatIsIt: "We provide coordination and informational support related to manufacturing process planning.",
        whatWeDo: [
            "Production timeline planning.",
            "Quality control documentation.",
            "Supplier communication support.",
            "Capacity planning guidance."
        ],
        howItHelps: "Clear manufacturing coordination supports consistent supply and product quality.",
        expectedChanges: "You gain better process visibility and structured coordination support."
      },
      {
        id: "sustainability",
        title: "Sustainability",
        whatIsIt: "We assist sellers with guidance related to sustainability practices and Amazon sustainability initiatives.",
        whatWeDo: [
            "Climate Pledge Friendly program guidance.",
            "Sustainable packaging advice.",
            "Certification documentation support.",
            "Sustainability badge enrollment."
        ],
        howItHelps: "Sustainability requirements are increasingly relevant for marketplace compliance and brand responsibility.",
        expectedChanges: "Sellers gain awareness and structured guidance for sustainability-related considerations."
      }
    ]
  },
  {
    id: "flipkart",
    title: "Flipkart Services",
    description: "Expert assistance for growing on India's homegrown e-commerce giant.",
    color: "bg-blue-50",
    category: "marketplace",
    aboutPlatform: "Flipkart is India's homegrown e-commerce marketplace with a massive stronghold in fashion, electronics, and mobile categories. It is known for its deep reach into Tier-2 and Tier-3 cities.",
    whySellHere: [
      "Lowest cost of doing business in many categories.",
      "Access to 450 million+ customer base.",
      "Dedicated account manager support for growth.",
      "Smart fulfillment services for faster delivery."
    ],
    registrationLink: "https://seller.flipkart.com/",
    services: [
      {
        id: "account-management",
        title: "Account Management",
        whatIsIt: "We provide ongoing account management support for Flipkart sellers, including performance monitoring and operational assistance.",
        whatWeDo: [
            "Seller score monitoring.",
            "Breach and penalty analysis.",
            "Growth tier progression support.",
            "Daily operations support."
        ],
        howItHelps: "Consistent account management helps maintain seller performance and avoid policy issues.",
        expectedChanges: "Improved account visibility, proactive issue handling, and structured support."
      },
      {
        id: "fbf-onboarding",
        title: "FBF Onboarding",
        whatIsIt: "We assist sellers with end-to-end onboarding for Flipkart Fulfilled by Flipkart (FBF), including eligibility checks, documentation support, and system configuration.",
        whatWeDo: [
            "FBF registration assistance.",
            "Smart fulfillment setup.",
            "Consignment creation.",
            "Slot booking coordination."
        ],
        howItHelps: "FBF onboarding enables sellers to leverage Flipkart’s fulfillment network for faster delivery and better customer experience.",
        expectedChanges: "Clear onboarding guidance, reduced setup delays, and structured support until FBF activation is completed."
      },
      {
        id: "advertising",
        title: "Flipkart Advertising",
        whatIsIt: "We assist sellers with Flipkart advertising setup, optimization, and performance monitoring to boost product visibility.",
        whatWeDo: [
           "Product-level promotion setup.",
           "Keyword targeting and bid optimization.",
           "Performance tracking to reduce wasted spend.",
           "Campaign structure for new product launches."
        ],
        howItHelps: "Optimized advertising improves product visibility and sales efficiency, especially for new or slow-moving products.",
        expectedChanges: "Better campaign structure, performance insights, and controlled ad spend."
      },
      {
        id: "cataloging",
        title: "Cataloging & Listing",
        whatIsIt: "We support sellers with product listing creation, catalog corrections, and attribute updates on Flipkart.",
        whatWeDo: [
           "Listing creation with correct attribute mapping.",
           "Catalog error resolution.",
           "Image quality check and coordination.",
           "Smart listing creation to avoid suppression."
        ],
        howItHelps: "Accurate cataloging improves discoverability and reduces listing-related issues.",
        expectedChanges: "Cleaner listings, fewer catalog errors, and better product visibility."
      },
      {
        id: "taxation",
        title: "Taxation",
        whatIsIt: "We assist sellers with GST registration, GST return filing, Flipkart sales reconciliation, and tax compliance support.",
        whatWeDo: [
            "GST filing support.",
            "Input tax credit reconciliation.",
            "TDS certificate download.",
            "Tax report analysis."
        ],
        howItHelps: "Accurate tax handling helps sellers avoid penalties and maintain uninterrupted selling.",
        expectedChanges: "Clear tax reporting, reduced mismatch risks, and structured compliance support.",
        disclaimer: REGULATORY_DISCLAIMER
      },
      {
        id: "account-reinstatement",
        title: "Seller Account Reinstatement",
        whatIsIt: "We assist sellers with account reinstatement support, including documentation preparation and response guidance.",
        whatWeDo: [
            "Plan of Action (POA) drafting assistance.",
            "Root cause analysis.",
            "Policy violation review.",
            "Case follow-up."
        ],
        howItHelps: "Timely and structured reinstatement support increases the chances of account reactivation.",
        expectedChanges: "Clear guidance, structured case handling, and compliance-focused reinstatement support."
      },
      {
        id: "liquidation",
        title: "Liquidation",
        whatIsIt: "We provide guidance and coordination support for liquidation of non-moving or excess inventory on Flipkart.",
        whatWeDo: [
            "Identifying non-moving inventory.",
            "Liquidation partner coordination.",
            "Pricing strategy for clearance.",
            "Removal order management."
        ],
        howItHelps: "Liquidation helps recover value from slow-moving stock and frees up working capital.",
        expectedChanges: "Better visibility on liquidation options and structured execution support."
      }
    ]
  },
  {
    id: "meesho",
    title: "Meesho Services",
    description: "Tap into the massive reseller and value-conscious customer base on Meesho.",
    color: "bg-pink-50",
    category: "marketplace",
    aboutPlatform: "Meesho is India's favorite social commerce and resale platform, democratizing internet commerce for everyone. It is uniquely positioned for unbranded, value-focused products.",
    whySellHere: [
      "0% Commission fee for suppliers.",
      "No collection fees or hidden charges.",
      "Access to millions of resellers who promote your products.",
      "Stress-free delivery to 26,000+ pin codes."
    ],
    registrationLink: "https://supplier.meesho.com/",
    services: [
      {
        id: "account-management",
        title: "Account Management",
        whatIsIt: "Day-to-day operational support for your Meesho supplier panel.",
        whatWeDo: [
          "Panel health monitoring.",
          "Order processing support.",
          "Return dispute management.",
          "Payment reconciliation."
        ],
        howItHelps: "Ensures smooth operations and timely order processing.",
        expectedChanges: "Reduced operational lag and better dispute handling."
      },
      {
        id: "cataloging",
        title: "Cataloging",
        whatIsIt: "Listing your products with the right attributes for Meesho's unique discovery algorithm.",
        whatWeDo: [
          "Single and bulk catalog uploads.",
          "Image and description quality checks.",
          "Category mapping.",
          "Price recommendation analysis."
        ],
        howItHelps: "Correct cataloging is crucial for visibility in Meesho's feed.",
        expectedChanges: "Faster catalog approval and better visibility."
      },
      {
        id: "advertising",
        title: "Meesho Ads",
        whatIsIt: "Setup and management of Meesho advertisement campaigns.",
        whatWeDo: [
          "Campaign budget setup.",
          "Catalog selection for ads.",
          "ROI monitoring.",
          "Bid adjustment."
        ],
        howItHelps: "Boosts catalog visibility to resellers and customers.",
        expectedChanges: "Increased views and potential orders."
      }
    ]
  },
  {
    id: "ajio",
    title: "Ajio Services",
    description: "Scale your fashion and lifestyle brand on Reliance's premium fashion marketplace.",
    color: "bg-slate-50",
    category: "marketplace",
    aboutPlatform: "Ajio Business is Reliance Retail's B2B and B2C fashion marketplace. It is the go-to destination for trendy, high-quality fashion and lifestyle products.",
    whySellHere: [
      "Curated marketplace for fashion brands.",
      "Access to Reliance's premium customer base.",
      "High average order value (AOV).",
      "Integration with offline Reliance Trends ecosystem."
    ],
    registrationLink: "https://seller.ajio.com/",
    services: [
      {
        id: "onboarding",
        title: "Onboarding & Registration",
        whatIsIt: "Assistance with the brand approval and registration process on Ajio.",
        whatWeDo: [
          "Document preparation.",
          "Brand approval application.",
          "Portal registration.",
          "Initial catalog setup."
        ],
        howItHelps: "Navigates the strict brand approval process of Ajio.",
        expectedChanges: "Structured application process and documentation support."
      },
      {
        id: "cataloging",
        title: "Cataloging",
        whatIsIt: "Creating listings that meet Ajio's high visual and data standards.",
        whatWeDo: [
          "Style code creation.",
          "Image guideline adherence checks.",
          "Attribute mapping.",
          "Listing QC support."
        ],
        howItHelps: "Prevents QC rejections and ensures premium presentation.",
        expectedChanges: "High-quality listings compliant with Ajio standards."
      }
    ]
  },
  {
    id: "jiomart",
    title: "JioMart Services",
    description: "Reach hyperlocal and national customers through the JioMart ecosystem.",
    color: "bg-green-50",
    category: "marketplace",
    aboutPlatform: "JioMart allows you to turn your local store into an online business. It combines the power of Reliance's retail network with online ordering.",
    whySellHere: [
      "Hyperlocal delivery model connecting nearby customers.",
      "Zero commission on select categories.",
      "Massive marketing support from Jio ecosystem.",
      "Easy onboarding for local retailers."
    ],
    registrationLink: "https://seller.jiomart.com/",
    services: [
      {
        id: "account-management",
        title: "Account Management",
        whatIsIt: "Operational support for JioMart Seller interaction.",
        whatWeDo: [
          "Dashboard management.",
          "Inventory updates.",
          "Order processing guidance.",
          "Compliance checks."
        ],
        howItHelps: "Maintains account health and operational efficiency.",
        expectedChanges: "Smoother daily operations."
      }
    ]
  },
  {
    id: "quick-commerce",
    title: "Quick Commerce",
    description: "Launch on Blinkit, Zepto, and Swiggy Instamart for lightning-fast delivery.",
    color: "bg-yellow-50",
    category: "marketplace",
    aboutPlatform: "Quick commerce platforms like Blinkit, Zepto, and Swiggy Instamart are revolutionizing urban retail with 10-30 minute deliveries.",
    whySellHere: [
      "Incredibly high inventory turnover.",
      "Caters to impulse buying behavior.",
      "Reduced marketing spend due to limited assortment.",
      "Hyper-local visibility in high-demand areas."
    ],
    services: [
      {
        id: "onboarding",
        title: "Platform Onboarding",
        whatIsIt: "Assistance with registration and cataloging for rapid-delivery platforms.",
        whatWeDo: [
          "Platform registration assistance.",
          "Dark store mapping coordination.",
          "Initial catalog creation.",
          "Document verification support."
        ],
        howItHelps: "Enables sellers to tap into the hyper-local delivery market.",
        expectedChanges: "Smooth registration and inventory mapping to dark stores."
      },
      {
        id: "inventory-planning",
        title: "Inventory Planning",
        whatIsIt: "Strategy for stock placement in local dark stores.",
        whatWeDo: [
           "Pin-code demand analysis.",
           "Stock replenishment planning.",
           "Assortment planning.",
           "Expiry management guidance."
        ],
        howItHelps: "Ensures products are available for instant delivery in key pin codes.",
        expectedChanges: "Optimized stock levels for high-velocity sales."
      }
    ]
  },
  {
    id: "website-shopify",
    title: "Website & D2C Solutions",
    description: "Build your independent brand presence with custom websites and Shopify stores.",
    color: "bg-purple-50",
    category: "website",
    aboutPlatform: "Building your own website gives you complete ownership of your brand, customer data, and profit margins, unlike renting space on a marketplace.",
    whySellHere: [
      "100% control over customer data and email lists.",
      "No marketplace commissions per sale.",
      "Build deeper brand loyalty and recurring revenue.",
      "Freedom to run custom marketing and retargeting."
    ],
    registrationLink: "https://www.shopify.com/in",
    services: [
      {
        id: "website-creation",
        title: "Website Creation & Optimization",
        whatIsIt: "We design and develop professional, SEO-optimized websites tailored for e-commerce sellers and businesses.",
        whatWeDo: [
            "Design responsive, mobile-friendly website layouts.",
            "UI/UX improvement and speed optimization.",
            "Development of essential pages (Home, About, Shop, Contact).",
            "Integration of payment gateways and shipping tools."
        ],
        howItHelps: "A professional website builds brand credibility, is often required for Amazon Brand Registry/GST, and allows you to sell directly to customers (D2C) with higher margins.",
        expectedChanges: "You can expect a fully functional, aesthetically pleasing website that serves as a strong foundation for your digital brand identity."
      },
      {
        id: "shopify-marketing",
        title: "Shopify Marketing",
        whatIsIt: "Comprehensive marketing and setup for Shopify stores to drive sales and improve user experience.",
        whatWeDo: [
            "Shopify store setup and theme configuration.",
            "Product page optimization for better conversion.",
            "Shopify SEO (Meta titles, descriptions, collections).",
            "Abandoned cart recovery strategies (Email/WhatsApp)."
        ],
        howItHelps: "Shopify requires active marketing to generate sales. We help set up the foundation and drive traffic to your store.",
        expectedChanges: "A fully configured store, optimized product pages, and automated recovery flows to capture lost sales."
      },
      {
        id: "cro-services",
        title: "Conversion Rate Optimization (CRO)",
        whatIsIt: "Analysis and optimization of your website funnel to turn more visitors into buyers.",
        whatWeDo: [
            "Funnel analysis to identify drop-off points.",
            "CTA (Call to Action) improvement and placement.",
            "Landing page testing and layout adjustments.",
            "User behavior analysis."
        ],
        howItHelps: "Increases revenue from existing traffic by removing friction in the buying process.",
        expectedChanges: "Improved user experience, lower bounce rates, and higher sales conversion rates."
      },
      {
        id: "website-development",
        title: "Custom Website Development",
        whatIsIt: "Development of business websites for credibility and lead acquisition.",
        whatWeDo: [
          "Static site development.",
          "CMS integration.",
          "Performance optimization.",
          "Security setup."
        ],
        howItHelps: "Provides a professional digital face for your business.",
        expectedChanges: "A fast, secure, and professional website."
      }
    ]
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing Services",
    description: "Full-stack performance marketing to drive traffic, build brands, and generate leads.",
    color: "bg-pink-50",
    category: "marketing",
    services: [
      {
        id: "seo-services",
        title: "Search Engine Optimization (SEO)",
        whatIsIt: "The process of improving a website’s visibility on Google so people find it organically (without ads).",
        whatWeDo: [
          "Website SEO Audit (Structure, Technical errors).",
          "On-Page SEO (Titles, Meta descriptions, Content).",
          "Technical SEO (Speed, Mobile responsiveness).",
          "Local SEO (Google Business Profile & Maps).",
          "Keyword research & Competitor analysis.",
          "Monthly SEO reporting."
        ],
        howItHelps: "Drives sustainable, long-term organic traffic without continuous ad spend. Essential for brand credibility.",
        expectedChanges: "Better search rankings, faster website performance, and increased organic visitors over time.",
        disclaimer: MARKETING_DISCLAIMER
      },
      {
        id: "sem-services",
        title: "Search Engine Marketing (SEM / PPC)",
        whatIsIt: "Paid advertising on search engines like Google to get instant traffic and leads.",
        whatWeDo: [
          "Google Ads Setup & Management.",
          "Search Ads (Targeting high-intent keywords).",
          "Display & Shopping Ads.",
          "Conversion Tracking & Budget Optimization.",
          "Performance reporting."
        ],
        howItHelps: "Captures high-intent customers actively searching for your products or services right now.",
        expectedChanges: "Optimized bid management, higher quality scores, and improved Return on Ad Spend (ROAS).",
        disclaimer: MARKETING_DISCLAIMER
      },
      {
        id: "smm-services",
        title: "Social Media Marketing (SMM)",
        whatIsIt: "Managing and promoting brands on social platforms to build trust, engagement, and visibility.",
        whatWeDo: [
          "Social Media Strategy & Content Calendars.",
          "Post & Reel Creation (Text + Guidance).",
          "Page Optimization (Bio, Highlights).",
          "Community Management & Engagement.",
          "Paid social ads (Meta Ads) & Analytics."
        ],
        howItHelps: "Builds brand authority, engages your community, and keeps your brand top-of-mind.",
        expectedChanges: "Consistent brand voice, regular content updates, and growing follower engagement."
      },
      {
        id: "content-marketing",
        title: "Content Marketing",
        whatIsIt: "Creating useful, educational, and informative content to attract and retain customers.",
        whatWeDo: [
           "Blog Writing (Informational & SEO articles).",
           "Website Content (Service pages, About Us).",
           "Product Descriptions (Marketplace-ready).",
           "Email Newsletters & Educational Guides."
        ],
        howItHelps: "Builds brand authority, improves SEO rankings, and educates customers to drive long-term sales.",
        expectedChanges: "Increased organic traffic, higher time-on-site, and better customer trust."
      },
      {
        id: "paid-advertising",
        title: "Paid Advertising & Performance Marketing",
        whatIsIt: "Scalable paid advertising campaigns across multiple platforms focusing on sales and lead acquisition.",
        whatWeDo: [
          "Meta Ads (Facebook & Instagram) for sales and lead acquisition.",
          "YouTube Ads (Video campaigns, Channel promotion).",
          "Remarketing campaigns to target past visitors.",
          "Creative & Copy guidance for high conversion."
        ],
        howItHelps: "Reaches specific demographics and interests to drive traffic to your website or listings.",
        expectedChanges: "High-quality creatives, precise audience targeting, and scalable sales results.",
        disclaimer: MARKETING_DISCLAIMER
      },
      {
        id: "email-sms-whatsapp",
        title: "Email, SMS & WhatsApp Marketing",
        whatIsIt: "Direct communication strategies to reach people who have already shown interest and convert them.",
        whatWeDo: [
          "Email Campaign Setup & Automated Flows.",
          "DLT-Compliant SMS Marketing setup.",
          "WhatsApp Business Setup & Broadcast Campaigns.",
          "Lead Nurturing & CRM Integration."
        ],
        howItHelps: "Nurtures leads and increases customer lifetime value (LTV) through direct, personalized communication.",
        expectedChanges: "Higher repeat purchase rates, better lead retention, and direct engagement.",
        disclaimer: MARKETING_DISCLAIMER
      },
      {
        id: "analytics-reporting",
        title: "Analytics, Tracking & Reporting",
        whatIsIt: "The decision-making backbone of digital marketing. Measuring what works and what doesn't.",
        whatWeDo: [
          "Google Analytics & Tag Manager Setup.",
          "Conversion Tracking (Leads, Purchases).",
          "Performance Dashboards.",
          "ROI & ROAS Analysis."
        ],
        howItHelps: "Provides data-driven insights to make informed marketing decisions rather than guessing.",
        expectedChanges: "Clear visibility into traffic sources, user behavior, and campaign profitability."
      },
      {
        id: "branding-creative",
        title: "Branding & Creative Services",
        whatIsIt: "Visual identity design to ensure your brand looks professional and consistent across all channels.",
        whatWeDo: [
            "Logo design and brand identity guidelines.",
            "Social media creative design.",
            "Ad creatives and website banners.",
            "Visual consistency planning."
        ],
        howItHelps: "Consistent branding increases recognition and trust, leading to higher conversion rates.",
        expectedChanges: "A polished, professional brand image that stands out from competitors."
      },
      {
        id: "local-marketing",
        title: "Local & Small Business Marketing",
        whatIsIt: "Marketing designed for local shops, service providers, and area-based businesses.",
        whatWeDo: [
          "Google Business Profile Optimization.",
          "Local Ads (Location-based targeting).",
          "Review Management strategy.",
          "Hyper-Local SEO."
        ],
        howItHelps: "Ensures local customers find you first when searching for services in your area.",
        expectedChanges: "Higher visibility on Google Maps and more footfall or local inquiries."
      },
      {
        id: "strategy-consulting",
        title: "Strategy, Consulting & Training",
        whatIsIt: "Expert thinking and guidance to help you navigate the complex e-commerce and digital landscape.",
        whatWeDo: [
            "Digital Marketing Strategy & Budget Planning.",
            "Growth Consulting & Market Positioning.",
            "Seller & Business Training.",
            "One-on-One Consultations & Team Training."
        ],
        howItHelps: "Prevents costly mistakes and focuses resources on high-impact activities.",
        expectedChanges: "Clear direction, optimized budget allocation, and faster scaling."
      },
      {
        id: "compliance-marketing",
        title: "Compliance-Friendly Services",
        whatIsIt: "Marketing services safe to list on Amazon SPN / Flipkart Partner platforms that reduce rejection risk.",
        whatWeDo: [
          "Marketing Audits & Account Reviews.",
          "Strategy Planning without guaranteed claims.",
          "Performance Analysis.",
          "Content Guidance & Optimization."
        ],
        howItHelps: "Ensures you get professional support without violating marketplace terms regarding 'guaranteed' results.",
        expectedChanges: "Safe, compliant, and professional service delivery."
      }
    ]
  },
  {
    id: "gst-business",
    title: "GST & Registration",
    description: "Complete compliance solutions including PPOB, APOB, and VPOB services.",
    color: "bg-slate-50",
    category: "compliance",
    services: [
      {
        id: "gst-registration",
        title: "GST Registration",
        whatIsIt: "Assistance with obtaining GSTIN for your business.",
        whatWeDo: [
            "Document verification.",
            "Application filing.",
            "Query response management.",
            "Certificate generation support."
        ],
        howItHelps: "Mandatory for selling online in India.",
        expectedChanges: "Timely filing and certificate generation.",
        disclaimer: REGULATORY_DISCLAIMER
      },
      {
        id: "ppob-apob-vpob",
        title: "PPOB / APOB / VPOB",
        whatIsIt: "Solutions for Principal, Additional, and Virtual Places of Business.",
        whatWeDo: [
            "Documentation for PPOB/APOB.",
            "Rental agreement facilitation.",
            "NOC issuance support.",
            "Compliance verification."
        ],
        howItHelps: "Enables multi-state warehousing and FBA/FBF usage.",
        expectedChanges: "Valid rental agreements and documentation for GST compliance.",
        disclaimer: "Click Commerce Hub provides documentation and procedural assistance only. Final approval depends on the respective government authority."
      }
    ]
  }
];