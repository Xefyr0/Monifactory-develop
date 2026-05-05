/**
 * Replaces some base GregTech combustion recipes with more balanced versions.
 * Well, "balanced" in a pack where synthetic Octane and JEAN exist.
 */
ServerEvents.recipes(event => {
    // For a reference point, Gasoline is 50 ticks per mB or 1600 EU/mB.
    // Similarly, High Octane Gasoline is 100 ticks per mB or 3200 EU/mB.

    event.recipes.gtceu.combustion_generator("naphtha")
        .inputFluids("gtceu:naphtha 1")
        .duration(7)    // 30% less than default GTM, roughly the same as GTNH
        .EUt(-GTValues.V[GTValues.LV])

    event.recipes.gtceu.combustion_generator("biodiesel")
        .inputFluids("gtceu:bio_diesel 1")
        .duration(15)    // 87.5% more than default GTM
        .EUt(-GTValues.V[GTValues.LV])

    event.recipes.gtceu.combustion_generator("diesel")
        .inputFluids("gtceu:diesel 1")
        .duration(20)    // 33% more than default GTM
        .EUt(-GTValues.V[GTValues.LV])

    event.recipes.gtceu.combustion_generator("cetane_diesel")
        .inputFluids("gtceu:cetane_boosted_diesel 1")   // -50% cost compared to default GTM
        .duration(45)
        .EUt(-GTValues.V[GTValues.LV])

    event.recipes.gtceu.combustion_generator("rocket_fuel")
        .inputFluids("gtceu:rocket_fuel 8")   // -50% cost compared to default GTM
        .duration(125)
        .EUt(-GTValues.V[GTValues.LV])
})
