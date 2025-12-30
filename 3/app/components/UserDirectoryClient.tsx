"use client";

import { useMemo, useState } from "react";
import { useUser } from "../hooks/useUser";
import UserTableSkeleton from "./UserDirectorySkeleton";

export default function UserDirectoryClient() {
  const { users, loading, error, refetch } = useUser();
  const [search, setSearch] = useState("");

  const filteredUsers = useMemo(() => {
    const keyword = search.toLowerCase();
    return users.filter(
      (user) =>
        user.name.toLowerCase().includes(keyword) ||
        user.email.toLowerCase().includes(keyword)
    );
  }, [users, search]);

  if (error) {
    return (
      <div className="max-w-5xl mx-auto p-6 text-center">
        <p className="text-red-600 mb-4">Error: {error}</p>
        <button
          onClick={refetch}
          className="px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">User Directory</h2>
        <p className="text-sm text-gray-500">
          Browse and search users from public API
        </p>
      </div>

      <div className="relative mb-6">
        <input
          type="text"
          placeholder="Search by name or email..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
        />
        <span className="absolute left-3 top-2.5 text-gray-400">🔍</span>
      </div>

      {/* Table / Skeleton */}
      {loading ? (
        <UserTableSkeleton />
      ) : (
        <div className="overflow-x-auto border border-gray-200 rounded-lg">
          <table className="w-full">
            <thead className="bg-gray-100">
              <tr>
                {["Name", "Email", "Company", "City"].map((h) => (
                  <th
                    key={h}
                    className="px-4 py-3 text-left text-sm font-semibold text-gray-700"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filteredUsers.length === 0 ? (
                <tr>
                  <td
                    colSpan={4}
                    className="px-4 py-8 text-center text-gray-500"
                  >
                    No users found
                  </td>
                </tr>
              ) : (
                filteredUsers.map((user) => (
                  <tr
                    key={user.id}
                    className="border-t hover:bg-gray-50 transition"
                  >
                    <td className="px-4 py-3 font-medium text-gray-800">
                      {user.name}
                    </td>
                    <td className="px-4 py-3 text-gray-600">{user.email}</td>
                    <td className="px-4 py-3 text-gray-600">
                      {user.company.name}
                    </td>
                    <td className="px-4 py-3 text-gray-600">
                      {user.address.city}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
