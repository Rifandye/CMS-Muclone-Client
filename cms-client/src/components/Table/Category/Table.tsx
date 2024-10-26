import { BaseApiResponse } from "@/app/types/base.types";
import DataTable from "../Table";
import { CmsCategoryList } from "@/app/types/category.types";

export default async function CategoryTable() {
  const getAllCategories = async (): Promise<
    BaseApiResponse<CmsCategoryList[]>
  > => {
    const response = await fetch(
      process.env.NEXT_PUBLIC_BASE_URL + "/category",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response.json();
    return data;
  };

  const categoryData: BaseApiResponse<CmsCategoryList[]> =
    await getAllCategories();

  const tableHeaders = [
    {
      name: "Name",
      align: "left",
    },
  ];

  return (
    <div>
      <DataTable data={categoryData} headers={tableHeaders}></DataTable>
    </div>
  );
}
