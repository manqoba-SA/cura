const products = [
  {
    id: 1,
    name: "Yarrow",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    price: 45.0,
    image: require("../../assets/images/products/noonbrew.jpg"),
    rating: 5,
    sizes: [
      { id: 1, size: "20 g" },
      { id: 2, size: "50 g" },
      { id: 3, size: "100 g" },
      { id: 4, size: "100 g" },
    ],
  },
  {
    id: 2,
    name: "Schisandra",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    price: 50.0,
    image: require("../../assets/images/products/noonbrew2.jpg"),
    rating: 4,
    sizes: [],
  },
  {
    id: 3,
    name: "Health Tea",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    price: 100.0,
    image: require("../../assets/images/honey.jpg"),
    rating: 2,
    sizes: [
      { id: 1, size: "2kg" },
      { id: 2, size: "5kg" },
      { id: 3, size: "10kg" },
    ],
  },
  {
    id: 4,
    name: "Health Tea",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    price: 100.0,
    image: require("../../assets/images/honey.jpg"),
    rating: 3,
    sizes: [],
  },
];

export default products;
