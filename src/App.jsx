import { useState } from "react";
import "./App.css";

const songs = [
  {
    title: "So High School",
    lyric: "And, boy, you got her",
    theme: {
      bg: ["#2d2d2d", "#5e5e5e"],
      card: "#1b1b1b",
      text: "#999999",
      font: "'Schoolbell', cursive",
      decoration: "hearts"
    }
  },
  {
    title: "Red",
    lyric: "And that's why she's spinning 'round my head.",
    theme: {
      bg: ["#991e26", "#ff7070"],
      card: "#7f0000",
      text: "#ee9191",
      font: "'Iceberg', sans-serif",
      decoration: "sparkles"
    }
  },
  {
    title: "You are in Love",
    lyric: "You can hear it in a silence.",
    theme: {
      bg: ["#47b4e6", "#249bd2"],
      card: "#0e5576",
      text: "#eece92",
      font: "'Felipa', serif",
      decoration: "sun"
    }
  },
  {
    title: "Paper Rings",
    lyric: "I hate accidents, except when we went from friends to this.",
    theme: {
      bg: ["#bc5697", "#a82a7a"],
      card: "#880759",
      text: "#f2adec",
      font: "'Dancing Script', serif",
      decoration: "sun"
    }
  }
  ,
  {
    title: "The Fate of Ophelia",
    lyric: "Cause Now YOU'RE MINE.",
    theme: {
      bg: ["#34795b", "#036038"],
      card: "#00502d",
      text: "#6ff5bb",
      font: "'Snowburst One', serif",
      decoration: "sun"
    }
  }
  ,
  {
    title: "Timeless",
    lyric: "You still would've been mine",
    theme: {
      bg: ["#94479c", "#9a1fa8"],
      card: "#510359",
      text: "#c588cb",
      font: "'Mrs Saint Delafield', serif",
      decoration: "sun"
    }
  }
  ,
  {
    title: "London Boy",
    lyric: "They say home is where the heart is.",
    theme: {
      bg: ["#b6864f", "#ae7e0e"],
      card: "#5a3102",
      text: "#eaba82",
      font: "'Uncial Antiqua', serif",
      decoration: "sun"
    }
  },
  {
    title: "Daylight",
    lyric: "I don't wanna look at anything else now that I saw you.",
    theme: {
      bg: ["#cd7795", "#d44376"],
      card: "#7f163b",
      text: "#ec95b4",
      font: "'Mansalva', serif",
      decoration: "sun"
    }
  },
  {
    title: "Everything has changed",
    lyric: "All my days, I'll know your face.",
    theme: {
      bg: ["#705435", "#6e4f07"],
      card: "#37220b",
      text: "#a97d4b",
      font: "'Cantarell', serif",
      decoration: "sun"
    }
  },
  {
    title: "cardigan",
    lyric: "When you are young, they assume you know nothing.",
    theme: {
     bg: ["#2d2d2d", "#5e5e5e"],
      card: "#1b1b1b",
      text: "#999999",
      font: "'Tangerine', serif",
      decoration: "sun"
    }
  },
  {
    title: "Style",
    lyric: "Just Take Me Home.",
    theme: {
      bg: ["#65b7f6", "#3392db"],
      card: "#013055",
      text: "#8bc6f3",
      font: "'Audiowide', serif",
      decoration: "sun"
    }
  },
  {
    title: "Lover",
    lyric: "Can we always be this close forever and ever.",
    theme: {
       bg: ["#cd7795", "#d44376"],
      card: "#7f163b",
      text: "#ec95b4",
      font: "'Send Flowers', serif",
      decoration: "sun"
    }
  },
  {
    title: "Enchanted",
    lyric: "Wishing you were at my door.",
    theme: {
      bg: ["#da5fe3", "#d72de3"],
      card: "#5d0464",
      text: "#ef8af7",
      font: "'Lavishly Yours', serif",
      decoration: "sun"
    }
  },
  {
    title: "Opalite",
    lyric: "Never met no one like you before.",
    theme: {
      bg: ["#2d6f43", "#1c7e3d"],
      card: "#20402b",
      text: "#64a77a",
      font: "'Tourney', serif",
      decoration: "sun"
    }
  },
  {
    title: "I knew it, I knew you",
    lyric: "Standing there in the light of the window wearing that same smile.",
    theme: {
      bg: ["#f6d365", "#fda085"],
      card: "#fff9eb",
      text: "#8a5a00",
      font: "'Rye', serif",
      decoration: "sun"
    }
  }
];

export default function App() {
  const [index, setIndex] = useState(0);
  const [flip, setFlip] = useState(false);

  const current = songs[index];

  const changePage = (direction) => {
    setFlip(true);

    setTimeout(() => {
      setIndex((prev) => {
        if (direction === "next")
          return (prev + 1) % songs.length;

        return (prev - 1 + songs.length) % songs.length;
      });

      setFlip(false);
    }, 500);
  };

  return (
    <div
      className="app"
      style={{
        background: `linear-gradient(
      135deg,
      ${current.theme.bg[0]},
      ${current.theme.bg[1]}
    )`,
        fontFamily: current.theme.font
      }}
    >
      <div className={`book ${flip ? "flip" : ""}`}>
        <div className="card" style={{
          background: current.theme.card,
          color: current.theme.text
        }}>
          <h1>"{current.lyric}"</h1>
          <p>"{current.title}"</p>
        </div>
      </div>
      <div className="controls">
        <button onClick={() => changePage("prev")} style={{
          background: current.theme.card,
          color: "white"
        }}>
          ← Previous
        </button>

        <button onClick={() => changePage("next")} style={{
          background: current.theme.card,
          color: "white"
        }}>
          Next →
        </button>
      </div>
    </div >
  );
}