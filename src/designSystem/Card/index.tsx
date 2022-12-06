interface CardProps {
  image: string;
  typeList: string[];
  name: string;
  description: string;
  price: string;
}

export function Card({ image, typeList, name, price, description }: CardProps) {
  return (
    <>
      <img src={image} alt={name} />
      {typeList.forEach((type) => {
        <span>{type}</span>;
      })}
      <p>{name}</p>
      <p>{description}</p>
      <p>
        R$ <span>{price}</span>
      </p>
    </>
  );
}
