import React, { useEffect, useState, useRef } from "react";
import Title from "./Title";
import { v4 as uuidv4 } from "uuid";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Filler = () => {
  const [form, setform] = useState({
    site: "",
    username: "",
    password: "",
  });

  const [showPass, setshowPass] = useState(true);

  const [passArray, setPassArray] = useState([]);

  useEffect(() => {
    let passwords = localStorage.getItem("passwords");
    if (passwords) {
      setPassArray(JSON.parse(passwords));
    }
  }, []);

  const ref = useRef();
  const changePassIcon = (e) => {
    setshowPass(!showPass);
  };

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form submission

    // Check if all fields are filled
    if (form.site.trim() === "" || form.username.trim() === "" || form.password.trim() === "") {
      toast.error("Please fill in all fields", {
        className: "toast-message-error",
      });
      return;
    }
    setPassArray([...passArray, { ...form, id: uuidv4() }]);
    setform({ site: "", username: "", password: "" });
    localStorage.setItem(
      "passwords",
      JSON.stringify([...passArray, { ...form, id: uuidv4() }])
    );
    toast("ho gya re save😂", {
      className: "toast-message-edit",
    });
    console.log([...passArray, form]);
  };

  const editRow = (id) => {
    // alert("edit is clicked"+id);
    toast("Shi krle bhai", {
      className: "toast-message-edit",
    });
    setform(passArray.filter((i) => i.id === id)[0]);
    setPassArray(passArray.filter((item) => item.id !== id));
  };
  const deleteRow = (id) => {
    // alert("delete is clicked"+id);
    toast("khtm tata bye-bye!", {
      className: "toast-message-dlt",
    });
    setPassArray(passArray.filter((item) => item.id !== id));
    localStorage.setItem(
      "passwords",
      JSON.stringify(passArray.filter((item) => item.id !== id))
    );
  };

  const copyy = (text)=>{
    toast("Copied to clipboard!", {
      className: "toast-message-copy",
    });
    navigator.clipboard.writeText(text);
  }

  return (
    <div className="mb-5 min-h-[77.5vh]">
      <Title />
      <div className="flex justify-center items-center flex-col text-green-800">
        <div className="max-w-4xl w-full md:w-3/4 lg:w-1/2  m-4 p-6 rounded-lg">
          <div className="flex justify-center items-center mb-4 ">
            <input
              onChange={handleChange}
              value={form.site}
              name="site"
              className="border border-green-800 w-full p-2 rounded-lg"
              type="text"
              placeholder="Enter the website"
              
            />
          </div>
          <div className="relative flex flex-col gap-10 md:flex-row md:justify-between">
            <input
              onChange={handleChange}
              value={form.username}
              name="username"
              className="border border-green-800 w-full md:w-1/2 mb-4 md:mb-0 p-2 rounded-lg"
              type="text"
              placeholder="Enter the username"
            />
            <input
              onChange={handleChange}
              value={form.password}
              name="password"
              className="border border-green-800 w-full md:w-1/2 p-2 rounded-lg"
              type={showPass ? "text" : "password"}
              placeholder="Enter the password"
            />
            <img
              onClick={changePassIcon}
              ref={ref}
              className="absolute top-1/2 transform -translate-y-1/2 right-2 w-8 cursor-pointer"
              src={showPass ? "./eye.png" : "./hidden.png"}
              alt="show"
            />
          </div>
          <div className="flex justify-center ">
            <button
              onClick={handleSubmit}
              className=" flex items-center gap-3 text-black transition duration:0 hover:duration-500 hover:bg-green-400 hover:text-white w-auto h-auto p-3 px-5 font-semibold text-2xl rounded-xl m-5 bg-green-400"
            >
              <lord-icon
                src="https://cdn.lordicon.com/jgnvfzqg.json"
                trigger="hover"
                colors="primary:#8930e8"
              ></lord-icon>
              Add Password
            </button>
          </div>
          <div className="text-3xl  ">Your PassWords:</div>
        </div>
        {passArray.length === 0 && <div>You have no passwords</div>}
        {passArray.length != 0 && (
          <table className="table-auto w-[50%] border-collapse border border-green-800 overflow-hidden rounded-xl text-center bg-green-200   text-lg text-black">
            <thead className="bg-green-500 text-white font-extrabold">
              <tr>
                <th className=" px-4 py-2">Site</th>
                <th className=" px-4 py-2">UserName</th>
                <th className=" px-4 py-2">PassWord</th>
                <th className=" px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody className="text-black">
              {passArray.map((item, index) => {
                return (
                  <tr key={item.id}>
                    <td className=" px-4 py-2">
                      <div className="flex justify-center items-center">
                        <a target="_blank" href={item.site}>
                          {item.site}
                        </a>
                        <lord-icon
                          onClick={(e) => {
                            e.stopPropagation(); // Stop event propagation
                            copyy(item.site);
                          }}
                          src="https://cdn.lordicon.com/rnxtcirm.json"
                          trigger="hover"
                          colors="primary:#121331,secondary:#66ee78,tertiary:#606874"
                          style={{"cursor":"pointer"}}
                        ></lord-icon>
                        
                      </div>
                    </td>
                    <td className=" px-4 py-2">
                      <div className="flex justify-center items-center">
                        {item.username}
                        <lord-icon
                          onClick={(e) => {
                            e.stopPropagation(); // Stop event propagation
                            copyy(item.username);
                          }}
                          src="https://cdn.lordicon.com/rnxtcirm.json"
                          trigger="hover"
                          colors="primary:#121331,secondary:#66ee78,tertiary:#606874"
                          // style={{"margin-top":"2px"}}
                          style={{"cursor":"pointer"}}
                        ></lord-icon>
                      </div>
                    </td>
                    <td className=" px-4 py-2">
                      <div className="flex justify-center items-center ">
                        {item.password}
                        <lord-icon
                          onClick={(e) => {
                            e.stopPropagation(); // Stop event propagation
                            copyy(item.password);
                          }}
                          src="https://cdn.lordicon.com/rnxtcirm.json"
                          trigger="hover"
                          colors="primary:#121331,secondary:#66ee78,tertiary:#606874"
                          style={{"cursor":"pointer"}}
                        ></lord-icon>
                      </div>
                    </td>
                    <td className="flex gap-3 justify-center items-center">
                      <lord-icon
                        onClick={() => {
                          editRow(item.id);
                        }}
                        src="https://cdn.lordicon.com/wuvorxbv.json"
                        trigger="hover"
                        stroke="bold"
                        state="hover-line"
                        style={{ cursor: "pointer" }}
                      ></lord-icon>
                      <lord-icon
                        onClick={() => {
                          deleteRow(item.id);
                        }}
                        src="https://cdn.lordicon.com/hjbrplwk.json"
                        trigger="hover"
                        colors="primary:#646e78,secondary:#6c16c7,tertiary:#ebe6ef,quaternary:#3a3347"
                        style={{ cursor: "pointer" }}
                      ></lord-icon>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Filler;
