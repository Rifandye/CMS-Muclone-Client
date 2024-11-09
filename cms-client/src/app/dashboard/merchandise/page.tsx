import DataTable from "@/components/Table/DataTable";

export default function Merchandise() {
  const TableHeaders = [
    {
      field: "id",
      headerName: "No",
      width: 150,
    },
    {
      field: "name",
      headerName: "Name",
      width: 150,
    },
    {
      field: "price",
      headerName: "Price",
      width: 150,
    },
    {
      field: "categories",
      headerName: "Categories",
      width: 150,
    },
  ];

  const Items = [
    { id: 1, name: "Product 1", price: 29.99, categories: "Electronics" },
    { id: 2, name: "Product 2", price: 59.99, categories: "Home Goods" },
    { id: 3, name: "Product 3", price: 19.99, categories: "Clothing" },
    { id: 4, name: "Product 4", price: 99.99, categories: "Sports" },
    { id: 5, name: "Product 5", price: 14.99, categories: "Toys" },
  ];

  return (
    <main className="bg-white p-4 rounded-lg h-full overflow-x-auto">
      <DataTable headers={TableHeaders} items={Items}></DataTable>
    </main>
  );
}
