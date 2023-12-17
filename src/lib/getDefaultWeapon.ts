import { Weapon } from '@/interfaces/Weapon'
import { kebabCase } from '.'

async function getDefaultWeapon(weaponType: string): Promise<Weapon> {
    const defaultWeaponNames = {
        Sword: 'Dull Blade',
        Claymore: 'Waster Greatsword',
        Polearm: "Beginner's Protector",
        Bow: "Hunter's Bow",
        Catalyst: "Apprentice's Notes",
    }

    const weaponName =
        defaultWeaponNames[weaponType as keyof typeof defaultWeaponNames]
    if (!weaponName) {
        throw new Error(`No default weapon found for weapon type: ${weaponType}`)
    }

    const weaponModule = await import(`@/data/weapons/${kebabCase(weaponName)}.tsx`)
    return weaponModule.default
}

export default getDefaultWeapon
