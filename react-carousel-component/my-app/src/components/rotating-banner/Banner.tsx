import { Image } from '../../App';

export default function Banner({ image }: { image: Image }) {
  return (
    <div className="img-wrapper w-1/3 m-4">
      <img className="w-full" src={image.src} alt={image.alt} />
    </div>
  );
}
