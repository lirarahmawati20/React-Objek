import "./App.css";

const data = [
  {
    id: 1,
    nama: "Suharto",
    umur: 20,
    ttl: "Bandung, 25 Mei 2024",
    alamat: "Ci Amis",
    staatus: "Pelajar",
    photo: "/Bapak-Portrait.jpg",
    button: ["tidur", "makan", "mandi"],
  },
  {
    id: 2,
    nama: "Subyatomo",
    umur: 78,
    ttl: "Bandung, 28 Agustus 2024",
    alamat: "Ci Legok",
    staatus: "Jomlo",
    photo: "/th (1).jpg",
    button: ["tidur", "makan", "mandi"],
  },
  {
    id: 3,
    nama: "Susulung",
    umur: 78,
    ttl: "Bandung, 02 Mei 1678",
    alamat: "Ci Jeruk",
    staatus: "Sudah Menikah",
    photo: "unnamed.jpg",
    button: ["tidur", "makan", "mandi"],
  },
  {
    id: 4,
    nama: "Ceu Edoh",
    umur: 100,
    ttl: "Papua, 25 Mei 1567",
    alamat: "Papua Nugini",
    staatus: "PNS",
    photo: "/68f9e352433f623f7b9aa2d2572910a6.jpg",
    button: ["tidur", "makan", "mandi"],
  },
  {
    id: 5,
    nama: "Ceu Imin",
    umur: 50,
    ttl: "Bandung, 20 Agustus 2024",
    alamat: "Malaysia",
    staatus: "IRT",
    photo: "/th (2).jpg",
    button: ["tidur", "makan", "mandi"],
  },
  {
    id: 6,
    nama: "Ceu Peot",
    umur: 50,
    ttl: "Bandung, 26 November 2024",
    alamat: "Surabaya",
    staatus: "Penggaguran",
    photo: "/137897-1000xauto-nenek-emiko-chinami-mori.jpg",
    button: ["tidur", "makan", "mandi"],
  },
];

const App = () => {
  return (
    <div className="App">
      <div className="warga">Data Warga Negara Indonesia</div>
      <div className="biodata">
        {data.map((buah) => (
          <div key={buah.id} className="biodata-item">
            <img src={buah.photo} alt={buah.nama} />
            <p>
              <strong>Nama:</strong> {buah.nama}
            </p>
            <p>
              <strong>Umur:</strong> {buah.umur}
            </p>
            <p>
              <strong>TTL:</strong> {buah.ttl}
            </p>
            <p>
              <strong>Status:</strong> {buah.staatus}
            </p>
            <div>
            
              <strong className="hobby">Hobby:</strong>
          
              {buah.button.map((btn, index) => (
                <button key={index}>{btn}</button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
