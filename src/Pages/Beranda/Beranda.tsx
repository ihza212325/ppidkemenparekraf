import { File } from "lucide-react";

export default function Beranda() {
  return (
    <main id="primary">
      <div
        className="h-full bg-cover bg-center "
        style={{
          backgroundImage: `url('https://ppid.kemenparekraf.go.id/k3y/images/bg-bromo.png')`,
        }}
      >
        {/* Permohonan Informasi section */}
        <div className="max-w-6xl mx-auto px-4 py-10 flex  gap-6">
          <h1 className="text-4xl  flex items-center mb-10 text-white font-bold">
            PERMOHONAN <br />
            INFORMASI
          </h1>

          <div>
            {/* Card Container */}
            <div className="flex gap-10 mb-5  text-white">
              {[
                { text: "Permohonan Informasi Publik", img: "monas.png" },
                { text: "Keberatan Informasi Publik", img: "barong-mask.png" },
                { text: "Antrean Layanan Informasi", img: "wayang.png" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="relative bg-[#4d5b66] bg-opacity-40 p-6 w-52 h-40 rounded-t-2xl text-center flex flex-col items-center shadow-lg backdrop-blur-md"
                >
                  <File size={32} />
                  <p className="text-lg font-semibold mb-2">{item.text}</p>
                  <img
                    className="absolute bottom-0 right-0 w-24 h-24"
                    src={`https://ppid.kemenparekraf.go.id/k3y/images/${item.img}`}
                    alt={item.text}
                  />
                </div>
              ))}
            </div>

            {/* LAPOR! & Survey Section */}
            <div className="grid grid-cols-2 md:grid-cols-2 gap-3 w-[85%]">
              {/* LAPOR! Box */}
              <div className="relative bg-green-900 bg-opacity-50 flex flex-col justify-center items-center p-6 rounded-lg text-white shadow-lg backdrop-blur-md">
                <img
                  src="https://ppid.kemenparekraf.go.id/files/218f5ea7f0fc3eea27a9a8dbe15e2a81.png"
                  alt="LAPOR!"
                  className="mb-10"
                />
                <h2 className="text-2xl font-bold">LAPOR</h2>
                <p className="text-lg">
                  Layanan Aspirasi dan Pengaduan Online Rakyat (LAPOR!) untuk
                  melakukan penyampaian semua aspirasi dan pengaduan di kawasan
                  Kementerian Pariwisata Republik Indonesia di link berikut ini.
                </p>
              </div>

              {/* Survey Kepuasan Masyarakat */}
              <div className="relative bg-yellow-500 rounded-t-lg shadow-lg">
                {/* Gambar Customer Service */}
                <img
                  src="https://ppid.kemenparekraf.go.id/k3y/images/tiwi-survey.png"
                  alt="Customer Service"
                  className="w-full"
                />

                {/* Kotak Tombol dan Teks */}
                <div className="absolute bottom-10 left-16 right-16 bg-[#142b4d] text-white rounded-lg p-3 text-center">
                  <button className="font-bold text-3xl">Mulai</button>
                  <p className="text-sm mt-1">
                    Survey Kepuasan Masyarakat Terhadap Website
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* berita dan feature section*/}
        <div className=" flex-row flex-auto items-center px-6 sm:px-16 mb-8 w-full max-w-6xl mx-auto grid grid-cols-2 gap-6 mt-24">
          {/* Judul */}
          <div className="col-span-2 sm:col-span-1 w-full">
            <div className="text-white text-2xl sm:text-4xl font-extrabold tracking-wide uppercase">
              Berita dan Features Pariwisata
            </div>
          </div>

          {/* Tombol Berita Lainnya */}
          <a
            href="https://kemenpar.go.id/berita"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-row items-start justify-center sm:justify-end col-span-2 sm:col-span-1"
          >
            <div className="px-6 py-2 bg-[#c28536] text-white font-semibold rounded-lg shadow-md">
              Berita Lainnya
            </div>
          </a>

          {/* Berita Utama (besar) */}
          <div className="col-span-2 sm:col-span-1 relative flex flex-col h-full">
            <div className="block flex-shrink-0 relative w-full rounded-3xl overflow-hidden aspect-w-3 xl:aspect-w-4 aspect-h-3">
              <img
                src="https://api.kemenpar.go.id/storage/app/uploads/public/67e/413/83b/thumb_13779_1024_420_0_0_auto.webp"
                alt="Berita Utama"
                className="object-cover h-64 sm:h-96 w-full"
              />
            </div>
            <div className="w-10/12 transform -mt-10">
              <div className="p-3 bg-white  shadow-xl  rounded-3xl rounded-tl-none flex flex-col min-h-40">
                <div className="text-md font-semibold">
                  Kementerian Pariwisata RI
                </div>
                <div className="text-sm">Rabu, 26 Maret 2025</div>
                <div className="text-md lg:text-2lg font-semibold mt-3">
                  <a
                    href="https://kemenpar.go.id/berita/siaran-pers-kementerian-pariwisata-bersama-bps-kolaborasi-tingkatkan-kualitas-data-dan-informasi-pariwisata"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="line-clamp-2 hover:text-blue-500 transition duration-300"
                  >
                    Siaran Pers: Kementerian Pariwisata Bersama BPS Kolaborasi
                    Tingkatkan Kualitas Data dan Informasi Pariwisata
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Dua berita kecil di sebelah kanan */}
          <div className="flex flex-col gap-4 w-full col-span-2 sm:col-span-1">
            {/* Berita 2 */}
            <div className="relative flex flex-col h-full">
              <div className="block flex-shrink-0 relative w-full rounded-3xl overflow-hidden aspect-w-3 xl:aspect-w-4 aspect-h-3">
                <img
                  src="https://api.kemenpar.go.id/storage/app/uploads/public/67e/3d3/0f4/thumb_13778_1024_420_0_0_auto.webp"
                  alt="Berita 2"
                  className="object-cover h-64 w-full"
                />
              </div>
              <div className="w-10/12 transform -mt-10">
                <div className="p-3 bg-white  shadow-xl  rounded-3xl rounded-tl-none flex flex-col min-h-40">
                  <div className="text-md font-semibold">
                    Kementerian Pariwisata RI
                  </div>
                  <div className="text-sm">Rabu, 26 Maret 2025</div>
                  <div className="text-md lg:text-2lg font-semibold mt-3">
                    <a
                      href="https://kemenpar.go.id/berita/siaran-pers-wamenpar-pantau-arus-mudik-di-bandara-lombok-praya-ntb"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="line-clamp-2 hover:text-blue-500 transition duration-300"
                    >
                      Siaran Pers : Wamenpar Pantau Arus Mudik di Bandara Lombok
                      Praya NTB
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Berita 3 */}
            <div className="relative flex flex-col h-full">
              <div className="block flex-shrink-0 relative w-full rounded-3xl overflow-hidden aspect-w-3 xl:aspect-w-4 aspect-h-3">
                <img
                  src="https://api.kemenpar.go.id/storage/app/uploads/public/67e/3b6/2cd/thumb_13777_1024_420_0_0_auto.webp"
                  alt="Berita 3"
                  className="object-cover h-64 w-full"
                />
              </div>
              <div className="w-10/12 transform -mt-10">
                <div className="p-3 bg-white shadow-xl rounded-3xl rounded-tl-none flex flex-col min-h-40">
                  <div className="text-md font-semibold">
                    Kementerian Pariwisata RI
                  </div>
                  <div className="text-sm">Rabu, 26 Maret 2025</div>
                  <div className="text-md lg:text-2lg font-semibold mt-3">
                    <a
                      href="https://kemenpar.go.id/berita/siaran-pers-wamenpar-lulusan-pariwisata-ri-punya-peluang-besar-di-kancah-global"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="line-clamp-2 hover:text-blue-500 transition duration-300"
                    >
                      Siaran Pers : Wamenpar: Lulusan Pariwisata RI Punya
                      Peluang Besar di Kancah Global
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="h-full bg-cover bg-center relative"
          style={{
            backgroundImage: `url('https://ppid.kemenparekraf.go.id/k3y/images/bg-raja-ampat.png')`,
          }}
        >
          {/* Pengumuman Section */}
          <div className=" flex-row flex-auto items-center sm:px-16 mb-8 w-full mt-10 sm:mt-48 grid grid-cols-3 gap-4 max-w-6xl mx-auto">
            {/* Heading */}
            <div className="col-span-2 sm:col-span-1 w-full">
              <div className="text-white text-2xl sm:text-5xl font-extrabold tracking-wide uppercase">
                Pengumuman
              </div>
            </div>

            {/* List Pengumuman */}
            <div className="col-span-3 sm:col-span-2 flex flex-col gap-4 w-full">
              {[
                {
                  href: "https://kemenparekraf.go.id/pengumuman/pengumuman-tentang-pembatalan-kelulusan-peserta-seleksi-pengadaan-calon-pegawai-negeri-sipil-kemenparekrafbaparekraf-tahun-anggaran-2024",
                  title:
                    "Pengumuman tentang Pembatalan Kelulusan Peserta Seleksi Pengadaan Calon Pegawai Negeri Sipil Kemenparekraf/Baparekraf Tahun Anggaran 2024",
                  date: "25 Mar 2025",
                },
                {
                  href: "https://kemenparekraf.go.id/pengumuman/pengumuman-tentang-hasil-seleksi-administrasi-pasca-sanggah-periode-2-pengadaan-pegawai-pemerintah-dengan-perjanjian-kerja-kemenparekrafbaparekraf-tahun-anggaran-2024",
                  title:
                    "Pengumuman tentang Hasil Seleksi Administrasi Pasca Sanggah Periode 2 Pengadaan Pegawai Pemerintah dengan Perjanjian Kerja Kemenparekraf/Baparekraf Tahun Anggaran 2024",
                  date: "28 Feb 2025",
                },
                {
                  href: "https://kemenparekraf.go.id/pengumuman/pengumuman-tentang-hasil-seleksi-administrasi-pra-sanggah-periode-2-pengadaan-pegawai-pemerintah-dengan-perjanjian-kerja-kemenparekrafbaparekraf-tahun-anggaran-2024",
                  title:
                    "Pengumuman tentang Hasil Seleksi Administrasi Pra Sanggah Periode 2 Pengadaan Pegawai Pemerintah dengan Perjanjian Kerja Kemenparekraf/Baparekraf Tahun Anggaran 2024",
                  date: "18 Feb 2025",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col p-6 w-full rounded-tr-2xl rounded-bl-2xl bg-[#718a58] bg-opacity-60 h-50"
                >
                  <h1 className="text-white mt-4 text-lg font-medium mb-0 line-clamp-2">
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.title}
                    </a>
                  </h1>
                  <div className="w-12 h-1 my-6 border-t-2" />
                  <div className="flex items-center leading-5 text-md text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-calendar text-white"
                    >
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                    <div className="ml-1.5">{item.date}</div>
                  </div>
                </div>
              ))}

              {/* Tombol CTA */}
              <div className="flex flex-row items-start justify-center">
                <a
                  href="https://kemenpar.go.id/pengumuman"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-row items-start justify-center sm:justify-end"
                >
                  <div className="px-6 py-2 border text-white rounded-full shadow-md">
                    Lihat Pengumuman Lainnya
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
