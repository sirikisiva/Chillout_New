export const data = [
  { email: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/ },
  { password: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/ },
  { phone: /^[0-9]{10}$/},
  { otp: /^[0-9]{4}$/ },
  {username:/^[-\w\.\$@\*\!]{1,30}$/}
];


export const Songs = [
  {
    id: 1,
    favourite: false,
    songName: "Bella Ciao",
    artist: "El Profesor",
    song: "./La-Casa-De-Papel---Bella-Ciao-(Money-Heist).mp3",
    imgSrc:
      "",
  },
  {
    id: 2,
    favourite: false,
    songName: "Beast",
    artist: "Anirudh Ravichander",
    song: "./Beast.mp3",
    imgSrc:
      "",
  },
  {
    id: 3,
    favourite: false,
    songName: "Joker - Rock and Roll",
    artist: "Hildur Guðnadóttir",
    song: "",
    imgSrc:
      "",
  },
  {
    id: 4,
    favourite: false,
    songName: "I Am A Peaky Blinder",
    artist: "Otnicka",
    song: "",
    imgSrc:
      "",
  },
  {
    id: 5,
    favourite: false,
    songName: "Naanga Vera Maari",
    artist: "Yuvan Shankar Raja",
    song: "",
    imgSrc:
      "",
  },
  {
    id: 6,
    songName: "Your Woman",
    artist: "White Town",
    song: "",
    imgSrc:
      "",
  },
  {
    id: 7,
    favourite: false,
    songName: "Charlie",
    artist: "Gopi Sundar",
    song: "",
    imgSrc:
      "",
  },
  {
    id: 8,
    favourite: false,
    songName: "Mask Off",
    artist: "Future",
    song: "",
    imgSrc:
      "",
  },
  {
    id: 9,
    favourite: false,
    songName: "Hey Mama",
    artist: "David Guetta",
    song: "",
    imgSrc:
      "",
  },
  {
    id: 10,
    favourite: false,
    songName: "Turkish Folk Battle Song",
    artist: "CVR Toon ",
    song: "",
    imgSrc:
      "",
  },
];


export const musicCardsData = [
  {
    id: "one",
    img: "musicOne.jpg",
    name: "Calm Music",
    mapId: 1,
    calmSongs: [
      {
        id: 1,
        favourite: false,
        songName: "Bella Ciao",
        artist: "El Profesor",
        song: "La-Casa-De-Papel---Bella-Ciao-(Money-Heist).mp3",
        imgSrc:
          "",
      },
      {
        id: 2,
        favourite: false,
        songName: "Beast",
        artist: "Anirudh Ravichander",
        song: "./Beast.mp3",
        imgSrc:
          "",
      },
    ],
  },
  {
    id: "two",
    img: "musicTwo.jpg",
    name: "Stress Relief Music",
    calmSongs: [
      {
        id: 1,
        favourite: false,
        songName: "Bella Ciao",
        artist: "El Profesor",
        song: "",
        imgSrc:
          "",
      },
      {
        id: 2,
        favourite: false,
        songName: "Beast",
        artist: "Anirudh Ravichander",
        song: "",
        imgSrc:
          "",
      },
    ],
  },
  {
    id: "three",
    img: "musicThree.jpg",
    name: "Sleep Music",
    calmSongs: [
      {
        id: 1,
        favourite: false,
        songName: "Bella Ciao",
        artist: "El Profesor",
        song: "",
        imgSrc:
          "",
      },
      {
        id: 2,
        favourite: false,
        songName: "Beast",
        artist: "Anirudh Ravichander",
        song: "",
        imgSrc:
          "",
      },
    ],
  },
  {
    id: "four",
    img: "musicFour.jpg",
    name: "Depression Relief Music",
  },
  {
    id: "five",
    img: "musicFive.jpg",
    name: "Anxiety Relief Music",
  },
  {
    id: "six",
    img: "musicSix.jpeg",
    name: "Anger Relief Music",
  },
];