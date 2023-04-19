import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import InputField from "@/components/InputField";

const loginSchema = z.object({
  email: z
    .string()
    .email("Formato de e-mail inválido")
    .nonempty("Campo obrigatório")
    .toLowerCase(),
  password: z.string().nonempty("Campo obrigatório"),
});

export type LoginType = z.infer<typeof loginSchema>;

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginType>({
    resolver: zodResolver(loginSchema),
  });

  function singIn(data: LoginType) {
    console.log(data);
  }

  return (
    <div className="h-screen flex flex-col">
      <main className="flex flex-1 justify-center items-center">
        <form
          onSubmit={handleSubmit(singIn)}
          className="space-y-4 flex flex-col w-full max-w-sm"
        >
          <InputField
            inputName="email"
            label="e-Mail"
            type="email"
            placeholder="Digite seu e-mail"
            errors={errors.email}
            register={register("email")}
          />
          <InputField
            inputName="password"
            label="senha"
            type="password"
            placeholder="**********"
            errors={errors.password}
            register={register("password")}
          />
          <button
            type="submit"
            className="bg-emerald-500 rounded font-semibold text-white h-10 hover:bg-emerald-600"
          >
            Enviar
          </button>
        </form>
      </main>
      <footer></footer>
    </div>
  );
}
