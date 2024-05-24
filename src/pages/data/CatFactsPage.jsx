import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import Table from "../../components/ui/Table";
import { format } from "date-fns";

function CatFactsPage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from the API
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://cat-fact.herokuapp.com/facts/"
        );
        setData(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Set colums
  const columns = [
    {
      field: "text",
      headerName: "Fact",
      width: 700,
    },
    {
      field: "status.verified",
      headerName: "Verified",
      valueGetter: (params) => params.row.status?.verified,
      width: 300,
      renderCell: (params) => (
        <span
          className={params.value ? "text-green" : "text-red"}
        >
          {params.value ? "True" : "False"}
        </span>
      ),
    },
    {
      field: "createdAt",
      headerName: "Created On",
      width: 300,
      renderCell: (params) => format(new Date(params.value), "dd-MM-yyyy HH:mm:ss"),
    },
  ];

  // Show loading state when fetching data
  if (loading) {
    return <div className="py-5 px-10">Loading...</div>;
  }

  // Display error if it occurs during fetching data
  if (error) {
    toast.error(error);
  }

  return (
    <div className="py-5 px-10">
      <ToastContainer />
      <h1 className="text-xl mb-5 font-[500]">Cat Facts</h1>
      <Table data={data} columns={columns} />
    </div>
  );
}

export default CatFactsPage;
