const validateUppercase = (name) => {
    const currentFirstLetter = name.charAt(0);
    const uppercaseFirstLetter = currentFirstLetter.toUpperCase();
  
    if (currentFirstLetter !== uppercaseFirstLetter) {
      return false;
    }
  
    const slicedName = name.slice(1);
    let isValid = true;
  
    for (let i = 0; i < slicedName.length; i++) {
      const char = slicedName[i];
      const uppercasedChar = char.toUpperCase();
  
      if (char === uppercasedChar) {
        isValid = false;
        break;
      }
    }
  
    return isValid;
  };
  
  function validateName(name) {
    if (!name) {
      return false;
    }
  
    const isUppercaseValid = validateUppercase(name);
    return isUppercaseValid;
  }
  
  const names = ["John", "JaNe", "mark", "Mike", "MaRy"];
  
  names.forEach((name, i) => {
    const isValid = validateName(name);
    console.log(isValid, name);
  });