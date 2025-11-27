import Link from 'next/link';

type Props = {
  title: string;
  description: string;
  image: string;
  price: number;
  category: string;
  imageStyle?: React.CSSProperties;
  className?: string;
  id: number;
};

export default function Productdetails({
  image,
  title,
  price,
  imageStyle = {},
  className = "",
  category,
  description,
  id,
}: Props) {

  return (
    <div className={`card  ${className}`} style={{ maxWidth: '350px' }} >
      <Link href={`/product/${id}`} style={{ textDecoration: "none" }} >
        <img
          src={image}
          className="card-img-top"
          alt={title}
          style={{ objectFit: 'contain', height: '250px', ...imageStyle }}
        />
      </Link>



      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{title}</h5>
        <h6 className="text-muted">{category}</h6>
        <p className="card-text flex-grow-1">{description}</p>
        <div className="d-flex justify-content-between align-items-center mt-auto">
          <span className="fw-bold">${price}</span>

        </div>
      </div>
    </div>
  );
}
