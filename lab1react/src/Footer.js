import Cardcomp from './Cardcomp';
import Nbutton from './Nbutton';


function Footer() {
    return (
        <div className='container bg-black text-white'>
          <div className='row mb-1'>  
            <div className='col-lg-4 col-sm-12 my-4 text-center'>
              <h5>get in touch</h5>
              <h6>ahmed@hmail.com</h6>
              <h6>01003123576</h6>
            </div>
            <div className='col-lg-4 col-sm-12 my-5 text-center'>
              <Nbutton name='CONTACT ME' brdcolor='white' txtcolor='text-white'/>
            </div>
            <div className='col-lg-4 col-sm-12 my-5 text-center'>
              <p>copyright &copy; 2024 iti</p>
            </div>
          </div>
        </div>
    );
  }
  
  export default Footer;