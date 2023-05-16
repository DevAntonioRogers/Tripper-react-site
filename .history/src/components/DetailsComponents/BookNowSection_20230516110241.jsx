const BookNowSection = () => {
  const image = [
    "https://images.unsplash.com/photo-1598257006458-087169a1f08d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  ];
  return (
    <div>
      <img src={image[0]} alt="travel agent" />
    </div>
  );
};

export default BookNowSection;
