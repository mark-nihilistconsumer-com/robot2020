namespace CardboardRobotBlocks {

    let _onShotCallbacks: ((shooter: number) => void)[] = []
    let _onMeetNewRobotCallbacks: ((robot: number) => void)[] = []
    let _knownRobots: number[] = []


    //% block="On I Got Shot"
    export function addOnShotHandler(onshot: (shooter: number) => void): void {
        _onShotCallbacks.push(onshot)
    };

    //% block="On Meet New Robot"
    export function addOnMeetNewRobotHandler(onMeetNewRobot: (robot: number) => void): void {
        _onMeetNewRobotCallbacks.push(onMeetNewRobot)
    };

    //% block="Shoot Robot $robot"
    export function shoot(robot: number): void {
        radio.sendValue("BANG", robot)
    }

    //% block="Introduce Self"
    export function introduceSelf(): void {
        radio.sendString("HELLO")
    }

    //% block="Known Robots"
    export function knownRobots(): number[] {
        return _knownRobots.slice()
    }

    //% block="Join Game"
    export function joinGame(): void {

        radio.onReceivedValue(function (name: string, value: number) {
            let sender = radio.receivedPacket(RadioPacketProperty.SerialNumber)
            if (name == "BANG") {
                if (value == control.deviceSerialNumber()) {
                    getShot(sender)
                }
            }
        })

        radio.onReceivedString(function (receivedString: string) {
            let sender = radio.receivedPacket(RadioPacketProperty.SerialNumber)
            if (receivedString == "HELLO") {
                meetNewRobot(sender)
            }
        })
        radio.setTransmitSerialNumber(true)
    }
    
    function getShot(shooter: number): void {
        for (let onShotHandler of _onShotCallbacks) {
            onShotHandler(shooter)
        }
    }

    function meetNewRobot(robot: number): void {
        if (_knownRobots.indexOf(robot) == -1) {
            _knownRobots.push(robot)
            for (let onMeetNewRobotHandler of _onMeetNewRobotCallbacks) {
                onMeetNewRobotHandler(robot)
            }
        }
    }
}
