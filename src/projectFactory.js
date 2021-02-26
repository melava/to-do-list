//factory
const Project = (type, name, id) => {
    this.type = type;
    this.name = name;
    this.id = id;
    
    return { type , name , id }
};

export { Project }