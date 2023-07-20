// Insert data to collections Songs
use songPlaylist

db.createCollection('songs');

db.songs.insertMany(
  [{
    "title": "song 1",
    "artist": [
      "artist 1",
      "artist 2"
    ],
    "album": "album 1"
  },
  {
    "title": "song 2",
    "artist": [
      "artist 2",
      "artist 3"
    ],
    "album": "album 2"
  },
  {
    "title": "song 3",
    "artist": [
      "artist 3",
      "artist 4"
    ],
    "album": "album 3"
  },
  {
    "title": "song 4",
    "artist": [
      "artist 4",
      "artist 5"
    ],
    "album": "album 4"
  },
  {
    "title": "song 5",
    "artist": [
      "artist 5",
      "artist 6"
    ],
    "album": "album 5"
  },
  {
    "title": "song 6",
    "artist": [
      "artist 6",
      "artist 7"
    ],
    "album": "album 6"
  },
  {
    "title": "song 7",
    "artist": [
      "artist 7",
      "artist 8"
    ],
    "album": "album 7"
  },
  {
    "title": "song 8",
    "artist": [
      "artist 8",
      "artist 9"
    ],
    "album": "album 8"
  },
  {
    "title": "song 9",
    "artist": [
      "artist 9",
      "artist 10"
    ],
    "album": "album 9"
  },
  {
    "title": "song 10",
    "artist": [
      "artist 10",
      "artist 11"
    ],
    "album": "album 10"
  }]
);



// Insert data to collections Artists

db.createCollection('artists');

db.artists.insertMany(
  [{
    "name": "name 1",
    "date": new Date("2010/01/01"),
    "genre": "genre 1"
  },
  {
    "name": "name 2",
    "date": new Date("2011/01/01"),
    "genre": "genre 2"
  },
  {
    "name": "name 3",
    "date": new Date("2012/01/01"),
    "genre": "genre 3"
  },
  {
    "name": "name 4",
    "date": new Date("2013/01/01"),
    "genre": "genre 4"
  },
  {
    "name": "name 5",
    "date": new Date("2014/01/01"),
    "genre": "genre 5"
  },
  {
    "name": "name 6",
    "date": new Date("2015/01/01"),
    "genre": "genre 6"
  },
  {
    "name": "name 7",
    "date": new Date("2018/01/01"),
    "genre": "genre 7"
  },
  {
    "name": "name 8",
    "date": new Date("2019/01/01"),
    "genre": "genre 8"
  },
  {
    "name": "name 9",
    "date": new Date("2020/01/01"),
    "genre": "genre 9"
  },
  {
    "name": "name 10",
    "date": new Date("2021/01/01"),
    "genre": "genre 10"
  }]
  );




// Insert data to collections Popular Songs

db.createCollection('popularSongs');

db.popularSongs.insertMany(
  [{
    "title": "songs 1",
    "songPlayed": 1000,
    "periodOfTime": "2000"
  },
  {
    "title": "songs 2",
    "songPlayed": 2000,
    "periodOfTime": "2001"
  },
  {
    "title": "songs 3",
    "songPlayed": 1000,
    "periodOfTime": "2002"
  },
  {
    "title": "songs 4",
    "songPlayed": 1000,
    "periodOfTime": "2003"
  },
  {
    "title": "songs 5",
    "songPlayed": 1000,
    "periodOfTime": "2004"
  },
  {
    "title": "songs 6",
    "songPlayed": 1000,
    "periodOfTime": "2006"
  },
  {
    "title": "songs 7",
    "songPlayed": 3000,
    "periodOfTime": "2008"
  },
  {
    "title": "songs 8",
    "songPlayed": 2000,
    "periodOfTime": "2012"
  },
  {
    "title": "songs 9",
    "songPlayed": 2000,
    "periodOfTime": "2013"
  },
  {
    "title": "songs 10",
    "songPlayed": 2000,
    "periodOfTime": "2015"
  }]
  );