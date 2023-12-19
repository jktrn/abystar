'use client'

import {
    AttributesTable,
    CharacterBonuses,
    CharacterImage,
    CharacterModal,
    ConstellationPopover,
    CustomSelect,
    DamageTable,
    TalentSelect,
    WeaponAttributes,
    WeaponImage,
    WeaponModal,
} from '@/components'
import WeaponBonuses from '@/components/WeaponBonuses'
import {
    Character,
    CharacterAttributes,
    CharacterState,
    DamageResult,
} from '@/interfaces/Character'
import {
    applySpecialBonuses,
    calculateDamage,
    defaultCharacterAttributes,
    getConstellationOptions,
    getDefaultWeapon,
    getLevelOptions,
    getRefinementOptions,
    getUpdatedBonuses,
    kebabCase,
    recalculateStateAndAttributes,
} from '@/lib'
import { useEffect, useState } from 'react'

export default function Home() {
    const [characterState, setCharacterState] = useState<CharacterState | null>(null)
    const [characterAttributes, setCharacterAttributes] =
        useState<CharacterAttributes | null>(null)
    const [isCharacterModalOpen, setCharacterModalOpen] = useState(false)
    const [isWeaponModalOpen, setWeaponModalOpen] = useState(false)
    const [damageResults, setDamageResults] = useState<DamageResult[] | null>(null)

    const handleCharacterSelect = async (selectedCharacter: Character) => {
        const defaultWeapon = await getDefaultWeapon(selectedCharacter.weapon)

        try {
            const initialState: CharacterState = {
                character: selectedCharacter,
                characterLevel: '90/90',
                characterConstellation: 0,
                characterActiveBonuses: selectedCharacter.characterBonuses.filter(
                    (bonus) => bonus.enabled ?? false
                ),
                // User-selected talent levels (capped at 1-10)
                characterTalentLevels: [10, 10, 10],
                // Talent levels post-bonus (e.g. C3, C5, Childe passive)
                effectiveTalentLevels: [10, 10, 10],
                weapon: defaultWeapon,
                weaponLevel: Object.keys(defaultWeapon.baseStats).at(-1) ?? '90/90',
                weaponRefinement: 1,
            }

            const [updatedState, updatedAttributes] =
                recalculateStateAndAttributes(initialState)

            setCharacterState(updatedState)
            setCharacterAttributes(updatedAttributes)
            setCharacterModalOpen(false)
        } catch (error) {
            console.error('Error loading character data:', error)
        }
    }

    // Handling any changes user makes to character state
    const updateCharacterState = (updates: Partial<CharacterState>) => {
        setCharacterState((previousState) => {
            if (previousState === null) return null

            const modifiedState = { ...previousState, ...updates }
            const updatedBonuses = getUpdatedBonuses(modifiedState)
            modifiedState.characterActiveBonuses = updatedBonuses

            const [updatedState, newAttributes] =
                recalculateStateAndAttributes(modifiedState)
            setCharacterAttributes(newAttributes)

            return updatedState
        })
    }

    useEffect(() => {
        if (characterState && characterAttributes) {
            const newDamageResults = calculateDamage(
                characterState,
                characterAttributes,
                ENEMY_RESISTANCES
            )
            setDamageResults(newDamageResults)
            console.log('Damage Results: ', newDamageResults)
        }
    }, [characterState, characterAttributes])

    useEffect(() => {
        console.log('Character State has been updated: ', characterState)
    }, [characterState])

    useEffect(() => {
        console.log('Character Attributes have been updated: ', characterAttributes)
    }, [characterAttributes])

    return (
        <>
            <main className="flex h-screen flex-col p-2 lg:flex-row lg:overflow-y-hidden">
                {characterState && (
                    <>
                        <div className="m-2 flex-1 rounded-lg border lg:min-w-max lg:overflow-auto">
                            <div className="flex flex-col rounded-lg">
                                <h2 className="rounded-t-lg border-b bg-secondary/25 px-4 py-3 text-lg font-bold">
                                    Character
                                </h2>
                                <div className="flex flex-col gap-4 p-4">
                                    <div className="flex flex-col justify-between md:flex-row">
                                        <div className="flex flex-col justify-center gap-4 md:flex-row md:justify-normal">
                                            <form className="flex justify-center md:justify-normal">
                                                <CharacterImage
                                                    characterState={characterState}
                                                    onClick={() =>
                                                        setCharacterModalOpen(true)
                                                    }
                                                />
                                            </form>
                                            <div className="flex flex-col gap-2">
                                                <div className="flex flex-col">
                                                    <span className="flex justify-center text-xl font-bold md:justify-normal">
                                                        {
                                                            characterState.character
                                                                .name
                                                        }
                                                    </span>
                                                    <span className="text-md flex justify-center text-muted-foreground md:justify-normal">
                                                        {'★'.repeat(
                                                            characterState.character
                                                                .rarity
                                                        )}
                                                    </span>
                                                </div>
                                                <div className="ml-auto mr-auto flex max-w-max flex-col items-center gap-2 md:items-start">
                                                    <div className="flex items-center gap-2">
                                                        Ascension:
                                                        <CustomSelect
                                                            // Changing keys forces re-render
                                                            key={`character-level-select-${kebabCase(
                                                                characterState.characterLevel
                                                            )}`}
                                                            options={getLevelOptions(
                                                                characterState.character
                                                            )}
                                                            value={
                                                                characterState.characterLevel
                                                            }
                                                            onChange={(newLevel) =>
                                                                updateCharacterState(
                                                                    {
                                                                        characterLevel:
                                                                            newLevel,
                                                                    }
                                                                )
                                                            }
                                                        />
                                                    </div>
                                                    <div className="flex items-center gap-2 md:hidden">
                                                        Constellation:
                                                        <CustomSelect
                                                            key={`constellation-select-${kebabCase(
                                                                characterState.characterConstellation.toString()
                                                            )}`}
                                                            options={getConstellationOptions(
                                                                characterState.character
                                                            )}
                                                            value={characterState.characterConstellation.toString()}
                                                            onChange={(
                                                                newConstellation
                                                            ) =>
                                                                updateCharacterState(
                                                                    {
                                                                        characterConstellation:
                                                                            parseInt(
                                                                                newConstellation,
                                                                                10
                                                                            ),
                                                                    }
                                                                )
                                                            }
                                                        />
                                                    </div>
                                                    <div
                                                        className="hidden md:flex md:w-full md:items-center"
                                                        key={`constellation-select-${kebabCase(
                                                            characterState.characterConstellation.toString()
                                                        )}`}
                                                    >
                                                        Constellation:
                                                        <ConstellationPopover
                                                            characterState={
                                                                characterState
                                                            }
                                                            onChange={(
                                                                newConstellation
                                                            ) =>
                                                                updateCharacterState(
                                                                    {
                                                                        characterConstellation:
                                                                            newConstellation,
                                                                    }
                                                                )
                                                            }
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <TalentSelect
                                            characterState={characterState}
                                            setTalentLevels={(newTalentLevels) =>
                                                updateCharacterState({
                                                    characterTalentLevels:
                                                        newTalentLevels,
                                                })
                                            }
                                        />
                                    </div>
                                    <CharacterBonuses
                                        characterState={characterState}
                                        setActiveBonuses={(newActiveBonuses) =>
                                            updateCharacterState({
                                                characterActiveBonuses:
                                                    newActiveBonuses,
                                            })
                                        }
                                    />
                                </div>

                                <h2 className="border-y bg-secondary/25 px-4 py-3 text-lg font-bold">
                                    Attributes
                                </h2>
                                <AttributesTable
                                    characterAttributes={characterAttributes}
                                    initialAttributes={applySpecialBonuses({
                                        ...defaultCharacterAttributes,
                                        ...characterState.character.baseStats[
                                            characterState.characterLevel
                                        ],
                                    })}
                                />
                            </div>
                        </div>

                        <div className="m-2 flex-1 rounded-lg border lg:min-w-max lg:overflow-auto">
                            <h2 className="rounded-t-lg border-b bg-secondary/25 px-4 py-3 text-lg font-bold">
                                Weapon
                            </h2>
                            <div className="flex flex-col gap-4 p-4">
                                <div className="flex flex-col justify-between md:flex-row">
                                    <div className="flex w-full flex-col justify-center gap-4 md:flex-row md:justify-normal">
                                        <form className="flex justify-center md:justify-normal">
                                            <WeaponImage
                                                characterState={characterState}
                                                onClick={() =>
                                                    setWeaponModalOpen(true)
                                                }
                                            />
                                        </form>
                                        <div className="flex w-full flex-col items-center gap-2 md:items-start">
                                            <div className="flex w-full flex-col">
                                                <span className="text-center text-xl font-bold md:line-clamp-1 md:justify-normal md:text-left">
                                                    {characterState.weapon.name}
                                                </span>
                                                <span className="text-md flex justify-center text-muted-foreground md:justify-normal">
                                                    {'★'.repeat(
                                                        characterState.weapon.rarity
                                                    )}
                                                </span>
                                            </div>
                                            <div className="flex justify-between gap-4 lg:w-full">
                                                <div className="flex max-w-max flex-col items-center gap-2 md:items-start">
                                                    <div className="space-between flex w-full items-center gap-2">
                                                        Ascension:
                                                        <CustomSelect
                                                            key={`weapon-level-select-${kebabCase(
                                                                characterState.weaponLevel
                                                            )}`}
                                                            options={getLevelOptions(
                                                                characterState.weapon
                                                            )}
                                                            value={
                                                                characterState.weaponLevel
                                                            }
                                                            onChange={(newLevel) =>
                                                                updateCharacterState(
                                                                    {
                                                                        weaponLevel:
                                                                            newLevel,
                                                                    }
                                                                )
                                                            }
                                                        />
                                                    </div>
                                                    <div className="space-between flex w-full items-center gap-2">
                                                        Refinement:
                                                        <CustomSelect
                                                            key={`constellation-select-${kebabCase(
                                                                characterState.weaponRefinement.toString()
                                                            )}`}
                                                            options={getRefinementOptions(
                                                                characterState.weapon
                                                            )}
                                                            value={characterState.weaponRefinement.toString()}
                                                            onChange={(
                                                                newRefinement
                                                            ) =>
                                                                updateCharacterState(
                                                                    {
                                                                        weaponRefinement:
                                                                            parseInt(
                                                                                newRefinement
                                                                            ),
                                                                    }
                                                                )
                                                            }
                                                        />
                                                    </div>
                                                </div>
                                                <WeaponAttributes
                                                    characterState={characterState}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-end">
                                        {/* {characterState.weapon &&
                                            characterState.weaponLevel &&
                                            (
                                                <>
                                                    <p>
                                                        {
                                                            Object.values(
                                                                characterState.weapon
                                                                    .baseStats[
                                                                characterState
                                                                    .weaponLevel
                                                                ]
                                                            )[0]
                                                        }
                                                    </p>
                                                    {Object.values(characterState.weapon.baseStats[characterState.weaponLevel])[1] && (
                                                        <p>
                                                            {
                                                                Object.values(
                                                                    characterState.weapon
                                                                        .baseStats[
                                                                    characterState
                                                                        .weaponLevel
                                                                    ]
                                                                )[1]
                                                            }
                                                        </p>
                                                    )}
                                                </>
                                            )} */}
                                    </div>
                                </div>
                                <WeaponBonuses
                                    characterState={characterState}
                                    setActiveBonuses={(newActiveBonuses) =>
                                        updateCharacterState({
                                            characterActiveBonuses: newActiveBonuses,
                                        })
                                    }
                                />
                            </div>
                            <h2 className="border-y bg-secondary/25 px-4 py-3 text-lg font-bold">
                                Artifacts
                            </h2>

                            <div className="p-4">Artifacts</div>

                            <h2 className="border-y bg-secondary/25 px-4 py-3 text-lg font-bold">
                                Party Buffs
                            </h2>
                            <div className="p-4">Party Buffs</div>
                        </div>

                        <div className="m-2 flex-1 rounded-lg lg:min-w-max lg:overflow-auto">
                            <div className="flex h-full flex-col rounded-lg border">
                                <h2 className="rounded-t-lg border-b bg-secondary/25 px-4 py-3 text-lg font-bold">
                                    Results
                                </h2>
                                <div className="overflow-auto">
                                    <DamageTable damageResults={damageResults} />
                                </div>
                            </div>
                        </div>
                    </>
                )}
                <CharacterModal
                    open={isCharacterModalOpen}
                    onOpenChange={setCharacterModalOpen}
                    setCharacter={handleCharacterSelect}
                />
                <WeaponModal
                    open={isWeaponModalOpen}
                    onOpenChange={setWeaponModalOpen}
                    setWeapon={(selectedWeapon) => {
                        const supportsRefinement =
                            selectedWeapon.baseStats['90/90'] !== undefined

                        // Update state with the new weapon and appropriate refinement level
                        updateCharacterState({
                            weapon: selectedWeapon,
                            weaponLevel:
                                Object.keys(selectedWeapon.baseStats).at(-1) ??
                                '90/90',
                            weaponRefinement: supportsRefinement
                                ? characterState?.weaponRefinement
                                : 1,
                        })
                        setWeaponModalOpen(false)
                    }}
                    characterWeaponType={characterState?.character.weapon}
                />
            </main>
        </>
    )
}

//TODO: Add form for enemy resistances
const ENEMY_RESISTANCES = {
    defenseMultiplier: 0.5,
    resistance: 0.9,
}
