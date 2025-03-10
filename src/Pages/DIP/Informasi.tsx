function Informasi() {
  let list = [
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
  ];
  const RenderSelectedMenu = () => {
    return list.map((item: any) => {
      return (
        <div className="p-4 border  rounded-xl flex flex-row gap-4 shadow-lg border-slate-300">
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
            <div className="flex flex-row gap-4">
              <div className="flex flex-row px-4 py-2 rounded-full border-2">
                <p className="text-lg font-jakartaBold">Download</p>
              </div>
              <div className="flex flex-row px-4 py-2 rounded-full border-2">
                <p className="text-lg font-jakartaBold">View</p>
              </div>
            </div>
          </div>
        </div>
      );
    });
  };
  return (
    <>
      <div className="flex flex-col gap-12  m-24">
        <p className="font-jakartaBold text-2xl">INFORMASI SECARA BERKALA</p>
        <div className="flex flex-col gap-4">
          <RenderSelectedMenu />
        </div>
      </div>
    </>
  );
}
export default Informasi;
