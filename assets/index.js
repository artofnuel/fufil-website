export const images = {
  image1: require("../assets/image1.jpg"),
  image2: require("../assets/image2.jpg"),
  image3: require("../assets/image3.jpg"),
};

export const offerImages = [
  { image: images.image2 },
  { image: images.image1 },
  { image: images.image3 },
];

export const servicesData = [
  {
    title: "Haulage",
    subtitle:
      "Discover how to transport bulk goods or containers using Fulfil Africa.",
    listTitle: "Services",
    list: [
      "Freight forwarding",
      "Moving and packing",
      "Road freight",
      "Air freight",
      "Ocean freight",
    ],
    link: "",
    image: images.image1,
  },
  {
    title: "SUPPLY CHAIN",
    subtitle: `Our strength is derived from its efficient supply chain
    services, which have exceeded our client's
    expectations. Our client's can improve profitability and
    beat the price competition.`,
    listTitle: "We offer",
    list: [
      "Warehousing",
      "Third party logistics",
      "Fourth party logistics",
      "Distribution",
    ],
    link: "",
    image: images.image2,
  },
  {
    title: "LAST MILE DELIVERY",
    subtitle: `We are one of the prominent service providers
    that are currently available for businesses to
    fulfil a wide range of business needs. Fulfil
    Africa's LMD is your cost-effective alternative
    solution.`,
    listTitle: "This covers",
    list: [
      "Same day delivery",
      "Bulk distribution",
      "Next day delivery",
      "Order fulfillment",
    ],
    link: "",
    image: images.image3,
  },
];
