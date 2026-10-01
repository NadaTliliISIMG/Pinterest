import "./App.css";
import Sidebar from "./components/Sidebar";
import SearchBar from "./components/SearchBar";
import PinGrid from "./components/PinGrid";

const pins = [
  { id: 1, image: "/images/2222.png", title: "Pin 1" },
  { id: 2, image: "/images/5555.jpg", title: "Pin 2" },
  { id: 3, image: "/images/11111.jpg", title: "Pin 3" },
  { id: 4, image: "/images/20000.jpg", title: "Pin 4" },
  { id: 5, image: "/images/30000.jpg", title: "Pin 5" },
  { id: 6, image: "/images/40000.jpg", title: "Pin 6" },
  { id: 7, image: "/images/50000.jpg", title: "Pin 7" },
  { id: 8, image: "/images/77777.jpg", title: "Pin 8" },
  { id: 9, image: "/images/444444.jpg", title: "Pin 9" },
  { id: 10, image: "/images/999999.jpg", title: "Pin 10" },
  { id: 11, image: "/images/3333333.jpg", title: "Pin 11" },
  { id: 12, image: "/images/8888888.jpg", title: "Pin 12" },
  { id: 13, image: "/images/666666666.jpg", title: "Pin 13" },
  { id: 14, image: "/images/bca0dcb44347e48231a0a2b2f82f62a6.jpg", title: "Pin 14" },
  { id: 15, image: "/images/a.jpg", title: "Pin 15" },
  { id: 16, image: "/images/b.jpg", title: "Pin 16" },
  { id: 17, image: "/images/c.jpg", title: "Pin 17" },
  { id: 18, image: "/images/d.jpg", title: "Pin 18" },
  { id: 19, image: "/images/e.png", title: "Pin 19" },
  { id: 20, image: "/images/f.png", title: "Pin 20" },
  { id: 21, image: "/images/g.png", title: "Pin 21" },
  { id: 22, image: "/images/h.png", title: "Pin 22" },
  { id: 23, image: "/images/i.png", title: "Pin 23" },
  { id: 24, image: "/images/j.png", title: "Pin 24" },
  { id: 25, image: "/images/k.png", title: "Pin 25" },
  { id: 26, image: "/images/l.png", title: "Pin 26" },
  { id: 27, image: "/images/m.jpg", title: "Pin 27" },
  { id: 28, image: "/images/n.jpg", title: "Pin 28" },
  { id: 29, image: "/images/o.jpg", title: "Pin 29" },
  { id: 30, image: "/images/p.jpg", title: "Pin 30" },
];

function App() {
  return (
    <div className="app">
      <Sidebar />

      <main className="content">
        <SearchBar placeholder="Rechercher" initial="N" />
        <div className="tabs">
          <span className="tab-active">Tout</span>
        </div>
        <PinGrid pins={pins} />
      </main>
    </div>
  );
}

export default App;