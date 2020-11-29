const $btn = document.getElementById("btn-search");
const $btn2 = document.getElementById("btn-search2");

console.log(Navigator);

const shareData = {
    title: "Maincra",
    text: "Un video Juego v:v v:",
    url: "https://miguel2351.vercel.app",
};

async function shareFile() {
    const request = await fetch(
        "https://miguelhg2351.github.io/navigator-api/images/escuela.jpg"
    );
    const response = await request.blob();
    const file = new File([response], "file_images.jpg", {
        type: "image/jpeg",
    });
    const fileArray = [file];
    navigator.canShare({ files: fileArray });
    await navigator.share({ ...shareData, files: fileArray });
}

// Primer Método, con Async Await

// Web share esta disponible desde chrome 76

$btn.addEventListener("click", async () => {
    if ("share" in navigator) {
        await navigator.share(shareData);
    } else if (navigator.platform === "Win32") {
        console.log("Usted esta en el ordenador");
    } else {
        console.log("Usted no tiene disponible esta funcionalidad");
    }
});

$btn2.addEventListener("click", shareFile);
