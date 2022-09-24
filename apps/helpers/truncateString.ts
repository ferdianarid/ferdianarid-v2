const truncateString = (character: string) => {
    if (character.length <= 15) {
        return character
    }
    return character.slice(0, 15) + "..."
}

export default truncateString