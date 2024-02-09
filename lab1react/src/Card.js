import Cardcomp from './Cardcomp';


function Card() {
    return (
        <div className='container'>
          <div className='row mb-1'>
            <h1 className='text-black'>portfolio</h1>
          </div>
          <div className='row mb-1'>  
            <Cardcomp bgcolor='bg-secondary-subtle' name='WEB DESIGN'/>
            <Cardcomp bgcolor='bg-secondary' name='MOBILE DESIGN' />
            <Cardcomp bgcolor='bg-secondary-subtle' name='LOGO DESIGN' />
          </div>
          <div className='row mb-3'>  
            <Cardcomp bgcolor='bg-secondary' name='WEB DESIGN'/>
            <Cardcomp bgcolor='bg-secondary-subtle' name='MOBILE DESIGN' />
            <Cardcomp bgcolor='bg-secondary' name='LOGO DESIGN' />
          </div>
        </div>
    );
  }
  
  export default Card;
  