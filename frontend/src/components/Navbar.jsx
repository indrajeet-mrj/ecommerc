import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
const Navbar = () => {

    const [visible, setVisible] = useState(false);

    const { setShowSearch, getCartCount, navigate, token, setToken, setCartItems } = useContext(ShopContext);

    const logout = () => {
        navigate('/login')
        localStorage.removeItem('token')
        setToken('')
        setCartItems({})

    }

    return (
        <div className="flex items-center justify-between py-5 font-medium">
            <Link to='/'>  <img src={assets.logo} alt="Logo" className="w-36" /></Link>
            <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
                <NavLink className='flex flex-col items-center gap-1' to="/">
                    <p>HOME</p>
                    <hr className='w-2/4 border-none h-[2px] bg-gray-700 hidden' />
                </NavLink>
                <NavLink className='flex flex-col items-center gap-1' to="/collection">
                    <p>COLLECTION</p>
                    <hr className='w-2/4 border-none h-[2px] bg-gray-700 hidden' />
                </NavLink>
                <NavLink className='flex flex-col items-center gap-1' to="/about">
                    <p>ABOUT</p>
                    <hr className='w-2/4 border-none h-[2px] bg-gray-700 hidden' />
                </NavLink>
                <NavLink className='flex flex-col items-center gap-1' to="/contact">
                    <p>CONTACT</p>
                    <hr className='w-2/4 border-none h-[2px] bg-gray-700 hidden' />
                </NavLink>
            </ul>
            <div className='flex items-center gap-6'>
                <img onClick={() => setShowSearch(true)} src={assets.search_icon} className='w-4 cursor-pointer ' alt="" />
                <div className='relative group'>
                    <img onClick={() => token ? null : navigate('/login')} src={assets.profile_icon} alt="" className='w-4 cursor-pointer' />
                    {/* Dropdown Menu */}
                    {token && <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                        <div className='flex flex-col gap-2 w-36 py-3 px-4 bg-slate-100 text-gray-500 rounded'>
                            <p className='cursor-pointer hover:text-black'>MyProfile</p>
                            <p onClick={()=>navigate('/orders')} className='cursor-pointer hover:text-black'>Order</p>
                            <p onClick={logout} className='cursor-pointer hover:text-black'>Logout</p>
                        </div>
                    </div>}

                </div>
                <Link to="/cart" className='relative'>
                    <img src={assets.cart_icon} alt="" className='w-4 min-w-4' />
                    <p className='absolute  right-[-5px] bottom-[-5px] w-3 text-center leading-3 bg-black text-white aspect-square rounded-full text-[8px]'>{getCartCount()}</p>
                </Link>
                <img onClick={() => setVisible(true)} src={assets.menu_icon} alt="" className='w-4 cursor-pointer sm:hidden' />
            </div>
            {/* Sidebar menu for small screen */}
            <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
                <div className='flex flex-col text-gray-600'>
                    <div onClick={() => setVisible(false)} className='flex items-center gap-4 p3'>
                        <img src={assets.dropdown_icon} alt="" className='h-3 rotate-180' />
                        <p className='cursor-pointer'>Back</p>
                    </div>
                    <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to="/">HOME</NavLink>
                    <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to="/collection">COLLECTION</NavLink>
                    <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to="/about">ABOUT</NavLink>
                    <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to="/contact">CONTACT</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Navbar