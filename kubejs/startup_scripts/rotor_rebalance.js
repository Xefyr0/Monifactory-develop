/*
 * Rebalance turbine power and fuel efficiency across the board to pair with durability being mixin'd out of existence.
 */
const $RotorProperty = Java.loadClass("com.gregtechceu.gtceu.api.data.chemical.material.properties.RotorProperty")
const $MoniMaterials = Java.loadClass("net.neganote.monilabs.common.data.materials.MoniMaterials")

GTCEuStartupEvents.materialModification(event => {
    // Existing rotors
    GTMaterials.Ultimet.getProperty(PropertyKey.ROTOR)// .setDurability(6500)              // Now 240000, Previously 113600
    GTMaterials.Osmiridium.getProperty(PropertyKey.ROTOR)
    GTMaterials.Bronze.getProperty(PropertyKey.ROTOR)
    GTMaterials.Invar.getProperty(PropertyKey.ROTOR)
    GTMaterials.Steel.getProperty(PropertyKey.ROTOR)
    GTMaterials.Tritanium.getProperty(PropertyKey.ROTOR)
    GTMaterials.Osmium.getProperty(PropertyKey.ROTOR)
    GTMaterials.BlackBronze.getProperty(PropertyKey.ROTOR)
    GTMaterials.Chromium.getProperty(PropertyKey.ROTOR)
    GTMaterials.VanadiumSteel.getProperty(PropertyKey.ROTOR)
    GTMaterials.Naquadah.getProperty(PropertyKey.ROTOR)
    GTMaterials.RhodiumPlatedPalladium.getProperty(PropertyKey.ROTOR)
    GTMaterials.HSSG.getProperty(PropertyKey.ROTOR)
    GTMaterials.StainlessSteel.getProperty(PropertyKey.ROTOR)
    GTMaterials.Neutronium.getProperty(PropertyKey.ROTOR)
    GTMaterials.HSSS.getProperty(PropertyKey.ROTOR)
    GTMaterials.HSSE.getProperty(PropertyKey.ROTOR)
    GTMaterials.NaquadahAlloy.getProperty(PropertyKey.ROTOR)
    GTMaterials.Iridium.getProperty(PropertyKey.ROTOR)
    GTMaterials.TungstenSteel.getProperty(PropertyKey.ROTOR)
    GTMaterials.Aluminium.getProperty(PropertyKey.ROTOR)
    GTMaterials.Titanium.getProperty(PropertyKey.ROTOR)
    GTMaterials.BismuthBronze.getProperty(PropertyKey.ROTOR)
    GTMaterials.TungstenCarbide.getProperty(PropertyKey.ROTOR)

    // New turbine rotors from existing GT Materials
    let DarmstadtiumTurbineProperty = new $RotorProperty(240, 120, 7.0, 10240)
    GTMaterials.Darmstadtium.setProperty(PropertyKey.ROTOR, DarmstadtiumTurbineProperty)

    let CrystalMatrixTurbineProperty = new $RotorProperty(200, 270, 6.0, 10240)
    $MoniMaterials.CrystalMatrix.setProperty(PropertyKey.ROTOR, CrystalMatrixTurbineProperty)
})
