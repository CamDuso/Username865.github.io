const radio = {
  stations: [
    (station1 = {
      name: "WKAF Hip-Hop",
      songs: [
        {
          title: "One Dance",
          artist: "Drake",
        },
        {
          title: "Good News",
          artist: "Mac Miller",
        },
        {
          title: "Gin and Juice",
          artist: "Snoop",
        },
        {
          title: "Best Friend",
          artist: "Fiddy",
        },
      ],
    }),
    (station2 = {
      name: "FACE MELTER 107",
      songs: [
        {
          title: "Battery",
          artist: "Metallica",
        },
        {
          title: "Madhouse",
          artist: "Anthrax",
        },
        {
          title: "Sweating Bullets",
          artist: "Megadeth",
        },
        {
          title: "Raining Blood",
          artist: "Slayer",
        },
      ],
    }),
  ],
  changeStation() {
    station = Math.floor(Math.random() * 2);
    song = Math.floor(Math.random() * 4);
    playing = radio.stations[station].songs[song];
    console.log("Now Playing " + playing.title + " by " + playing.artist);
  },
};
radio.changeStation();
