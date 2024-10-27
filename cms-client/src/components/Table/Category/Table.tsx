import { BaseApiResponse, TableHeader } from "@/app/types/base.types";
import DataTable from "../Table";
import { CmsCategoryList } from "@/app/types/category.types";
import { cookies } from "next/headers";

export default async function CategoryTable() {
  const categoryTableHeaders = [
    {
      name: "Name",
      key: "name",
      align: "left",
    },
  ] as TableHeader[];

  const getAllCategories = async () => {
    const token = (await cookies()).get("Authorization")?.value.split(" ")[1];

    const response = await fetch(
      process.env.NEXT_PUBLIC_BASE_URL + "/category",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const data: BaseApiResponse<CmsCategoryList[]> = await response.json();

    return data.data as CmsCategoryList[];
  };

  const categories = await getAllCategories();

  return (
    <DataTable headers={categoryTableHeaders} data={categories}></DataTable>
  );
}
