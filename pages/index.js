import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().min(8).required(),
  })
  .required();

function LoginReturn(data) {
  alert(JSON.stringify(data, undefined, 2));
}

function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  return (
    <div className="flex min-h-screen">
      <div className="flex-1 flex items-center justify-center">
        <div className="w-[50%]">
          <p className="mb-2 text-4xl font-semibold">Selamat Datang</p>
          <p className="mb-6 text-gray-500">Perumahan Tribuana Permai 1</p>
          <form
            className="flex flex-col gap-y-2"
            onSubmit={handleSubmit(LoginReturn)}
          >
            <label className="font-semibold text-sm">Email</label>
            <input
              className="border py-1 px-2 rounded-lg"
              placeholder="tribuana@gmail.com"
              {...register("email")}
            />
            <p className="text-rose-500">{errors.email?.message}</p>
            <label className="font-semibold text-sm">Password</label>
            <input
              className="border py-1 px-2 rounded-lg"
              placeholder="password"
              {...register("password")}
            />
            <p className="text-rose-500">{errors.password?.message}</p>
            <button className="bg-black hover:shadow-xl transition duration-300 text-white py-2 rounded-xl text-sm block">
              Masuk
            </button>
          </form>
        </div>
      </div>
      <div
        className="flex-1 bg-slate-50 relative"
        style={{
          background: "url(/bg-page.jpg)",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute left-10 right-10 bottom-10 backdrop-blur-xl p-10 text-black">
          <p className="mb-1">
            Jl. Kp. Gabus Rawa, RT.004/RW.006, Srijaya, Kec. Tambun Utara,
            Kabupaten Bekasi, Jawa Barat 17510
          </p>
          <p className="text-xl text-right font-semibold">TRIBUANA PERMAI 1</p>
        </div>
      </div>
    </div>
  );
}
export default Login;
