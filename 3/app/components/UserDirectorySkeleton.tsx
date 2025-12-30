export default function UserTableSkeleton() {
  return (
    <div className="overflow-x-auto border border-gray-200 rounded-lg animate-pulse">
      <table className="w-full">
        <thead className="bg-gray-100">
          <tr>
            {["Name", "Email", "Company", "City"].map((_, i) => (
              <th key={i} className="px-4 py-3">
                <div className="h-4 w-20 bg-gray-300 rounded" />
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {[...Array(6)].map((_, rowIndex) => (
            <tr key={rowIndex} className="border-t">
              {[...Array(4)].map((_, colIndex) => (
                <td key={colIndex} className="px-4 py-4">
                  <div className="h-4 w-full bg-gray-200 rounded" />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
