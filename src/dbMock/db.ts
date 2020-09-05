import users from "./users";

function find(name: string) {
  const checkName = new RegExp("[a-zA-Z]+", "i");
  if(!name || !(checkName.test(name))) return users;
  if(name)
    return users.filter(user => (user.name && user.name.includes(name))) 
}

export default { find };