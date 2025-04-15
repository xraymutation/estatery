export interface Estate {
  address: string;
  isFavourite: boolean;
  img: string;
  price: number;
  title: string;
  type: "house" | "apartment";
}

export const estates: Estate[] = [
  {
    address: "2699 Green Valley, Highland Lake, FL",
    isFavourite: false,
    img: "images/h1.jpg",
    price: 3440,
    title: "Palm Harbor",
    type: "house",
  },
  {
    address: "210 US Highway, Highland Lake, FL",
    title: "St. Crystal",
    isFavourite: false,
    img: "images/h2.jpg    ",
    price: 6550,
    type: "house",
  },
  {
    address: "909 Woodland St, Michigan, IN",
    title: "Faulkner Ave",
    isFavourite: false,
    img: "images/h3.jpg",
    price: 4950,
    type: "house",
  },
  {
    address: "103 Lake Shores, Michigan, IN",
    title: "Tarpon Bay",
    isFavourite: false,
    img: "images/a1.jpg",
    price: 2140,
    type: "apartment",
  },
  {
    address: "243 Curlew Road, Palm Harbor, TX",
    title: "Cove Red",
    isFavourite: false,
    img: "images/a2.jpg",
    price: 1450,
    type: "apartment",
  },
  {
    address: "2821 Lake Sevilla, Palm Harbor, TX",
    title: "Beverly Springfield",
    isFavourite: false,
    img: "images/a3.jpg",
    price: 3850,
    type: "apartment",
  },
];
