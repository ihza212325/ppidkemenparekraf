import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

function Footer() {
  let menu = [
    {
      name: "Menu",
      subMenu: [
        {
          name: "Tentang Kami",
        },
        {
          name: "Informasi Berkala",
        },
        {
          name: "Informasi Serta Merta",
        },
        {
          name: "Informasi Tersedia Setiap Saat",
        },
      ],
    },
    {
      name: "Layanan SPBE",
      subMenu: [
        {
          name: "JDIH",
        },
        {
          name: "LPSE",
        },
        {
          name: "WBS",
        },
        {
          name: "Lapor",
        },
        {
          name: "E-Performance",
        },
        {
          name: "E-Mail",
        },
        {
          name: "SBM Poltekpar",
        },
        {
          name: "SIPPN",
        },
      ],
    },
    {
      name: "Website Kemenpar lainnya",
      subMenu: [
        {
          name: "Badan Pelaksana Otorita Borobudur",
        },
        {
          name: "Badan Pelaksana Otorita Danau Toba",
        },
        {
          name: "Badan Pelaksana Otorita Labuan Bajo Flores",
        },
        {
          name: "Poltekpar Medan",
        },
        {
          name: "Poltekpar Palembang",
        },
        {
          name: "Poltekpar NHI Bandung",
        },
        {
          name: "Poltekpar Makassar",
        },
        {
          name: "Poltekpar Lombok",
        },
        {
          name: "Poltekpar Bali",
        },
      ],
    },
  ];

  const RenderMenuFooter = () => {
    return menu.map((item: any) => {
      return (
        <div className="flex flex-1 flex-col gap-4">
          <p className="text-xl text-yellow-300">{item.name}</p>
          <div className="flex flex-col gap-2">
            {item?.subMenu?.map((subitem: any) => {
              return <p>{subitem.name}</p>;
            })}
          </div>
        </div>
      );
    });
  };
  return (
    <>
      <footer className="bg-footerColor text-white  border-t-4 border-yellow-400">
        <div className="flex mx-16 p-4 py-6 lg:py-8">
          <div className="w-full flex flex-row gap-8">
            <div className="mb-6 flex flex-col gap-6">
              <a
                href="https://flowbite.com/"
                className="flex items-center flex-row gap-4"
              >
                <img
                  src="https://ppid.kemenparekraf.go.id/files/e3f0070ff9bd3c403c42afa22012656a.png"
                  className="w-16"
                  alt="Flowbite Logo"
                />
                <div className="flex flex-col">
                  <span className=" text-2xl font-semibold whitespace-nowrap dark:text-white">
                    KEMENTERIAN PARIWISATA
                  </span>
                  <span className=" text-2xl font-semibold whitespace-nowrap dark:text-white">
                    REPUBLIK INDONESIA
                  </span>
                </div>
              </a>
              <div className="flex flex-col gap-4">
                <p>
                  GEDUNG SAPTA PESONA <br /> Jl. Medan Merdeka Barat No.17,
                  RT.2/RW.3, Gambir, Jakarta Pusat, Jakarta 10110
                </p>
                <p>Call Center : +62-21-34830845</p>
                <p>Jam Pelayanan : 08.00 - 16.00 WIB</p>
                <p>Whatsapp Contact Center : 08118956767</p>
                <p>Email : info@kemenpar.go.id</p>
              </div>
              <div className="flex flex-row gap-4">
                <div className="p-2 border rounded-lg">
                  <Facebook />
                </div>
                <div className="p-2 border rounded-lg">
                  <Youtube />
                </div>
                <div className="p-2 border rounded-lg">
                  <Twitter />
                </div>
                <div className="p-2 border rounded-lg">
                  <Instagram />
                </div>
              </div>
            </div>
            <div className="flex flex-1 ">
              <RenderMenuFooter />
            </div>
          </div>
        </div>
        <div className="bg-[#081c35] w-full justify-center items-center py-4">
          <p className="text-center text-yellow-300 cursor-pointer">
            © 2025 KEMENTERIAN PARIWISATA REPUBLIK INDONESIA
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
