// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";

// export default function Login({ setIsLoggedIn }) {
//   const schema = Yup.object({
//     name: Yup.string().required("Required"),
//     email: Yup.string().email("Invalid email").required("Required"),
//     password: Yup.string().min(6).required("Required"),
//   });

//   return (
//     <div className="flex justify-center items-center h-screen bg-green-50">
//       <div className="bg-white p-8 rounded shadow w-96">
//         <h2 className="text-xl font-bold mb-4">Login</h2>

//         <Formik
//           initialValues={{ name: "", email: "", password: "" }}
//           validationSchema={schema}
//           onSubmit={() => {
//             setIsLoggedIn(true);
//           }}
//         >
//           <Form className="flex flex-col gap-3">
//             <Field name="name" placeholder="Name" className="border p-2" />
//             <ErrorMessage name="name" component="div" className="text-red-500" />

//             <Field name="email" placeholder="Email" className="border p-2" />
//             <ErrorMessage name="email" component="div" className="text-red-500" />

//             <Field type="password" name="password" placeholder="Password" className="border p-2" />
//             <ErrorMessage name="password" component="div" className="text-red-500" />

//             <button type="submit" className="bg-green-500 text-white py-2 rounded">
//               Login
//             </button>
//           </Form>
//         </Formik>
//       </div>
//     </div>
//   );
// }


import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

export default function Login({ setIsLoggedIn }) {
  const navigate = useNavigate();

  const schema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().min(6).required("Required"),
  });

  return (
    <div className="flex justify-center items-center h-screen bg-green-50">
      <div className="bg-white p-8 rounded shadow w-96">
        <h2 className="text-xl font-bold mb-4">Login</h2>

        <Formik
          initialValues={{ name: "", email: "", password: "" }}
          validationSchema={schema}
          onSubmit={() => {
            setIsLoggedIn(true); // ✅ unlock protected routes
            navigate("/");      // ✅ redirect to Home
          }}
        >
          <Form className="flex flex-col gap-3">
            <Field name="name" placeholder="Name" className="border p-2" />
            <ErrorMessage name="name" component="div" className="text-red-500" />

            <Field name="email" placeholder="Email" className="border p-2" />
            <ErrorMessage name="email" component="div" className="text-red-500" />

            <Field
              type="password"
              name="password"
              placeholder="Password"
              className="border p-2"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="text-red-500"
            />

            <button
              type="submit"
              className="bg-green-500 text-white py-2 rounded hover:bg-black transition"
            >
              Login
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}
