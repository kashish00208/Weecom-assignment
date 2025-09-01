import Image from "next/image";

export const Card = ({
  imageLink,
  title,
  price,
  discountPercentage,
}: {
  imageLink: string;
  title: string;
  price: string;
  discountPercentage: string;
}) => {
  return (
    <div className="h-3/4 w-full p-4 border rounded-xl shadow-md">
      <Image
        src={imageLink}
        width={150}
        height={150}
        alt={title}
        className="rounded-md"
      />

      <div className="flex flex-col mt-2">
        <span className="font-bold text-lg">{title}</span>
        <div className="flex gap-2 items-center">
          <span className="text-green-600 font-semibold">${price}</span>
          <span className="text-red-500 text-sm">
            -{discountPercentage}%
          </span>
        </div>
      </div>
    </div>
  );
};
