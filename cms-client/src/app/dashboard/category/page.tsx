import CategoryTable from "@/components/Table/Category/Table";

export default function Category() {
  return (
    <main className="bg-white text-black h-full">
      <div className="flex flex-col gap-4">
        <CategoryTable></CategoryTable>
      </div>
    </main>
  );
}
