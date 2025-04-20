import { Route, Routes } from "react-router-dom";
import BaseLayout from "../components/BaseLayout/BaseLayout";
import ProfileSingkat from "../../Pages/Profile/ProfileSingkat";
import TugasDanFungsi from "../../Pages/Profile/TugasDanFungsi";
import VisiMisi from "../../Pages/Profile/VisiMisi";
import StrukturOrganisasi from "../../Pages/Profile/StrukturOrganisasi";
import Regulasi from "../../Pages/Regulasi/Regulasi";
import Laporan from "../../Pages/Laporan/Laporan";
import Rangkuman from "../../Pages/DIP/Rangkuman";
import Informasi from "../../Pages/DIP/Informasi";
import Beranda from "../../Pages/Beranda/Beranda";

function RoutesConfig() {
  return (
    <BaseLayout>
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/kategori/TUGAS-DAN-FUNGSI" element={<TugasDanFungsi />} />
        <Route
          path="/kategori/STRUKTUR-PPID"
          element={<StrukturOrganisasi />}
        />
        <Route path="/kategori/VISI-DAN-MISI-PPID" element={<VisiMisi />} />
        <Route
          path="/kategori/uu-pp-dan-perki-keterbukaan-informasi-publik"
          element={<Regulasi />}
        />
        <Route
          path="/kategori/laporan-bulanan-layanan-informasi"
          element={<Laporan />}
        />
        <Route path="/kategori/rangkuman" element={<Rangkuman />} />
        <Route path="/kategori/informasi" element={<Informasi />} />
      </Routes>
    </BaseLayout>
  );
}

export default RoutesConfig;
