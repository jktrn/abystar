export function formatCharacterName(character: string) {
    const formattedCharacter = character
        .split('-')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
    if (formattedCharacter.startsWith('Traveler')) {
        return formattedCharacter.replace(' ', ' (') + ')'
    }
    return formattedCharacter
}
