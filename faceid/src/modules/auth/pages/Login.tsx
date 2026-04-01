import LoginForm from '../components/LoginForm'

function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Iniciar sesión
        </h2>

        <LoginForm />
      </div>
    </div>
  )
}

export default Login