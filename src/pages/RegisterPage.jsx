import { useForm } from "react-hook-form"

const RegisterPage = () => {
    const { register, handleSubmit } = useForm();

    return (
        <div className="bg-zinc-800 max-w-md p-10 rounded-md">
            <form onSubmit={handleSubmit((values) => console.log(values))}>
                <input type="text" {...register("username", { required: true })} placeholder="username" className="w-full bg-zinc-700 text-white px-4 py-2 my-2 rounded-md" />
                <input type="email" {...register("email", { required: true })} placeholder="email" className="w-full bg-zinc-700 text-white px-4 py-2 my-2 rounded-md" />
                <input type="password" {...register("password", { required: true })} placeholder="password" className="w-full bg-zinc-700 text-white px-4 py-2 my-2 rounded-md" />
                <button type="submit">
                    Register
                </button>
            </form>
        </div>
    )
}
export default RegisterPage