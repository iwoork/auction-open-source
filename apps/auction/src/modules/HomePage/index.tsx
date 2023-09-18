export const HomePage = () => {
  return (
    <div className="m-5">
      <div className="mb-3 text-lg font-medium">Home Page</div>
      {process.env.app_name}
    </div>
  );
};
