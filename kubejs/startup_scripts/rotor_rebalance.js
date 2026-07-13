/*
 * Rebalance turbine power and fuel efficiency across the board to pair with durability being mixin'd out of existence.
 */
const $RotorProperty = Java.loadClass("com.gregtechceu.gtceu.api.data.chemical.material.properties.RotorProperty")
const $MoniMaterials = Java.loadClass("net.neganote.monilabs.common.data.materials.MoniMaterials")

GTCEuStartupEvents.materialModification(event => {
    // Existing rotors
    GTMaterials.Ultimet.getProperty(PropertyKey.ROTOR).setEfficiency(90)           // nerf
    GTMaterials.Osmiridium.getProperty(PropertyKey.ROTOR).setEfficiency(200)
    GTMaterials.Osmiridium.getProperty(PropertyKey.ROTOR).setPower(170)  // buff
    GTMaterials.Naquadah.getProperty(PropertyKey.ROTOR).setPower(190)               // buff
    GTMaterials.RhodiumPlatedPalladium.getProperty(PropertyKey.ROTOR).setEfficiency(200)    // buff
    GTMaterials.HSSG.getProperty(PropertyKey.ROTOR).setPower(170)                   // nerf
    GTMaterials.StainlessSteel.getProperty(PropertyKey.ROTOR).setPower(150)         // nerf
    GTMaterials.HSSS.getProperty(PropertyKey.ROTOR).setPower(180)                   // nerf
    GTMaterials.HSSE.getProperty(PropertyKey.ROTOR).setPower(190)                   // nerf
    GTMaterials.NaquadahAlloy.getProperty(PropertyKey.ROTOR).setPower(220)          // buff
    GTMaterials.TungstenCarbide.getProperty(PropertyKey.ROTOR).setPower(155)        // nerf
    GTMaterials.TungstenSteel.getProperty(PropertyKey.ROTOR).setPower(175)          // buff

    // New turbine rotors from existing GT Materials
    let DarmstadtiumTurbineProperty = new $RotorProperty(240, 150, 7.0, 10240)
    GTMaterials.Darmstadtium.setProperty(PropertyKey.ROTOR, DarmstadtiumTurbineProperty)

    let CrystalMatrixTurbineProperty = new $RotorProperty(200, 270, 6.0, 10240)
    $MoniMaterials.CrystalMatrix.setProperty(PropertyKey.ROTOR, CrystalMatrixTurbineProperty)
})
