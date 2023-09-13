import { Button } from "#components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "#components/ui/form";
import { Input } from "#components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "#components/ui/select";
import {
  EncryptionSchema,
  encryptionValidationSchema,
} from "#libs/services/encryption/encryption";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEncryption } from "#libs/contexts/contexts";
import { useCallback } from "react";

const EncryptionDialog = () => {
  const { decrypt, encrypt } = useEncryption();

  const form = useForm<EncryptionSchema>({
    resolver: zodResolver(encryptionValidationSchema),
    defaultValues: {
      secretKey: localStorage.getItem("secretKey") ?? "",
      phrase: "",
    },
  });

  const handleSubmit = useCallback(
    (data: EncryptionSchema) => {
      if (data.mode === "encrypt") {
        encrypt(data.phrase, data.secretKey);
      } else {
        decrypt(data.phrase, data.secretKey);
      }
    },
    [encrypt, decrypt],
  );

  return (
    <Form {...form}>
      <form
        className="grid w-[520px] gap-2 rounded-sm border p-4"
        onSubmit={form.handleSubmit(handleSubmit)}
      >
        <FormField
          control={form.control}
          name="mode"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="encryption-mode">Mode</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <SelectTrigger id="encryption-mode" className="w-[140px]">
                  <SelectValue placeholder="Select mode" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="encrypt">Encrypt</SelectItem>
                  <SelectItem value="decrypt">Decrypt</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="secretKey"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Secret key</FormLabel>
              <FormControl>
                <Input autoComplete="off" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phrase"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phrase</FormLabel>
              <FormControl>
                <Input autoComplete="off" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="mt-4">
          Submit
        </Button>
      </form>
    </Form>
  );
};
export { EncryptionDialog };
