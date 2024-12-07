import { IMerchandise } from "@/lib/types/merchandise.types";
import { formatCurrency } from "@/lib/utils/format";
import { Chip, Divider } from "@mui/material";
import Image from "next/image";

export default function Summary({ data }: { data: IMerchandise }) {
  const defaultImage = "/no-image.png";
  const image = data.thumbnail || defaultImage;

  return (
    <main>
      <div className="tw-flex tw-flex-col tw-border tw-border-[#e2e2e2] tw-rounded-lg tw-gap-3 tw-p-3">
        <div>
          <p className="tw-text-sm tw-font-semibold">Merchandise Summary</p>
          <Divider />
        </div>
        <div className="tw-flex tw-gap-10">
          <div className="tw-border tw-border-[#e2e2e2] tw-rounded-lg tw-h-[175px] tw-w-[175px] tw-relative tw-flex-2 tw-overflow-hidden">
            <Image
              fill={true}
              quality={100}
              src={image}
              alt="Merchandise Thumbnail"
            ></Image>
          </div>
          <div className="tw-flex tw-flex-col tw-gap-3 tw-flex-1">
            <div className="tw-flex-1 tw-flex tw-gap-2">
              <div className="tw-flex-1">
                <p className="tw-text-sm tw-font-normal tw-text-gray-400">
                  Name
                </p>
                <p>{data?.name}</p>
              </div>
              <Divider orientation="vertical" />
              <div className="tw-flex-1">
                <p className="tw-text-sm tw-font-normal tw-text-gray-400">
                  Slug
                </p>
                <p>{data?.slug}</p>
              </div>
              <Divider orientation="vertical" />
              <div className="tw-flex-1">
                <p className="tw-text-sm tw-font-normal tw-text-gray-400">
                  Categories
                </p>
                <div className="tw-flex tw-gap-3">
                  {data.Categories.map((item, index) => (
                    <Chip key={index} label={item.name} size="small" />
                  ))}
                </div>
              </div>
              <Divider orientation="vertical" />
              <div className="tw-flex-1">
                <p className="tw-text-sm tw-font-normal tw-text-gray-400">
                  Current Stock
                </p>
                <p>{data?.stock}</p>
              </div>
              <Divider orientation="vertical" />
              <div className="tw-flex-1">
                <p className="tw-text-sm tw-font-normal tw-text-gray-400">
                  Price
                </p>
                <p>{formatCurrency(data?.price)}</p>
              </div>
            </div>
            <div className="tw-flex-1">
              <p className="tw-text-sm tw-font-normal tw-text-gray-400">
                Desciption
              </p>
              <p>{data?.description}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
