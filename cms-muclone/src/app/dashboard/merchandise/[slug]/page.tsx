import { fetchMerchandiseBySlug } from "@/app/actions/merchandise.actions";
import MerchandiseImages from "@/components/Merchandise/Images";
import Summary from "@/components/Merchandise/Summary";

export default async function MerchandiseDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;

  const data = await fetchMerchandiseBySlug({ slug });

  return (
    <main className="tw-flex tw-flex-col tw-gap-4">
      <Summary data={data} />
      <MerchandiseImages data={data} />
    </main>
  );
}
