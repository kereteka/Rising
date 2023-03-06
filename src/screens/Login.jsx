import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const users = [{ username: "John.snow@gmail.com", password: "123" }];
  const [authenticated, setauthenticated] = useState(
    localStorage.getItem("authenticated") || false
  );
  const navigate = useNavigate();

  useEffect(() => {
    if (authenticated === "true") {
      navigate("/main");
    }
    const rememberedAccount = JSON.parse(
      localStorage.getItem("rememberedAccount")
    );
    if (
      rememberedAccount &&
      rememberedAccount.email &&
      rememberedAccount.password
    ) {
      setFormData({
        email: rememberedAccount.email,
        password: rememberedAccount.password,
        rememberMe: true,
      });
    }
  }, [authenticated, navigate]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setFormData({ ...formData, [name]: newValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const account = users.find((user) => user.username === formData.email);
    if (account && account.password === formData.password) {
      setauthenticated(true);
      localStorage.setItem("authenticated", true);
      if (formData.rememberMe) {
        localStorage.setItem(
          "rememberedAccount",
          JSON.stringify({
            email: formData.email,
            password: formData.password,
          })
        );
      }
      navigate("/main");
    } else {
      setFormData({ email: "", password: "", rememberMe: false });

      alert("Wrong, please enter John.snow@gmail.com / 123");
    }
  };

  return (
    <div className="w-screen h-screen flex">
      <div className="w-1/2 h-full bg-[#FFDBDB] hidden sm:block "></div>
      <div className="w-full sm:w-1/2 h-full bg-white flex items-center">
        <div className="w-[350px] mx-auto px-4 py-8">
          <p className="font-extralight">Welcome back</p>
          <h1 className="text-2xl font-semibold font-grotesk mb-4 mt-4 ">
            Login to your account
          </h1>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="my-4 mt-10">
              <label
                htmlFor="email"
                className="block font-light mb-1 text-[#4A5568]"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="John.snow@gmail.com"
                className="w-full px-6 p-4 border border-[#E8E8E8] rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder:text-black"
                required
              />
            </div>

            <div className="my-4 mt-10">
              <label
                htmlFor="password"
                className="block font-light mb-1 text-[#4A5568]"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="********"
                className="w-full px-6 p-4 border border-[#E8E8E8] rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder:text-black"
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center my-4">
                <input
                  type="checkbox"
                  id="rememberMe"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleInputChange}
                  className="mr-2"
                />
                <label htmlFor="rememberMe" className="text-sm ">
                  Remember me
                </label>
              </div>
              <div className="text-center text-sm">
                <a href="#" className="text-[#02A0FC] hover:underline ">
                  Forgot password?
                </a>
              </div>
            </div>

            <div className="my-4">
              <button
                type="submit"
                className="w-full px-4 py-2 h-[50px] text-white bg-[#02A0FC] rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Login Now
              </button>
            </div>

            <div className="text-center mt-4 text-sm font-grotesk">
              <span>Don't have an account? </span>
              <a href="#" className="text-[#02A0FC] hover:underline">
                Join free today
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
