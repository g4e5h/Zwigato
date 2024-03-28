import {Link} from "react-router-dom"
// import IMG_ZWIGATO from "../assets/img/zwigato.jpeg";

const Title=()=>(
    <Link className="rounded-full" to="/">
    {/* <img className="h-32 px-4 rounded-full " src="https://cdn.dotpe.in/longtail/store-logo/1023934/dOZPIFia.jpeg" alt="Food Villa" /> */}
    <img data-testid="logo" className="h-32 mx-4 mb-1 rounded-full drop-shadow-xl hover:drop-shadow-none hover:animate-pulse" src="https://public.bnbstatic.com/image/pgc/202312/b29531739a6092c1c858d07aab370804.png" alt="Zwigato" />
    </Link>
);

export default Title;