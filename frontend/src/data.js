const data = {
  products: [
    {
      _id: "12",
      category: "sukienki",
      name: "Sukienka",
      price: 400,
      image: [
        "/img/dress.jpg",
        "/img/dress.jpg",
        "/img/dress.jpg",
        "/img/dress.jpg",
        "/img/dress.jpg",
        "/img/dress.jpg",
      ],
      sizes: [
        { size: "XS", countInStock: 2 },
        { size: "S/M", countInStock: 15 },
        { size: "L/XL", countInStock: 0 },
      ],
      description: [
        {
          big: "",
          text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore molestiae beatae et nemo iure repellat neque rerum repudiandae, commodi corporis consectetur deserunt dignissimos officiis animi quibusdam error eum? Magnam, cumque?",
          list: "",
        },
        {
          big: "Lorem:",
          text: "",
          list: [
            "Lorem ipsum, dolor sit amet consectetur",
            "Lorem ipsum, dolor sit amet consectetur",
            "Lorem ipsum, dolor sit amet consectetur",
            "Lorem ipsum, dolor sit amet consectetur",
          ],
        },
        {
          big: "",
          text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore molestiae beatae et nemo iure",
          list: "",
        },
      ],
      dimensions: [
        {
          sizeName: "XS",
          sizeDimensions: [
            { dimensionName: "Lorem", dimensionValue: 50 },
            { dimensionName: "ipsum", dimensionValue: 23 },
            { dimensionName: "lorem", dimensionValue: 13 },
            { dimensionName: "Lorem ipsum, dolor sit", dimensionValue: 64 },
          ],
        },
        {
          sizeName: "S/M",
          sizeDimensions: [
            { dimensionName: "Lorem", dimensionValue: 45 },
            { dimensionName: "ipsum", dimensionValue: 32 },
            { dimensionName: "lorem", dimensionValue: 31 },
            { dimensionName: "Lorem ipsum, dolor sit", dimensionValue: 87 },
          ],
        },
        {
          sizeName: "L/XL",
          sizeDimensions: [
            { dimensionName: "Lorem", dimensionValue: 13 },
            { dimensionName: "ipsum", dimensionValue: 32 },
            { dimensionName: "lorem", dimensionValue: 23 },
            { dimensionName: "Lorem ipsum, dolor sit", dimensionValue: 12 },
          ],
        },
      ],
      isNew: true,
      isBestseller: true,
    },
    {
      _id: "22",
      category: "sukienki",
      name: "Sukienka pink",
      price: 150,
      image: [
        "/img/dress_pink.jpg",
        "/img/dress_pink.jpg",
        "/img/dress_pink.jpg",
        "/img/dress_pink.jpg",
      ],
      sizes: [
        { size: "XS", countInStock: 2 },
        { size: "S/M", countInStock: 5 },
        { size: "L/XL", countInStock: 1 },
      ],
      description: [
        {
          big: "",
          text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore molestiae beatae et nemo iure repellat neque rerum repudiandae, commodi corporis consectetur deserunt dignissimos officiis animi quibusdam error eum? Magnam, cumque?",
          list: "",
        },
        {
          big: "Lorem:",
          text: "",
          list: [
            "Lorem ipsum, dolor sit amet consectetur",
            "Lorem ipsum, dolor sit amet consectetur",
            "Lorem ipsum, dolor sit amet consectetur",
            "Lorem ipsum, dolor sit amet consectetur",
          ],
        },
        {
          big: "Lorem:",
          text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. ",
          list: "",
        },
        {
          big: "Lorem ipsum, dolor sit amet:",
          text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. ",
          list: "",
        },
      ],
      dimensions: [
        {
          sizeName: "XS",
          sizeDimensions: [
            { dimensionName: "Lorem", dimensionValue: 50 },
            { dimensionName: "ipsum", dimensionValue: 23 },
            { dimensionName: "lorem", dimensionValue: 13 },
            { dimensionName: "Lorem ipsum, dolor sit", dimensionValue: 64 },
          ],
        },
        {
          sizeName: "S/M",
          sizeDimensions: [
            { dimensionName: "Lorem", dimensionValue: 45 },
            { dimensionName: "ipsum", dimensionValue: 32 },
            { dimensionName: "lorem", dimensionValue: 31 },
            { dimensionName: "Lorem ipsum, dolor sit", dimensionValue: 87 },
          ],
        },
        {
          sizeName: "L/XL",
          sizeDimensions: [
            { dimensionName: "Lorem", dimensionValue: 13 },
            { dimensionName: "ipsum", dimensionValue: 32 },
            { dimensionName: "lorem", dimensionValue: 23 },
            { dimensionName: "Lorem ipsum, dolor sit", dimensionValue: 12 },
          ],
        },
      ],
      isNew: true,
      isBestseller: false,
    },
    {
      _id: "32",
      category: "bluzy",
      name: "Bluza czarna",
      price: 699,
      image: [
        "/img/hoodie_black.jpg",
        "/img/hoodie_black.jpg",
        "/img/hoodie_black.jpg",
        "/img/hoodie_black.jpg",
      ],
      sizes: [
        { size: "XS", countInStock: 2 },
        { size: "S/M", countInStock: 5 },
        { size: "L/XL", countInStock: 1 },
      ],
      description: [
        {
          big: "",
          text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore molestiae beatae et nemo iure repellat neque rerum repudiandae, commodi corporis consectetur deserunt dignissimos officiis animi quibusdam error eum? Magnam, cumque?",
          list: "",
        },
        {
          big: "Lorem:",
          text: "",
          list: [
            "Lorem ipsum, dolor sit amet consectetur",
            "Lorem ipsum, dolor sit amet consectetur",
            "Lorem ipsum, dolor sit amet consectetur",
            "Lorem ipsum, dolor sit amet consectetur",
          ],
        },
        {
          big: "Lorem:",
          text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. ",
          list: "",
        },
        {
          big: "Lorem ipsum, dolor sit amet:",
          text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. ",
          list: "",
        },
      ],
      dimensions: [
        {
          sizeName: "XS",
          sizeDimensions: [
            { dimensionName: "Lorem", dimensionValue: 50 },
            { dimensionName: "ipsum", dimensionValue: 23 },
            { dimensionName: "lorem", dimensionValue: 13 },
            { dimensionName: "Lorem ipsum, dolor sit", dimensionValue: 64 },
          ],
        },
        {
          sizeName: "S/M",
          sizeDimensions: [
            { dimensionName: "Lorem", dimensionValue: 45 },
            { dimensionName: "ipsum", dimensionValue: 32 },
            { dimensionName: "lorem", dimensionValue: 31 },
            { dimensionName: "Lorem ipsum, dolor sit", dimensionValue: 87 },
          ],
        },
        {
          sizeName: "L/XL",
          sizeDimensions: [
            { dimensionName: "Lorem", dimensionValue: 13 },
            { dimensionName: "ipsum", dimensionValue: 32 },
            { dimensionName: "lorem", dimensionValue: 23 },
            { dimensionName: "Lorem ipsum, dolor sit", dimensionValue: 12 },
          ],
        },
      ],
      isNew: true,
      isBestseller: true,
    },
    {
      _id: "52",
      category: "spodnice",
      name: "Spódnica",
      price: 999,
      image: ["/img/skirt.jpg", "/img/skirt.jpg", "/img/skirt.jpg", "/img/skirt.jpg"],
      sizes: [
        { size: "XS", countInStock: 2 },
        { size: "S/M", countInStock: 5 },
        { size: "L/XL", countInStock: 1 },
      ],
      description: [
        {
          big: "",
          text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore molestiae beatae et nemo iure repellat neque rerum repudiandae, commodi corporis consectetur deserunt dignissimos officiis animi quibusdam error eum? Magnam, cumque?",
          list: "",
        },
        {
          big: "Lorem:",
          text: "",
          list: [
            "Lorem ipsum, dolor sit amet consectetur",
            "Lorem ipsum, dolor sit amet consectetur",
            "Lorem ipsum, dolor sit amet consectetur",
            "Lorem ipsum, dolor sit amet consectetur",
          ],
        },
        {
          big: "Lorem:",
          text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. ",
          list: "",
        },
        {
          big: "Lorem ipsum, dolor sit amet:",
          text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. ",
          list: "",
        },
      ],
      dimensions: [
        {
          sizeName: "XS",
          sizeDimensions: [
            { dimensionName: "Lorem", dimensionValue: 50 },
            { dimensionName: "ipsum", dimensionValue: 23 },
            { dimensionName: "lorem", dimensionValue: 13 },
            { dimensionName: "Lorem ipsum, dolor sit", dimensionValue: 64 },
          ],
        },
        {
          sizeName: "S/M",
          sizeDimensions: [
            { dimensionName: "Lorem", dimensionValue: 45 },
            { dimensionName: "ipsum", dimensionValue: 32 },
            { dimensionName: "lorem", dimensionValue: 31 },
            { dimensionName: "Lorem ipsum, dolor sit", dimensionValue: 87 },
          ],
        },
        {
          sizeName: "L/XL",
          sizeDimensions: [
            { dimensionName: "Lorem", dimensionValue: 13 },
            { dimensionName: "ipsum", dimensionValue: 32 },
            { dimensionName: "lorem", dimensionValue: 23 },
            { dimensionName: "Lorem ipsum, dolor sit", dimensionValue: 12 },
          ],
        },
      ],
      isNew: true,
      isBestseller: true,
    },
    {
      _id: "62",
      category: "spodnie",
      name: "Spodnie",
      price: 199,
      image: [
        "/img/pants.jpg",
        "/img/pants.jpg",
        "/img/pants.jpg",
        "/img/pants.jpg",
        "/img/pants.jpg",
      ],
      sizes: [
        { size: "XS", countInStock: 2 },
        { size: "S/M", countInStock: 5 },
        { size: "L/XL", countInStock: 1 },
      ],
      description: [
        {
          big: "",
          text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore molestiae beatae et nemo iure repellat neque rerum repudiandae, commodi corporis consectetur deserunt dignissimos officiis animi quibusdam error eum? Magnam, cumque?",
          list: "",
        },
        {
          big: "Lorem:",
          text: "",
          list: [
            "Lorem ipsum, dolor sit amet consectetur",
            "Lorem ipsum, dolor sit amet consectetur",
            "Lorem ipsum, dolor sit amet consectetur",
            "Lorem ipsum, dolor sit amet consectetur",
          ],
        },
        {
          big: "Lorem:",
          text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. ",
          list: "",
        },
        {
          big: "Lorem ipsum, dolor sit amet:",
          text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. ",
          list: "",
        },
      ],
      dimensions: [
        {
          sizeName: "XS",
          sizeDimensions: [
            { dimensionName: "Lorem", dimensionValue: 50 },
            { dimensionName: "ipsum", dimensionValue: 23 },
            { dimensionName: "lorem", dimensionValue: 13 },
            { dimensionName: "Lorem ipsum, dolor sit", dimensionValue: 64 },
          ],
        },
        {
          sizeName: "S/M",
          sizeDimensions: [
            { dimensionName: "Lorem", dimensionValue: 45 },
            { dimensionName: "ipsum", dimensionValue: 32 },
            { dimensionName: "lorem", dimensionValue: 31 },
            { dimensionName: "Lorem ipsum, dolor sit", dimensionValue: 87 },
          ],
        },
        {
          sizeName: "L/XL",
          sizeDimensions: [
            { dimensionName: "Lorem", dimensionValue: 13 },
            { dimensionName: "ipsum", dimensionValue: 32 },
            { dimensionName: "lorem", dimensionValue: 23 },
            { dimensionName: "Lorem ipsum, dolor sit", dimensionValue: 12 },
          ],
        },
      ],
      isNew: true,
      isBestseller: false,
    },
  ],
};

export default data;
