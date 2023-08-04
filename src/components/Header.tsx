import Logo from '../static/logo.svg';

export const Header = () => {
  return (
    <header>
      <div className='logo'>
        <img src={Logo} alt='Taskmate Logo' />
        <span>Taskmate</span>
      </div>
      <div className='themeSelector'>
        <span className='light activeTheme'></span>
        <span className='medium'></span>
        <span className='dark'></span>
        <span className='gradientOne'></span>
        <span className='gradientTwo'></span>
        <span className='gradientThree'></span>
      </div>
    </header>
  );
};
