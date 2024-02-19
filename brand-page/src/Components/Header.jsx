import nike from '../assets/nike.png';
import Nav from './Nav';
const Header = () => {
  return (
    <div className="flex flex-row h-[72px] justify-between w-[1440px]">
      <img
        src={nike}
        alt="nike image"
        className="w-[76px] h-[42px] mt-[15px] ml-[85px]  " 
      />
      <Nav />
      <button
        className="w-[75px] h-[31px] mt-[21px] p-{6} {16} bg-redColor border text-textColor font-inter texy-base font-semibold "
      >
        Login
      </button>
    </div>
  );
}
export default Header