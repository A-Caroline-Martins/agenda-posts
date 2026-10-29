import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../features/auth/useAuth";
import "./Login.css";

// Nome de usuário no estilo Instagram: letras, números, ponto e _ (até 30)
const REGEX_NOME_USUARIO = /^[a-zA-Z0-9._]{1,30}$/;

const schema = z.object({
  identificador: z
    .string()
    .trim()
    .min(1, "Digite seu email ou nome de usuário")
    .refine(
      (valor) =>
        valor.includes("@")
          ? z.email().safeParse(valor).success
          : REGEX_NOME_USUARIO.test(valor),
      "Email ou nome de usuário inválido",
    ),
});

type FormLogin = z.infer<typeof schema>;

function Login() {
  const { usuario, login } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormLogin>({ resolver: zodResolver(schema) });

  // Já logado? Não precisa ver o login
  if (usuario) {
    return <Navigate to="/" replace />;
  }

  async function onSubmit(dados: FormLogin) {
    try {
      await login(dados.identificador);
      navigate("/", { replace: true });
    } catch (erro) {
      setError("root", {
        message: erro instanceof Error ? erro.message : "Erro ao entrar",
      });
    }
  }

  return (
    <main className="login">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="login__form"
      >
        <h1 className="login__titulo">Agenda Posts</h1>

        <div>
          <label htmlFor="identificador" className="login__label">
            Email ou nome de usuário
          </label>
          <input
            id="identificador"
            type="text"
            autoComplete="username"
            autoCapitalize="none"
            {...register("identificador")}
            className="login__input"
          />
          {errors.identificador && (
            <p className="login__erro">{errors.identificador.message}</p>
          )}
        </div>

        {errors.root && (
          <p className="login__erro">{errors.root.message}</p>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="login__botao"
        >
          {isSubmitting ? "Entrando..." : "Entrar"}
        </button>
      </form>
    </main>
  );
}

export default Login;