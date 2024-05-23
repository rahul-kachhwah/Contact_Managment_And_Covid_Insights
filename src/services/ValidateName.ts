const ValidateName = (name: string) => {
    if (name.length < 2 || name.length > 50) {
      return "Name must be between 2 and 50 characters long.";
    }
    return null;
  };
  
  export default ValidateName;