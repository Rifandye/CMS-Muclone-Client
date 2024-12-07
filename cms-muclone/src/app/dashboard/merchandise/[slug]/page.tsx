import { fetchMerchandiseBySlug } from "@/app/actions/merchandise.actions";

export default async function MerchandiseDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;

  const data = await fetchMerchandiseBySlug({ slug });

  return (
    <main>
      <div>{data.name}</div>
      <div>Merchandise Detail Page {slug}</div>
    </main>
  );
}
