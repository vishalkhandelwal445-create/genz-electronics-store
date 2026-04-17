export interface Product {
  id: string;
  name: string;
  tagline: string;
  price: number;
  originalPrice: number;
  description: string;
  features: string[];
  category: string;
  badge: string;
  rating: number;
  reviews: number;
  colors: string[];
  image: string;
  gallery: string[];
}

export const products: Product[] = [
  {
    id: "transparent-earbuds",
    name: "GhostBuds Pro",
    tagline: "See-through sound. Unreal vibes.",
    price: 4999,
    originalPrice: 7999,
    description:
      "Transparent shell earbuds with active noise cancellation, 40-hour battery, and spatial audio. The see-through design lets you flex your tech while dropping beats that hit different.",
    features: [
      "Transparent polycarbonate shell",
      "Active Noise Cancellation",
      "40hr battery life",
      "Spatial Audio with head tracking",
      "IPX5 water resistant",
      "Wireless charging case",
    ],
    category: "Audio",
    badge: "TRENDING 🔥",
    rating: 4.8,
    reviews: 2847,
    colors: ["#00f0ff", "#ff00e5", "#ffffff"],
    image: "https://images.unsplash.com/photo-1590658268037-6bf12f032f55?w=600&h=600&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1590658268037-6bf12f032f55?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1631867726687-65963e2ce8e2?w=600&h=600&fit=crop",
    ],
  },
  {
    id: "cyber-watch",
    name: "CyberPulse X1",
    tagline: "Your wrist. Your command center.",
    price: 12999,
    originalPrice: 18999,
    description:
      "A smartwatch built for the future. AMOLED always-on display, health monitoring suite, and a cyberpunk-inspired UI that makes every glance at your wrist feel like a sci-fi moment.",
    features: [
      '1.9" AMOLED Always-On Display',
      "SpO2, Heart Rate & Stress Monitor",
      "Built-in GPS + NFC Payments",
      "7-day battery life",
      "100+ cyberpunk watch faces",
      "IP68 waterproof",
    ],
    category: "Wearables",
    badge: "NEW DROP 🚀",
    rating: 4.9,
    reviews: 1563,
    colors: ["#b829ff", "#39ff14", "#ff00e5"],
    image: "https://images.unsplash.com/photo-1546868871-af0de0ae72be?w=600&h=600&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1546868871-af0de0ae72be?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=600&h=600&fit=crop",
    ],
  },
  {
    id: "rgb-keyboard",
    name: "KRAKN MechForce",
    tagline: "Type loud. Glow louder.",
    price: 6499,
    originalPrice: 9999,
    description:
      "Hot-swappable mechanical keyboard with per-key RGB, gasket-mount design, and premium PBT keycaps. Every keystroke is a vibe. Every glow is a statement.",
    features: [
      "Hot-swappable mechanical switches",
      "Per-key RGB with 16M colors",
      "Gasket-mount design",
      "PBT double-shot keycaps",
      "USB-C + Bluetooth 5.3",
      "Aluminum alloy frame",
    ],
    category: "Peripherals",
    badge: "BEST SELLER 💜",
    rating: 4.7,
    reviews: 4201,
    colors: ["#00f0ff", "#b829ff", "#39ff14"],
    image: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=600&h=600&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1595225476474-87563907a212?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&h=600&fit=crop",
    ],
  },
  {
    id: "holo-speaker",
    name: "BASSDROP Orb",
    tagline: "360° sound. Zero boundaries.",
    price: 3499,
    originalPrice: 5499,
    description:
      "Levitating Bluetooth speaker with 360° surround sound, pulsing LED light show, and 20-hour battery. It literally floats while playing your playlist. Need we say more?",
    features: [
      "Magnetic levitation base",
      "360° omnidirectional sound",
      "Pulsing RGB light sync",
      "20hr battery life",
      "Bluetooth 5.3 + AUX",
      "IPX4 splash resistant",
    ],
    category: "Audio",
    badge: "VIRAL ✨",
    rating: 4.6,
    reviews: 3892,
    colors: ["#ff00e5", "#00f0ff", "#ffffff"],
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&h=600&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1558089687-f282ffcbc126?w=600&h=600&fit=crop",
    ],
  },
];
