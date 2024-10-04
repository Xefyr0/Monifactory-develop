/*
Creates Forming Press recipes for all tiers of Gregtech Credits, 
and Numismatic Dynamo fuel recipes for the same.

Obviously energy positive for all tiers, but even Neutronium credits only give 1-2A HV.
How is this useful, then? Highly energy-dense fuel setup at all tiers for remote outposts.
Also, consistency with the Thermal Expansion coins.
*/
ServerEvents.recipes(event => {
    //Remove the one forming press recipe
    event.remove({ id: 'gtceu:forming_press/credit_cupronickel'})

    const metals = [
        'copper',
        'cupronickel',
        'silver',
        'gold',
        'platinum',
        'osmium',
        'naquadah',
        'neutronium'
    ]

    for (let index = 0; index < metals.length; index++) {
        let energyOut = 1000 * Math.pow(4, index);
        let energyIn = 1600 * Math.pow(4, index);

        //Create the coin fuel recipes
        event.custom({
            type: "thermal:numismatic_fuel",
            ingredient: {
                item: `gtceu:${metals[index]}_credit`
            },
            energy: energyOut
        })

        //Create recipes for said coins
        event.recipes.gtceu.forming_press(`gtceu:forming_press/${metals[index]}_credit`)
            .notConsumable('gtceu:credit_casting_mold')
            .itemInputs(`gtceu:${metals[index]}_plate`)
            .itemOutputs(`4x gtceu:${metals[index]}_credit`)
            .EUt(energyIn/(20 * 5))
            .duration(20 * 5)
    }
})