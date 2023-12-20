import Button from "./Button";
const Header=()=>{
return(
    <header class="header">
        <div class="header-logo"><img src="https://flowbite.com/docs/images/logo.svg" alt="logo"/><span class="header-logo-name">GeekFood</span></div>
        <div class="header-links">
            <ul>
                <li>Home</li>
                <li>Quote</li>
                <li>Resturants</li>
                <li>Foods</li>
                <li>Contact</li>

            </ul>
        </div>
        <Button bgColor="blue" color="white" title="Get Started"></Button>

    </header>
)
}
export default Header;