export const indianMarketplaces = [
  { rank: 1, platform: "Amazon India", category: "Marketplace", gst: "✅ Yes", notes: "Highest reach. Covers every category. For serious brand builders." },
  { rank: 2, platform: "Flipkart", category: "Marketplace", gst: "✅ Yes", notes: "Strong Tier-2/3 reach. Best for price-competitive mass market products." },
  { rank: 3, platform: "Meesho", category: "Marketplace", gst: "✅ Yes", notes: "Reseller + D2C. Huge volume, low ticket size. GST mandatory." },
  { rank: 4, platform: "Myntra", category: "Fashion", gst: "✅ Yes", notes: "Fashion-only. Quality controlled. Brand approval required." },
  { rank: 5, platform: "Ajio", category: "Fashion", gst: "✅ Yes", notes: "Reliance-backed. Mid to premium fashion brands." },
  { rank: 6, platform: "JioMart Seller", category: "Grocery + FMCG", gst: "✅ Yes", notes: "Strong grocery presence. High compliance requirements." },
  { rank: 7, platform: "Snapdeal", category: "Marketplace", gst: "✅ Yes", notes: "Budget segment. Value buyers. Lower competition." },
  { rank: 8, platform: "Tata Cliq", category: "Premium", gst: "✅ Yes", notes: "Invite-based. Recognized brands & premium products only." },
  { rank: 9, platform: "Nykaa Seller", category: "Beauty", gst: "✅ Yes", notes: "Cosmetics focus. Ingredient disclosures mandatory." },
  { rank: 10, platform: "1mg / PharmEasy", category: "Health", gst: "✅ Yes", notes: "Drug license & medical docs strictly required." },
  { rank: 11, platform: "Pepperfry", category: "Furniture", gst: "✅ Yes", notes: "Heavy logistics. Furniture manufacturers." },
  { rank: 12, platform: "FirstCry", category: "Baby Products", gst: "✅ Yes", notes: "Strict safety checks. Category approval needed." },
];

export const internationalPlatforms = [
  { platform: "Amazon Global Selling", regions: "USA, UK, EU, UAE", gst: "❌ (Zero-rated)", extra: "IEC Required. Best for scalable brands." },
  { platform: "Etsy", regions: "Global", gst: "❌ (Zero-rated)", extra: "PayPal/Payoneer. Best for handmade/creative." },
  { platform: "eBay", regions: "Global", gst: "❌ (Zero-rated)", extra: "IEC Required. You handle shipping." },
  { platform: "Shopify (Intl)", regions: "Global", gst: "❌ (Zero-rated)", extra: "Payment Gateway + Logistics. Total control." },
  { platform: "Alibaba", regions: "Global B2B", gst: "❌ (Zero-rated)", extra: "Export Compliance. Bulk manufacturers." },
  { platform: "Faire", regions: "USA/EU", gst: "❌ (Zero-rated)", extra: "Brand & Logistics. Wholesale focused." },
];

export const quickCommerce = [
  { platform: "Blinkit", sellerType: "Local brands", gst: "✅ Yes", notes: "City-wise registration. Needs local stock." },
  { platform: "Zepto", sellerType: "FMCG", gst: "✅ Yes", notes: "Fast onboarding. Standardized categories." },
  { platform: "Instamart", sellerType: "Brands", gst: "✅ Yes", notes: "Swiggy ecosystem. Strong food logistics." },
  { platform: "BigBasket", sellerType: "FMCG", gst: "✅ Yes", notes: "Inventory based. Higher quality standards." },
  { platform: "Dunzo", sellerType: "Local stores", gst: "✅ Yes", notes: "Limited cities. Local kirana focus." },
];

export const websiteTypes = [
  { type: "Static Website", bestFor: "GST, SPN, Credibility", gst: "❌ No", example: "Business Info Site" },
  { type: "Dynamic Website", bestFor: "Lead Generation", gst: "❌ No", example: "WordPress Service Site" },
  { type: "Shopify Store", bestFor: "D2C Selling", gst: "✅ Yes", example: "Brand Online Store" },
  { type: "WooCommerce", bestFor: "Budget D2C", gst: "✅ Yes", example: "WordPress Shop" },
  { type: "Custom Web App", bestFor: "SaaS / Tools", gst: "❌ No (for site)", example: "CRM / Dashboard" },
  { type: "Landing Page", bestFor: "Ads & Leads", gst: "❌ No", example: "One-page Promo" },
];

export const gstScenarios = [
  { scenario: "Selling on Amazon / Flipkart", requirement: "✅ Mandatory", reason: "E-commerce operator rule. No threshold exemption." },
  { scenario: "Selling on Meesho", requirement: "✅ Mandatory", reason: "Supplier registration & invoicing requires GST." },
  { scenario: "Own Website", requirement: "✅ If Taxable", reason: "Mandatory for physical/digital goods. Services after threshold." },
  { scenario: "Exports", requirement: "❌ Zero-Rated", reason: "Tax is 0%, but registration & LUT are mandatory." },
  { scenario: "Services Only", requirement: "✅ After Threshold", reason: "₹20L (or ₹10L) turnover limit applies." }
];

export const fssaiMandates = [
    { category: "Food & Beverages", requirement: "✅ Mandatory", notes: "Includes packaged food, spices, tea, bakery." },
    { category: "Health Supplements", requirement: "✅ Mandatory", notes: "Proteins, vitamins, ayurvedic consumables." },
    { category: "Edible Cosmetics", requirement: "✅ Mandatory", notes: "Oral gels, mouth fresheners." },
    { category: "Non-Food Products", requirement: "❌ Not Required", notes: "Electronics, clothing, furniture." }
];

export const trademarkRules = [
    { context: "Amazon Brand Registry", requirement: "✅ Mandatory", notes: "Unlock A+ content, analytics, and protection." },
    { context: "D2C Brand (Shopify)", requirement: "✅ Recommended", notes: "Prevents copycats and builds credibility." },
    { context: "Generic Marketplace Selling", requirement: "❌ Not Required", notes: "For unbranded/wholesale goods." }
];

export const otherRegistrationsDetails = [
    { name: "IEC", fullForm: "Import Export Code", usage: "Exports", notes: "Mandatory for customs clearance." },
    { name: "MSME", fullForm: "Micro, Small & Medium Enterprises", usage: "Govt Benefits", notes: "Optional. Good for loans/subsidies." },
    { name: "Barcode (GS1)", fullForm: "Global Standard 1", usage: "FMCG / Retail", notes: "For inventory tracking & quick commerce." },
    { name: "Drug License", fullForm: "-", usage: "Medicines", notes: "Mandatory for pharma products." },
    { name: "BIS", fullForm: "Bureau of Indian Standards", usage: "Electronics", notes: "Ensures safety standards." },
    { name: "Legal Metrology", fullForm: "-", usage: "Packaged Goods", notes: "Mandatory MRP labeling." }
];

export const shopifyRequirements = {
  mandatory: [
    "GST (if selling taxable goods)",
    "PAN (for payment gateway KYC)",
    "Bank Account (Name must match PAN)",
    "Payment Gateway (Razorpay, Cashfree, etc.)",
    "Shipping Partner (Shiprocket, Delhivery)"
  ],
  notMandatory: [
    "Trademark (Recommended for protection)",
    "Private Ltd Company (Proprietorship is valid)"
  ]
};

export const decisionFlows = [
  { scenario: "India Marketplace Seller?", solution: "GST + PAN + Bank + Website", link: "indian-marketplaces" },
  { scenario: "International Selling?", solution: "IEC + Export Compliance + Payoneer", link: "global-selling" },
  { scenario: "Food Product?", solution: "FSSAI License + GST", link: "fssai" },
  { scenario: "Own Brand?", solution: "Trademark + Brand Registry", link: "trademark" },
  { scenario: "Quick Commerce?", solution: "Local GST + Warehouse + Compliance", link: "quick-commerce" },
];

export const exampleScenarios = [
  { title: "Amazon Seller (Generic, Non-Food)", items: ["✔ GST", "✔ PAN", "✔ Bank", "✔ Static Website", "❌ FSSAI", "❌ Trademark"] },
  { title: "Shopify Food Brand", items: ["✔ GST", "✔ FSSAI", "✔ Payment Gateway", "✔ Trademark (Recommended)"] },
  { title: "Etsy Handmade Exporter", items: ["✔ IEC", "✔ Export Invoices", "✔ Intl Payment Gateway", "❌ GST Charged"] },
  { title: "Blinkit/Zepto Seller", items: ["✔ Local GST", "✔ Warehouse (APOB)", "✔ FSSAI", "✔ Barcode (GS1)"] }
];