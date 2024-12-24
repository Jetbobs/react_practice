const Header = () => {
  return (
    <div className="Header">
      <h3>오늘은 😊</h3>
      <h1 className="font-bold text-[rgb(37,147,255)] text-2xl">
        {new Date().toDateString()}
      </h1>
    </div>
  );
};

export default Header;
