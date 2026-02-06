import { settingImage, themeImage } from "./icons";

const slug = "icon-list-block";
export const dashboardInfo = (info) => {
  const { version, isPremium, hasPro } = info;

  const proSuffix = isPremium ? " Pro" : "";

  return {
    name: `Icon List Block${proSuffix}`,
    displayName: `Icon List Block${proSuffix} - Add Icon-Based Lists with Custom Styles`,
    description:
      "Use icons instead of bullets of list.",
    slug,
    logo: `https://ps.w.org/${slug}/assets/icon-128x128.png`,
    banner: `https://ps.w.org/${slug}/assets/banner-772x250.png`,
    // video: 'https://www.youtube.com/watch?v=LJym2Pe1h2k',
    // isYoutube: true,
    version,
    isPremium,
    hasPro,
    pages: {
      org: `https://wordpress.org/plugins/${slug}/`,
      landing: `https://bplugins.com/products/${slug}/`,
      docs: `https://bplugins.com/docs/${slug}/`,
      pricing: `https://bplugins.com/products/${slug}/#pricing`,
    },
    freemius: {
      product_id: 17174,
      plan_id: 28639,
      public_key: "pk_51f816736288458da2dd37c719fd3",
    },
    options: { title: "Icon List Block" }
  };
};

export const demoInfo = {
  title: "Live Overview",
  description: "Click on any section to view it live",
  layout: "list",
  allInOneLabel: "See All Demos",
  allInOneLink: "https://bblockswp.com/demo/icon-list-block",
  demos: [
    {
      icon: themeImage,
      title: "Default Theme",
      description: "Apply the default theme to your website",
      category: "",
      type: "image",
      url: "https://i.ibb.co.com/zHmwcBPD/screenshot-1.png",
    },
    {
      icon: themeImage,
      title: "Theme Two",
      description: "Apply this theme to your website",
      category: "",
      type: "image",
      url: "https://i.ibb.co.com/6RnPCGPs/screenshot-2.png",
    },
    {
      icon: themeImage,
      title: "Theme Three",
      description: "Apply this theme to your website",
      category: "",
      type: "image",
      url: "https://i.ibb.co.com/XZKCNttb/screenshot-3.png",
    },
    {
      icon: themeImage,
      title: "Theme Four",
      description: "Apply this theme to your website",
      category: "",
      type: "image",
      url: "https://i.ibb.co.com/NnK1pLdp/screenshot-4.png",
    },
    {
      icon: themeImage,
      title: "Theme Five",
      description: "Apply this theme to your website",
      category: "",
      type: "image",
      url: "https://i.ibb.co.com/Y7HZksNP/screenshot-5.png",
    },
    {
      icon: themeImage,
      title: "Theme Six",
      description: "Apply this theme to your website",
      category: "",
      type: "image",
      url: "https://i.ibb.co.com/Lw6S114/screenshot-6.png",
    },
    {
      icon: themeImage,
      title: "Theme Seven",
      description: "Apply this theme to your website",
      category: "",
      type: "image",
      url: "https://i.ibb.co.com/fVxprCc6/screenshot-7.png",
    },
    {
      icon: settingImage,
      title: "Gutenberg Block Settings",
      description: "Provides customization in the Gutenberg editor",
      category: "",
      type: "image",
      url: "https://i.ibb.co.com/bRrd2NXZ/screenshot-8.png",
    },
  ],
};


export const pricingInfo = {
  cycles: [
    {
      cycle: "lifetime",
      label: "Lifetime",
      isDefault: true,
    },
  ],
  plans: [
    {
      name: "Single Site",
      quantity: 1,
      prices: {
        lifetime: "29.99",
      },
      pricePrefix: "",
      priceSuffix: "",
      isFeatured: false,
      note: "",
    },
    {
      name: "3 Sites",
      quantity: 3,
      prices: {
        lifetime: "79.99",
      },
      pricePrefix: "",
      priceSuffix: "",
      isFeatured: true,
      note: "",
    },
    {
      name: "Unlimited Sites",
      quantity: "null",
      prices: {
        lifetime: "199.99",
      },
      pricePrefix: "",
      priceSuffix: "",
      isFeatured: false,
      note: "",
    },
  ],
  features: [
    "Multiple  themes Offers to customization",
    "Background On Your List Item",
    "Hide/Show List Item URL Icon",
    "Hide/Show List Item Badge",
    "Set The Badge Title on Input Field",
    "Badge Text Styles",
    "Badge Set The variant Styles",
    "Icon Animated styles",
    "Apply The Choose Custom Upload images",
    "Apply The Custom styles Grid for themes responsive",
    "Premium Animations",
  ],
  button: {
    label: "Buy Now ➜",
  },
  featured: {
    text: "Best Value",
  },
};

export const featureCompareInfo = {
  title: "Features",
  plans: [
    {
      id: "zxcvbnm", //important
      name: "Free Plan",
      color: "#485781",
    },
    {
      id: "lhmjqhk", //important
      name: `<span style='color: #485781;'>Pro Start from </span><span style='font-size: 1.3em;'>&dollar; 29/lifetime</span>`,
      color: "#146EF5",
    },
  ],
  features: [
    {
      label: "Comprehensive Customization Options",
      plans: ["zxcvbnm", "lhmjqhk"],
    },
    {
      label: "Advanced Controls for list icon",
      plans: ["zxcvbnm", "lhmjqhk"],
    },
    {
      label: "Custom Icon Selection",
      plans: ["zxcvbnm", "lhmjqhk"],
    },
    {
      label: "Badge Title Configuration",
      plans: ["zxcvbnm", "lhmjqhk"],
    },
    {
      label: "Unlimited List Items",
      plans: ["zxcvbnm", "lhmjqhk"],
    },
    {
      label: "*URL-Specific List Items",
      plans: ["zxcvbnm", "lhmjqhk"],
    },
    {
      label: "Theme Customization",
      plans: ["zxcvbnm", "lhmjqhk"],
    },
    {
      label: "Full Site Editor Compatibility",
      plans: ["zxcvbnm", "lhmjqhk"],
    },
    {
      label: "Choose Your Preferred Theme",
      plans: ["lhmjqhk"],
    },
    {
      label: "Hide/Show List Item URL Icon",
      plans: ["lhmjqhk"],
    },
    {
      label: "Hide/Show List Item Badge",
      plans: ["lhmjqhk"],
    },
    {
      label: "Badge Title Input Field",
      plans: ["lhmjqhk"],
    },
    {
      label: "Badge Text variant Styles",
      plans: ["lhmjqhk"],
    },
    {
      label: "Badge Text Color & Background",
      plans: ["lhmjqhk"],
    },
    {
      label: "Icon Animated styles",
      plans: ["lhmjqhk"],
    },
    {
      label: "Custom Upload images",
      plans: ["lhmjqhk"],
    },
    {
      label: "Custom styles Grid for themes",
      plans: ["lhmjqhk"],
    },
    {
      label: "Premium Animations",
      plans: ["lhmjqhk"],
    }
  ],
};