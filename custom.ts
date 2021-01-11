namespace BubbaBlocks {

    let onShotCallbacks: ((shooter: Number) => void)[] = []
    let onResurrectionCallbacks: (() => void)[] = []
    let knownPeople: Number[] = []


    //% block="On I Got Shot"
    export function addOnShotHandler(onshot: (shooter: Number) => void): void {
        onShotCallbacks.push(onshot)
    };

    //% block="On Ressurection"
    export function addOnResurrectionHandler(onResurrected: () => void): void {
        onResurrectionCallbacks.push(onResurrected)
    };

    //% block="Fire Gun"
    export function fireGun(): void {
        basic.showIcon(IconNames.Happy)
        radio.sendString("BANG")
    }

    //% block="Introduce Self"
    export function introduceSelf(): void {
        radio.sendString("HELLO")
    }
    
    //% block="Get Shot"
    export function getShot(shooter: Number): void {
        for (let onShotHandler of onShotCallbacks) {
            onShotHandler(shooter)
        }
        for (let onRessurectionHandler of onResurrectionCallbacks) {
          onRessurectionHandler()
        }
        
    }

    //% block="Meet Person"
    export function meetPerson(person: Number): void {
        knownPeople.push(person)
        basic.showString("I met: " + person.toString())
    }

    export function joinGame(): void {
        radio.onReceivedString(function (receivedString: string) {
            let sender = radio.receivedPacket(RadioPacketProperty.SerialNumber)
            if (receivedString == "BANG") {
                getShot(sender)
            }
            if (receivedString == "HELLO") {
                meetPerson(sender)
            }
        })
    }
}