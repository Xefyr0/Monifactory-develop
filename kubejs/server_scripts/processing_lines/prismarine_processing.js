/**
 * Processing line for Prismarine (Previously Guardian Scales)
 */
ServerEvents.recipes(event => {
    event.recipes.gtceu.mixer("prismarine_slurry_mix")
        .itemInputs("6x minecraft:prismarine_shard")
        .inputFluids("gtceu:aqua_regia 3000",)
        .outputFluids("gtceu:prismarine_slurry 5000")
        .duration(14 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    // Malachite and Cobalt Oxide are the useful minerals from which Guardian Scales derive their hue
    // Antimony Trifluoride added as a nice byproduct to have
    event.recipes.gtceu.centrifuge("prismarine_slurry_centrifuge")
        .inputFluids("gtceu:prismarine_slurry 5000")
        .itemOutputs("2x gtceu:cupric_oxide_dust")
        .chancedOutput("gtceu:copper_iodide_dust", 7000, 0)
        .chancedOutput("gtceu:cobalt_oxide_dust", 6000, 0)
        .chancedOutput("gtceu:antimony_trifluoride_dust", 3000, 0)
        .outputFluids("gtceu:chitinous_mixture 3000")
        .duration(10 * GTValues.SECONDS)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.cracker("crack_chitinous_mixture")
        .inputFluids("gtceu:chitinous_mixture", "#forge:steam 1000")
        .outputFluids("gtceu:cracked_chitinous_mixture")
        .duration(4 * GTValues.SECONDS)
        .EUt(GTValues.VA[GTValues.MV])

    // Acetic Acid and Glucosamine come from breaking up Chitin via hydrogenolysis in the Cracker
    // Nitrosyl Chloride and Diluted Hydrochloric Acid are the products of Aqua Regia transformed in the reaction
    event.recipes.gtceu.distillation_tower("chitinous_mixture_distillation")
        .inputFluids("gtceu:cracked_chitinous_mixture 3000")
        .itemOutputs("gtceu:glucosamine_dust")
        .outputFluids("gtceu:acetic_acid 1000", "gtceu:hydrochloric_acid 1500", "minecraft:water 750", "gtceu:nitrosyl_chloride 500", "gtceu:ammonia 500")
        .duration(10 * GTValues.SECONDS)
        .EUt(GTValues.VA[GTValues.LV])
})
