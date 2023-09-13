import { EncryptionDialog, Heading } from "#components/components";
import { Input } from "#components/ui/input";
import { Label } from "#components/ui/label";
import { useEncryption } from "#libs/contexts/contexts";

const App = () => {
  const { resultPhrase } = useEncryption();

  return (
    <>
      <Heading title="Лабораторна робота 1" />
      <main className="container flex flex-1 flex-col items-center gap-8 py-4">
        <EncryptionDialog />
        <div className="grid w-[520px] gap-2">
          <Label>Result</Label>
          <Input readOnly defaultValue={resultPhrase} />
        </div>
      </main>
    </>
  );
};

export default App;
