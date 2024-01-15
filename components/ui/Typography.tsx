interface typographyProps {
  children: React.ReactNode;
}

const H1: React.FC<typographyProps> = ({ children }) => {
  return (
    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
      {children}
    </h1>
  );
};

const H2: React.FC<typographyProps> = ({ children }) => {
  return (
    <h2 className="scroll-m-20 text-xl font-extrabold tracking-tight lg:text-4xl">
      {children}
    </h2>
  );
};

const H3: React.FC<typographyProps> = ({ children }) => {
  return (
    <h3 className="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-3xl">
      {children}
    </h3>
  );
};

const H4: React.FC<typographyProps> = ({ children }) => {
  return (
    <h4 className="scroll-m-20 text-xl font-extrabold tracking-tight lg:text-2xl">
      {children}
    </h4>
  );
};

const P: React.FC<typographyProps> = ({ children }) => {
  return <p className="leading-7 text-base max-w-full">{children}</p>;
};

const Blockquote: React.FC<typographyProps> = ({ children }) => {
  return (
    <blockquote className="mt-6 border-l-2 pl-6 italic">{children}</blockquote>
  );
};

const Lead: React.FC<typographyProps> = ({ children }) => {
  return <p className="text-xl text-muted-foreground">{children}</p>;
};

export { H1, H2, H3, H4, P, Blockquote, Lead };
