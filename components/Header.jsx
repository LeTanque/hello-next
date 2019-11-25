import Link from "next/link";
import Router from 'next/router'

const Header = props => {
    console.log("Props in header ", props);
    console.log("Router in header ", Router);
    return (
        <>
            <header>
                <nav>
                    <h1 className="nav-item">Todo</h1>

                    <Link href="/">
                        <a title="Home" className="nav-item">Home</a>
                    </Link>                    

                    <Link href="/about"  >
                        <a title="About" className="nav-item">About</a>
                    </Link>

                    <Link href="/notes"  >
                        <a title="Notes" className="nav-item">Notes</a>
                    </Link>
                </nav>
            </header>
        </>
    );
}

export default Header
