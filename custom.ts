namespace BubbaBlocks {

    let onShotCallbacks: (() => void)[] = []
    let onResurrectionCallbacks: (() => void)[] = []


    //% block="On I Got Shot"
    export function addOnShotHandler(onshot: () => void): void {
        onShotCallbacks.push(onshot)
    };

    //% block="On Ressurection"
    export function addResurrectionHandler(onshot: () => void): void {
        onResurrectionCallbacks.push(onshot)
    };

    //% block="Fire Gun"
    export function fireGun(): void {
        basic.showIcon(IconNames.Happy)
    }
    //% block="Cycle Of Violence"
    export function detectIfShot(): void {
        let i_got_shot = true
        if (i_got_shot) {
            for (let onShotHandler of onShotCallbacks) {
              onShotHandler()
            }
            for (let onRessurectionHandler of onResurrectionCallbacks) {
              onRessurectionHandler()
            }
        }
    }
}