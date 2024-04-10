import React from "react";
import useLogout from "../../hooks/useLogout";

const LogoutButton = () => {
  const { loading, logout } = useLogout();

  return (
    <div className="flex-1 flex items-end justify-end py-4 px-2 mt-auto">
      <button
        className="btn btn-sm btn-outline"
        disabled={loading}
        onClick={logout}
      >
        {loading ? (
          <span className="loading loading-spinner "></span>
        ) : (
          "Logout"
        )}
      </button>
    </div>
  );
};

export default LogoutButton;
