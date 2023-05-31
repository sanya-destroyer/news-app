

const isWordInString = (word: string, string: string) => {
    return string.toLowerCase().split(" ").some((stringWord) => stringWord === word.toLowerCase());
}

export default isWordInString;
