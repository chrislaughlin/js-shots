function handleVisibilityChange() {
    if (document.visibilityState === "hidden") {
        document.title = `👋 ${document.title}`
    } else {
        document.title = document.title.replace('👋', '');
    }
}

document.addEventListener("visibilitychange", handleVisibilityChange);