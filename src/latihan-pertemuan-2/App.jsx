import "./Custom.css";

//github
function Foto() {
  return (
    <div className="foto-container">
      <img src="/img/foto.jpeg" alt="Foto Profil" className="foto" />
    </div>
  );
}

// CHILD COMPONENT 1
function Nama() {
  return (
    <p className="item">
      <b>Nama:</b> Riswana Siregar
    </p>
  );
}

// CHILD COMPONENT 2
function NIM() {
  return (
    <p className="item">
      <b>NIM:</b> 2457305112
    </p>
  );
}

// CHILD COMPONENT 3
function Prodi() {
  return (
    <p className="item">
      <b>Program Studi:</b> Sistem Informasi
    </p>
  );
}

// CHILD COMPONENT 4
function Universitas() {
  return (
    <p className="item">
      <b>Universitas:</b> Politeknik Caltex Riau
    </p>
  );
}

// CHILD COMPONENT 5
function Email() {
  return (
    <p className="item">
      <b>Email:</b> riswana24si@gmail.com
    </p>
  );
}

// CHILD COMPONENT 6
function Hobi() {
  return (
    <p className="item">
      <b>Hobi:</b> Membaca Novel & Coding
    </p>
  );
}

// PARENT COMPONENT
function BiodataDiri() {
  return (
    <div className="card">
      <Foto />

      <h2 className="title">Biodata Diri </h2>

      <Nama />
      <NIM />
      <Prodi />
      <Universitas />
      <Email />
      <Hobi />

      <div className="footer">
        Riswana Siregar | Politeknik Caltex Riau
      </div>
    </div>
  );
}

// MAIN COMPONENT
function App() {
  return <BiodataDiri />;
}

export default App;
