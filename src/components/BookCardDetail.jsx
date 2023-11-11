import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const BookCardDetail = ({ book, id, handleDeleteBook }) => {
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();
  const handleOpen = () => setOpen(!open);
  return (
    <Card className="w-full max-w-[65rem] max-h-[80vh] flex-row">
      <CardHeader className="m-0 w-full max-w-[24rem] h-full  scale-110">
        <img
          src={`http://localhost:8000/${book.image}`}
          alt="book"
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody className="ml-5 my-auto">
        <Typography variant="h3" color="blue-gray" className=" uppercase">
          {book.title}
        </Typography>
        <Typography variant="h5" color="blue-gray" className="">
          author : {book.author}
        </Typography>
        <Typography color="gray" className="mb-3 font-normal">
          publisher : {book.publisher}
        </Typography>
        <Typography variant="small" color="gray" className="mb-8 font-normal">
          {book.year} | {book.pages} pages
        </Typography>
        {localStorage.getItem("token") && (
          <div className="flex gap-5">
            <Button
              variant="gradient"
              color="red"
              className="flex items-center gap-2"
              onClick={handleOpen}
            >
              Delete
            </Button>
            <Button
              variant="gradient"
              color="blue-gray"
              className="flex items-center gap-2"
              onClick={() => navigate(`/book/${id}/edit`)}
            >
              Edit
            </Button>
            <Dialog open={open} handler={handleOpen} size="xs" className="">
              <DialogBody className="text-center">Are you sure to delete this book</DialogBody>
              <DialogFooter className="flex justify-center">
                <Button variant="text" color="red" onClick={handleOpen} className="mr-1">
                  <span>Cancel</span>
                </Button>
                <Button variant="gradient" color="green" onClick={handleDeleteBook}>
                  <span>Confirm</span>
                </Button>
              </DialogFooter>
            </Dialog>
          </div>
        )}
      </CardBody>
    </Card>
  );
};
export default BookCardDetail;
