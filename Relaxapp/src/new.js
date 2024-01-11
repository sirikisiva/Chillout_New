// if (password.value === "" || password.value === undefined || password.value === null) {
//     setPassword({
//       ...password,
//       errorActive: true,
//       errorMessage: "Enter registered password ",
//     });
//   } else if (password.value.match(regex[1].password)) {
//     setPassword({
//       ...password,
//       errorActive: false,
//       errorMessage: "validpassword",
//     });
//     console.log(`It's a Match ${password.errorMessage} `);
//   } else {
//     setPassword({
//       ...password,
//       errorActive: true,
//       errorMessage: "Please enter valid password ID",
//     });
//     console.log(
//       `It's not a Matched ${password.errorMessage}  ${password.errorActive}`
//     );
//   }
// };