const initialState = {
  id: 412,
  name: "Queen",
  picture_small:
    "https://e-cdns-images.dzcdn.net/images/artist/0b17b99897d17ceb7027ed57cdbb7044/56x56-000000-80-0-0.jpg",
  tracklist:
    "https://striveschool-api.herokuapp.com/api/deezer/artist/412/top?limit=50"
};

export default function playBarSongReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_PLAYBAR_SONG":
      return action.payload;
    default:
      return state;
  }
}
