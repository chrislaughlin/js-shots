function handleVisibilityChange() {
    if (document.visibilityState === "hidden") {
        console.log('Page is hidden')
    } else {
        console.log('Page is visible')
    }
}

document.addEventListener("visibilitychange", handleVisibilityChange);