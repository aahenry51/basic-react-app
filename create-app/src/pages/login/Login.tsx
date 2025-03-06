import React, { useState, useEffect } from "react";

const handleSubmit = async (event) => {
  event.preventDefault();
};

export const login = () => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" value={} onChange={() => {}} />
        </label>
        <label>
          Password:
          <input type="" value={} onChange={() => {}} />
        </label>
        <button />
      </form>
    </div>
  );
};
