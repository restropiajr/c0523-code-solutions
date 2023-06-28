type BannerProps = {
  item: string;
};

export default function Banner({ item }: BannerProps) {
  return <h1 className="text-3xl m-4">{item}</h1>;
}
