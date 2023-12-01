import './Menu.css'

export default function Menu() {
    return(
        <div class="wrapper">
    <div class="sidebar">
        <h2>Menu</h2>
        <ul>
        <li><a href="/pages/dashboard"><i class="fas fa-address-book"></i>Users</a></li>
            <li><a href="/pages/register"><i class="fas fa-user"></i>Register</a></li>
        </ul> 
    </div>
        </div>
    );
}

