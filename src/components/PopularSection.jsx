import React, { useState, useEffect } from "react";
import { useBaseStore } from "../stores/baseStore";

function PopularSection() {
  const supabase = useBaseStore((state) => state.supabase);
  const [sizes, setSizes] = useState([]);
  const [loading, setLoading] = useState(true); // track loading
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getSizes() {
      try {
        const { data, error } = await supabase.from("sizes").select();
        if (error) throw error;
        setSizes(data || []);
      } catch (err) {
        console.error("Error fetching sizes:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    getSizes();
  }, [supabase]); // safe: supabase is stable singleton

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!sizes.length) return <p>No sizes found</p>;

  return (
    <section className="p-5 flex flex-row justify-around">
      <ul>
        {sizes.map((size) => (
          <li key={size.id}>{size.label}</li>
        ))}
      </ul>
      <div className="bg-[#8b60c3b2] h-130 w-130">{/* Top Search */}</div>
      <div className="flex flex-row flex-wrap w-[50%]">
        <div className="h-62 w-62 mx-8 bg-[#8b60c3b2]">{/* Popular Brand */}</div>
        <div className="h-62 w-62 mx-8 bg-[#8b60c3b2]">{/* Popular Category */}</div>
        <div className="h-62 w-62 mx-8 bg-[#8b60c3b2]">{/* Staff choice */}</div>
        <div className="h-62 w-62 mx-8 bg-[#8b60c3b2]">{/* Trending items */}</div>
      </div>
    </section>
  );
}

export default PopularSection;
