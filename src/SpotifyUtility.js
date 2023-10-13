import React from 'react';

const mockTracks =  [
    {
    "album": {
      "album_type": "single",
      "total_tracks": 1,
      "external_urls": {
        "spotify": "https://open.spotify.com/album/24eYROABMYMnfZtg51sLMY"
      },
      "href": "https://api.spotify.com/v1/albums/24eYROABMYMnfZtg51sLMY",
      "id": "24eYROABMYMnfZtg51sLMY",
      "images": [
        {
          "url": "https://i.scdn.co/image/ab67616d0000b2738b2067f03055b2f56bea97a1",
          "height": 640,
          "width": 640
        },
        {
          "url": "https://i.scdn.co/image/ab67616d00001e028b2067f03055b2f56bea97a1",
          "height": 300,
          "width": 300
        },
        {
          "url": "https://i.scdn.co/image/ab67616d000048518b2067f03055b2f56bea97a1",
          "height": 64,
          "width": 64
        }
      ],
      "name": "In My Head",
      "release_date": "2022-09-23",
      "release_date_precision": "day",
      "type": "album",
      "uri": "spotify:album:24eYROABMYMnfZtg51sLMY",
      "artists": [
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/1qBnjQHcARZz76ctw9kleB"
          },
          "href": "https://api.spotify.com/v1/artists/1qBnjQHcARZz76ctw9kleB",
          "id": "1qBnjQHcARZz76ctw9kleB",
          "name": "Jacob Ryan Smith",
          "type": "artist",
          "uri": "spotify:artist:1qBnjQHcARZz76ctw9kleB"
        },
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/5YIi4ZZ1Bo6eMqEdudlzG4"
          },
          "href": "https://api.spotify.com/v1/artists/5YIi4ZZ1Bo6eMqEdudlzG4",
          "id": "5YIi4ZZ1Bo6eMqEdudlzG4",
          "name": "Daniel Mertzlufft",
          "type": "artist",
          "uri": "spotify:artist:5YIi4ZZ1Bo6eMqEdudlzG4"
        }
      ],
      "is_playable": true
    },
    "artists": [
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/1qBnjQHcARZz76ctw9kleB"
        },
        "href": "https://api.spotify.com/v1/artists/1qBnjQHcARZz76ctw9kleB",
        "id": "1qBnjQHcARZz76ctw9kleB",
        "name": "Jacob Ryan Smith",
        "type": "artist",
        "uri": "spotify:artist:1qBnjQHcARZz76ctw9kleB"
      },
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/5YIi4ZZ1Bo6eMqEdudlzG4"
        },
        "href": "https://api.spotify.com/v1/artists/5YIi4ZZ1Bo6eMqEdudlzG4",
        "id": "5YIi4ZZ1Bo6eMqEdudlzG4",
        "name": "Daniel Mertzlufft",
        "type": "artist",
        "uri": "spotify:artist:5YIi4ZZ1Bo6eMqEdudlzG4"
      },
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/5ulESxWZSX8cw4PI6xgdDG"
        },
        "href": "https://api.spotify.com/v1/artists/5ulESxWZSX8cw4PI6xgdDG",
        "id": "5ulESxWZSX8cw4PI6xgdDG",
        "name": "Andrew Barth Feldman",
        "type": "artist",
        "uri": "spotify:artist:5ulESxWZSX8cw4PI6xgdDG"
      },
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/6fu9TecMw6TInkRRyXObeu"
        },
        "href": "https://api.spotify.com/v1/artists/6fu9TecMw6TInkRRyXObeu",
        "id": "6fu9TecMw6TInkRRyXObeu",
        "name": "Joe Serafini",
        "type": "artist",
        "uri": "spotify:artist:6fu9TecMw6TInkRRyXObeu"
      }
    ],
    "disc_number": 1,
    "duration_ms": 200175,
    "explicit": false,
    "external_ids": {
      "isrc": "QZNWX2255584"
    },
    "external_urls": {
      "spotify": "https://open.spotify.com/track/3ZsKEw8VpTn4WqV4vDoB3W"
    },
    "href": "https://api.spotify.com/v1/tracks/3ZsKEw8VpTn4WqV4vDoB3W",
    "id": "3ZsKEw8VpTn4WqV4vDoB3W",
    "is_playable": true,
    "name": "In My Head",
    "popularity": 44,
    "preview_url": "https://p.scdn.co/mp3-preview/204486b586718e027ed5805000cc51bcf707bf2f?cid=9d88f3c46f004f499e101b9b631dd77d",
    "track_number": 1,
    "type": "track",
    "uri": "spotify:track:3ZsKEw8VpTn4WqV4vDoB3W",
    "is_local": false
  },

  {
    "album": {
      "album_type": "single",
      "artists": [
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/6JVRYNneRsYNInT4TNr5vU"
          },
          "href": "https://api.spotify.com/v1/artists/6JVRYNneRsYNInT4TNr5vU",
          "id": "6JVRYNneRsYNInT4TNr5vU",
          "name": "Matt Wertz",
          "type": "artist",
          "uri": "spotify:artist:6JVRYNneRsYNInT4TNr5vU"
        }
      ],
      "external_urls": {
        "spotify": "https://open.spotify.com/album/6KA9lwr59rUbozIGETLR1a"
      },
      "href": "https://api.spotify.com/v1/albums/6KA9lwr59rUbozIGETLR1a",
      "id": "6KA9lwr59rUbozIGETLR1a",
      "images": [
        {
          "height": 640,
          "url": "https://i.scdn.co/image/ab67616d0000b273730cc7c42a8771d153e4951a",
          "width": 640
        },
        {
          "height": 300,
          "url": "https://i.scdn.co/image/ab67616d00001e02730cc7c42a8771d153e4951a",
          "width": 300
        },
        {
          "height": 64,
          "url": "https://i.scdn.co/image/ab67616d00004851730cc7c42a8771d153e4951a",
          "width": 64
        }
      ],
      "is_playable": true,
      "name": "Necessary",
      "release_date": "2023-01-20",
      "release_date_precision": "day",
      "total_tracks": 1,
      "type": "album",
      "uri": "spotify:album:6KA9lwr59rUbozIGETLR1a"
    },
    "artists": [
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/6JVRYNneRsYNInT4TNr5vU"
        },
        "href": "https://api.spotify.com/v1/artists/6JVRYNneRsYNInT4TNr5vU",
        "id": "6JVRYNneRsYNInT4TNr5vU",
        "name": "Matt Wertz",
        "type": "artist",
        "uri": "spotify:artist:6JVRYNneRsYNInT4TNr5vU"
      }
    ],
    "disc_number": 1,
    "duration_ms": 241658,
    "explicit": false,
    "external_ids": {
      "isrc": "TCAGS2383365"
    },
    "external_urls": {
      "spotify": "https://open.spotify.com/track/6ya5t4IUDVhMf4gKsFsWlS"
    },
    "href": "https://api.spotify.com/v1/tracks/6ya5t4IUDVhMf4gKsFsWlS",
    "id": "6ya5t4IUDVhMf4gKsFsWlS",
    "is_local": false,
    "is_playable": true,
    "name": "Necessary",
    "popularity": 20,
    "preview_url": "https://p.scdn.co/mp3-preview/bb1a1041eb042b1f6d93f11d8c4f857c0873a3d9?cid=9d88f3c46f004f499e101b9b631dd77d",
    "track_number": 1,
    "type": "track",
    "uri": "spotify:track:6ya5t4IUDVhMf4gKsFsWlS"
  }
]

export default mockTracks;