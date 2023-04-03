import { Link } from "react-router-dom";
import { FC } from "react";

interface Props {
  image: string;
  username: string;
  first_name: string;
  last_name: string;
}

const Card: FC<Props> = (props) => {
  const { image, username, first_name, last_name } = props;
  /*
    const image = props.image
    const username = props.username
    const first_name = props.first_name
    const last_name = props.last_name
    */

  return (
    <div className="flex flex-col items-center">
      <img
        // src="domain.com/image.png"
        // src={data.image}
        // src={`domain.com/${username}.png`}
        src={image}
        alt={`${username}'s picture`}
        className="rounded-full w-28 aspect-square"
      />
      <Link
        className="font-bold tracking-wider dark:text-white"
        to={`/profile/${username}`}
      >
        {first_name} {last_name}
      </Link>
      <p className="text-sm dark:text-white">{username}</p>
    </div>
  );
};

export default Card;
