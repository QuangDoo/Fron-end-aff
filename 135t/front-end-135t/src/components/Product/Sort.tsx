import { useRouter } from "next/router";
import React from "react";
import Select from "../Layout/Select";

export default function Sort() {
  const router = useRouter();

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    router.push({
      pathname: router.pathname,
      query: {
        ...router.query,
        sort: event.target.value,
      },
    });
  };

  return (
    <>
      <div className="products__filter-header mb-2">
        Sắp xếp
      </div>

      <Select onChange={handleSortChange} defaultValue="07">
        {/* <option value="01">Sản phẩm mới</option> */}
        {/* <option value="02">Bán chạy nhất</option> */}
        {/* <option value="03">Phù hợp nhất</option> */}
        <option value="04">Giá thấp đến cao</option>
        <option value="05">Giá cao đến thấp</option>
        <option value="06">Name: A - Z</option>
        <option value="07">Name: Z - A</option>
      </Select>
    </>
  );
}
