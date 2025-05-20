let cpu = 0

const cpuBtn = () => {
    if (cpu == 0) {
        document.getElementById("cpuImg").classList = "shown w-[200px] rotate-x-50 rotate-z-45"
        cpu = 1
    } else {
        document.getElementById("cpuImg").classList = "hidden w-[200px] rotate-x-50 rotate-z-45"
        cpu = 0
    }
}

let gpu = 0

const gpuBtn = () => {
    if (gpu == 0) {
        document.getElementById("gpuImg").classList = "shown w-[200px] rotate-x-50 rotate-z-45"
        gpu = 1
    } else {
        document.getElementById("gpuImg").classList = "hidden w-[200px] rotate-x-50 rotate-z-45"
        gpu = 0
    }
}