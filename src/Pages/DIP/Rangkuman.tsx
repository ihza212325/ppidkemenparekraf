function Rangkuman() {
  return (
    <>
      <div className="m-24 flex flex-col gap-8">
        <p className="font-jakartaBold text-2xl">
          Rangkuman Daftar Informasi Publik
        </p>
        <div className="flex flex-col gap-4">
          <p>Total Data : 2018</p>
          <div>
            <div className="relative overflow-x-auto">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      #
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Judul Informasi
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Ringkasan Informasi
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Jenis Informasi
                    </th>
                    <th scope="col" className="px-6 py-3">
                      -
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((e: any) => {
                    return (
                      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          {e}
                        </th>
                        <td className="px-6 py-4">
                          Data Sertifikasi ISO 21001:2018 Sistem Manajemen
                          Organisasi Pendidikan
                        </td>
                        <td className="px-6 py-4">
                          Data Sertifikasi ISO 21001:2018 Tuv Nord Indonesia
                          Sistem Manajemen Organisasi Pendidikan Poltekpar
                          Palembang
                        </td>
                        <td className="px-6 py-4">$INFORMASI SECARA BERKALA</td>
                        <td className="px-6 py-4">Unduh</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
          <div className="w-full flex flex-row justify-center items-center">
            <div className="p-2 px-4 border">
              <p>{"<"}</p>
            </div>
            {[1, 2, 3, 4, 5].map((el: any) => {
              return (
                <div className="p-2 px-4 border">
                  <p>{el}</p>
                </div>
              );
            })}
            <div className="p-2 px-4 border">
              <p>{">"}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Rangkuman;
