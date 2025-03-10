import { useState } from "react";

function Regulasi() {
  const [selectedMenu, setselectedMenu] = useState(null);

  let menu = [
    {
      name: "UU, PP DAN PERKI KETERBUKAAN INFORMASI PUBLIK",
      list: [
        {
          title: "UU No 14 Tahun 2008 Tentang Keterbukaan Informasi Publik",
          creator: "SUPER ADMIN PPID KEMENPAREKRAF",
          created_at: "17 juni2024",
        },
        {
          title: "UU No terbukaan Informasi Publik",
          creator: "SUPER ADMIN PPID KEMENPAREKRAF",
          created_at: "17 juni2024",
        },
        {
          title: "UU No 14 Tahun 2008erbukaan Informasi Publik",
          creator: "SUPER ADMIN PPID KEMENPAREKRAF",
          created_at: "17 juni2024",
        },
      ],
    },
    {
      name: "PERATURAN KETERBUKAAN INFORMASI PUBLIK",
      list: [
        {
          title: "UU No 14 ng Keterbukaan Informasi Publik",
          creator: "SUPER ADMIN PPID KEMENPAREKRAF",
          created_at: "17 juni2024",
        },
        {
          title: "UU No 14 Tahun 2008 Ten Informasi Publik",
          creator: "SUPER ADMIN PPID KEMENPAREKRAF",
          created_at: "17 juni2024",
        },
        {
          title: "entang Keterbukaan Informasi Publik",
          creator: "SUPER ADMIN PPID KEMENPAREKRAF",
          created_at: "17 juni2024",
        },
      ],
    },
    {
      name: "RANCANGAN PERATURAN KETERBUKAAN INFORMASI PUBLIK",
      list: [
        {
          title: "UU No 14 TahTentang Keterbukaan Informasi Publik",
          creator: "SUPER ADMIN PPID KEMENPAREKRAF",
          created_at: "17 juni2024",
        },
        {
          title: "UU No 14 Tahun 2008 Tentang Keterbuasi Publik",
          creator: "SUPER ADMIN PPID KEMENPAREKRAF",
          created_at: "17 juni2024",
        },
        {
          title: "UU No 14 Tahun 2008 T Informasi Publik",
          creator: "SUPER ADMIN PPID KEMENPAREKRAF",
          created_at: "17 juni2024",
        },
      ],
    },
    {
      name: "MAKLUMAT PELAYANAN PUBLIK DAN PELAYANAN INFORMASI PUBLIK",
      list: [
        {
          title: "UU No 14 Tahunan Informasi Publik",
          creator: "SUPER ADMIN PPID KEMENPAREKRAF",
          created_at: "17 juni2024",
        },
        {
          title: "UU No 14 Tahun 2008 Tmasi Publik",
          creator: "SUPER ADMIN PPID KEMENPAREKRAF",
          created_at: "17 juni2024",
        },
        {
          title: "UU No 14 Tahun ",
          creator: "SUPER ADMIN PPID KEMENPAREKRAF",
          created_at: "17 juni2024",
        },
      ],
    },
    {
      name: "PERMENPAREKRAF STANDAR PELAYANAN PUBLIK",
      list: [
        {
          title: "UU No 14 Tahun 200Informasi Publik",
          creator: "SUPER ADMIN PPID KEMENPAREKRAF",
          created_at: "17 juni2024",
        },
        {
          title: "UU No 14 Tahun  Publik",
          creator: "SUPER ADMIN PPID KEMENPAREKRAF",
          created_at: "17 juni2024",
        },
        {
          title: "UU No 14 ang Keterbukaan Informasi Publik",
          creator: "SUPER ADMIN PPID KEMENPAREKRAF",
          created_at: "17 juni2024",
        },
      ],
    },
    {
      name: "SK KELOMPOK KERJA PPID",
      list: [
        {
          title: "UU No 14 Tahun 2008 Tentang Keterbukaan Informasi Publik",
          creator: "SUPER ADMIN PPID KEMENPAREKRAF",
          created_at: "17 juni2024",
        },
        {
          title: "UU No 14 Tahun 2008 Tentang Keterbukaan Informasi Publik",
          creator: "SUPER ADMIN PPID KEMENPAREKRAF",
          created_at: "17 juni2024",
        },
        {
          title: "UU No 14 Tahun 2008 Tentang Keterbukaan Informasi Publik",
          creator: "SUPER ADMIN PPID KEMENPAREKRAF",
          created_at: "17 juni2024",
        },
      ],
    },
    {
      name: "INFOGRAFIS SOP PELAYANAN INFORMASI PUBLIK",
      list: [
        {
          title: "UU No 14 Tahun 2008 Tentang Keterbukaan Informasi Publik",
          creator: "SUPER ADMIN PPID KEMENPAREKRAF",
          created_at: "17 juni2024",
        },
        {
          title: "UU No 14 Tahun 2008 Tentang Keterbukaan Informasi Publik",
          creator: "SUPER ADMIN PPID KEMENPAREKRAF",
          created_at: "17 juni2024",
        },
        {
          title: "UU No 14 Tahun 2008 Tentang Keterbukaan Informasi Publik",
          creator: "SUPER ADMIN PPID KEMENPAREKRAF",
          created_at: "17 juni2024",
        },
      ],
    },
  ];

  const RenderMenu = () => {
    return menu.map((item) => {
      return (
        <li
          onClick={() => {
            setselectedMenu(item);
          }}
        >
          <p className="font-jakartaBold cursor-pointer text-xl hover:text-yellow-500">
            {item.name}
          </p>
        </li>
      );
    });
  };
  const RenderSelectedMenu = () => {
    return selectedMenu?.list.map((item: any) => {
      return (
        <div className="p-4 border border-black rounded-xl flex flex-row gap-4">
          <div className="w-24 h-24 bg-primary rounded-xl"></div>
          <div className="flex flex-col gap-4">
            <p>{item?.title}</p>
            <div className="flex flex-row gap-2 items-center">
              <img
                src="https://ppid.kemenparekraf.go.id/files/e3f0070ff9bd3c403c42afa22012656a.png"
                className="w-10"
                alt="Flowbite Logo"
              />
              <div>
                <p>{item?.creator}</p>
                <p className="text-xs">{item?.created_at}</p>
              </div>
            </div>
          </div>
        </div>
      );
    });
  };
  return (
    <>
      <div className="w-full mx-24 my-24  flex flex-row gap-8">
        <div className="flex w-1/3 bg-white border rounded-xl shadow-xl p-12">
          <ul className="flex flex-col gap-4">
            <RenderMenu />
          </ul>
        </div>
        <div className="flex flex-1 bg-white flex-col gap-4 ">
          <RenderSelectedMenu />
        </div>
      </div>
    </>
  );
}

export default Regulasi;
