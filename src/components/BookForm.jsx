import { Card, Input, Checkbox, Button, Typography } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { createBook, editBook } from "../modules/fetch";

const BookForm = ({ bookData }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  async function handleSubmit(event) {
    event.preventDefault();
    if (!selectedImage) {
      window.alert("please select image");
    }
    const formData = new FormData(event.target);
    if (bookData) {
      try {
        await editBook(
          bookData.id,
          formData.get("title"),
          formData.get("author"),
          formData.get("publisher"),
          parseInt(formData.get("year")),
          parseInt(formData.get("pages"))
        );
        window.alert("success add book");
      } catch (error) {
        console.log(error);
        window.alert("something went wrong");
      }
      return;
    }
    try {
      await createBook(formData);
      event.target.reset();
      window.alert("success add book");
      setSelectedImage("");
    } catch (error) {
      console.log(error);
      window.alert("something went wrong");
    }
  }
  useEffect(() => {
    if (bookData?.image) {
      setSelectedImage(`http://localhost:8000/${bookData?.image}`);
    }
  }, [bookData]);
  return (
    <Card color="white" shadow={true} className="w-fit p-10">
      <Typography variant="h4" color="blue-gray">
        Add New Book
      </Typography>

      <form onSubmit={handleSubmit} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Title
          </Typography>
          <Input
            name="title"
            size="md"
            placeholder="title"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            required
            defaultValue={bookData?.title}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Author
          </Typography>
          <Input
            name="author"
            size="md"
            placeholder="authors"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            required
            defaultValue={bookData?.author}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Publisher
          </Typography>
          <Input
            name="publisher"
            size="md"
            placeholder="publisher"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            required
            defaultValue={bookData?.publisher}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Year
          </Typography>
          <Input
            name="year"
            type="number"
            size="md"
            placeholder="yyyy"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            required
            defaultValue={bookData?.year}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Pages
          </Typography>
          <Input
            name="pages"
            type="number"
            size="md"
            placeholder="pages"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            required
            defaultValue={bookData?.pages}
          />
          {/* {selectedImage && <img src={selectedImage} alt="book" />}
          {!bookData.image && (
            <>
              <Typography>Image</Typography>
              <Input
                name="image"
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files[0];
                  setSelectedImage(URL.createObjectURL(file));
                }}
              />
            </> */}
          {/* )} */}
          <Typography>Image</Typography>
          <Input
            name="image"
            type="file"
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files[0];
              setSelectedImage(URL.createObjectURL(file));
            }}
          />
        </div>

        <Button type="submit" className="mt-6" fullWidth>
          {bookData ? "Edit Book" : "Create Book"}
        </Button>
      </form>
    </Card>
  );
};

export default BookForm;
