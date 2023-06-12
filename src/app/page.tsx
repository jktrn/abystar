'use client'

import { useState } from 'react'
import { useDisclosure } from '@chakra-ui/react'

import {
    ActiveSkillsSelect,
    AttributesTable,
    CharacterBonusToggle,
    CharacterImage,
    CharacterModal,
    CustomSelect,
    ResultsTable,
} from '@/components'

import { abilityScalings, characterBonuses, characterData } from '@/data'
import { Bonus, Character } from '@/types/Character'

import {
    calculateDamage,
    convertBaseStats,
    displayStats,
    getConstellationOptions,
    getLevelOptions,
    handleBonusToggle,
    useBaseStats,
    useActiveConstellations,
} from '@/utils'

export default function Home() {
    // Setting default values for character, ascension/talent level, constellations
    const defaultCharacter = characterData['Hu Tao']
    const [character, setCharacter] = useState<Character>(defaultCharacter)

    const [level, setLevel] = useState<string>('90/90')
    const levelOptions = getLevelOptions(character)

    const [constellation, setConstellation] = useState<string>('0')
    const constellationOptions = getConstellationOptions(character)

    const [activeSkills, setActiveSkills] = useState<string[]>([
        'Lv10', // Normal Attack
        'Lv10', // Elemental Skill
        'Lv10', // Elemental Burst
    ])

    // Other state variables
    const characters = Object.values(characterData) as Character[]
    const [activeBonuses, setActiveBonuses] = useState<Bonus[]>([])
    const initialBaseStats = convertBaseStats(character.baseStats[level])
    const [activeConstellations, setActiveConstellations] = useState<Bonus[]>(
        []
    )
    // For CharacterModal
    const { isOpen, onOpen, onClose } = useDisclosure()

    useActiveConstellations(
        character.name,
        constellation,
        setActiveConstellations
    )

    const { baseStats, updatedActiveSkills } = useBaseStats(
        character,
        level,
        activeSkills,
        activeBonuses,
        activeConstellations
    )

    // Temporary enemy resistances (will be replaced with a form)
    const enemyResistances = {
        defenseMultiplier: 50,
        resistance: 90,
    }

    const damageResults = calculateDamage(
        baseStats,
        abilityScalings,
        character,
        updatedActiveSkills,
        enemyResistances,
        activeBonuses
    )

    return (
        <div className="flex h-screen flex-col p-2 lg:flex-row">
            <div className="m-2 flex-1 rounded-lg bg-main-1000 lg:min-w-max lg:max-w-max lg:overflow-y-auto">
                <div id="character">
                    <h2 className="rounded-t-lg bg-main-800 px-4 py-3 text-lg font-bold">
                        Character
                    </h2>
                    <div className="bg-main-900 p-4">
                        <div className="flex flex-col justify-between md:flex-row">
                            <div className="flex flex-col justify-center gap-4 md:flex-row md:justify-normal">
                                <form className="flex justify-center md:justify-normal">
                                    <CharacterImage
                                        icon={character.icon}
                                        rarity={character.rarity}
                                        element={character.vision}
                                        onClick={onOpen}
                                    />
                                    <CharacterModal
                                        isOpen={isOpen}
                                        onClose={onClose}
                                        characters={characters}
                                        setCharacter={setCharacter}
                                        setActiveBonuses={setActiveBonuses}
                                    />
                                </form>
                                <div className="flex flex-col gap-2 md:gap-0">
                                    <div className="flex flex-col">
                                        <span className="flex justify-center text-xl font-bold md:justify-normal">
                                            {character.name}
                                        </span>
                                        <span className="text-md flex justify-center md:justify-normal">
                                            {'★'.repeat(character.rarity)}
                                        </span>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <div className="flex items-center justify-center gap-2">
                                            Ascension:
                                            <CustomSelect
                                                options={levelOptions}
                                                value={level}
                                                onChange={setLevel}
                                                instanceId="ascension"
                                            />
                                        </div>
                                        <div className="flex items-center justify-center gap-2">
                                            Constellation:
                                            <CustomSelect
                                                options={constellationOptions}
                                                value={constellation}
                                                onChange={setConstellation}
                                                instanceId="constellation"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <ActiveSkillsSelect
                                character={character}
                                activeSkills={updatedActiveSkills}
                                setActiveSkills={setActiveSkills}
                            />
                        </div>
                        {characterBonuses[character.name] && (
                            <div className="mt-4 flex flex-col gap-2">
                                {characterBonuses[character.name].map(
                                    (bonus) => (
                                        <CharacterBonusToggle
                                            key={bonus.name}
                                            bonus={bonus}
                                            onToggle={(bonus, bonusStacks) =>
                                                handleBonusToggle(
                                                    bonus,
                                                    bonusStacks,
                                                    activeBonuses,
                                                    setActiveBonuses,
                                                    parseInt(constellation)
                                                )
                                            }
                                            constellation={parseInt(
                                                constellation
                                            )}
                                        />
                                    )
                                )}
                            </div>
                        )}
                    </div>
                </div>

                <div id="attributes">
                    <h2 className="bg-main-800 px-4 py-3 text-lg font-bold">
                        Attributes
                    </h2>
                    <div className="bg-main-900 p-4">
                        <div className="overflow-y-auto rounded-md border border-main-700 p-2">
                            <AttributesTable
                                baseStats={baseStats}
                                displayStats={displayStats}
                                initialBaseStats={initialBaseStats}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="m-2 flex-1 rounded-lg bg-main-1000">
                <div id="weapon">
                    <h2 className="rounded-t-lg bg-main-800 px-4 py-3 text-lg font-bold">
                        Weapon
                    </h2>
                    <div className="bg-main-900 p-4">Weapon</div>
                </div>

                <div id="artifacts">
                    <h2 className="bg-main-800 px-4 py-3 text-lg font-bold">
                        Artifacts
                    </h2>

                    <div className="bg-main-900 p-4">Artifacts</div>
                </div>

                <div id="party-buffs">
                    <h2 className="bg-main-800 px-4 py-3 text-lg font-bold">
                        Party Buffs
                    </h2>
                    <div className="bg-main-900 p-4">Party Buffs</div>
                </div>
            </div>

            <div className="m-2 flex-1 rounded-lg bg-main-1000">
                <div id="results">
                    <h2 className="rounded-t-lg bg-main-800 px-4 py-3 text-lg font-bold">
                        Results
                    </h2>
                    <div className="bg-main-900 p-4">
                        <div className="overflow-auto rounded-md border border-main-700 p-2">
                            <ResultsTable damageResults={damageResults} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
