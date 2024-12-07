import { IMerchandise } from "@/lib/types/merchandise.types";
import { Divider } from "@mui/material";
import Image from "next/image";

export default function MerchandiseImages({ data }: { data: IMerchandise }) {
  const hasImages = data.Images && data.Images.length > 0;
  return (
    <main>
      <div className="tw-border tw-border-[#e2e2e2] tw-rounded-lg tw-gap-5 tw-p-4 tw-flex tw-flex-col">
        <div>
          <p className="tw-text-sm tw-font-semibold">Images</p>
          <Divider />
        </div>
        {hasImages ? (
          <div className="tw-grid tw-grid-cols-6 tw-gap-3">
            {data.Images.map((item, index) => (
              <div
                className="tw-h-[100px] tw-w-[100px] tw-relative"
                key={index}
              >
                <Image fill={true} alt={item.id} src={item.url} />
              </div>
            ))}
          </div>
        ) : (
          <div className="tw-flex tw-justify-center tw-items-center tw-h-[200px]">
            <p className="tw-text-gray-500">No images available</p>
          </div>
        )}
      </div>
    </main>
  );
}
