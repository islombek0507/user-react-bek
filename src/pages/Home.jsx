import './Home.scss';
const scalee = document.querySelector(".home")
 function katta() {
    scalee.classList.toggle('scaleee')
}
// function rem() {
//     scalee.classList.remove('scaleee')
// }
setInterval(katta, 2000);
// setInterval(rem, 1000);

export function Home() {
    return(
        <div className="container welcome">
            <h1 className="home">Welcome</h1>
        </div>
    )
}