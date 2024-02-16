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
    song: "calmMusicOne.mp3",
    imgSrc:
      "",
  },
  {
    id: 2,
    favourite: false,
    songName: "Beast",
    artist: "Anirudh Ravichander",
    song: "./calmMusicTwo.mp3",
    imgSrc:
      "",
  },
  {
    id: 3,
    favourite: false,
    songName: "Joker - Rock and Roll",
    artist: "Hildur Guðnadóttir",
    song: "./calmMusicThree.mp3",
    imgSrc:
      "",
  },
  {
    id: 4,
    favourite: false,
    songName: "I Am A Peaky Blinder",
    artist: "Otnicka",
    song: "./calmMusicFour.mp3",
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
        songName: "Once In Paris",
        artist: "Daddy_s_Music",
        song: "calmMusicOne.mp3",
        imgSrc:"https://cdn.pixabay.com/audio/2024/02/04/10-16-16-251_200x200.png",
        duration:"3:20"
      },
      {
        id: 2,
        favourite: false,
        songName: "Perfect Beauty",
        artist: "Pumpupthemind",
        song: "calmMusicTwo.mp3",
        imgSrc:"https://cdn.pixabay.com/audio/2024/02/14/22-35-32-207_200x200.png",
        duration:"3:20"

      },
      {
        id: 3,
        favourite: false,
        songName: "Love's Serenade (Valentine’s day)",
        artist: "Top-Flow",
        song: "calmMusicThree.mp3",
        imgSrc:"https://cdn.pixabay.com/audio/2024/01/26/13-50-53-618_200x200.jpg",
        duration:"3:20"

      },
      {
        id: 4,
        favourite: false,
        songName: "Separation",
        artist: "William_King",
        song: "calmMusicFour.mp3",
        imgSrc:"https://cdn.pixabay.com/audio/2024/01/10/15-04-26-897_200x200.jpg",
        duration:"3:20"

      },
      {
        id: 5,
        favourite: false,
        songName: "Midnight Forest",
        artist: "Syouki_Takahashi",
        song: "calmMusicOne.mp3",
        imgSrc:"https://cdn.pixabay.com/audio/2024/01/05/01-14-43-61_200x200.jpg",
        duration:"3:20"

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
        songName: "Once In Paris",
        artist: "Daddy_s_Music",
        song: "calmMusicOne.mp3",
        imgSrc:"https://cdn.pixabay.com/audio/2024/02/04/10-16-16-251_200x200.png",
        duration:"3:20"
      },
      {
        id: 2,
        favourite: false,
        songName: "Perfect Beauty",
        artist: "Pumpupthemind",
        song: "calmMusicTwo.mp3",
        imgSrc:"https://cdn.pixabay.com/audio/2024/02/14/22-35-32-207_200x200.png",
        duration:"3:20"

      },
      {
        id: 3,
        favourite: false,
        songName: "Love's Serenade (Valentine’s day)",
        artist: "Top-Flow",
        song: "calmMusicThree.mp3",
        imgSrc:"https://cdn.pixabay.com/audio/2024/01/26/13-50-53-618_200x200.jpg",
        duration:"3:20"

      },
      {
        id: 4,
        favourite: false,
        songName: "Separation",
        artist: "William_King",
        song: "calmMusicFour.mp3",
        imgSrc:"https://cdn.pixabay.com/audio/2024/01/10/15-04-26-897_200x200.jpg",
        duration:"3:20"

      },
      {
        id: 5,
        favourite: false,
        songName: "Midnight Forest",
        artist: "Syouki_Takahashi",
        song: "calmMusicOne.mp3",
        imgSrc:"https://cdn.pixabay.com/audio/2024/01/05/01-14-43-61_200x200.jpg",
        duration:"3:20"

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
        songName: "Once In Paris",
        artist: "Daddy_s_Music",
        song: "calmMusicOne.mp3",
        imgSrc:"https://cdn.pixabay.com/audio/2024/02/04/10-16-16-251_200x200.png",
        duration:"3:20"
      },
      {
        id: 2,
        favourite: false,
        songName: "Perfect Beauty",
        artist: "Pumpupthemind",
        song: "calmMusicTwo.mp3",
        imgSrc:"https://cdn.pixabay.com/audio/2024/02/14/22-35-32-207_200x200.png",
        duration:"3:20"

      },
      {
        id: 3,
        favourite: false,
        songName: "Love's Serenade (Valentine’s day)",
        artist: "Top-Flow",
        song: "calmMusicThree.mp3",
        imgSrc:"https://cdn.pixabay.com/audio/2024/01/26/13-50-53-618_200x200.jpg",
        duration:"3:20"

      },
      {
        id: 4,
        favourite: false,
        songName: "Separation",
        artist: "William_King",
        song: "calmMusicFour.mp3",
        imgSrc:"https://cdn.pixabay.com/audio/2024/01/10/15-04-26-897_200x200.jpg",
        duration:"3:20"

      },
      {
        id: 5,
        favourite: false,
        songName: "Midnight Forest",
        artist: "Syouki_Takahashi",
        song: "calmMusicOne.mp3",
        imgSrc:"https://cdn.pixabay.com/audio/2024/01/05/01-14-43-61_200x200.jpg",
        duration:"3:20"

      },
    ],
  },
  {
    id: "four",
    img: "musicFour.jpg",
    name: "Depression Relief Music",
    calmSongs: [
      {
        id: 1,
        favourite: false,
        songName: "Once In Paris",
        artist: "Daddy_s_Music",
        song: "calmMusicOne.mp3",
        imgSrc:"https://cdn.pixabay.com/audio/2024/02/04/10-16-16-251_200x200.png",
        duration:"3:20"
      },
      {
        id: 2,
        favourite: false,
        songName: "Perfect Beauty",
        artist: "Pumpupthemind",
        song: "calmMusicTwo.mp3",
        imgSrc:"https://cdn.pixabay.com/audio/2024/02/14/22-35-32-207_200x200.png",
        duration:"3:20"

      },
      {
        id: 3,
        favourite: false,
        songName: "Love's Serenade (Valentine’s day)",
        artist: "Top-Flow",
        song: "calmMusicThree.mp3",
        imgSrc:"https://cdn.pixabay.com/audio/2024/01/26/13-50-53-618_200x200.jpg",
        duration:"3:20"

      },
      {
        id: 4,
        favourite: false,
        songName: "Separation",
        artist: "William_King",
        song: "calmMusicFour.mp3",
        imgSrc:"https://cdn.pixabay.com/audio/2024/01/10/15-04-26-897_200x200.jpg",
        duration:"3:20"

      },
      {
        id: 5,
        favourite: false,
        songName: "Midnight Forest",
        artist: "Syouki_Takahashi",
        song: "calmMusicOne.mp3",
        imgSrc:"https://cdn.pixabay.com/audio/2024/01/05/01-14-43-61_200x200.jpg",
        duration:"3:20"

      },
    ],
  },
  {
    id: "five",
    img: "musicFive.jpg",
    name: "Anxiety Relief Music",
    calmSongs: [
      {
        id: 1,
        favourite: false,
        songName: "Once In Paris",
        artist: "Daddy_s_Music",
        song: "calmMusicOne.mp3",
        imgSrc:"https://cdn.pixabay.com/audio/2024/02/04/10-16-16-251_200x200.png",
        duration:"3:20"
      },
      {
        id: 2,
        favourite: false,
        songName: "Perfect Beauty",
        artist: "Pumpupthemind",
        song: "calmMusicTwo.mp3",
        imgSrc:"https://cdn.pixabay.com/audio/2024/02/14/22-35-32-207_200x200.png",
        duration:"3:20"

      },
      {
        id: 3,
        favourite: false,
        songName: "Love's Serenade (Valentine’s day)",
        artist: "Top-Flow",
        song: "calmMusicThree.mp3",
        imgSrc:"https://cdn.pixabay.com/audio/2024/01/26/13-50-53-618_200x200.jpg",
        duration:"3:20"

      },
      {
        id: 4,
        favourite: false,
        songName: "Separation",
        artist: "William_King",
        song: "calmMusicFour.mp3",
        imgSrc:"https://cdn.pixabay.com/audio/2024/01/10/15-04-26-897_200x200.jpg",
        duration:"3:20"

      },
      {
        id: 5,
        favourite: false,
        songName: "Midnight Forest",
        artist: "Syouki_Takahashi",
        song: "calmMusicOne.mp3",
        imgSrc:"https://cdn.pixabay.com/audio/2024/01/05/01-14-43-61_200x200.jpg",
        duration:"3:20"

      },
    ],
  },
  {
    id: "six",
    img: "musicSix.jpeg",
    name: "Anger Relief Music",
    calmSongs: [
      {
        id: 1,
        favourite: false,
        songName: "Once In Paris",
        artist: "Daddy_s_Music",
        song: "calmMusicOne.mp3",
        imgSrc:"https://cdn.pixabay.com/audio/2024/02/04/10-16-16-251_200x200.png",
        duration:"3:20"
      },
      {
        id: 2,
        favourite: false,
        songName: "Perfect Beauty",
        artist: "Pumpupthemind",
        song: "calmMusicTwo.mp3",
        imgSrc:"https://cdn.pixabay.com/audio/2024/02/14/22-35-32-207_200x200.png",
        duration:"3:20"

      },
      {
        id: 3,
        favourite: false,
        songName: "Love's Serenade (Valentine’s day)",
        artist: "Top-Flow",
        song: "calmMusicThree.mp3",
        imgSrc:"https://cdn.pixabay.com/audio/2024/01/26/13-50-53-618_200x200.jpg",
        duration:"3:20"

      },
      {
        id: 4,
        favourite: false,
        songName: "Separation",
        artist: "William_King",
        song: "calmMusicFour.mp3",
        imgSrc:"https://cdn.pixabay.com/audio/2024/01/10/15-04-26-897_200x200.jpg",
        duration:"3:20"

      },
      {
        id: 5,
        favourite: false,
        songName: "Midnight Forest",
        artist: "Syouki_Takahashi",
        song: "calmMusicOne.mp3",
        imgSrc:"https://cdn.pixabay.com/audio/2024/01/05/01-14-43-61_200x200.jpg",
        duration:"3:20"

      },
    ],
  },
];
