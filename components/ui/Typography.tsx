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
    <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-5xl">
      {children}
    </h1>
  );
};

const H3: React.FC<typographyProps> = ({ children }) => {
  return (
    <h1 className="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-5xl">
      {children}
    </h1>
  );
};

const H4: React.FC<typographyProps> = ({ children }) => {
  return (
    <h1 className="scroll-m-20 text-xl font-extrabold tracking-tight lg:text-5xl">
      {children}
    </h1>
  );
};

const P: React.FC<typographyProps> = ({ children }) => {
  return (
    <p className="leading-7 [&:not(:first-child)]:mt-6 text-base">{children}</p>
  );
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
