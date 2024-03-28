import {Component} from 'react'
import { Link, Outlet } from 'react-router-dom';
import { COLLAPSE_ICON_URL, EXPAND_ICON_URL } from '../config.js';


const Section = ({name, description, isVisible, setIsVisible})=>{
  
  const flatName= name.replace(/\s/g, '').toLowerCase();
  
  function handleVisible(){
      if(isVisible){
          setIsVisible({
            isVisible:"none",
          })
      }else{
        setIsVisible({
          isVisible: flatName,
        })
      }
  }

  console.log("Section component rendered");

  return (
   <div className='border-4 h-auto border-blue-300 border-dashed m-8 p-4'>
     <div className='flex '>
     <h1 className='text-3xl font-bold text-blue-900'>{name}</h1>
     <button className='underline cursor-pointer h-8 ml-8' onClick={handleVisible}>
       <img className='h-[100%] w-[100%]' src={isVisible ? COLLAPSE_ICON_URL : EXPAND_ICON_URL} />
     </button>
    </div>

    {isVisible && (
    <div className='content-wrapper'>
      <h2 className='text-xl m-4'>{description}</h2>
    </div>
  )}
     </div>
  );
}


class About extends Component{

  constructor(props){
      super(props);
      console.log("Console.log from About constructor")
      this.state = {
        isVisible:"zwigato"
      };
  }

  componentDidMount(){
    console.log("Console.log about About componentDidMount")
  }

  render(){

    //* NOTE       -- WE ARE BINDING THE 'THIS' WHILE SENDING this.setState     --  IMPORTANT
    let commonObj={
      setIsVisible:this.setState.bind(this),   
      description:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
    }

    return (
      <div>
      {console.log("Console.log from About render")}
        <h1 className='text-4xl text-blue-900 text-center m-5 font-extrabold  '>
         About Us 
         </h1>
       
        <div>
        <Section name={"Zwigato"} isVisible={this.state.isVisible==="zwigato"} {...commonObj} />
        <Section name={"Founder"} isVisible={this.state.isVisible==="founder"} {...commonObj} />
        <Section name={"The Idea"} isVisible={this.state.isVisible==="theidea"} {...commonObj} />
        <Section name={"The Goal"} isVisible={this.state.isVisible==="thegoal"} {...commonObj}/>
        <Section name={"Instamart"} isVisible={this.state.isVisible==="instamart"} {...commonObj}/>
        </div>

        <div>
          <Link to="profile-class" >
            :::::::::Show Profile Class component::::::
          </Link>

          <Link to="profile-function" >
            Show Profile Functional component:::::::
          </Link>

          <Outlet />

        </div>

      </div>
    )
  }
}

export default About;


// function About1() {
//   return (
//     <div>
//       <h1> About Us Page </h1>
//       <p>
//         {" "}
//         This is the page where you can know About Us - Let's get started 🚀 <br/>
//         <Link to="profile-class" >
//           :::::::::Show Profile Class component::::::
//         </Link>
//         <Link to="profile-function" >
//           Show Profile Functional component:::::::
//         </Link>
//       </p>

//       <Outlet />
      
//     </div>
//   )
// }