export type Product = {
  slug: string;
  name: string;
  brandLine: string;
  category: "Bags" | "Jewelry" | "Fashion" | "Home Decor" | "Beauty";
  price: string;
  originalPrice?: string;
  rating: number;
  reviewCount: number;
  image: string;
  badge?: string;
  features: string[];
  pros: string[];
  cons: string[];
  affiliateUrl: string;
};

export const categories = [
  {
    slug: "bags",
    name: "Handbags",
    tagline: "Structured, slouchy, and everything between",
    description:
      "From everyday totes to occasion clutches, our handbag edit covers construction, hardware, and how each piece wears in over time.",
  },
  {
    slug: "jewelry",
    name: "Jewelry",
    tagline: "Fine details, worn every day",
    description:
      "Demi-fine and fine jewelry that holds its shine — reviewed on plating, hypoallergenic claims, and everyday durability.",
  },
  {
    slug: "fashion",
    name: "Fashion",
    tagline: "Considered pieces, not fast trends",
    description:
      "Wardrobe staples and seasonal statements chosen for fabric quality, fit consistency, and cost-per-wear.",
  },
  {
    slug: "home-decor",
    name: "Home Decor",
    tagline: "Quietly elevated interiors",
    description:
      "Objects and textiles that make a room feel finished — vetted for material honesty and everyday livability.",
  },
  {
    slug: "beauty",
    name: "Beauty",
    tagline: "Skin-first, formula-led",
    description:
      "Skincare and makeup evaluated on ingredient lists, texture, and how they actually perform past week one.",
  },
] as const;

export const products: Product[] = [
  {
    slug: "atelier-structured-tote",
    name: "Atelier Structured Tote",
    brandLine: "Marchetti Studio",
    category: "Bags",
    price: "$89",
    originalPrice: "$140",
    rating: 4.8,
    reviewCount: 1204,
    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=80",
    badge: "Editor's Pick",
    features: [
      "Full-grain vegan leather exterior",
      "Structured base holds shape unloaded",
      "Detachable gold-tone crossbody strap",
      "Interior zip and slip pockets",
    ],
    pros: ["Holds shape after months of use", "Hardware resists tarnish", "Fits 13-inch laptop"],
    cons: ["Handles sit close for thick coats", "No dust bag included"],
    affiliateUrl: "https://example.com/go/atelier-structured-tote",
  },
  {
    slug: "quilted-crossbody-mini",
    name: "Quilted Crossbody Mini",
    brandLine: "Rue Fontaine",
    category: "Bags",
    price: "$54",
    originalPrice: "$78",
    rating: 4.6,
    reviewCount: 892,
    image:
      "https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&w=900&q=80",
    features: [
      "Diamond quilting on vegan leather",
      "Adjustable gold-link chain strap",
      "Fits phone, card case, lipstick",
    ],
    pros: ["Genuinely lightweight", "Chain strap doesn't dig in", "Great gift packaging"],
    cons: ["Small for daily essentials", "Only two colorways"],
    affiliateUrl: "https://example.com/go/quilted-crossbody-mini",
  },
  {
    slug: "weekender-canvas-duffel",
    name: "Weekender Canvas Duffel",
    brandLine: "Nordhouse & Co.",
    category: "Bags",
    price: "$96",
    rating: 4.7,
    reviewCount: 611,
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=80",
    features: ["Waxed canvas body", "Leather trim and base", "Fits airline carry-on sizing"],
    pros: ["Ages beautifully", "Strap padding is real padding"],
    cons: ["No wheels, obviously", "Canvas needs occasional re-waxing"],
    affiliateUrl: "https://example.com/go/weekender-canvas-duffel",
  },
  {
    slug: "pave-halo-studs",
    name: "Pavé Halo Studs",
    brandLine: "Larkspur Fine",
    category: "Jewelry",
    price: "$38",
    originalPrice: "$62",
    rating: 4.9,
    reviewCount: 2043,
    image:
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=900&q=80",
    badge: "Bestseller",
    features: ["14k gold vermeil over sterling silver", "Cubic zirconia pavé halo", "Butterfly backs"],
    pros: ["No tarnish after 6 months", "Genuinely hypoallergenic for sensitive ears"],
    cons: ["Box is basic for the price"],
    affiliateUrl: "https://example.com/go/pave-halo-studs",
  },
  {
    slug: "layered-coin-necklace",
    name: "Layered Coin Necklace Set",
    brandLine: "Larkspur Fine",
    category: "Jewelry",
    price: "$46",
    rating: 4.7,
    reviewCount: 1387,
    image:
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=900&q=80",
    features: ["Two-piece layered set", "18k gold plated brass", "Adjustable 16–18in chain"],
    pros: ["Layers sit flat, no tangling", "Plating holds up to daily wear"],
    cons: ["Coin pendant slightly heavier than pictured"],
    affiliateUrl: "https://example.com/go/layered-coin-necklace",
  },
  {
    slug: "sculptural-cuff-bracelet",
    name: "Sculptural Cuff Bracelet",
    brandLine: "Maison Verre",
    category: "Jewelry",
    price: "$29",
    rating: 4.5,
    reviewCount: 534,
    image:
      "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=900&q=80",
    features: ["Brushed gold-tone finish", "Adjustable open cuff", "Nickel-free"],
    pros: ["Stacks well with thinner bangles", "Adjusts to fit most wrists"],
    cons: ["Finish shows fine scratches over time"],
    affiliateUrl: "https://example.com/go/sculptural-cuff-bracelet",
  },
  {
    slug: "tailored-wool-blazer",
    name: "Tailored Wool-Blend Blazer",
    brandLine: "Aldern & Row",
    category: "Fashion",
    price: "$118",
    originalPrice: "$165",
    rating: 4.8,
    reviewCount: 976,
    image:
      "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?auto=format&fit=crop&w=900&q=80",
    badge: "Editor's Pick",
    features: ["70% wool blend", "Fully lined interior", "Structured shoulder"],
    pros: ["True to size across the range", "Fabric doesn't pill after washing"],
    cons: ["Dry clean recommended"],
    affiliateUrl: "https://example.com/go/tailored-wool-blazer",
  },
  {
    slug: "silk-slip-midi-dress",
    name: "Silk-Feel Slip Midi Dress",
    brandLine: "Fauve Studio",
    category: "Fashion",
    price: "$64",
    rating: 4.6,
    reviewCount: 1120,
    image:
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=900&q=80",
    features: ["Bias-cut silhouette", "Adjustable straps", "Machine washable satin"],
    pros: ["Genuinely doesn't cling", "Layers well under jackets"],
    cons: ["Runs slightly long for petite frames"],
    affiliateUrl: "https://example.com/go/silk-slip-midi-dress",
  },
  {
    slug: "cashmere-blend-scarf",
    name: "Cashmere-Blend Wrap Scarf",
    brandLine: "Nordhouse & Co.",
    category: "Fashion",
    price: "$42",
    rating: 4.7,
    reviewCount: 745,
    image:
      "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?auto=format&fit=crop&w=900&q=80",
    features: ["10% cashmere, 90% fine wool", "Oversized 78x28in", "Fringed edges"],
    pros: ["Soft without shedding", "Warm without bulk"],
    cons: ["Needs gentle hand wash"],
    affiliateUrl: "https://example.com/go/cashmere-blend-scarf",
  },
  {
    slug: "ribbed-ceramic-vase-set",
    name: "Ribbed Ceramic Vase Set",
    brandLine: "Field & Form",
    category: "Home Decor",
    price: "$48",
    rating: 4.8,
    reviewCount: 623,
    image:
      "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?auto=format&fit=crop&w=900&q=80",
    features: ["Set of 3 nesting vases", "Matte stoneware finish", "Watertight glaze interior"],
    pros: ["Colors match product photos closely", "Great weight, doesn't feel hollow"],
    cons: ["One size runs narrower than expected"],
    affiliateUrl: "https://example.com/go/ribbed-ceramic-vase-set",
  },
  {
    slug: "linen-throw-pillow-covers",
    name: "Linen Throw Pillow Covers",
    brandLine: "Field & Form",
    category: "Home Decor",
    price: "$32",
    rating: 4.6,
    reviewCount: 891,
    image:
      "https://images.unsplash.com/photo-1616627561950-9f746e330187?auto=format&fit=crop&w=900&q=80",
    features: ["100% stonewashed linen", "Hidden zip closure", "Set of 2, 20x20in"],
    pros: ["Linen texture holds up to washing", "Zip is sturdy, not flimsy"],
    cons: ["Wrinkles easily, part of the linen look"],
    affiliateUrl: "https://example.com/go/linen-throw-pillow-covers",
  },
  {
    slug: "amber-glass-candle-trio",
    name: "Amber Glass Candle Trio",
    brandLine: "Solace House",
    category: "Home Decor",
    price: "$36",
    rating: 4.9,
    reviewCount: 1560,
    image:
      "https://images.unsplash.com/photo-1602874801007-bd36c614332e?auto=format&fit=crop&w=900&q=80",
    badge: "Bestseller",
    features: ["Soy-coconut wax blend", "40-hour burn time each", "Reusable amber glass jars"],
    pros: ["Scent throw is strong but not overpowering", "Jars genuinely reusable after"],
    cons: ["Lids not included"],
    affiliateUrl: "https://example.com/go/amber-glass-candle-trio",
  },
  {
    slug: "vitamin-c-brightening-serum",
    name: "Vitamin C Brightening Serum",
    brandLine: "Lumière Lab",
    category: "Beauty",
    price: "$27",
    originalPrice: "$39",
    rating: 4.7,
    reviewCount: 3210,
    image:
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=900&q=80",
    badge: "Bestseller",
    features: ["15% stabilized vitamin C", "Ferulic acid + vitamin E", "Fragrance-free"],
    pros: ["No pilling under makeup", "Visible brightening in 3 weeks"],
    cons: ["Can feel tacky in humid climates"],
    affiliateUrl: "https://example.com/go/vitamin-c-brightening-serum",
  },
  {
    slug: "silk-pillowcase-duo",
    name: "Mulberry Silk Pillowcase Duo",
    brandLine: "Lumière Lab",
    category: "Beauty",
    price: "$44",
    rating: 4.8,
    reviewCount: 1998,
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=80",
    features: ["22-momme mulberry silk", "Hidden zip closure", "Set of 2 standard shams"],
    pros: ["Noticeably less hair frizz", "Holds up after 20+ washes"],
    cons: ["Slippery for restless sleepers"],
    affiliateUrl: "https://example.com/go/silk-pillowcase-duo",
  },
  {
    slug: "tinted-lip-oil-set",
    name: "Tinted Lip Oil Set",
    brandLine: "Marchetti Studio",
    category: "Beauty",
    price: "$24",
    rating: 4.6,
    reviewCount: 1420,
    image:
      "https://images.unsplash.com/photo-1631730359585-38a4935cbec4?auto=format&fit=crop&w=900&q=80",
    features: ["Set of 3 sheer shades", "Shea butter + jojoba oil", "Non-sticky finish"],
    pros: ["Buildable without patchiness", "Lasts through a full meal"],
    cons: ["Shade range runs warm-toned only"],
    affiliateUrl: "https://example.com/go/tinted-lip-oil-set",
  },
];

export const bestSellers = products.filter((p) => p.badge === "Bestseller");
export const editorsPicks = products.filter((p) => p.badge === "Editor's Pick");

export function productsByCategory(categoryName: Product["category"]) {
  return products.filter((p) => p.category === categoryName);
}

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  image: string;
  productSlugs: string[];
  faqs: { q: string; a: string }[];
};

export const articles: Article[] = [
  {
    slug: "best-designer-style-handbags-under-100",
    title: "15 Best Designer-Style Handbags Under $100",
    excerpt:
      "Structured totes, quilted minis, and weekend duffels that read expensive without the markup — tested for hardware quality and how they hold shape over time.",
    category: "Handbags",
    readTime: "9 min read",
    date: "2026-01-14",
    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1400&q=80",
    productSlugs: ["atelier-structured-tote", "quilted-crossbody-mini", "weekender-canvas-duffel"],
    faqs: [
      {
        q: "Can affordable handbags actually look luxury?",
        a: "Yes — construction and hardware finish matter far more than the price tag. The bags in this guide were chosen because their stitching, base structure, and metal hardware hold up under close inspection.",
      },
      {
        q: "How do I make a budget bag last longer?",
        a: "Store it stuffed with tissue paper to hold its shape, keep it out of direct sunlight, and wipe hardware with a dry cloth monthly to slow tarnish.",
      },
      {
        q: "Are vegan leather bags durable?",
        a: "Quality vegan leather with a textured, full-grain finish resists cracking better than cheap PU. Look for reinforced stitching at the handles, which is usually the first failure point.",
      },
    ],
  },
  {
    slug: "best-jewelry-trends-2026",
    title: "Best Jewelry Trends 2026: What's Actually Worth Buying",
    excerpt:
      "From pavé halos to layered coin necklaces, here's what's trending this year — and which pieces are built to survive daily wear, not just a photo.",
    category: "Jewelry",
    readTime: "7 min read",
    date: "2026-01-22",
    image:
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=1400&q=80",
    productSlugs: ["pave-halo-studs", "layered-coin-necklace", "sculptural-cuff-bracelet"],
    faqs: [
      {
        q: "What's the difference between gold vermeil and gold plated?",
        a: "Gold vermeil is a thicker layer of gold (at least 2.5 microns) over sterling silver, so it resists tarnish longer than standard gold-plated brass.",
      },
      {
        q: "How do I keep demi-fine jewelry from tarnishing?",
        a: "Remove pieces before showering, swimming, or applying perfume and lotion, and store them in a dry, airtight pouch when not worn.",
      },
      {
        q: "Is layered jewelry hard to maintain?",
        a: "A well-made layered set uses different chain lengths and lightweight links so pieces sit flat instead of tangling — check reviews for tangling complaints before buying.",
      },
    ],
  },
  {
    slug: "luxury-gifts-that-look-expensive",
    title: "Luxury Gifts That Look Expensive (But Aren't)",
    excerpt:
      "A curated edit of home, beauty, and accessory gifts with a genuinely premium unboxing moment — all under $50.",
    category: "Gift Ideas",
    readTime: "6 min read",
    date: "2026-02-03",
    image:
      "https://images.unsplash.com/photo-1602874801007-bd36c614332e?auto=format&fit=crop&w=1400&q=80",
    productSlugs: ["amber-glass-candle-trio", "silk-pillowcase-duo", "ribbed-ceramic-vase-set"],
    faqs: [
      {
        q: "What makes a gift feel expensive without the price?",
        a: "Weight, packaging, and finish do the heavy lifting. A heavier candle jar or a matte ceramic finish reads premium regardless of what it cost.",
      },
      {
        q: "What's a safe gift for someone you don't know well?",
        a: "Home and beauty items with a broad, neutral appeal — like a candle set or a silk pillowcase — are safer than fashion or jewelry, which depend on personal taste and sizing.",
      },
      {
        q: "Should I buy gifts directly from these product links?",
        a: "Yes, the affiliate buttons link directly to the retailer's current listing, so you'll see live pricing and availability before you buy.",
      },
    ],
  },
];
