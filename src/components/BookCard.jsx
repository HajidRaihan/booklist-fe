import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";

const BookCard = ({ id, title, author, image, publisher, year }) => {
  const navigate = useNavigate();
  return (
    <Card className="mt-6 w-60">
      <CardHeader color="blue-gray" className="relative h-60">
        <img src={`http://localhost:8000/${image}`} alt="book" />
      </CardHeader>
      <CardBody>
        <Typography variant="h6" color="blue-gray" className="mb-2">
          {title} ({year})
        </Typography>
        <Typography variant="small">author : {author}</Typography>
        <Typography variant="small">Publisher : {publisher}</Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button onClick={() => navigate(`/book/${id}`)}>Detail</Button>
      </CardFooter>
    </Card>
  );
};
export default BookCard;
