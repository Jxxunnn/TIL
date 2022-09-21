let password = "eep";
const exceptionRegex = /ee|oo/g;
while (exceptionRegex.test(password)) {
  password = password.replace(exceptionRegex, "");
  console.log(password);
}
