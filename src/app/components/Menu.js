import Link from "next/link"

export default function Menu(){
   return(
    <header>
        <h1>Menu</h1>
        <nav>
            <ul>
                <link href="/">
                <li>home</li>
                </link>
                <link href="/registro">
                <li>registrar</li>
                </link>
            </ul>
        </nav>
    </header>
   );
}
