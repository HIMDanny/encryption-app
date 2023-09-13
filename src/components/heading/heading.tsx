type Properties = {
  title: string;
};

const Heading: React.FC<Properties> = ({ title }) => {
  return (
    <header className="container mx-auto flex flex-col items-center py-2">
      <h1 className="text-2xl">{title}</h1>
      <h2 className="mt-1 text-xl">Блізніченко Данило | ПІ-420Б</h2>
    </header>
  );
};
export { Heading };
