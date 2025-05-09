const albums = [
  {
    title: "The Psychedelic Sounds of 13th Floor Elevators",
    artist: "13th Floor Elevators",
    year: 1967,
    genre: "Psychedelic Rock",
    cover: "https://ia903102.us.archive.org/BookReader/BookReaderImages.php?zip=/30/items/cd_the-psychedelic-sounds-of-the-13th-floor-e_13th-floor-elevators/cd_the-psychedelic-sounds-of-the-13th-floor-e_13th-floor-elevators_jp2.zip&file=cd_the-psychedelic-sounds-of-the-13th-floor-e_13th-floor-elevators_jp2/cd_the-psychedelic-sounds-of-the-13th-floor-e_13th-floor-elevators_0005.jp2&id=cd_the-psychedelic-sounds-of-the-13th-floor-e_13th-floor-elevators&scale=4&rotate=0",
    audio: "audio/YoureGonnaMissMe.mp3",
    notes: "Classic psychedelic album with an eye-catching swirling design."
  },
  {
    title: "If You Can Believe Your Eyes And Ears",
    artist: "The Mamas and the Papas",
    year: 1966,
    genre: "Folk Rock",
    cover: "https://i.imgur.com/009OW5m.png",
    audio: "audio/CaliforniaDreamin.mp3",
    notes: "Controversial cover due to the visible toilet in the frame."
  },
  {
    title: "Room on Fire",
    artist: "The Strokes",
    year: 2003,
    genre: "Garage Rock",
    cover: "https://i.imgur.com/NwITzLb.png",
    audio: "audio/roomonfire.mp3",
    notes: "Futuristic and casino-inspired artwork."
  },
  {
    title: "One Size Fits All",
    artist: "Frank Zappa and the Mothers of Invention",
    year: 1975,
    genre: "Progressive Rock",
    cover: "https://i.imgur.com/NrF3gob.png",
    audio: "audio/IncaRoads.mp3",
    notes: "Surreal cosmic sofa scene with space imagery."
  },
  {
    title: "Who’s Next",
    artist: "The Who",
    year: 1971,
    genre: "Rock",
    cover: "https://i.imgur.com/4s0PQAw.png",
    audio: "audio/BabaORiley.mp3",
    notes: "Famous cover featuring the band against a monolithic structure."
  },
  {
    title: "Some Girls",
    artist: "The Rolling Stones",
    year: 1978,
    genre: "Rock",
    cover: "https://i.imgur.com/m6WikQo.png",
    audio: "audio/BeastOfBurden.mp3",
    notes: "Pop-art inspired, parodying beauty ads."
  },
  {
    title: "Hendrix Songbook",
    artist: "The Rubber Band",
    year: "Unknown",
    genre: "Rock",
    cover: "https://i.imgur.com/iR3pYFY.png",
    audio: "",
    notes: "Striking monochrome cosmic theme featuring Jimi Hendrix."
  },
  {
    title: "Goo",
    artist: "Sonic Youth",
    year: 1990,
    genre: "Alternative Rock",
    cover: "https://i.imgur.com/IP1CwI8.png",
    audio: "audio/SonicYouth.mp3",
    notes: "Iconic black-and-white comic-style artwork."
  },
  {
    title: "My Generation",
    artist: "The Who",
    year: 1965,
    genre: "Rock",
    cover: "https://i.imgur.com/ueffewn.png",
    audio: "audio/MyGeneration.mp3",
    notes: "Classic mod-era album featuring the band near Big Ben."
  },
  {
    title: "Wish You Were Here",
    artist: "Pink Floyd",
    year: 1975,
    genre: "Progressive Rock",
    cover: "https://i.imgur.com/xbggRdU.png",
    audio: "",
    notes: "A surreal image of a handshake with a man on fire."
  },
  {
    title: "The Dark Side of the Moon",
    artist: "Pink Floyd",
    year: 1973,
    genre: "Progressive Rock",
    cover: "https://i.imgur.com/wdvSCGp.png",
    audio: "audio/darksideofthemoon.mp3",
    notes: "Minimalist prism cover—one of the most famous album designs."
  },
  {
    title: "Boys Don't Cry",
    artist: "The Cure",
    year: 1980,
    genre: "Post-Punk",
    cover: "https://i.imgur.com/KVj6dod.png",
    audio: "audio/BoysDontCry.mp3",
    notes: "Dreamlike desert imagery with vibrant colors."
  },
  {
    title: "Revolver (2018 Stereo Remix)",
    artist: "The Beatles",
    year: 1966,
    genre: "Rock",
    cover: "https://i.imgur.com/wnopoyV.png",
    audio: "audio/Taxman.mp3",
    notes: "Remixed version of Taxman, sharp and satirical"
  },
  {
    title: "Disraeli Gears",
    artist: "Cream",
    year: 1967,
    genre: "Psychedelic Rock",
    cover: "https://i.imgur.com/78tytSR.png",
    audio: "audio/SunshineOfYourLove.mp3",
    notes: "Famous for its riff and blues-psych fusion"
  }
,
  {
    title: "Diamond Dogs",
    artist: "David Bowie",
    year: 1974,
    genre: "Glam Rock",
    cover: "https://i.imgur.com/Pnid4XT.png",
    audio: "audio/diamonddogs.mp3",
    notes: "Defiant glam anthem with raw guitar"
  },
  {
    title: "Saturday Night Fever",
    artist: "Bee Gees",
    year: 1977,
    genre: "Disco",
    cover: "https://i.imgur.com/f9wSTzu.png",
    audio: "audio/beegees.mp3",
    notes: "Falsetto-powered disco survival classic"
  },
  {
    title: "Led Zeppelin",
    artist: "Led Zeppelin",
    year: 1969,
    genre: "Hard Rock",
    cover: "https://i.imgur.com/peYUVfG.png",
    audio: "audio/StairwaytoHeaven.mp3",
    notes: "The Zeppelin explosion cover symbolizes the band's explosive debut."
  },
  {
    title: "Axis: Bold as Love",
    artist: "The Jimi Hendrix Experience",
    year: 1967,
    genre: "Psychedelic Rock",
    cover: "https://i.imgur.com/AYyGP10.png",
    audio: "audio/Axisboldaslove.mp3",
    notes: "Hindu mythology-inspired album cover, though Hendrix was not involved in its design."
  },
  {
    title: "Rumours",
    artist: "Fleetwood Mac",
    year: 1977,
    genre: "Rock",
    cover: "https://i.imgur.com/7BByUM2.png",
    audio: "audio/rumors.mp3",
    notes: "A deeply emotional album shaped by the band's internal relationships and struggles."
  },
  {
    title: "Hotel California",
    artist: "Eagles",
    year: 1976,
    genre: "Rock",
    cover: "https://i.imgur.com/lNqbFIb.png",
    audio: "audio/HotelCalifornia.mp3",
    notes: "Mysterious and atmospheric cover featuring the Beverly Hills Hotel."
  },
  {
    title: "The Doors",
    artist: "The Doors",
    year: 1967,
    genre: "Psychedelic Rock",
    cover: "https://i.imgur.com/YQvGjJc.png",
    audio: "audio/BreakOnThrough.mp3",
    notes: "Dark and moody debut album cover, featuring Jim Morrison in the foreground."
  },
  {
    title: "Physical Graffiti",
    artist: "Led Zeppelin",
    year: 1975,
    genre: "Rock",
    cover: "https://i.imgur.com/kfnRXFu.png",
    audio: "audio/PhysicalGraffiti.mp3",
    notes: "The intricate building design lets you slide images behind the windows."
  },
  {
    title: "Business as Usual",
    artist: "Men at Work",
    year: 1982,
    genre: "New Wave / Rock",
    cover: "https://i.imgur.com/NzJ7JFi.png",
    audio: "audio/menatwork.mp3",
    notes: "Featuring the famous telephone cord, symbolizing corporate monotony."
  },
  {
    title: "Instant Replay",
    artist: "The Monkees",
    year: 1969,
    genre: "Pop Rock",
    cover: "https://i.imgur.com/FxhUK8k.png",
    audio: "audio/monkees.mp3",
    notes: "A nostalgic and experimental album cover for the Monkees' later years."
  },
  {
    title: "Nevermind",
    artist: "Nirvana",
    year: 1991,
    genre: "Grunge",
    cover: "https://i.imgur.com/uFgeBGX.png",
    audio: "audio/Nevermind.mp3",
    notes: "The iconic underwater baby chasing a dollar—commentary on capitalism."
  },
  {
    title: "Load",
    artist: "Metallica",
    year: 1996,
    genre: "Heavy Metal",
    cover: "https://i.imgur.com/uFgeBGX.png",
    audio: "audio/load.mp3",
    notes: "Cover art is a mix of bovine blood and semen, shot between glass plates."
  },
  {
    title: "Space Oddity",
    artist: "David Bowie",
    year: 1969,
    genre: "Glam Rock",
    cover: "https://i.imgur.com/UOmDeKY.png",
    audio: "audio/SpaceOddity.mp3",
    notes: "A trippy, almost hypnotic polka-dot portrait by Victor Vasarely."
  },
  {
    title: "Speaking in Tongues",
    artist: "Talking Heads",
    year: 1983,
    genre: "New Wave",
    cover: "https://i.imgur.com/Q4qCsHh.png",
    audio: "",
    notes: "Robert Rauschenberg’s transparent LP design, a visual masterpiece."
  },
  {
    title: "Out of the Blue",
    artist: "Electric Light Orchestra (ELO)",
    year: 1977,
    genre: "Progressive Rock",
    cover: "https://i.imgur.com/EHFNR3K.png",
    audio: "audio/elo.mp3",
    notes: "Features a spaceship-inspired cover design, resembling a jukebox."
  },
  {
    title: "Jazz",
    artist: "Queen",
    year: 1978,
    genre: "Rock",
    cover: "https://i.imgur.com/AF0OZV8.png",
    audio: "audio/jazz.mp3",
    notes: "Came with a controversial poster of a naked bicycle race."
  },
  {
    title: "The Stranger",
    artist: "Billy Joel",
    year: 1977,
    genre: "Rock",
    cover: "https://ia800200.us.archive.org/BookReader/BookReaderImages.php?zip=/19/items/cd_the-stranger_billy-joel_0/cd_the-stranger_billy-joel_0_jp2.zip&file=cd_the-stranger_billy-joel_0_jp2/cd_the-stranger_billy-joel_0_0000.jp2&id=cd_the-stranger_billy-joel_0&scale=4&rotate=0",
    audio: "audio/thestranger.mp3",
    notes: "A masked, introspective cover reflecting themes of identity."
  },
  {
    title: "You Really Got Me",
    artist: "The Kinks",
    year: 1964,
    genre: "Garage Rock / Proto-Metal",
    cover: "https://i.imgur.com/w0QtUPb.png",
    audio: "audio/YouReallyGotMe.mp3",
    notes: "Raw, rebellious, and riff-heavy — this is the distortion-laced track that lit the fuse on hard rock."
  },
  {
    title: "Autoamerican",
    artist: "Blondie",
    year: 1980,
    genre: "New Wave / Rock",
    cover: "https://i.imgur.com/kndmpRz.png",
    audio: "audio/Blondie.mp3",
    notes: "“Call Me” is Blondie at their peak — fierce, glamorous, and blending rock swagger with synth style."
  }
];

window.addEventListener('DOMContentLoaded', () => {
  const shelf = document.getElementById('shelf');
  const tooltip = document.getElementById('tooltip');

  // Unlock audio context on first user click
  document.body.addEventListener('click', () => {
    if (typeof AudioContext !== 'undefined') {
      const context = new AudioContext();
      const buffer = context.createBuffer(1, 1, 22050);
      const source = context.createBufferSource();
      source.buffer = buffer;
      source.connect(context.destination);
      source.start(0);
    }
  });

  albums.forEach(album => {
    const spine = document.createElement('div');
    spine.className = 'spine';

    const audio = document.createElement('audio');
    audio.src = album.audio;
    audio.preload = 'auto';
    audio.style.display = 'none';
    document.body.appendChild(audio);

    spine.addEventListener('mouseenter', e => {
      tooltip.innerHTML = `
        <img src="${album.cover}" alt="${album.title} cover" style="pointer-events: none;">
        <div><strong>${album.title}</strong><br><em>${album.artist}</em> (${album.year})<br><strong>Genre:</strong> ${album.genre}<br><strong>Notes:</strong> ${album.notes}</div>
      `;
      tooltip.style.display = 'block';
      tooltip.style.left = e.pageX + 'px';
      tooltip.style.top = (e.pageY - 160) + 'px';

      audio.pause();
      audio.currentTime = 0;
      setTimeout(() => {
        audio.play().catch(err => console.warn("Playback error:", err));
      }, 100);
    });

    spine.addEventListener('mousemove', e => {
      tooltip.style.left = e.pageX + 'px';
      tooltip.style.top = (e.pageY - 160) + 'px';
    });

    spine.addEventListener('mouseleave', () => {
      tooltip.style.display = 'none';
      audio.pause();
      audio.currentTime = 0;
    });

    shelf.appendChild(spine);
  });
});
