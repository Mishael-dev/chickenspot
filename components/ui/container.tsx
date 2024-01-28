interface containerProps {
  children: React.ReactNode;
}

const Container: React.FC<containerProps> = ({ children }) => {
  return (
    <div className=" max-w-full lg:max-w-6xl mx-auto w-full px-6 sm:px-8 md:px-12 lg:px-14">
      {children}
    </div>
  );
};

export default Container;
