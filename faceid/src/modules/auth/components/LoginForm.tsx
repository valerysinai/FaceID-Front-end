function LoginForm() {
  return (
    <form className="space-y-4">
      <input
        type="email"
        placeholder="Correo"
        className="w-full p-2 border rounded-lg"
      />

      <input
        type="password"
        placeholder="Contraseña"
        className="w-full p-2 border rounded-lg"
      />

      <button
        type="submit"
        className="w-full bg-blue-500 text-white p-2 rounded-lg"
      >
        Entrar
      </button>
    </form>
  )
}

export default LoginForm