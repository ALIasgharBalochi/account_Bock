import { parseISO, formatDistanceToNow } from "date-fns-jalali";
type Props = {
  timestamp: string;
};
const ShowTime: React.FC<Props> = ({ timestamp }) => {
  let timeAgo = "";
  if (timestamp) {
    const date = parseISO(timestamp);
    const time = formatDistanceToNow(date);
    timeAgo = `${time} قبل`;
  }

  return (
    <span>
      <i>{timeAgo}</i>
    </span>
  );
};

export default ShowTime;
