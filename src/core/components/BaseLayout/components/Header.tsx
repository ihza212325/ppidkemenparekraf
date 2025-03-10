import { ChevronDown, Home, Search } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate, useNavigation } from "react-router";
function Header() {
  const navigation = useNavigate();

  let menu = [
    {
      name: "Beranda",
    },
    {
      name: "Profil",
      submenu: [
        {
          name: "PPID KEMENTERIAN PARIWISATA",
          navigation: "/kategori/PROFIL-SINGKAT",
        },
        {
          name: "TUGAS DAN FUNGSI PPID",
          navigation: "/kategori/TUGAS-DAN-FUNGSI",
        },
        {
          name: "STRUKTUR ORGANISASI PPID",
          navigation: "/kategori/STRUKTUR-PPID",
        },
        {
          name: "VISI DAN MISI PPID",
          navigation: "/kategori/VISI-DAN-MISI-PPID",
        },
      ],
    },
    {
      name: "Regulasi",
      submenu: [
        {
          name: "UU, PP DAN PERKI KETERBUKAAN INFORMASI PUBLIK",
          navigation: "/kategori/uu-pp-dan-perki-keterbukaan-informasi-publik",
        },
        {
          name: "PERATURAN KETERBUKAAN INFORMASI PUBLIK",
        },
        {
          name: "RANCANGAN PERATURAN KETERBUKAAN INFORMASI PUBLIK",
        },
        {
          name: "MAKLUMAT PELAYANAN PUBLIK DAN PELAYANAN INFORMASI PUBLIK",
        },
        {
          name: "PERMENPAREKRAF STANDAR PELAYANAN PUBLIK",
        },
        {
          name: "SK KELOMPOK KERJA PPID",
        },
        {
          name: "INFOGRAFIS SOP PELAYANAN INFORMASI PUBLIK",
        },
      ],
    },
    {
      name: "Laporan",
      submenu: [
        {
          name: "LAPORAN BULANAN PELAKSANAAN PELAYANAN",
          navigation: "/kategori/laporan-bulanan-layanan-informasi",
        },
        {
          name: "LAPORAN TAHUNAN PELAYANAN INFORMASI PUBLIK",
        },
        {
          name: "LAPORAN BULANAN SURVEY PELAYANAN INFORMASI DAN PENGADUAN",
        },
        {
          name: "LAPORAN TAHUNAN SURVEY PELAYANAN INFORMASI DAN PENGADUAN",
        },
        {
          name: "LAPORAN BULANAN PENGELOLAAN PENGADUAN",
        },
      ],
    },
    {
      name: "DIP(Daftar Informasi Publik)",
      submenu: [
        {
          name: "RANGKUMAN DAFTAR INFORMASI PUBLIK",
          navigation: "/kategori/rangkuman",
        },
        {
          name: "INFORMASI SECARA BERKALA",
          navigation: "/kategori/informasi",
        },
        {
          name: "INFORMASI SERTA MERTA",
          navigation: "/kategori/informasi",
        },
        {
          name: "INFORMASI SETIAP SAAT",
          navigation: "/kategori/informasi",
        },
        {
          name: "INFORMASI YANG DIKECUALIKAN",
          navigation: "/kategori/informasi",
        },
      ],
    },
    {
      name: "INFORMASI PENGADAAN BARANG DAN JASA",
      submenu: [
        {
          name: "TAHAP PERENCANAAN",
          navigation: "/kategori/informasi",
        },
        {
          name: "TAHAP PEMILIHAN",
          navigation: "/kategori/informasi",
        },
        {
          name: "TAHAP PELAKSANAAN",
          navigation: "/kategori/informasi",
        },
      ],
    },
    {
      name: "RUMAH DIFABEL",
    },
  ];
  const [openMenu, setOpenMenu] = useState<number>(0);

  const handleMenuClick = (index: number) => {
    setOpenMenu(openMenu === index ? 0 : index);
  };
  const handleClickOutside = (event: any) => {
    if (!event.target.closest(".menu-item")) {
      setOpenMenu(0);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const CardMenu = () => {
    return menu.map((e, index) => {
      let hasSubmenu = e.submenu && e.submenu.length > 0;
      let hideArrow = index === menu.length - 1 || index === 0;
      return (
        <li key={index} className="relative menu-item">
          <div
            className="flex items-center gap-2 cursor-pointer text-gray-900 dark:text-white hover:text-yellow-600"
            onClick={() => hasSubmenu && handleMenuClick(index)}
          >
            {e.name === "Beranda" && <Home />}
            <p className="uppercase">{e.name}</p>
            {!hideArrow && <p className="">{">"}</p>}
          </div>
          {hasSubmenu && (
            <ul
              className={`absolute left-0 mt-8 w-80 bg-white shadow-lg rounded-md z-10  border-t-4 border-yellow-500  ${
                openMenu === index
                  ? "transition-all duration-1000 ease-in-out opacity-100 visible"
                  : "transition-all duration-1000 ease-in-out opacity-0 invisible"
              }`}
            >
              {e?.submenu &&
                e?.submenu.map((sub, subIndex) => (
                  <li
                    onClick={() => {
                      setOpenMenu(0);
                      if (sub?.navigation) {
                        navigation(sub?.navigation);
                      }
                    }}
                    key={subIndex}
                    className="px-4 py-2 cursor-pointer hover:text-yellow-600"
                  >
                    {sub.name}
                  </li>
                ))}
            </ul>
          )}
        </li>
      );
    });
  };
  return (
    <div className="sticky top-0 z-10">
      <nav className="bg-primary border-gray-200 dark:bg-gray-900 ">
        <div className="flex flex-wrap justify-between items-center  mx-11 p-4">
          <a
            href="https://flowbite.com"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://ppid.kemenparekraf.go.id/files/e3f0070ff9bd3c403c42afa22012656a.png"
              className="w-16"
              alt="Flowbite Logo"
            />
            <div className="flex flex-col gap-1">
              <span className=" text-md font-semibold whitespace-nowrap text-white">
                PPID PEJABAT PENGELOLA INFORMASI DAN DOKUMENTASI
              </span>
              <span className=" text-md font-semibold whitespace-nowrap text-white">
                KEMENTERIAN PARIWISATA REPUBLIK INDONESIA
              </span>
            </div>
          </a>
        </div>
      </nav>
      <nav className="bg-menuColor">
        <div className="px-52 py-4 mx-auto flex flex-row justify-between">
          <div className="flex items-center">
            <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
              <CardMenu />
            </ul>
          </div>
          <div className="flex flex-row gap-8 justify-center items-center">
            <div>
              <Search size={18} />
            </div>
            <div className="px-8 py-1 border border-black rounded-lg bg-white">
              <p>Login</p>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
