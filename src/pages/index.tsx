import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import InputField from "@/components/InputField";
import { Lock } from "lucide-react";

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
      <main className="flex flex-col flex-1 justify-center items-center m-5 gap-4">
        <div className="flex flex-col justify-center items-center gap-4">
          <div className="bg-emerald-500 rounded-full w-12 h-12 flex items-center justify-center">
            <Lock color="white" />
          </div>
          <div className="flex items-center gap-1">
            <strong>e-Vista-Sede</strong>
            <div className="border-r border-gray-400 h-8" />
            <p className="text-gray-500">Login</p>
          </div>
        </div>
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
