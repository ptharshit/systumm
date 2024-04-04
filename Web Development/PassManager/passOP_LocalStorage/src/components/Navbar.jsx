import React from 'react'

const Navbar = () => {
  return (
    <nav className='text-white text-2xl bg-slate-700 flex justify-around items-center py-4'>
        <h2 className=' font-semibold'>
            <span className='text-green-600'>&lt;</span>
            PassOP
            <span className='text-green-600'>/&gt;</span>
        </h2>
        <ul >
            <li className='flex justify-center items-center gap-1'>
            <lord-icon
    src="https://cdn.lordicon.com/jzvoyjzb.json"
    trigger="hover"
    stroke="bold"
    colors="primary:#121331,secondary:#ebe6ef,tertiary:#16c79e">
</lord-icon>
                <a className=' hover:font-bold hover:text-green-500' href="https://ptharshit.netlify.app/" target='__blank'>PortFolio</a>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar