function reverseString(str) {
    if (str == "") {
        return str;
        
    }
    return str[str.length - 1] + reverseString(str.substring(0, str.length - 1));
}

