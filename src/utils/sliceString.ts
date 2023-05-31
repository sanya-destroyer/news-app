

const sliceString = (string: string, maxLength: number) => {
    if( string.length < maxLength ) return string;

    const trimmedString = string.substring(0, maxLength);

    return trimmedString.substring(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" ")));
}

export default sliceString;
