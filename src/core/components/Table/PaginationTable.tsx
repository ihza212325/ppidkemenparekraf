type PaginationProps = {
  currentPage: number; // Halaman aktif saat ini
  totalPages: number; // Total jumlah halaman
  onPageChange: (page: number) => void; // Fungsi untuk menangani perubahan halaman
  itemsPerPage: number; // Jumlah item per halaman
  onItemsPerPageChange?: (items: number) => void; // Fungsi opsional untuk mengubah jumlah item per halaman
  itemsPerPageOptions?: number[]; // Opsi jumlah item per halaman
};

function PaginationTable({
  currentPage,
  totalPages,
  onPageChange,
  itemsPerPage,
  onItemsPerPageChange,
  itemsPerPageOptions = [10, 20, 50],
}: PaginationProps) {
  // Fungsi untuk menangani perubahan halaman
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <div className="w-full p-2 px-4 bg-neutralModalBackground  rounded-md justify-between items-center flex flex-row">
      {/* Item Per Page */}
      <div className="flex flex-row gap-3 items-center">
        <p>Items Per Page:</p>
        <select
          className="p-2 bg-grayTitle text-neutralWhite px-2  rounded-md"
          value={itemsPerPage}
          onChange={(e) => {
            const newValue = parseInt(e.target.value, 10);
            if (onItemsPerPageChange) {
              onItemsPerPageChange(newValue);
            }
          }}
        >
          {itemsPerPageOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        {/* <Select
          defaultValue={selectedOption}
          onChange={(e) => {
            console.log(e, "kkk");
          }}

          options={[
            { value: "1", label: "1" },
            { value: "2", label: "2" },
            { value: "3", label: "3" },
          ]}
        /> */}
      </div>

      {/* Pagination Controls */}
      <div className="flex items-center gap-4">
        {/* Tombol Previous */}
        <button
          className={`px-3 py-1 rounded-md ${
            currentPage === 1
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-blue-500 text-white"
          }`}
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Prev
        </button>

        {/* Halaman Aktif dan Total Halaman */}
        <span>
          Page {currentPage} of {totalPages}
        </span>

        {/* Tombol Next */}
        <button
          className={`px-3 py-1 rounded-md ${
            currentPage === totalPages
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-blue-500 text-white"
          }`}
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default PaginationTable;
